import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
