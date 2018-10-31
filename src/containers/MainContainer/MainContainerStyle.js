import styled from 'styled-components';

const MainContainerStyle = styled.div`
  .page-section {
    padding: 70px 0;
  }

  @media (max-width: ${props => props.theme.content.container.large}px) {
    .image {
      padding-left: 10px;
    }
  }
`;

export default MainContainerStyle;
