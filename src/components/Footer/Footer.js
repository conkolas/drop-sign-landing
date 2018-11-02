import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import FooterLogo from './../../assets/footerLogo.svg';
import {PageContainer} from './../PageSection/PageSectionStyle';
import StyledFooter from './FooterStyle';

const FooterData = {
  logoLink: 'https://taktikal.is/',
  contact: '',
  termsAndConditions: 'https://taktikal.is/'
}

class Footer extends Component {
  render() {
    return (
      <StyledFooter {...this.props}>
        <PageContainer>
          <Grid container className="row" justify="center" direction="column">
            <Grid container item justify="space-between">
              <Grid item>
                <a href="https://taktikal.is/" target="_blank">
                  <img src={FooterLogo} alt="Footer-logo"></img>
                </a>
              </Grid>
              <Grid item>
                <div className="navigation">
                  <a href={FooterData.termsAndConditions} target="_blank">Terms and conditions</a>
                  <span>/</span>
                  <a href="">Contact</a>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </PageContainer>
      </StyledFooter>
    );
  }
}

export default Footer;
