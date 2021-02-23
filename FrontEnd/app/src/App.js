import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Index from './components/index.js';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;