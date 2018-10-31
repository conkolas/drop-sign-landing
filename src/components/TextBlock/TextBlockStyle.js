import styled from 'styled-components';

const TextBlockStyle = styled.div`
  h2, h3 {
    margin: 0;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.1em;
  }
  
  h2 {
    font-size: 14px;
    color: ${ props => props.theme.color.secondary };
    margin-bottom: 15px;
  }
  
  h3 {
    font-size: ${ props => 
      props.font === 'large' ? 45 : 
      props.font === 'medium' ? 35 : 32}px;

    font-weight: ${ props => 
      props.font === 'large' ? 800 : 
      props.font === 'medium' ? 600 : 300};
    line-height: 1.2em;
    color: ${ props => props.light ? props.theme.color.lightText : props.theme.color.primary };
    margin-bottom: 20px;
  }

  .content {
    line-height: 1.4em;
    font-size: 18px;
  }

  &.right {
    text-align: right;
  }
`;

export default TextBlockStyle;
