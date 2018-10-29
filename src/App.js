import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './utils/theme';

import Header from './containers/Header/Header';
import Content from './containers/Content/Content';
import Footer from './containers/Footer/Footer';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.main}>
        <div>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
