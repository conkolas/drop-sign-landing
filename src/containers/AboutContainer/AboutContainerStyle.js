import styled from 'styled-components';

const AboutContainerStyle = styled.div`
  .content-block {
    margin-bottom: 40px;
    padding-right: 20px;
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #D8FBF1;
  }

  .title {
    color: ${ props => props.theme.color.primary };
    font-weight: 600;
    font-size: 21px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .content {
    line-height: 26px;
    font-size: 16px;
  }
`;

export default AboutContainerStyle;
