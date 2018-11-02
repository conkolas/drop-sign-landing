import React from 'react';
import {Grid} from '@material-ui/core';
import PrimarySkyline from './../../assets/primary_skyline.svg';
import ClockIcon from './../../assets/icons/clock.svg';
import SecurityIcon from './../../assets/icons/security.svg';
import EarthIcon from './../../assets/icons/earth.svg';
import TickIcon from './../../assets/icons/tick.svg';
import PageSection from '../../components/PageSection/PageSection';
import StyledAboutContainer from './AboutContainerStyle';
import TextBlock from './../../components/TextBlock/TextBlock';

const AboutTextBlock = {
  title: 'About',
  header: 'How DropAndSign benefits you',
  content: 'Drop and sign is a secure soulution suitable for any buissness that send documents for signatures.'
}

const AboutContentBlocks = [
  {
    icon: ClockIcon,
    title: 'Time efficient',
    content: 'It only takes around 3 minutest to send and sign documents with our solution, vs. 3 days the old way.'
  },
  {
    icon: SecurityIcon,
    title: 'Secure',
    content: 'We meet very strict requirements under eIDAS regulation. Witch makes the signatures equal to a handwritten one.'
  },
  {
    icon: TickIcon,
    title: 'Easy',
    content: 'We put an emphasis on a good and simple interface so the product will be easy to use and sutable fo both your client and you'
  },
  {
    icon: EarthIcon,
    title: 'Eco',
    content: 'Drop and sign is a secure soulution sutable for any buissness that send documents for signatures.'
  },
]

const AboutContainer = props => 
  <StyledAboutContainer>
    <PageSection alignItems="flex-start" background={PrimarySkyline}>
      <Grid item xs={6}>
        <TextBlock
          className="text"
          font="large"
          title={ AboutTextBlock.title }
          header={ AboutTextBlock.header }
          content={ AboutTextBlock.content }
        ></TextBlock>
      </Grid>
      <Grid container item xs={6}>
        {
          AboutContentBlocks.map(contentBlock =>
            <Grid container item xs={6} direction="column" className="content-block" key={contentBlock.title}>
              <Grid container justify="center" alignItems="center" className="icon">
                <img src={contentBlock.icon}/>
              </Grid>
              <div className="title">{contentBlock.title}</div>
              <div className="content">{contentBlock.content}</div>
            </Grid>
          )
        }
      </Grid>
    </PageSection>
  </StyledAboutContainer>

export default AboutContainer;
