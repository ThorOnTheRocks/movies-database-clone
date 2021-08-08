import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, MDBLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={RMDBLogo} alt='rmdb-logo' />
      </Link>
      <MDBLogoImg src={TMDBLogo} alt='tmdbb-logo' />
    </Content>
  </Wrapper>
)

export default Header;