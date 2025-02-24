import React from 'react';
import { Github } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-700">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="bg-blue-100 rounded-lg p-8 text-center mb-8">
          <h1 className="text-purple-700 text-4xl font-bold">Coming Soon</h1>
          <h2 className="text-purple-700 text-2xl font-bold">Keep track of your Dragon Cave scroll with a checklist, statistics, and more!</h2>
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto px-4 flex justify-end">
        <a 
          href="https://github.com/rio-codes/dragonlist.xyz" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-50 hover:text-white transition-colors"
        >
          <Github size={32} />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;