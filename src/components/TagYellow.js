import PropTypes from 'prop-types';
import React from 'react';

import { tag } from '../scss/modules/TagYellow.module.scss';

const TagYellow = ({ text }) => <span className={tag}>{text}</span>;
TagYellow.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TagYellow;
