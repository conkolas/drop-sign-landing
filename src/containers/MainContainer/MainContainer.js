import React from 'react';
import {Grid} from '@material-ui/core';
import TextBlock from './../../components/TextBlock/TextBlock';
import ActionIcon from './../../components/ActionIcon/ActionIcon';
import SignLandingIcon from './../../assets/icons/signMain.svg';
import PageSection from './../../components/PageSection/PageSection';
import StyledMainContainer from './MainContainerStyle';

const Content = {
  title: 'Lorem ipsum dolor sit',
  header: 'A simple and safe solution for your bussines',
  content: 'Drop and sign is a secure soulution sutable for any buissness that send documents for signature.'
}

const MainContainer = props => 
  <StyledMainContainer>
    <PageSection className="page-section" spacing={32}>
      <Grid item xs={6}>
        <TextBlock alignRight
          className="text"
          font="large"
          title={ Content.title }
          header={ Content.header }
          content={ Content.content }
        ></TextBlock>
      </Grid>
      <Grid item xs={6}>
        <ActionIcon src={SignLandingIcon} className="image"></ActionIcon>
      </Grid>
    </PageSection>
  </StyledMainContainer>

export default MainContainer;
