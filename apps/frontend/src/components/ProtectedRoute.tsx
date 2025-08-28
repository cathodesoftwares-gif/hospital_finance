import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Box, Spinner, Center, Text, VStack } from '@chakra-ui/react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // For development, you can bypass authentication by setting this to true
  const bypassAuth = process.env.NODE_ENV === 'development' && false; // Set to true to bypass auth

  useEffect(() => {
    if (!isAuthenticated && !bypassAuth) {
      navigate('/dashboard-login');
    }
  }, [isAuthenticated, navigate, bypassAuth]);

  if (!isAuthenticated && !bypassAuth) {
    return (
      <Box minH="100vh" bg="neutral.50" display="flex" alignItems="center" justifyContent="center">
        <Center>
          <VStack spacing={4}>
            <Spinner size="xl" color="brand.500" />
            <Text color="neutral.600">Redirecting to login...</Text>
          </VStack>
        </Center>
      </Box>
    );
  }

  return <Box>{children}</Box>;
};

export default ProtectedRoute;
