import React from 'react';
import { Grid } from '@material-ui/core';
import TickIcon from './../../assets/icons/tick.svg';
import StyledContactInput from './ContactInputStyle';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.emailInput = null;
  }

  render() {
    const {placeholder, submitText, onSubmit, onChange, error, success} = this.props;
    return (
      <StyledContactInput className={error ? 'error' : ''}>
        <Grid container item>
          <Grid item className={(success ? 'success' : '') + ' input-wrap'}>
            <input ref={ref => this.emailInput = ref } onChange={() => onChange(this.emailInput.value)} placeholder={placeholder}></input>
            <img src={TickIcon} className="success-icon"></img>
          </Grid>
          <Grid item ><button type="submit" disabled={success} onClick={() => onSubmit(this.emailInput.value)} className="submit-button">{submitText}</button></Grid>
        </Grid>
      </StyledContactInput>
    )
  }
} 

export default ContactInput;
