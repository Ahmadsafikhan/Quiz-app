import React from 'react';
import pakFlag from '../images/pngwing.com.png';

const Header = () => {
  return (
    <header className="bg-green-500 py-4 rounded-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <img src={pakFlag} alt="Pakistan Flag" className="w-8 h-8 mr-2" />
          <h1 className="text-white text-2xl font-semibold">Quiz of Pakistan History</h1>
        </div>
        {/* You can add any additional elements here, such as a user profile */}
      </div>
    </header>
  );
};

export default Header;
