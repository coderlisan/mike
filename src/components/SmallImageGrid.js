import PropTypes from 'prop-types';
import React from 'react';

import { smallImageGrid } from '../scss/modules/SmallImageGrid.module.scss';
import SmallImageGridItem from './SmallImageGridItem';

const SmallImageGrid = ({ items }) => (
  <div className={smallImageGrid}>
    {items?.map(item => (
      <SmallImageGridItem item={item} key={item.text} />
    ))}
  </div>
);
SmallImageGrid.propTypes = {
  items: PropTypes.array.isRequired,
};
export default SmallImageGrid;
