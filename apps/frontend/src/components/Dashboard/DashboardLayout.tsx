import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  Box,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardFooter from './DashboardFooter';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useAuth();
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = 'white';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box minH="100vh" bg={bgColor} display="flex" flexDirection="column">
      <Flex flex="1">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} onToggle={onToggle} />
        
        {/* Main Content */}
        <Box 
          flex="1" 
          ml={{ base: 0, lg: '280px' }}
          transition="margin-left 0.3s ease"
          display="flex"
          flexDirection="column"
        >
          {/* Header */}
          <Header onMenuClick={onToggle} user={user} />
          
          {/* Page Content */}
          <Box flex="1">
            {children}
          </Box>
          
          {/* Footer */}
          <DashboardFooter />
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
