import styled from 'styled-components';

const InstructionStyle = styled.div`
  .instructions {
    margin-top: 50px;
  }

  .instruction-block {
    position: relative;
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

export default InstructionStyle;
