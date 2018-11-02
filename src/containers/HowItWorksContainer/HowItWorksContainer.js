import React from 'react';
import {Grid} from '@material-ui/core';
import SecondarySkyline from './../../assets/secondary_skyline.svg';
import {ActionIconTypes} from './../../components/ActionIcon/ActionIcon';
import TextBlock from './../../components/TextBlock/TextBlock';
import PageSection from '../../components/PageSection/PageSection';
import Instructions from '../../components/Instructions/Instructions';
import StyledHowItWorksContainer from './HowItWorksContainerStyle';

const TextBlockContent = {
  title: 'How it works',
  header: 'Only three simple steps',
  content: 'Drop and sign has two solutions one for you and your staff, and one for your client'
}

const InstructionHeaders = [
  { title: 'For your independent client' },
  { title: 'For you and your staff' }
]
const InstructionsData = [
  {
    id: 0,
    steps: [
      {
        icon: ActionIconTypes.drop,
        title: '1. Drop a document',
        content: 'Choose a document to send to your client and drop it in our product.'
      },
      {
        icon: ActionIconTypes.send,
        title: '2. Send to client',
        content: 'Next send the document to the client. Lorem ipsum dolor sit imen'
      },
      {
        icon: ActionIconTypes.sign,
        title: '3. Client signs',
        content: 'Then last the client gets the document via email, signs with his electronice signature and your done'
      },
    ],
  },
  {
    id: 1,
    steps: [
      {
        icon: ActionIconTypes.pick,
        title: '1. Pick document',
        content: 'The clients picks a document to sign from your buisnesses webpage'
      },
      {
        icon: ActionIconTypes.fill,
        title: '2. Fill document',
        content: 'The client fills out the document using our backend product'
      },
      {
        icon: ActionIconTypes.sign,
        title: '3. Client signs',
        content: 'Then lastly he clients signs with his electronic signature and is done.'
      },
    ],
  },
]

const HowItWorksContainer = props => 
  <StyledHowItWorksContainer>
    <PageSection secondary background={SecondarySkyline}>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <TextBlock light
            font="medium"
            title={ TextBlockContent.title }
            header={ TextBlockContent.header }
            content={ TextBlockContent.content }
          ></TextBlock>
        </Grid>
      </Grid>
      <Instructions 
        instructions={InstructionsData} 
        instructionHeaders={InstructionHeaders}>
      </Instructions>
    </PageSection>
  </StyledHowItWorksContainer>

export default HowItWorksContainer;
