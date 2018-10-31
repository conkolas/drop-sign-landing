import styled from 'styled-components';

export default styled.footer`
  height: ${ props => props.theme.footer.height}px;
  background: ${ props => props.theme.color.mainBackground};
  .row {
    height: ${ props => props.theme.footer.height}px;
  }

  .navigation a {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    margin: 10px;
    color: ${props => props.theme.color.primary};
  }
`;