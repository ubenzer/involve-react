import React from "react";
import {IndexLink, Link} from "react-router";
import "./Header.scss";

export const Header = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {" · "}
    <Link to='/chat' activeClassName='route--active'>
      Chat
    </Link>
  </div>
);

export default Header;
