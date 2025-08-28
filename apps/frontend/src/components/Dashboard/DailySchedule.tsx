import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import {
  FaPlus,
  FaUsers,
  FaStethoscope,
  FaGraduationCap,
} from 'react-icons/fa';

interface DailyScheduleProps {
  selectedDate: Date;
}

const DailySchedule: React.FC<DailyScheduleProps> = ({ selectedDate }) => {
  const bgColor = 'white';
  const borderColor = 'gray.200';

  const formatDate = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
  };

  const scheduleEvents = [
    {
      time: '06:00 AM',
      title: 'Morning Staff Meeting',
      duration: '06:00 AM - 08:00 AM',
      icon: FaUsers,
      color: 'blue',
    },
    {
      time: '10:00 AM',
      title: 'Patient Consultation - General Medicine',
      duration: '10:00 AM - 12:00 PM',
      icon: FaStethoscope,
      color: 'green',
    },
    {
      time: '01:00 PM',
      title: 'Surgery - Orthopedics',
      duration: '01:00 PM - 03:00 PM',
      icon: FaStethoscope,
      color: 'red',
    },
    {
      time: '04:00 PM',
      title: 'Training Session',
      duration: '04:00 PM - 05:00 PM',
      icon: FaGraduationCap,
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
        <HStack justify="space-between" w="full">
          <Text fontSize="lg" fontWeight="bold" color="gray.800">
            {formatDate(selectedDate)}
          </Text>
          <IconButton
            aria-label="Add event"
            icon={<FaPlus />}
            size="sm"
            variant="outline"
            colorScheme="blue"
          />
        </HStack>

        {/* Schedule Events */}
        <VStack spacing={4} w="full">
          {scheduleEvents.map((event, index) => (
            <HStack key={index} spacing={4} w="full" p={3} borderRadius="lg" bg="gray.50">
              <VStack spacing={0} align="start" minW="80px">
                <Text fontSize="sm" fontWeight="bold" color="gray.800">
                  {event.time}
                </Text>
              </VStack>
              <VStack align="start" spacing={1} flex={1}>
                <HStack spacing={2}>
                  <Icon
                    as={event.icon}
                    w={4}
                    h={4}
                    color={`${event.color}.500`}
                  />
                  <Text fontSize="sm" fontWeight="medium" color="gray.800">
                    {event.title}
                  </Text>
                </HStack>
                <Text fontSize="xs" color="gray.500">
                  {event.duration}
                </Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default DailySchedule;
