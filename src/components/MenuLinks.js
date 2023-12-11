import classnames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { CTAButton } from './common/CTAButton';

const MenuLink = ({ to, closeMenu, children }) => (
  <div role="presentation" onClick={closeMenu}>
    <Link to={to}>{children}</Link>
  </div>
);
MenuLink.propTypes = {
  to: PropTypes.string,
  closeMenu: PropTypes.func,
  children: PropTypes.node,
};

const MenuLinks = ({ isOpen, closeMenu }) => {
  const classes = classnames({
    navbar: true,
    'mobile-navbar': isOpen,
  });

  return (
    <ul className={classes}>
      <MenuLink to="/rezerwacja" closeMenu={closeMenu}>
        <li className="book-button">
          <CTAButton>Zapytaj o termin</CTAButton>
        </li>
      </MenuLink>
      <MenuLink to="/" closeMenu={closeMenu}>
        <li>Poznaj Kacze Stawy</li>
      </MenuLink>
      <MenuLink to="/dzieci-w-kaczych-stawach" closeMenu={closeMenu}>
        <li>Dla dzieci</li>
      </MenuLink>
      <MenuLink to="/domki" closeMenu={closeMenu}>
        <li>Domki</li>
      </MenuLink>
      <MenuLink to="/hotel" closeMenu={closeMenu}>
        <li>Hotel</li>
      </MenuLink>
      <MenuLink to="/basen" closeMenu={closeMenu}>
        <li>Basen zewnętrzny</li>
      </MenuLink>
      <MenuLink to="/basen-wewnetrzny" closeMenu={closeMenu}>
        <li>Basen wewnętrzny</li>
      </MenuLink>
      <MenuLink to="/wyzywienie" closeMenu={closeMenu}>
        <li>Wyżywienie</li>
      </MenuLink>
      <MenuLink to="/place-zabaw" closeMenu={closeMenu}>
        <li>Place zabaw</li>
      </MenuLink>
      <MenuLink to="/staw-dla-wedkarzy" closeMenu={closeMenu}>
        <li>Staw dla wędkarzy</li>
      </MenuLink>
      <MenuLink to="/silownia-zewnetrzna" closeMenu={closeMenu}>
        <li>Siłownia zewnętrzna</li>
      </MenuLink>
      <MenuLink to="/masaze" closeMenu={closeMenu}>
        <li>Masaże</li>
      </MenuLink>
      <MenuLink to="/mini-zoo" closeMenu={closeMenu}>
        <li>Mini Zoo</li>
      </MenuLink>
      <MenuLink to="/cennik/domki" closeMenu={closeMenu}>
        <li>Cennik domków</li>
      </MenuLink>
      <MenuLink to="/cennik/pokoje" closeMenu={closeMenu}>
        <li>Cennik pokojów</li>
      </MenuLink>
      <MenuLink to="/kontakt" closeMenu={closeMenu}>
        <li>Kontakt</li>
      </MenuLink>
    </ul>
  );
};
MenuLinks.propTypes = {
  isOpen: PropTypes.bool,
  closeMenu: PropTypes.func,
};

export default MenuLinks;
