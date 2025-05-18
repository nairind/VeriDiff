import React, { useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg w-full max-w-4xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-1">
          <div className="relative pb-[56.25%] h-0">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded"
              src={videoUrl}
              title="VeriDiff Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const DemoVideoSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // This is a placeholder URL - replace with your actual video URL
  const demoVideoUrl = "https://www.youtube.com/embed/your-video-id";

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded-md border-2 border-white transition duration-300 ease-in-out"
      >
        Watch 60 sec Demo
      </button>
      
      <VideoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={demoVideoUrl}
      />
    </>
  );
};

export default DemoVideoSection;
