import React from 'react';
import { Grid } from '@material-ui/core';

import Logo from './../../components/Logo/Logo';
import FixedHeader from './../../containers/FixedHeader/FixedHeader';
import StyledHeader from './HeaderStyle';

const Header = (props) => (
  <StyledHeader {...props} >
    <Grid 
      container 
      direction="row" 
      justify="space-between"
      alignItems="center"
      className="grid">
        <Grid item>
          <Logo></Logo>
        </Grid>
    </Grid>
  </StyledHeader>
)

export default FixedHeader(Header);
