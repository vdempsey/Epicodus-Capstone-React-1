import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import WebFont from 'webfontloader';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

WebFont.load({
  google: {
    families: ['Open Sans :300,400,700', 'sans-serif']
  }
});

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
