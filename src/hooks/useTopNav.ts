import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


interface UseTopNav {
  leftButton: React.JSX.Element;
  rightButton: React.JSX.Element;
  title: React.JSX.Element;
}

const useTopNav = (): UseTopNav => {
  const location = useLocation();

  useEffect(() => {
    const isHomePage = location.pathname === '/';
    const isDetailsPage = location.pathname.startsWith('/details/');

    setShowBackButton(!isHomePage);
    setShowCloseButton(isDetailsPage);

    // Logic to determine the title based on the route
    if (isHomePage) {
      setTitle('Home');
    } else if (isDetailsPage) {
      // Extract the ID from the route
      const id = location.pathname.replace('/details/', '');
      setTitle(`Details for ID ${id}`);
    } else {
      // Add more title logic for other routes if needed
      setTitle('');
    }
  }, [location.pathname]);

  return {
    showBackButton,
    showCloseButton,
    title,
  };
};

export default useTopNav;