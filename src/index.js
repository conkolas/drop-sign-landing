import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import { addLocaleData, IntlProvider } from 'react-intl';
// import en from 'react-intl/locale-data/en';
// import is from 'react-intl/locale-data/is';
import messages from './utils/messages';

import App from './App';
import * as serviceWorker from './serviceWorker';

// addLocaleData([...en, ...is]);
// let locale = 
//   (navigator.languages && navigator.languages[0]) 
//   || navigator.language
//   || navigator.userLanguage
//   || 'is-IS';

ReactDOM.render(
  // <IntlProvider locale={locale} messages={messages[locale]}>
    <App />,
  // </IntlProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
