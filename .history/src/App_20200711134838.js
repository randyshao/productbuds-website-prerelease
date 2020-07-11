import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/initiatives' component={Initiatives} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
