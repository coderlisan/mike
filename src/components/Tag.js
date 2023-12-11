import PropTypes from 'prop-types';
import React from 'react';

import { tag } from '../scss/modules/Tag.module.scss';

const Tag = ({ text }) => <span className={tag}>{text}</span>;
Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
