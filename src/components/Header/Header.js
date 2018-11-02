import React from 'react';
import {Grid} from '@material-ui/core';
import Logo from './../Logo/Logo';
import { PageContainer } from './../PageSection/PageSectionStyle';
import Navigation from './../Navigation/Navigation';
import FixedHeader from './../FixedHeader/FixedHeader';
import StyledHeader from './HeaderStyle';

const Header = (props) => (
  <StyledHeader >
    <PageContainer>
      <Grid container 
        direction="column"
        justify="center"
        alignItems="center"
        className="grid">
            <Grid container item
              justify="space-between"
              alignItems="center">
                  <Grid item><Logo onClick={props.onHomeClick} className="logo"></Logo></Grid>
                  <Grid item><Navigation menuItems={props.menuItems} onMenuClick={props.onMenuClick}></Navigation></Grid>
            </Grid>
      </Grid>
    </PageContainer>
  </StyledHeader>
)

export default FixedHeader(Header);
