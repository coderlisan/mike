import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

export function RoundedImage({ image, alt }) {
  return (
    <GatsbyImage
      className="rounded-lg aspect-[16/10]"
      image={image}
      alt={alt}
      objectFit="cover"
    />
  );
}
RoundedImage.propTypes = {
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
};
