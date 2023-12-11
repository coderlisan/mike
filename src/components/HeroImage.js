import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import {
  hero,
  heroImage,
  heroText,
} from '../scss/modules/HeroImage.module.scss';

const Hero = ({ image, altText, header, objectPosition }) => (
  <div className={hero}>
    <GatsbyImage
      image={getImage(image)}
      className={heroImage}
      objectFit="cover"
      alt={altText}
      objectPosition={objectPosition || '50% 50%'}
      loading="eager"
    />
    <div className={heroText}>
      <h1>{header}</h1>
    </div>
  </div>
);
Hero.propTypes = {
  altText: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  objectPosition: PropTypes.string,
};

export default Hero;
