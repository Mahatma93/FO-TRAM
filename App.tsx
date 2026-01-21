
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import AuthView from './views/AuthView';
import HubView from './views/HubView';
import MaintenanceView from './views/MaintenanceView';
import { View, UserProfile } from './types';
import { authService } from './services/authService';
import { LINE_CONFIG } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('AUTH');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const profile = authService.getStoredProfile();
    if (profile) {
      setCurrentUser(profile);
      setCurrentView('HUB');
    }
  }, []);

  const handleAuthenticated = (profile: UserProfile) => {
    setCurrentUser(profile);
    setCurrentView('HUB');
  };

  const handleLogout = () => {
    if (window.confirm("Voulez-vous vraiment vous déconnecter ?")) {
      setCurrentUser(null);
      setCurrentView('AUTH');
      authService.clearProfile();
    }
  };

  const handleNavigateToMaintenance = () => {
    setCurrentView('MAINTENANCE');
  };

  const handleBackToHub = () => {
    setCurrentView('HUB');
  };

  const themeColor = currentUser ? LINE_CONFIG[currentUser.line].color : '#e2001a';

  return (
    <Layout 
      onLogout={currentView !== 'AUTH' ? handleLogout : undefined}
      onBack={currentView === 'MAINTENANCE' ? handleBackToHub : undefined}
      title={
        currentView === 'HUB' ? `BIENVENUE SUR LA LIGNE ${currentUser?.line}` : 
        currentView === 'MAINTENANCE' ? `MAINTENANCE — LIGNE ${currentUser?.line}` : undefined
      }
      themeColor={themeColor}
      hideLogo={true}
    >
      {currentView === 'AUTH' && (
        <AuthView onAuthenticated={handleAuthenticated} />
      )}
      
      {currentView === 'HUB' && currentUser && (
        <HubView 
          user={currentUser} 
          onResetProfile={handleLogout} 
          onNavigateMaintenance={handleNavigateToMaintenance} 
        />
      )}

      {currentView === 'MAINTENANCE' && currentUser && (
        <MaintenanceView 
          user={currentUser} 
          onBack={handleBackToHub} 
        />
      )}
    </Layout>
  );
};

export default App;
