import React from 'react';
import { Github } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-700">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="bg-blue-100 rounded-lg p-8 text-center mb-8">
          <h1 className="text-purple-700 text-4xl font-bold">DragonList</h1>
          <h2 className="text-purple-700 text-2xl font-bold mb-6">Keep track of your Dragon Cave scroll with a checklist, statistics, and more!</h2>
          
          <button
            onClick={handleLogin}
            className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors text-lg font-semibold"
          >
            {isAuthenticated ? 'Go to Dashboard' : 'Login with Dragon Cave'}
          </button>
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto px-4 flex justify-end">
        <a 
          href="https://github.com/rio-codes/dragonlist.xyz" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-50 hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;