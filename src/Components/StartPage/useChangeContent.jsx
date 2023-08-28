import  { useEffect } from 'react'
import { useState } from 'react';

function useChangeContent(length) {

  const [currentContent, setCurrentContent] = useState(0);
  const [activeContent, setActiveContent] = useState(true);


  useEffect(() => {
    const hideTime = setTimeout(() => {
      setActiveContent(false);
    }, 4500);
    const interval = setInterval(() => {
      setActiveContent(true);
      if (currentContent === length-1) {
        setCurrentContent(0);
      } else {
        setCurrentContent((prev) => prev + 1);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(hideTime);
    };
  }, [currentContent]);
  return {currentContent,activeContent}
}

export default useChangeContent