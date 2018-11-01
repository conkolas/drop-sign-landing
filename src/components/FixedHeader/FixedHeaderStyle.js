import styled from 'styled-components';

export const Gap = styled.div`
  height: ${ props => props.theme.header.height}px;
`;

export default styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0; left: 0;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.08);
  transition: box-shadow 
    ${ props => props.theme.transition.normal } 
    ${ props => props.theme.transition.decelerate };

  &.fixed {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.08);
    transition: box-shadow 
      ${ props => props.theme.transition.quick } 
      ${ props => props.theme.transition.accelerate };
  }
`;