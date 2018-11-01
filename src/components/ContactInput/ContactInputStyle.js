import styled from 'styled-components';

const ContactInputStyle = styled.div`
  input {
    display: block;
    width: 350px;
    background: ${ props => props.theme.color.contactInputBackground };
    border: 3px solid;
    border-color: ${ props => props.theme.color.contactInputBorder };
    box-sizing: border-box;
    border-radius: 4px;
    padding: 14px 30px;
    font-weight: 600;
    line-height: 26px;
    font-size: 16px;
    letter-spacing: 0.1em;
    color: ${ props => props.theme.color.lightText };
    &:focus {
      border-color: ${ props => props.theme.color.secondary };
    }

    &::placeholder {
      color: #98A9FF;
      font-weight: 600;
      line-height: 26px;
      font-size: 16px;
      letter-spacing: 0.1em;
    }
  }

  .submit-button {
    margin-left: 30px;
    padding: 17px 35px;
    background: ${ props => props.theme.color.lightText };
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    border-radius: 4px;
    color: #4D20FF;
    cursor: pointer;
  }

  .submit-button, input {
    text-transform: uppercase;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    -webkit-appearance: none;
    outline: none;
    transition: box-shadow 
      ${ props => props.theme.transition.normal },
      border-color ${ props => props.theme.transition.normal }
      ${ props => props.theme.transition.decelerate };

    &:hover {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      transition: box-shadow 
        ${ props => props.theme.transition.quick },
        border-color ${ props => props.theme.transition.normal }
        ${ props => props.theme.transition.accelerate };
    }
    &:active {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0) !important;
    }
  }
  input:focus {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0) !important;
  }
`;

export default ContactInputStyle;