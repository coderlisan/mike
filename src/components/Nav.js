import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { CTAButton } from './common/CTAButton';
import MobileMenu from './MobileMenu';

const Nav = () => (
  <nav>
    <div
      className="menu-main"
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <Link to="/">
        <StaticImage
          src="../images/kacze-stawy-logo.png"
          className="logo"
          width={160}
          quality={95}
          alt="Logo Kacze Stawy"
        />
      </Link>
      <ul className="menu">
        <li>
          Poznaj Kacze Stawy
          <ul>
            <Link to="/dzieci-w-kaczych-stawach">
              <li>Dzieci w Kaczych Stawach</li>
            </Link>
            <Link to="/domki">
              <li>Domki</li>
            </Link>
            <Link to="/hotel">
              <li>Hotel</li>
            </Link>
            <Link to="/basen">
              <li>Basen zewnętrzny</li>
            </Link>
            <Link to="/basen-wewnetrzny">
              <li>Basen wewnętrzny</li>
            </Link>
            <Link to="/wyzywienie">
              <li>Wyżywienie</li>
            </Link>
            <Link to="/place-zabaw">
              <li>Place zabaw</li>
            </Link>
            <Link to="/staw-dla-wedkarzy">
              <li>Staw dla wędkarzy</li>
            </Link>
            <Link to="/masaze">
              <li>Masaże</li>
            </Link>
            <Link to="/silownia-zewnetrzna">
              <li>Siłownia zewnętrzna</li>
            </Link>
            <Link to="/mini-zoo">
              <li>Mini zoo</li>
            </Link>
          </ul>
        </li>

        <li>
          Cennik
          <ul>
            <Link to="/cennik/domki">
              <li>Cennik domków</li>
            </Link>
            <Link to="/cennik/pokoje">
              <li>Cennik pokojów</li>
            </Link>
          </ul>
        </li>

        <Link to="/kontakt">
          <li>Kontakt</li>
        </Link>
        <Link to="/rezerwacja">
          <CTAButton>Zapytaj o termin</CTAButton>
        </Link>
      </ul>
      <MobileMenu />
    </div>
  </nav>
);

export default Nav;
