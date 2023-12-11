import '../scss/main.scss';

import PropTypes from 'prop-types';
import React from 'react';

// import KidsWeekLink from './KidsWeekLink';
// import KidsWeekUp from './KidsWeekUp';
import Footer from './Footer';
import Nav from './Nav';
// import NotificationsContainer from './NotificationsContainer';
import SeeAlso from './SeeAlso';

const Layout = ({ children }) => (
  <>
    <Nav />
    <div>
      <main>{children}</main>
      {/* <NotificationsContainer /> */}
      {/* <KidsWeekUp />
      <KidsWeekLink /> */}
      <SeeAlso />
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
