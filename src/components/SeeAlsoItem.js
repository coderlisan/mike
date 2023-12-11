import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import {
  hero,
  heroImage,
  heroText,
  seeAlsoLink,
} from '../scss/modules/SeeAlsoItem.module.scss';

const SeeAlsoItem = ({ item }) => (
  <div className={seeAlsoLink}>
    <Link to={item.path}>
      <div className={hero}>
        <GatsbyImage
          className={heroImage}
          objectFit="cover"
          alt={item.text}
          image={item.img.childImageSharp.gatsbyImageData}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
        />
        <div className={heroText}>
          <h3>{item.text}</h3>
        </div>
      </div>
    </Link>
  </div>
);
SeeAlsoItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SeeAlsoItem;
