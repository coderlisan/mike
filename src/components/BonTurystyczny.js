import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import { bon, img } from '../scss/modules/BonTurystyczny.module.scss';

const BonTurystyczny = () => {
  const { logo } = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo_bon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: FIXED)
        }
      }
    }
  `);

  return (
    <div className={bon}>
      <div className={img}>
        <GatsbyImage
          image={logo.childImageSharp.gatsbyImageData}
          alt="Logo Bonu Turystycznego"
        />
      </div>
      <div className="flex place-items-center">
        <p className="mb-0 lg:text-lg">
          Zrealizuj bon turystyczny do końca marca!
          <br />
          Pobyt może odbyć się później!{' '}
          <Link to="/wykorzystaj-bon-turystyczny">Zobacz&nbsp;szczegóły</Link>
        </p>
      </div>
    </div>
  );
};

export default BonTurystyczny;
