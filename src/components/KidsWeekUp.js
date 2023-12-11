import { useLocation } from '@reach/router';
import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';

import {
  closeButton,
  imageContainer,
  invisible,
  kidsWeekUp,
  tagGrid,
  visible,
} from '../scss/modules/KidsWeekUp.module.scss';
import Tag from './Tag';
import TagYellow from './TagYellow';

const KidsWeekUp = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { image } = useStaticQuery(
    graphql`
      {
        image: file(relativePath: { eq: "kidsweek/kids-week-hero.jpeg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  );

  useEffect(() => {
    if (
      location.pathname === '/kids-week-dzien-dziecka-boze-cialo-nad-morzem/' ||
      location.pathname === '/kids-week-dzien-dziecka-boze-cialo-nad-morzem' ||
      Cookie.get('seenKidsWeek') === 'true' ||
      Cookie.get('closedKidsWeek') === 'true'
    ) {
      setIsVisible(false);
      return;
    }
    const waitTime = 30000; // 30 seconds
    let executionTime;
    const initialTime = sessionStorage.getItem('initialTime');
    if (initialTime === null) {
      sessionStorage.setItem('initialTime', new Date().getTime());
      executionTime = waitTime;
    } else {
      executionTime =
        parseInt(initialTime, 10) + waitTime - new Date().getTime();
      if (executionTime < 0) executionTime = 0;
    }
    const timeout = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.removeItem('initialTime');
    }, executionTime);
    return () => {
      clearTimeout(timeout);
    };
  }, [location]);

  const closeModal = e => {
    e.stopPropagation();
    Cookie.set('closedKidsWeek', 'true', { expires: 1 });
    setIsVisible(false);
  };

  return (
    <div className={`${kidsWeekUp} ${isVisible ? visible : invisible}`}>
      <button type="button" className={closeButton} onClick={closeModal}>
        &#10006;
      </button>
      <Link to="/kids-week-dzien-dziecka-boze-cialo-nad-morzem">
        <BackgroundImage
          fluid={[
            `linear-gradient(180deg,transparent 50%,rgba(0,0,0,.85))`,
            image.childImageSharp.gatsbyImageData,
          ]}
          className={imageContainer}
        >
          <div>
            <div className={tagGrid}>
              <Tag text="Oferta&nbsp;specjalna" />
              <TagYellow text="Rabat &nbsp;-15%" />
            </div>
            <h2>Kids Week - Dzień Dziecka i Boże Ciało</h2>
          </div>
        </BackgroundImage>
      </Link>
    </div>
  );
};

export default KidsWeekUp;
