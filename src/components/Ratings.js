import React from 'react';

import FacebookLogo from '../images/facebook-square-brands.svg';
import GoogleLogo from '../images/google-brands.svg';
import HalfStar from '../images/star-half-alt-solid.svg';
import FullStar from '../images/star-solid.svg';
import {
  container,
  ratingContainer,
  ratingLogo,
  stars,
} from '../scss/modules/Ratings.module.scss';

const Ratings = () => (
  <div className={container}>
    <div className={ratingContainer}>
      <img className={ratingLogo} src={GoogleLogo} alt="G Logo" />
      <div className={stars}>
        <img src={FullStar} alt="Full Star Rating" />
        <img src={FullStar} alt="Full Star Rating" />
        <img src={FullStar} alt="Full Star Rating" />
        <img src={FullStar} alt="Full Star Rating" />
        <img src={HalfStar} alt="Half Star Rating" />
      </div>
    </div>
    <div className={ratingContainer}>
      <img className={ratingLogo} src={FacebookLogo} alt="F Logo" />
      <div className={stars}>
        <img src={FullStar} alt="Full Star Rating" />
        <img src={FullStar} alt="Full Star Rating" />
        <img src={FullStar} alt="Full Star Rating" />
        <img src={FullStar} alt="Full Star Rating" />
        <img src={FullStar} alt="Full Star Rating" />
      </div>
    </div>
  </div>
);

export default Ratings;
