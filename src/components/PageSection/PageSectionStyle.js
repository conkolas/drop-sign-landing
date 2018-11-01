import styled from 'styled-components';

export const PageContainer = styled.div`
  width: ${ props => props.theme.content.container.large}px;
  margin: 0 auto;
  height: 100%;
  @media (max-width: ${ props => props.theme.content.container.large + props.theme.content.spacing * 2 }px) {
      width: auto;
      margin: 0 ${props=>props.theme.content.spacing}px;
  }
`;

export default styled.section`
  padding: ${ props => props.theme.content.upperPadding.large }px 0;
  position: relative;
  overflow: hidden;

  background: ${ 
    props => props.secondary ? 
      'linear-gradient(180deg, ' + 
      props.theme.color.mainForeground + ' 0%, ' + 
      props.theme.color.primaryLight + ' 100%)' : 'transparent'};

  color: ${ 
    props => props.secondary ? 
      props.theme.color.lightText : 
      props.theme.color.darkText};

  .container {
    position: relative;
  }
  .background {
    position: absolute;
    bottom: ${props => props.secondary ? -220 : -180 }px;
    &.right {
      right: 0;
      transform: translateX(200px) translateY(0%);
    }
    
    &.left {
      left: 0;
      transform: translateX(-200px) translateY(0%);
    }
  }
  
`;