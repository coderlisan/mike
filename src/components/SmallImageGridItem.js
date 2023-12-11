import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const SmallImageGridItem = ({ item: { header, image, altText } }) => (
  <div>
    <GatsbyImage
      image={image.childImageSharp.gatsbyImageData}
      style={{ maxHeight: '280px', height: '280px', objectFit: 'cover' }}
      alt={altText}
    />
    <h3>{header}</h3>
  </div>
);
SmallImageGridItem.propTypes = {
  item: PropTypes.shape({
    header: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    altText: PropTypes.string.isRequired,
  }),
};

export default SmallImageGridItem;
