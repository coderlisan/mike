import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';

import { endOfSummer } from '../scss/modules/EndOfSummer.module.scss';
import {
  closeButton,
  imageContainer,
  invisible,
  kidsWeekUp,
  visible,
} from '../scss/modules/KidsWeekUp.module.scss';

const KidsWeekUp = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { image } = useStaticQuery(
    graphql`
      {
        image: file(relativePath: { eq: "1.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 700)
          }
        }
      }
    `
  );

  useEffect(() => {
    if (Cookie.get('closedEndOfSummer') === 'true') {
      setIsVisible(false);
      return;
    }
    const waitTime = 15000; // 15 seconds
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
    const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    Cookie.set('closedEndOfSummer', 'true', { expires: inFifteenMinutes });
    setIsVisible(false);
  };

  return (
    <div
      className={`${endOfSummer} ${kidsWeekUp} ${
        isVisible ? visible : invisible
      }`}
    >
      <button type="button" className={closeButton} onClick={closeModal}>
        &#10006;
      </button>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        className={imageContainer}
        alt="Plakat końca wakacji Kacze Stawy"
      />
    </div>
  );
};

export default KidsWeekUp;
