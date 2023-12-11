import PropTypes from 'prop-types';
import React from 'react';

import { smallerFeature } from '../scss/modules/SmallerFeature.module.scss';
// import HotelTag from './HotelTag';

const SmallerFeature = ({ icon, header, text }) => (
  <div className={smallerFeature}>
    {icon}
    <h3>{header}</h3>
    {text && <p>{text}</p>}
    {/* {hotelTag && <HotelTag />} */}
  </div>
);

SmallerFeature.propTypes = {
  icon: PropTypes.node,
  header: PropTypes.string.isRequired,
  text: PropTypes.string,
  // hotelTag: PropTypes.bool,
};

export default SmallerFeature;
