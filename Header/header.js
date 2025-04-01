// header.js
import React from 'react';
import "./../../../sass/components/header.scss";
import { IconSearch, IconBellFilled, IconShoppingCart } from '@tabler/icons-react';

//for logos and photos section
import Logo from '../../../../resources/sass/img/lapnixlogo.svg';; // Update this path

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={Logo} alt="Logo" className="header__logo" />
        <nav className="header__nav">
          <a href="#" className="header__link">Home</a>
          <a href="#" className="header__link">Brands</a>
          <a href="#" className="header__link">Peripherals</a>
          <a href="#" className="header__link">Support</a>
          <a href="#" className="header__link">About us</a>
        </nav>
      </div>
      <div className="header__right">
        <IconSearch className="header__icon" />
        <IconBellFilled className="header__icon" />
        <IconShoppingCart className="header__icon" />
        <button className="header__login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
