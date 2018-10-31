import React from 'react';
import {Grid} from '@material-ui/core';
import Logo from './../Logo/Logo';
import { PageContainer } from './../PageSection/PageSectionStyle';
import Navigation from './../Navigation/Navigation';
import FixedHeader from './../FixedHeader/FixedHeader';
import StyledHeader from './HeaderStyle';

const Header = (props) => (
  <StyledHeader {...props} >
    <PageContainer>
      <Grid container 
        direction="column"
        justify="center"
        alignItems="center"
        className="grid">
            <Grid container item
              justify="space-between"
              alignItems="center">
                  <Grid item><Logo className="logo"></Logo></Grid>
                  <Grid item><Navigation></Navigation></Grid>
            </Grid>
      </Grid>
    </PageContainer>
  </StyledHeader>
)

export default FixedHeader(Header);
