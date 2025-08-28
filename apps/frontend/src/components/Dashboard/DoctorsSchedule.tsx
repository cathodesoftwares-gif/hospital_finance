import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Badge,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

const DoctorsSchedule: React.FC = () => {
  const bgColor = 'white';
  const borderColor = 'gray.200';

  const doctors = [
    {
      name: 'Dr. Petra Wiraburry',
      specialty: 'General Medicine',
      status: 'Available',
      time: '09:00 AM - 12:30 PM',
      color: 'green',
      isAvailable: true,
    },
    {
      name: 'Dr. Ameena Karim',
      specialty: 'Orthopedics',
      status: 'Unavailable',
      time: '',
      color: 'red',
      isAvailable: false,
    },
    {
      name: 'Dr. Olivia Martinez',
      specialty: 'Cardiology',
      status: 'Available',
      time: '10:00 AM - 01:30 PM',
      color: 'blue',
      isAvailable: true,
    },
    {
      name: 'Dr. Damian Sanchez',
      specialty: 'Pediatrics',
      status: 'Available',
      time: '11:00 AM - 12:00 PM',
      color: 'purple',
      isAvailable: true,
    },
    {
      name: 'Dr. Chloe Harrington',
      specialty: 'Dermatology',
      status: 'Unavailable',
      time: '',
      color: 'orange',
      isAvailable: false,
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
          Doctors' Schedule
        </Text>

        {/* Doctors List */}
        <VStack spacing={4} w="full">
          {doctors.map((doctor, index) => (
            <HStack key={index} spacing={4} w="full" p={3} borderRadius="lg" bg="gray.50">
              <Avatar
                size="md"
                name={doctor.name}
                bg={`${doctor.color}.500`}
                color="white"
                icon={<FaUser />}
              />
              <VStack align="start" spacing={1} flex={1}>
                <Text fontSize="sm" fontWeight="bold" color="gray.800">
                  {doctor.name}
                </Text>
                <Text fontSize="xs" color="gray.600">
                  {doctor.specialty}
                </Text>
                {doctor.isAvailable && doctor.time && (
                  <Text fontSize="xs" color="gray.500">
                    {doctor.time}
                  </Text>
                )}
              </VStack>
              <Badge
                colorScheme={doctor.isAvailable ? 'green' : 'red'}
                variant="subtle"
                fontSize="xs"
                px={2}
                py={1}
              >
                {doctor.status}
              </Badge>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default DoctorsSchedule;
