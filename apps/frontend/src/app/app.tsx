import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Home from '../pages/Home';
import Partners from '../pages/Partners';
import NavigationBar from '../components/Navigation/NavigationBar';

export function App() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Box minH="100vh">
      <NavigationBar scrollToContact={location.pathname === '/' ? scrollToContact : undefined} />
      <Box as="main" pt={0}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="*" element={<Box p={8}>Not Found</Box>} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
