import { useLocation } from '@reach/router';
import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';

import {
  imageContainer,
  kidsWeekLink,
  tagGrid,
} from '../scss/modules/KidsWeekLink.module.scss';
import Tag from './Tag';
import TagYellow from './TagYellow';

const KidsWeekLink = () => {
  const location = useLocation();
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
  if (location.pathname === '/kids-week-dzien-dziecka-boze-cialo-nad-morzem') {
    return null;
  }
  return (
    <div className={kidsWeekLink}>
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

export default KidsWeekLink;
