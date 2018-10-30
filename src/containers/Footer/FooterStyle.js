import styled from 'styled-components';

export default styled.footer`
  height: ${ props => props.theme.footer.height}px;
  background: ${ props => props.theme.color.mainBackground};
`;