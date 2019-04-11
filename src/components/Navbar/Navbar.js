import { navBar, navLink, navLinkH5 } from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

import React from 'react';

const Navbar = () => {
  return(
    <div className={ navBar }>
      <NavLink className={ navLink } exact to="/" >
        <h5 className={ navLinkH5 }>Actor lookup</h5>
      </NavLink>
    </div>
  );
};

export default Navbar;