import React from 'react';

const VideoPageSkeleton = () => {
  return (
    <div className="w-72 h-72 bg-gray-300 animate-pulse rounded-lg">
      <div className="w-full h-32 bg-gray-400 rounded-t-lg"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        <div className="flex items-center mt-4 gap-2">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div>
            <div className="h-4 bg-gray-400 rounded w-20"></div>
            <div className="h-3 bg-gray-400 rounded w-12 mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPageSkeleton;
