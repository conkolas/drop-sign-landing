import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import StyledPageSection, {PageContainer} from './PageSectionStyle';
import PrimarySkyline from './../../assets/primary_skyline.svg';
import Row from './../Row/Row';

const PageSection = props => 
  <StyledPageSection className={(props.secondary ? 'secondary' : '') + ' ' + props.className} {...props}>
    <PageContainer>
      <Grid container 
        className="container"
        spacing={props.spacing} 
        alignItems={props.alignItems ? props.alignItems : 'center'} 
        justify="space-between">
        <div className={(props.secondary ? 'right' : 'left') + ' background'}><img src={props.background}/></div>
        { props.children }
      </Grid>
    </PageContainer>
  </StyledPageSection>

PageSection.propTypes = {
  secondary: PropTypes.bool
}

export default PageSection;
