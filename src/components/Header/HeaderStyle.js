import styled from 'styled-components';

export default styled.header`
  background: ${ props => props.theme.color.mainBackground};
  height: ${ props => props.theme.header.height}px;
  .grid {
    height: ${ props => props.theme.header.height}px;
    width: 100%;
  }
  .nav {
  }
  .logo {
    padding-left: 60px;
  }
`;