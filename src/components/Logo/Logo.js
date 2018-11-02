import React from 'react';
import Logo from './../../assets/logo.svg';

export default (props) => (
  <div {...props}>
    <a href="/"><img src={Logo} alt="Logo"/></a>
  </div>
)