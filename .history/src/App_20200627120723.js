import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TitleBanner from './components/Layout/TitleBanner/TitleBanner'

function App() {
  return (
    <div className="App">
      <Layout>
        <TitleBanner />
      </Layout>
    </div>
  );
}

export default App;
