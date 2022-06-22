import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import logo from '../../../resources/img/logo.svg';

import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <MainHeader>
      <div className="main-navigation-logo-title">
        <div className="main-navigation-logo">
          <Link to="/">
            <img alt="darts score logo" src={logo} className="logo-img" />
          </Link>
        </div>
        <h1 className="main-navigation-title"><Link to="/">Darts Scoring</Link></h1>
      </div>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  )
}

export default MainNavigation
