import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './utils/theme';

import Header from './containers/Header/Header';
import PageSection from './containers/PageSection/PageSection';
import Footer from './containers/Footer/Footer';

const pageSections = [
  {
    name: '1',
    secondary: false
  },
  {
    name: '2',
    secondary: true
  },
  {
    name: '3',
    secondary: false
  },
  {
    name: '4',
    secondary: true
  },
]
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.main}>
        <div>
            <Header></Header>
              { pageSections.map( section => 
                <PageSection key={section.name} secondary={section.secondary}></PageSection>)
              }
            <Footer></Footer>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
