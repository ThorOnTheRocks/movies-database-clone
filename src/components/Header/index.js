import React from 'react';
import { Link } from 'react-router-dom';

import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, MDBLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1 className="heading">MoviesDB</h1>
      </Link>
      <MDBLogoImg src={TMDBLogo} alt='tmdbb-logo' />
    </Content>
  </Wrapper>
)

export default Header;