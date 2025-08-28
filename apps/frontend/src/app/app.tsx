import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { AuthProvider } from '../context/AuthContext';
import Home from '../pages/Home';
import Partners from '../pages/Partners';
import Finance from '../pages/Finance';
import Analytics from '../pages/Analytics';
import About from '../pages/About';
import Company from '../pages/Company';
import Support from '../pages/Support';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import LoanApplication from '../pages/LoanApplication';
import DashboardLogin from '../pages/DashboardLogin';
import Dashboard from '../pages/Dashboard';
import NavigationBar from '../components/Navigation/NavigationBar';
import ProtectedRoute from '../components/ProtectedRoute';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleContactUs = () => {
    if (location.pathname === '/') {
      // If on home page, just scroll to contact section
      scrollToContact();
    } else {
      // If on other pages, navigate to home page and then scroll to contact section
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        scrollToContact();
      }, 100);
    }
  };

  return (
    <AuthProvider>
      <Box minH="100vh">
        <Routes>
          <Route path="/" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <Home />
              </Box>
            </>
          } />
          <Route path="/partners" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <Partners />
              </Box>
            </>
          } />
          <Route path="/about" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <About />
              </Box>
            </>
          } />
          <Route path="/finance" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <Finance />
              </Box>
            </>
          } />
          <Route path="/analytics" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <Analytics />
              </Box>
            </>
          } />
          <Route path="/company" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <Company />
              </Box>
            </>
          } />
          <Route path="/support" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <Support />
              </Box>
            </>
          } />
          <Route path="/privacy" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <Privacy />
              </Box>
            </>
          } />
          <Route path="/terms" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <Terms />
              </Box>
            </>
          } />
          <Route path="/loan-application" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <LoanApplication />
              </Box>
            </>
          } />
          <Route path="/dashboard-login" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <DashboardLogin />
              </Box>
            </>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          {/* Development route - remove in production */}
          <Route path="/dashboard-dev" element={<Dashboard />} />
          <Route path="*" element={
            <>
              <NavigationBar scrollToContact={handleContactUs} />
              <Box as="main" pt={0}>
                <Box p={8}>Not Found</Box>
              </Box>
            </>
          } />
        </Routes>
      </Box>
    </AuthProvider>
  );
}

export default App;
