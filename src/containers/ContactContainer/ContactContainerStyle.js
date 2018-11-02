import styled from 'styled-components';

const ContactContainerStyle = styled.div`
  .title, .content {
    text-align: center;
  }

  .text-block {
    margin-bottom: 50px;
  }

  .title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 0.1em;
    margin-bottom: 20px;
  }

  .content {
    line-height: 29px;
    font-size: 18px;
  }

  .submit-response {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.1em;
    line-height: 60px;
    color: ${props=>props.theme.color.secondary};
  }
`;

export default ContactContainerStyle;
