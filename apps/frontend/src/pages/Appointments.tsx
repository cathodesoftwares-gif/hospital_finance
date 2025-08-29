import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  HStack,
  VStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Card,
  CardBody,
} from '@chakra-ui/react';
import {
  FaSearch,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaChevronDown as FaChevronDownIcon,
} from 'react-icons/fa';
import DashboardLayout from '../components/Dashboard/DashboardLayout';

// Mock data for appointments
const mockAppointments = [
  {
    id: 1,
    name: 'Caren G. Simpson',
    date: '20 July 2028',
    time: '09:00 AM',
    doctor: 'Dr. Petra Winsburry',
    treatment: 'Routine Check-Up',
    status: 'Confirmed',
    checked: false,
  },
  {
    id: 2,
    name: 'Ocean Jane Lupre',
    date: '20 July 2028',
    time: '11:00 AM',
    doctor: 'Dr. Damian Sanchez',
    treatment: 'Pediatric Check-Up',
    status: 'Pending',
    checked: true,
  },
  {
    id: 3,
    name: 'Shane Riddick',
    date: '20 July 2028',
    time: '01:00 PM',
    doctor: 'Dr. Chloe Harrington',
    treatment: 'Skin Allergy',
    status: 'Cancelled',
    checked: true,
  },
  {
    id: 4,
    name: 'Mateus Fernandes',
    date: '20 July 2028',
    time: '11:00 AM',
    doctor: 'Dr. Sarah Johnson',
    treatment: 'Pediatric Check-Up',
    status: 'Pending',
    checked: false,
  },
  {
    id: 5,
    name: 'Pari Desai',
    date: '20 July 2028',
    time: '01:00 PM',
    doctor: 'Dr. Luke Harrison',
    treatment: 'Skin Allergy',
    status: 'Cancelled',
    checked: false,
  },
  {
    id: 6,
    name: 'Thabo van Rooyen',
    date: '20 July 2028',
    time: '04:00 PM',
    doctor: 'Dr. William Carter',
    treatment: 'Pediatric Check-Up',
    status: 'Pending',
    checked: false,
  },
  {
    id: 7,
    name: 'Chance Geidt',
    date: '20 July 2028',
    time: '05:00 PM',
    doctor: 'Dr. Emily Smith',
    treatment: 'Follow-Up Visit',
    status: 'Confirmed',
    checked: false,
  },
  {
    id: 8,
    name: 'Queen Lawnston',
    date: '20-07-28',
    time: '10:30 AM',
    doctor: 'Dr. Michael Brown',
    treatment: 'General Consultation',
    status: 'Confirmed',
    checked: false,
  },
];

const Appointments: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate] = useState('Today');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'teal';
      case 'Pending':
        return 'orange';
      case 'Cancelled':
        return 'gray';
      default:
        return 'gray';
    }
  };

  const filteredAppointments = mockAppointments.filter(appointment =>
    appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.treatment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTabCount = (status: string) => {
    return mockAppointments.filter(app => app.status === status).length;
  };

  const getAllCount = () => mockAppointments.length;

  const handleAddAppointment = () => {
    // TODO: Implement add appointment functionality
    console.log('Add appointment clicked');
  };

  const handleReschedule = (id: number) => {
    // TODO: Implement reschedule functionality
    console.log('Reschedule appointment:', id);
  };

  const handleCancel = (id: number) => {
    // TODO: Implement cancel functionality
    console.log('Cancel appointment:', id);
  };

  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Page Header */}
        <Box mb={6}>
          <Text fontSize="2xl" fontWeight="bold" color="gray.900">
            Appointments
          </Text>
        </Box>

        {/* Combined Status Tabs and Search/Action Bar */}
        <Flex justify="space-between" align="center" mb={6}>
          {/* Left Side - Status Tabs */}
          <HStack spacing={2}>
            <Button
              size="sm"
              variant={selectedTab === 0 ? 'solid' : 'outline'}
              colorScheme="blue"
              onClick={() => setSelectedTab(0)}
              fontWeight="medium"
            >
              All ({getAllCount()})
            </Button>
            <Button
              size="sm"
              variant={selectedTab === 1 ? 'solid' : 'outline'}
              colorScheme="blue"
              onClick={() => setSelectedTab(1)}
              fontWeight="medium"
            >
              Confirmed ({getTabCount('Confirmed')})
            </Button>
            <Button
              size="sm"
              variant={selectedTab === 2 ? 'solid' : 'outline'}
              colorScheme="blue"
              onClick={() => setSelectedTab(2)}
              fontWeight="medium"
            >
              Pending ({getTabCount('Pending')})
            </Button>
            <Button
              size="sm"
              variant={selectedTab === 3 ? 'solid' : 'outline'}
              colorScheme="blue"
              onClick={() => setSelectedTab(3)}
              fontWeight="medium"
            >
              Cancelled ({getTabCount('Cancelled')})
            </Button>
          </HStack>

          {/* Right Side - Search and Action */}
          <HStack spacing={4}>
            <InputGroup w="300px">
              <InputLeftElement>
                <FaSearch color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Search placeholder"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                bg="white"
                borderColor="gray.300"
                borderRadius="lg"
              />
            </InputGroup>
            <Button
              rightIcon={<FaChevronDown />}
              leftIcon={<FaCalendarAlt />}
              variant="outline"
              size="sm"
              borderRadius="lg"
            >
              {selectedDate}
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleAddAppointment}
              size="sm"
              borderRadius="lg"
            >
              Add Appointment
            </Button>
          </HStack>
        </Flex>

        {/* Appointments Table */}
        <Card bg="white">
          <CardBody p={0}>
            <Box overflowX="auto">
              <Table variant="simple">
                <Thead bg="white">
                  <Tr>
                    <Th px={4} py={3}>
                      <Checkbox />
                    </Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Name</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDownIcon size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Date</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDownIcon size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Time</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDownIcon size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Doctor</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDownIcon size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Treatment</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDownIcon size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Status</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDownIcon size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredAppointments.map((appointment) => (
                    <Tr key={appointment.id} _hover={{ bg: 'blue.50' }}>
                      <Td px={4} py={3}>
                        <Checkbox isChecked={appointment.checked} />
                      </Td>
                      <Td px={4} py={3}>
                        <Text fontWeight="medium" color="gray.900">{appointment.name}</Text>
                      </Td>
                      <Td px={4} py={3}>
                        <Text color="gray.800">{appointment.date}</Text>
                      </Td>
                      <Td px={4} py={3}>
                        <Text color="gray.800">{appointment.time}</Text>
                      </Td>
                      <Td px={4} py={3}>
                        <Text color="gray.800">{appointment.doctor}</Text>
                      </Td>
                      <Td px={4} py={3}>
                        <Text color="gray.800">{appointment.treatment}</Text>
                      </Td>
                      <Td px={4} py={3}>
                        <Badge
                          colorScheme={getStatusColor(appointment.status)}
                          variant="subtle"
                          px={2}
                          py={1}
                          borderRadius="full"
                        >
                          {appointment.status}
                        </Badge>
                      </Td>
                      <Td px={4} py={3}>
                        <HStack spacing={2}>
                          <Button
                            size="xs"
                            variant="outline"
                            onClick={() => handleReschedule(appointment.id)}
                          >
                            Reschedule
                          </Button>
                          <Button
                            size="xs"
                            variant="outline"
                            onClick={() => handleCancel(appointment.id)}
                          >
                            Cancel
                          </Button>
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </DashboardLayout>
  );
};

export default Appointments;

