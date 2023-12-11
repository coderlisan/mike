import PropTypes from 'prop-types';
import React from 'react';

import { review, signature } from '../scss/modules/Review.module.scss';

const Review = ({ text, name, source }) => (
  <div className={review}>
    <p>{text}</p>
    <p className={signature}>
      {name}, <span>{source}</span>
    </p>
  </div>
);
Review.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Review;
