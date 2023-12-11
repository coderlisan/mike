import PropTypes from 'prop-types';
import React from 'react';

export function CTAButton({ children, onClick }) {
  return (
    <button type="button" className="cta-button" onClick={onClick}>
      {children}
    </button>
  );
}

CTAButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
