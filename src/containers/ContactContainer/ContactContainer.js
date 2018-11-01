import React from 'react';
import {Grid} from '@material-ui/core';
import SecondarySkyline from './../../assets/secondary_skyline.svg';
import PageSection from '../../components/PageSection/PageSection';
import ContactInput from '../../components/ContactInput/ContactInput';
import StyledContactContainer from './ContactContainerStyle';

const ContactContent = {
  title: 'Wana try it?',
  content: 'Are you intrigued? Send us a line if you want to try our product and and we will get back with you reply to you as soon as possible',
  placeholder: 'Your email',
  submit: 'Send'
}

const ContactContainer = props => 
  <StyledContactContainer>
    <PageSection secondary background={SecondarySkyline}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={6} className="text-block">
          <div className="title">{ContactContent.title}</div>
          <div className="content">{ContactContent.content}</div>
        </Grid>
        <Grid item xs={12}>
          <ContactInput placeholder={ContactContent.placeholder} submitText={ContactContent.submit}></ContactInput>
        </Grid>
      </Grid>
    </PageSection>
  </StyledContactContainer>

export default ContactContainer;
