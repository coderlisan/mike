import PropTypes from 'prop-types';
import React from 'react';

import { info } from '../scss/modules/Info.module.scss';

const Info = ({ text }) => <div className={info}>{text}</div>;
Info.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Info;
