import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Icon,
  Flex,
  Button,
  Link,
} from '@chakra-ui/react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaSort,
  FaEllipsisH,
} from 'react-icons/fa';

interface AppointmentTableProps {
  selectedDate: Date;
}

const AppointmentTable: React.FC<AppointmentTableProps> = ({ selectedDate }) => {
  const bgColor = 'white';
  const borderColor = 'gray.200';
  const [currentDateIndex, setCurrentDateIndex] = useState(8); // July 20th

  // Generate dates for navigation
  const generateDates = () => {
    const dates = [];
    const startDate = new Date(2028, 6, 12); // July 12, 2028
    for (let i = 0; i < 14; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates();

  const appointments = [
    {
      name: 'Caren G. Simpson',
      date: '20-07-28',
      time: '09:00 AM',
      doctor: 'Dr. Petra Winsburry',
      treatment: 'Routine Check-Up',
      status: 'Confirmed',
    },
    {
      name: 'Edgar Warrow',
      date: '20-07-28',
      time: '10:30 AM',
      doctor: 'Dr. Olivia Martinez',
      treatment: 'Cardiac Consultation',
      status: 'Confirmed',
    },
    {
      name: 'Ocean Jane Lupre',
      date: '20-07-28',
      time: '11:00 AM',
      doctor: 'Dr. Damian Sanchez',
      treatment: 'Pediatric Check-Up',
      status: 'Pending',
    },
    {
      name: 'Shane Riddick',
      date: '20-07-28',
      time: '01:00 PM',
      doctor: 'Dr. Chloe Harrington',
      treatment: 'Skin Allergy',
      status: 'Cancelled',
    },
    {
      name: 'Queen Lawnston',
      date: '20-07-28',
      time: '02:30 PM',
      doctor: 'Dr. Petra Winsburry',
      treatment: 'Follow-Up Visit',
      status: 'Confirmed',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return { bg: 'blue.100', color: 'blue.700' };
      case 'Pending':
        return { bg: 'red.100', color: 'red.700' };
      case 'Cancelled':
        return { bg: 'gray.100', color: 'gray.700' };
      default:
        return { bg: 'gray.100', color: 'gray.700' };
    }
  };

  const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return `${days[date.getDay()]} ${date.getDate()}`;
  };

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
        <Flex align="center" justify="space-between" w="full">
          <Text fontSize="xl" fontWeight="bold" color="gray.800">
            Patient Appointment
          </Text>
          <Link color="blue.600" fontSize="sm" fontWeight="medium" _hover={{ textDecoration: 'underline' }}>
            View All
          </Link>
        </Flex>

        {/* Date Navigation */}
        <Box w="full">
          <Flex align="center" justify="space-between" mb={4}>
            <IconButton
              aria-label="Previous dates"
              icon={<FaChevronLeft />}
              size="sm"
              variant="ghost"
              onClick={() => setCurrentDateIndex(Math.max(0, currentDateIndex - 1))}
              isDisabled={currentDateIndex === 0}
            />
            
            {/* Date Pills */}
            <Flex gap={2} overflowX="auto" pb={2} flex="1" justify="center">
              {dates.slice(currentDateIndex, currentDateIndex + 14).map((date, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant={index === 8 ? 'solid' : 'ghost'}
                  colorScheme={index === 8 ? 'blue' : 'gray'}
                  minW="60px"
                  fontSize="xs"
                  bg={index === 8 ? 'blue.600' : 'transparent'}
                  color={index === 8 ? 'white' : 'gray.700'}
                  _hover={{
                    bg: index === 8 ? 'blue.700' : 'gray.100'
                  }}
                >
                  {formatDate(date)}
                </Button>
              ))}
            </Flex>

            <IconButton
              aria-label="Next dates"
              icon={<FaChevronRight />}
              size="sm"
              variant="ghost"
              onClick={() => setCurrentDateIndex(Math.min(dates.length - 14, currentDateIndex + 1))}
              isDisabled={currentDateIndex >= dates.length - 14}
            />
          </Flex>
        </Box>

        {/* Table */}
        <Box w="full" overflowX="auto">
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>
                  <HStack spacing={1}>
                    <Text>Name</Text>
                    <Icon as={FaSort} w={3} h={3} color="gray.400" />
                  </HStack>
                </Th>
                <Th>
                  <HStack spacing={1}>
                    <Text>Date</Text>
                    <Icon as={FaSort} w={3} h={3} color="gray.400" />
                  </HStack>
                </Th>
                <Th>
                  <HStack spacing={1}>
                    <Text>Time</Text>
                    <Icon as={FaSort} w={3} h={3} color="gray.400" />
                  </HStack>
                </Th>
                <Th>
                  <HStack spacing={1}>
                    <Text>Doctor</Text>
                    <Icon as={FaSort} w={3} h={3} color="gray.400" />
                  </HStack>
                </Th>
                <Th>
                  <HStack spacing={1}>
                    <Text>Treatment</Text>
                    <Icon as={FaSort} w={3} h={3} color="gray.400" />
                  </HStack>
                </Th>
                <Th>
                  <HStack spacing={1}>
                    <Text>Status</Text>
                    <Icon as={FaSort} w={3} h={3} color="gray.400" />
                  </HStack>
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {appointments.map((appointment, index) => {
                const statusColors = getStatusColor(appointment.status);
                return (
                  <Tr key={index}>
                    <Td>
                      <Text fontSize="sm" fontWeight="medium" color="gray.800">
                        {appointment.name}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm" color="gray.600">
                        {appointment.date}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm" color="gray.600">
                        {appointment.time}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm" color="gray.600">
                        {appointment.doctor}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm" color="gray.600">
                        {appointment.treatment}
                      </Text>
                    </Td>
                    <Td>
                      <Badge
                        bg={statusColors.bg}
                        color={statusColors.color}
                        fontSize="xs"
                        px={2}
                        py={1}
                        borderRadius="full"
                      >
                        {appointment.status}
                      </Badge>
                    </Td>
                    <Td>
                      <IconButton
                        aria-label="More options"
                        icon={<FaEllipsisH />}
                        size="sm"
                        variant="ghost"
                        color="gray.400"
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default AppointmentTable;
