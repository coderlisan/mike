import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import { twoPictures } from './TwoPictures.module.scss';

const TwoPictures = ({ firstPhoto, secondPhoto, firstAlt, secondAlt }) => (
  <div className={twoPictures}>
    <GatsbyImage
      image={firstPhoto}
      alt={firstAlt}
      objectFit="cover"
      sizes="(min-width: 1024px) 50vw, 100vw"
    />
    {secondPhoto && (
      <GatsbyImage
        image={secondPhoto}
        alt={secondAlt}
        objectFit="cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    )}
  </div>
);
TwoPictures.propTypes = {
  firstPhoto: PropTypes.object.isRequired,
  secondPhoto: PropTypes.object,
  firstAlt: PropTypes.string.isRequired,
  secondAlt: PropTypes.string,
};

export default TwoPictures;
