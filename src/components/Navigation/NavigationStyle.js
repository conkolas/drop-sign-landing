import styled from 'styled-components';

const NavigationStyle = styled.nav`
  & .link {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: ${ props => props.theme.color.primary };
    margin: 0 20px;
    transition: color
    ${ props => props.theme.transition.normal } 
    ${ props => props.theme.transition.decelerate };
    
    &:hover:not(.primary):not(.secondary), &.active {
      color: ${ props => props.theme.color.menuActive };
    }
    
    color: ${ props => props.theme.color.primary };
    text-decoration: none;

    &.primary, &.secondary {
      margin: 0 5px;
      border-radius: 4px;
      padding: 9px 20px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      transition: box-shadow
        ${ props => props.theme.transition.normal } 
        ${ props => props.theme.transition.decelerate };
      &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      }
    }

    &:nth-last-child(1) {
      margin-right: 0px;
    }

    &.primary {
      color: ${ props => props.theme.color.lightText };
      background: ${ props => props.theme.color.primary };
    }

    &.secondary {
      color: ${ props => props.theme.color.primary };
      background: ${ props => props.theme.color.signupBackground };
    }
  }
`;

export default NavigationStyle;
