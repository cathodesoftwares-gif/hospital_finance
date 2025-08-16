import { Route, Routes, useLocation } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '../utils/trpc';
import SignUpCard from '../components/Auth/SignUpCard/SignUpCard';
import SignInCard from '../components/Auth/SignInCard/SignInCard';
import { useQueryTrpcClient } from './useQueryClient';
import AuthVerify from '../components/Auth/AuthVerify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../pages/Home';
import Partners from '../pages/Partners';
import NavigationBar from '../components/Navigation/NavigationBar';
import { Box } from '@chakra-ui/react';

export function App() {
  const { queryClient, trpcClient } = useQueryTrpcClient();
  const location = useLocation();

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
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar
        closeOnClick
      />
      <QueryClientProvider client={queryClient}>
        <AuthVerify />
        <Box minH="100vh">
          <NavigationBar scrollToContact={location.pathname === '/' ? scrollToContact : undefined} />
          <Box as="main" pt={0}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/sign-up" element={<SignUpCard />} />
              <Route path="/login" element={<SignInCard />} />
              <Route path="*" element={<Box>Not Found</Box>} />
            </Routes>
          </Box>
        </Box>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
