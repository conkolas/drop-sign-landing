import styled from 'styled-components';

const MainContainerStyle = styled.div`
  position: relative;
  overflow: hidden;
  .page-section {
    padding: 70px 0;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  @media (max-width: ${props => props.theme.content.container.large}px) {
    .image {
      padding-left: 10px;
    }
  }

  .background-shadow {
    position: absolute;
    left: 0; bottom: 0;
    width: 100%; height: 100%;
    z-index: 1;
    background: url(${props => props.backgroundShadow}) center no-repeat;
    background-size: cover;
 
  }
`;

export default MainContainerStyle;
