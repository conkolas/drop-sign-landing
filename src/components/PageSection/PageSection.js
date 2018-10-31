import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import StyledPageSection, {PageContainer} from './PageSectionStyle';
import Row from './../Row/Row';

const PageSection = props => 
  <StyledPageSection className={(props.secondary ? 'secondary' : '') + ' ' + props.className} {...props}>
    <PageContainer>
      <Grid container spacing={props.spacing} alignItems="center" justify="space-between">
        { props.children }
      </Grid>
    </PageContainer>
  </StyledPageSection>

PageSection.propTypes = {
  secondary: PropTypes.bool
}

export default PageSection;
