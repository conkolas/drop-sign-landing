import React from 'react';
import { Grid } from '@material-ui/core';
import StyledNavigation from './NavigationStyle';

const Link = props => 
  <div className={ (props.primary ? 'primary' : props.secondary ? 'secondary' : '') + ' link'} >
    {props.children}
  </div>

const Navigation = props => 
  <StyledNavigation>
    <Grid container alignItems="center">
      <Link>How it works</Link>
      <Link>About</Link>
      <Link primary={true}>Try it out</Link>
      <Link secondary={true}>Sign in</Link>
    </Grid>
  </StyledNavigation>

export default Navigation;
