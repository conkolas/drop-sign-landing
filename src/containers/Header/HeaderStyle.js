import styled from 'styled-components';

export default styled.header`
  height: ${ props => props.theme.header.height}px;
  background: ${ props => props.theme.color.mainBackground};

  .grid {
    width: 100%;
    height: 100%;
  }
`;