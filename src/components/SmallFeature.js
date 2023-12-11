import PropTypes from 'prop-types';
import React from 'react';

import HotelTag from './HotelTag';

const SmallFeature = ({ icon, header, text, hotelTag, smallText }) => (
  <div className="small-feature">
    {icon}
    <h3>{header}</h3>
    <p>{text}</p>
    <div className="small-text">{smallText}</div>
    {hotelTag && <HotelTag />}
  </div>
);
SmallFeature.propTypes = {
  icon: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hotelTag: PropTypes.bool,
  smallText: PropTypes.any,
};

export default SmallFeature;
