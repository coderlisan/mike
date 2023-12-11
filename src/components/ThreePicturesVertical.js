import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import {
  threePicturesVertical,
  twoPicturesVertical,
} from '../scss/modules/ThreePicturesVertical.module.scss';

const ThreePicturesVertical = ({
  firstPhoto,
  secondPhoto,
  thirdPhoto,
  firstAlt,
  secondAlt,
  thirdAlt,
}) => (
  <div className={threePicturesVertical}>
    <GatsbyImage image={firstPhoto} alt={firstAlt} objectFit="cover" />
    <div className={twoPicturesVertical}>
      <GatsbyImage image={secondPhoto} alt={secondAlt} objectFit="cover" />
      <GatsbyImage image={thirdPhoto} alt={thirdAlt} objectFit="cover" />
    </div>
  </div>
);
ThreePicturesVertical.propTypes = {
  firstPhoto: PropTypes.object.isRequired,
  secondPhoto: PropTypes.object,
  thirdPhoto: PropTypes.object,
  firstAlt: PropTypes.string.isRequired,
  secondAlt: PropTypes.string,
  thirdAlt: PropTypes.string,
};

export default ThreePicturesVertical;
