import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content } from './Header.styles';

//Context
import { Context } from '../../context';


const Header = () => {
  const [user] = useContext(Context);

  return (
    <Wrapper>
      <Content>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h1 className="heading">MoviesDB</h1>
        </Link>
        {user ? (
          <span className="loggedin">{user.username}</span>
        ) : (
          <Link to="/login">
            <span className="login">Login</span>
          </Link>
        )
        }
      </Content>
    </Wrapper>
  )
}



export default Header;