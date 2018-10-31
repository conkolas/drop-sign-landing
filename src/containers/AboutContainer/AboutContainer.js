import React from 'react';
import StyledAboutContainer from './AboutContainerStyle';

const AboutTextBlock = {
  title: 'About',
  header: 'How DropAndSign benefits you',
  content: 'Drop and sign is a secure soulution suitable for any buissness that send documents for signatures.'
}

const AboutContentBlocks = [
  {
    icon: 'time',
    title: 'Time efficient',
    content: 'It only takes around 3 minutest to send and sign documents with our solution, vs. 3 days the old way.'
  },
  {
    icon: 'security',
    title: 'Secure',
    content: 'We meet very strict requirements under eIDAS regulation. Witch makes the signatures equal to a handwritten one.'
  },
  {
    icon: 'easy',
    title: 'Easy',
    content: 'We put an emphasis on a good and simple interface so the product will be easy to use and sutable fo both your client and you'
  },
  {
    icon: 'eco',
    title: 'Eco',
    content: 'Drop and sign is a secure soulution sutable for any buissness that send documents for signatures.'
  },
]

const AboutContainer = props => 
  <StyledAboutContainer></StyledAboutContainer>

export default AboutContainer;
