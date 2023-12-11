import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import {
  hero,
  heroImage,
  heroText,
} from '../scss/modules/HeroImage.module.scss';

const HeroWithArt = ({
  image,
  altText,
  header,
  objectPosition,
  mobileImage,
}) => {
  const images = withArtDirection(getImage(image), [
    {
      media: '(max-width: 800px)',
      image: getImage(mobileImage),
    },
  ]);
  return (
    <div className={hero}>
      <GatsbyImage
        image={images}
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
};
HeroWithArt.propTypes = {
  altText: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  objectPosition: PropTypes.string,
  mobileImage: PropTypes.object,
};

export default HeroWithArt;
