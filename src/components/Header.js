import React from 'react'
import {Link} from 'react-router-dom'

const style = {
  cursor: 'pointer'
}

const Header = ({history}) => (
  <header style={style}>
    <Link to="/"><h1>Housetopia</h1></Link>
  </header>
);

export default Header;
