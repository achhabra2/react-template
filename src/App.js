import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Store from './Store';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Grommet from 'grommet/components/App';
import Sample from './components/Sample';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grommet>
          <Navbar />
          <Route path='/sample' component={Sample} />
        </Grommet>
      </BrowserRouter>
    );
  }
}

const AppContainer = () => {
  return (
    <Provider store={new Store()}>
      <App />
    </Provider>
  );
};

export default AppContainer;