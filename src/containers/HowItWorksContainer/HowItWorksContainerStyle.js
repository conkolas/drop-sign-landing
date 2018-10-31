import styled from 'styled-components';

const HowItWorksContainerStyle = styled.div`
  .header-block {
    font-weight: 600;
    line-height: 50px;
    font-size: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    color: ${ props => props.theme.color.primary};
    text-align: center;
    text-transform: uppercase;
    height: 50px;
    background: ${props => props.theme.color.lightText};
    border-radius: 5px;
    margin-bottom: 30px;
  }

  .header-block-wrap, .instruction-block-wrap {
    padding: 0px 15px;
    &:nth-child(1) {
      padding-left: 0px;
    }
    &:nth-last-child(1) {
      padding-right: 0px;
    }
  }

  .instructions {
    margin-top: 50px;
  }

  .instruction-block {
    border-radius: 5px;
    background: ${props => props.theme.color.primaryLight};
    padding: 20px 20px 20px 40px;
    .step {
      margin: 20px 0;
    }
  }

  .step-title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
  }

  .step-content {
    font-weight: 300;
    line-height: 26px;
    font-size: 16px;
  }
`;

export default HowItWorksContainerStyle;
