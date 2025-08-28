import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import {
  FaBroom,
  FaWrench,
  FaPills,
  FaSnowflake,
  FaAmbulance,
} from 'react-icons/fa';

const ReportList: React.FC = () => {
  const bgColor = 'white';
  const borderColor = 'gray.200';

  const reports = [
    {
      title: 'Room Cleaning Needed',
      time: '5 minutes ago',
      icon: FaBroom,
      color: 'orange',
    },
    {
      title: 'Equipment Maintenance',
      time: '3 minutes ago',
      icon: FaWrench,
      color: 'blue',
    },
    {
      title: 'Medication Restock',
      time: '5 minutes ago',
      icon: FaPills,
      color: 'green',
    },
    {
      title: 'HVAC System Issue',
      time: '1 hour ago',
      icon: FaSnowflake,
      color: 'red',
    },
    {
      title: 'Patient Transport Required',
      time: 'Yesterday',
      icon: FaAmbulance,
      color: 'purple',
    },
  ];

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
    >
      <VStack align="start" spacing={6}>
        {/* Header */}
        <Text fontSize="lg" fontWeight="bold" color="gray.800">
          Report
        </Text>

        {/* Reports List */}
        <VStack spacing={3} w="full">
          {reports.map((report, index) => (
            <HStack key={index} spacing={4} w="full" p={3} borderRadius="lg" bg="gray.50">
              <Icon
                as={report.icon}
                w={5}
                h={5}
                color={`${report.color}.500`}
              />
              <VStack align="start" spacing={1} flex={1}>
                <Text fontSize="sm" fontWeight="medium" color="gray.800">
                  {report.title}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {report.time}
                </Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default ReportList;
