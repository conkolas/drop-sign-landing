import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledPageSection from './PageSectionStyle';

class PageSection extends Component {
  render() {
    return (
      <StyledPageSection {...this.props} 
        className={this.props.secondary ? 'secondary' : ''}>
        
      </StyledPageSection>
    );
  }
}

PageSection.propTypes = {
  secondary: PropTypes.bool
}

export default PageSection;
