import React from 'react';
import { Box, Text, VStack, Icon } from '@chakra-ui/react';
import { FaCreditCard } from 'react-icons/fa';
import DashboardLayout from '../components/Dashboard/DashboardLayout';

const Payments: React.FC = () => {
  return (
    <DashboardLayout>
      <Box p={6}>
        <VStack spacing={6} align="center" justify="center" minH="60vh">
          <Icon as={FaCreditCard} w={20} h={20} color="blue.500" />
          <Text fontSize="4xl" fontWeight="bold" color="gray.800">
            Payments
          </Text>
          <Text fontSize="xl" color="gray.600" textAlign="center">
            Coming Soon
          </Text>
          <Text fontSize="md" color="gray.500" textAlign="center" maxW="md">
            We're working hard to bring you a comprehensive payments management system. 
            Stay tuned for updates!
          </Text>
        </VStack>
      </Box>
    </DashboardLayout>
  );
};

export default Payments;
