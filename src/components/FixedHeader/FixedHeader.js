import React from 'react';
import StyledFixedHeader, { Gap } from './FixedHeaderStyle';

const FixedHeader = (HeaderComponent) => {
  return class FixedHeader extends React.Component {
    state = { fixed: false };

    constructor(props) {
      super(props);
      window.addEventListener('scroll', () => {
        if (window.scrollY === 0 && this.state.fixed) {
          this.setState({ fixed: false });
          return;
        }
        if (window.scrollY > 0 && !this.state.fixed) {
          this.setState({ fixed: true })
        }
      });
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll');
    }

    render() {
      const { fixed } = this.state;
      return (
        <div>
          <Gap></Gap>
          <StyledFixedHeader className={ fixed ? 'fixed' : ''}>
            <HeaderComponent {...this.props} ></HeaderComponent>
          </StyledFixedHeader>
        </div>
      );
    }
  }
}

export default FixedHeader;
