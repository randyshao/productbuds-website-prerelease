import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TitleBanner from './components/Layout/TitleBanner/TitleBanner';
import CompanyIntro from './components/Layout/CompanyIntro/CompanyIntro';

function App() {
  return (
    <div className="App">
      <Layout>
        <TitleBanner />
        <CompanyIntro />
      </Layout>
    </div>
  );
}

export default App;
