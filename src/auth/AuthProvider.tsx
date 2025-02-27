import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

interface ImportMeta {
  env: {
    DRAGCAVE_OAUTH_DOMAIN: string;
    DRAGCAVE_CLIENT_ID: string;
  };
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_DRAGCAVE_OAUTH_DOMAIN || '';
  const clientId = import.meta.env.VITE_DRAGCAVE_CLIENT_ID || '';

  // Handle Auth0 callback and redirect to the intended page
  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || '/dev');
  };

  // Show a fallback UI if environment variables aren't set up
  if (!domain || !clientId) {
    console.warn('Auth0 configuration missing. Using development mode.');
    return <>{children}</>;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin + '/dev',
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;