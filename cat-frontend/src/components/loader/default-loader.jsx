import React from 'react';
import { FaCircleNotch } from 'react-icons/fa6';
import SadCatIcon from '../SadCatIcon';

const DefaultLoader = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          {/* Loader Animation */}
          <div className="w-20 h-20  rounded-full animate-spin">
            <SadCatIcon/>
          </div>
          <p className="text-lg font-medium text-gray-700">Hold on! Cooking...</p>
        </div>
      </div>
    );
};

export default DefaultLoader;