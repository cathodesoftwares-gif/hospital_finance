import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import {
  FaUserCheck,
  FaUserPlus,
  FaCog,
  FaPills,
  FaExclamationTriangle,
} from 'react-icons/fa';

const RecentActivity: React.FC = () => {
  const bgColor = 'white';
  const borderColor = 'gray.200';

  const activities = [
    {
      text: 'Felix Müller was discharged from Room 205 after successful treatment',
      time: '08:30 AM',
      icon: FaUserCheck,
      color: 'green',
    },
    {
      text: 'Léa Rousseau admitted to Room 312 for surgery scheduled later today',
      time: '09:00 AM',
      icon: FaUserPlus,
      color: 'blue',
    },
    {
      text: 'MRI machine in Radiology Department received routine maintenance check',
      time: '10:00 AM',
      icon: FaCog,
      color: 'orange',
    },
    {
      text: 'ICU received restock of essential medications',
      time: '11:00 AM',
      icon: FaPills,
      color: 'purple',
    },
    {
      text: 'Code Blue emergency response initiated for a patient in Room 108',
      time: '01:15 PM',
      icon: FaExclamationTriangle,
      color: 'red',
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
          Recent Activity
        </Text>

        {/* Activity List */}
        <VStack spacing={4} w="full">
          {activities.map((activity, index) => (
            <HStack key={index} spacing={3} w="full" align="start">
              <Icon
                as={activity.icon}
                w={4}
                h={4}
                color={`${activity.color}.500`}
                mt={1}
                flexShrink={0}
              />
              <VStack align="start" spacing={1} flex={1}>
                <Text fontSize="sm" color="gray.800" lineHeight="1.4">
                  {activity.text}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {activity.time}
                </Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default RecentActivity;
