import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Overview } from './components/Overview';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Settings } from './components/Settings';
import { Help } from './components/Help';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'overview':
        return <Overview />;
      case 'projects':
        return <Projects />;
      case 'team':
        return <Team />;
      case 'settings':
        return <Settings />;
      case 'help':
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout onNavigate={setCurrentPage} currentPage={currentPage}>
      {renderPage()}
    </Layout>
  );
}