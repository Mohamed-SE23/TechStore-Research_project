import React, { useEffect } from 'react';
import Loading from './Loading';

const PageLoading = () => {
  useEffect(() => {
    // Disable scrolling on the page when loading is active
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Re-enable scrolling when loading is complete
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='fixed inset-0 min-h-screen w-full z-[100] bg-white/40 flex items-center justify-center'>
      <Loading />
    </div>
  );
};

export default PageLoading;
