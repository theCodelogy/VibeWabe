'use client'
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 500 pixels
  const handleScroll = () => {
    if (window.scrollY > 500 || document.documentElement.scrollTop > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="to-top-button"
      onClick={scrollToTop}
      title="Go To Top"
      className={`${
        isVisible
          ? 'fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md  bg-gradient-to-r from-red-600 to-zinc-500 hover:bg-red-700  text-white text-lg font-semibold transition-colors duration-300'
          : 'hidden'
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
      </svg>
      <span className="sr-only">Go to top</span>
    </button>
  );
};

export default BackToTopButton;
