import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './utils/theme';

import Header from './components/Header/Header';
import MainContainer from './containers/MainContainer/MainContainer';
import HowItWorksContainer from './containers/HowItWorksContainer/HowItWorksContainer';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.main}>
        <div>
            <Header></Header>
            <MainContainer></MainContainer>
            <HowItWorksContainer></HowItWorksContainer>
            <Footer></Footer>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
