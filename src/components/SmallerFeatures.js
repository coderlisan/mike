import PropTypes from 'prop-types';
import React from 'react';

import { smallerFeatures } from '../scss/modules/SmallerFeatures.module.scss';

const SmallerFeatures = ({ children }) => (
  <div className={smallerFeatures}>{children}</div>
);
SmallerFeatures.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmallerFeatures;
