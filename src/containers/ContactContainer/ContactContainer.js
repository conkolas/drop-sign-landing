import React from 'react';
import {Grid} from '@material-ui/core';
import SecondarySkyline from './../../assets/secondary_skyline.svg';
import PageSection from '../../components/PageSection/PageSection';
import ContactInput from '../../components/ContactInput/ContactInput';
import StyledContactContainer from './ContactContainerStyle';

const ContactContent = {
  contactEmail: 'aistis@taktikal.is',
  title: 'Wana try it?',
  content: 'Are you intrigued? Send us a line if you want to try our product and and we will get back with you reply to you as soon as possible',
  placeholder: 'Your email',
  submit: 'Send'
}

class ContactContainer extends React.Component {
  state = { error: false, sent: false, response: '' };

  sendEmail = email => {
    var formData = new FormData();
    formData.append('_replyto', email);
    formData.append('email', email);
  
    fetch('https://formspree.io/aistis@taktikal.is', {
        method: "POST", 
        headers: { "Accept": "application/json" },
        body: formData
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      if (response.success) this.setState({sent: true, response: response.success});
      if (response.error) this.setState({sent: false, error: true});
    })
    .catch(console.log);
  }

  onValueChange(val) {
    if (this.state.error || this.state.sent) this.setState({sent: false, error: false});
  }
  
  render() {
    const {sent, error} = this.state;
    return (
      <StyledContactContainer>
        <PageSection secondary background={SecondarySkyline}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={6} className="text-block">
              <div className="title">{ContactContent.title}</div>
              <div className="content">{ContactContent.content}</div>
            </Grid>
            <Grid item xs={12}>
              <ContactInput 
                error={error} 
                success={sent}
                onChange={(val) => this.onValueChange(val)} 
                onSubmit={this.sendEmail} 
                placeholder={ContactContent.placeholder} 
                submitText={ContactContent.submit}>
              </ContactInput>
            </Grid>
          </Grid>
        </PageSection>
      </StyledContactContainer>
    )
  }
}

export default ContactContainer;
