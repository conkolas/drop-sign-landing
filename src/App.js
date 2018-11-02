import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import themes from './utils/theme';
import * as Scroll from 'react-scroll';

import Header from './components/Header/Header';
import MainContainer from './containers/MainContainer/MainContainer';
import HowItWorksContainer from './containers/HowItWorksContainer/HowItWorksContainer';
import AboutContainer from './containers/AboutContainer/AboutContainer';
import ContactContainer from './containers/ContactContainer/ContactContainer';
import Footer from './components/Footer/Footer';

export const history = createBrowserHistory();
export const routes = {
  howItWorks: 'how-it-works',
  about: 'about',
  contact: 'contact',
}
const RouteContext = new React.createContext({currentRoute: ''});
export const RouteProvider = RouteContext.Provider;
export const RouteConsumer = RouteContext.Consumer;

class App extends Component {
  initialState = {
    currentRoute: '',
    items: [
      {
        order: 0,
        title: 'How it works',
        active: false,
        link: 'how-it-works'
      },
      {
        order: 1,
        title: 'About',
        active: false,
        link: 'about'
      },
      {
        order: 2,
        title: 'Try it out',
        link: 'contact',
        primary: true
      },
      {
        order: 3,
        title: 'Sign in',
        target: '_blank',
        link: 'https://google.is',
        secondary: true
      }
    ]
  };
  state = {items: []};

  componentDidMount() {
    let initialRoute = history.location.pathname.replace('/', '');
    this.setState({currentRoute: initialRoute, ...this.initialState});
    setTimeout(()=> {
      this.onRouteChange(initialRoute);
    }, 1);
  }

  onMenuClick(e, itemOrder) {
    const newState = {...this.initialState};
    newState.items.forEach(item => {
      item.active = false;
      if (item.order == itemOrder) {
        if (item.target !== undefined) return;
        e.preventDefault();

        item.active = true;
        history.push(item.link);

        this.setState({currentRoute: item.link, ...newState});
        this.onRouteChange(item.link);
      }
    });
  }

  onHomeClick(e) {
    e.preventDefault();
    history.push('/');
    this.setState({currentRoute: '/'});
    this.onRouteChange('root');
  }

  onRouteChange(route) {
    let element = document.getElementById(route);
    if (element === null) return;
    
    let elementTop = element.offsetTop;
    Scroll.animateScroll.scrollTo(elementTop - themes.main.header.height);
  }

  render() {
    const menuItems = this.state.items;
    return (
      <ThemeProvider theme={themes.main}>
        <Router history={history}>
            <div>
              <Header 
                onHomeClick={(e) => this.onHomeClick(e)} 
                onMenuClick={(e, order) => this.onMenuClick(e, order)} 
                menuItems={menuItems}>
              </Header>
              <div id="root"><MainContainer></MainContainer></div>
              <div id="how-it-works"><HowItWorksContainer></HowItWorksContainer></div>
              <div id="about"><AboutContainer></AboutContainer></div>
              <div id="contact"><ContactContainer></ContactContainer></div>
              <Footer></Footer>
            </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
