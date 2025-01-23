import React, { useState } from 'react';
import testingImage from '../../assets/textingImage.png';
import VideoPageSkeleton from '../../components/skeletons/videoPageSkeleton';

const VideoPage = () => {
  const items = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `What to do to gain Concentration ${index + 1}`,
    author: 'Virton',
    image: testingImage,
  }));

  const [loading, setLoading] = useState(false); 

  return (
    <div className="p-10 flex flex-wrap gap-9 justify-center">
      {loading
        ? Array.from({ length: 12 }, (_, index) => (
            <VideoPageSkeleton key={index} />
          ))
        : items?.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full border border-black flex justify-center items-center ml-5"></div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="font-light text-xs">{item.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default VideoPage;
