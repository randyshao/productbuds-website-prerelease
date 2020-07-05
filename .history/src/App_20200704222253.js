import React from 'react';
import './App.css';
import About from './pages/About';
import Layout from './components/Layout/Layout';
import TitleBanner from './components/Layout/TitleBanner/TitleBanner';
import CompanyIntro from './components/Layout/CompanyIntro/CompanyIntro';
import CompanyStats from './components/Layout/CompanyStats/CompanyStats';


function App() {
  return (
    <div className="App">
      <Layout>
        <TitleBanner />
        <CompanyIntro />
        <CompanyStats />
      </Layout>
    </div>
  );
}

export default App;
