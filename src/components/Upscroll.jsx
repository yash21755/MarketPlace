import React, { useState, useEffect } from 'react';

const Upscroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="cursor-pointer fixed bottom-8 right-11 w-12 h-12 flex justify-center items-center rounded-full bg-slate-500 text-white font-extrabold text-3xl transition-transform transform hover:scale-105 hover:bg-slate-700"

          onClick={scrollToTop}
        //   style={styles.button}
        >
          ↑
        </button>
      )}
    </div>
  );
};


export default Upscroll;
