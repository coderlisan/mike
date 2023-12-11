import classnames from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const BigFeature = ({ children, imgOnRight, img, bigSign, alt }) => {
  const classes = classnames({
    'big-feature': true,
    'img-on-right': imgOnRight,
  });

  return (
    <div className={classes}>
      <div className="image-container">
        <GatsbyImage
          image={img}
          alt={alt}
          objectFit="cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="big-feature-text">
        <div>{children}</div>
      </div>
      <div className="big-sign">{bigSign}</div>
    </div>
  );
};
BigFeature.propTypes = {
  children: PropTypes.node.isRequired,
  bigSign: PropTypes.string,
  imgOnRight: PropTypes.bool,
  img: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BigFeature;
