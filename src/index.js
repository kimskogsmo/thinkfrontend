import { h, render } from 'preact';
import App from './App';
import './index.scss';

import { getAnalytics } from "firebase/analytics";

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
import ReactGA from 'react-ga';

history.listen(() => {
    window.ga('send', 'pageview', {
      page: window.location.pathname
    })
  }
)

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

render(
    <App />,
    document.getElementById('root')
);
