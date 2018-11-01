import React from 'react';
import {Grid} from '@material-ui/core';
import StyledContactInput from './ContactInputStyle';

const ContactInput = props => 
  <StyledContactInput>
    <Grid container item>
      <Grid item ><input placeholder={props.placeholder}></input></Grid>
      <Grid item ><button onClick={props.onClick} className="submit-button">{props.submitText}</button></Grid>
    </Grid>
  </StyledContactInput>

export default ContactInput;
