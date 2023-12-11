import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';

import { bookNow } from '../scss/modules/BookNow.module.scss';

const BookNow = () => {
  const { kids } = useStaticQuery(
    graphql`
      {
        kids: file(relativePath: { eq: "kidsweek/kids-week-hero.jpeg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  );
  return (
    <div className={bookNow}>
      <BackgroundImage
        fluid={[
          'linear-gradient(to top, #135353eb, #135353eb )',
          kids.childImageSharp.gatsbyImageData,
        ]}
        style={{
          padding: '3rem',
          borderRadius: '6px',
          overflow: 'hidden',
          margin: '0.5rem',
        }}
      >
        <h2>Rabat do -15%</h2>
        <h3>Zarezerwuj Dzień Dziecka nad morzem już teraz!</h3>
        {/* <p>Minimum 6 nocy między 29.05 a 06.06</p> */}
        <Link to="/rezerwacja">
          <button type="button">Rezerwuję</button>
        </Link>
      </BackgroundImage>
    </div>
  );
};

export default BookNow;
