import classnames from 'classnames';
import React, { useRef, useState } from 'react';

import Hamburger from '../images/bars-light.svg';
import MenuLinks from './MenuLinks';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const closeMenu = () => {
    setIsOpen(false);
    // document.body.style.overflow = 'visible';
  };

  const classes = classnames({
    'menu-active': isOpen,
    'mobile-menu': true,
  });

  const overlayClasses = classnames({
    overlay: true,
    'overlay-active': isOpen,
  });

  return (
    <>
      <button
        alt="Hamburger Menu Button"
        width="100px"
        className="hamburger-button"
        onClick={() => {
          setIsOpen(!isOpen);
          // document.body.style.overflow = 'hidden';
        }}
        // role="presentation"
        type="button"
      >
        <img src={Hamburger} alt="Hamburger Button" />
      </button>
      <div ref={sidebarRef} className={classes}>
        <button type="button" className="close-button" onClick={closeMenu}>
          &times;
        </button>
        <MenuLinks isOpen={isOpen} closeMenu={closeMenu} />
      </div>
      <div className={overlayClasses} onClick={closeMenu} aria-hidden />
    </>
  );
};
export default MobileMenu;
