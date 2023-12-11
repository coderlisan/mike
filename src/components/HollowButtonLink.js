import PropTypes from 'prop-types';
import React from 'react';

const HollowButtonLink = ({ children, onClick }) => (
  <button type="button" className="hollow-button" onClick={onClick}>
    {children}
  </button>
);

HollowButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default HollowButtonLink;
