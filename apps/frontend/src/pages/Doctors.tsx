import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  IconButton,
  Avatar,
  Select,
  Flex,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import {
  FaSearch,
  FaFilter,
  FaPlus,
  FaEdit,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
  FaSort,
} from 'react-icons/fa';

interface Doctor {
  id: string;
  name: string;
  department: string;
  specialist: string;
  totalPatients: number;
  todayAppointments: number;
  status: 'Available' | 'Unavailable';
  avatar: string;
}

const Doctors = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSpecialist, setSelectedSpecialist] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const doctors: Doctor[] = [
    {
      id: 'WNH-GM-001',
      name: 'Dr. Petra Winsburry',
      department: 'General Medicine',
      specialist: 'Routine Check-Ups',
      totalPatients: 150,
      todayAppointments: 10,
      status: 'Available',
      avatar: 'PW',
    },
    {
      id: 'WNH-CD-001',
      name: 'Dr. Olivia Martinez',
      department: 'Cardiology',
      specialist: 'Heart Specialist',
      totalPatients: 200,
      todayAppointments: 0,
      status: 'Unavailable',
      avatar: 'OM',
    },
    {
      id: 'WNH-PD-001',
      name: 'Dr. Damian Sanchez',
      department: 'Pediatrics',
      specialist: 'Child Health',
      totalPatients: 180,
      todayAppointments: 12,
      status: 'Available',
      avatar: 'DS',
    },
    {
      id: 'WNH-GM-002',
      name: 'Dr. Emily Smith',
      department: 'General Medicine',
      specialist: 'Routine Check-Ups',
      totalPatients: 160,
      todayAppointments: 0,
      status: 'Unavailable',
      avatar: 'ES',
    },
    {
      id: 'WNH-CD-002',
      name: 'Dr. Samuel Thompson',
      department: 'Cardiology',
      specialist: 'Heart Specialist',
      totalPatients: 210,
      todayAppointments: 14,
      status: 'Available',
      avatar: 'ST',
    },
    {
      id: 'WNH-PD-002',
      name: 'Dr. Sarah Johnson',
      department: 'Pediatrics',
      specialist: 'Child Health',
      totalPatients: 170,
      todayAppointments: 0,
      status: 'Unavailable',
      avatar: 'SJ',
    },
    {
      id: 'WNH-IM-001',
      name: 'Dr. Andrew Peterson',
      department: 'Internal Medicine',
      specialist: 'Internal Health',
      totalPatients: 190,
      todayAppointments: 0,
      status: 'Unavailable',
      avatar: 'AP',
    },
    {
      id: 'WNH-OR-001',
      name: 'Dr. Mark Wilson',
      department: 'Orthopedics',
      specialist: 'Bone Specialist',
      totalPatients: 140,
      todayAppointments: 0,
      status: 'Unavailable',
      avatar: 'MW',
    },
    {
      id: 'WNH-NE-001',
      name: 'Dr. Lisa Chen',
      department: 'Neurology',
      specialist: 'Brain Specialist',
      totalPatients: 120,
      todayAppointments: 8,
      status: 'Available',
      avatar: 'LC',
    },
    {
      id: 'WNH-DE-001',
      name: 'Dr. Michael Brown',
      department: 'Dermatology',
      specialist: 'Skin Specialist',
      totalPatients: 130,
      todayAppointments: 5,
      status: 'Available',
      avatar: 'MB',
    },
    {
      id: 'WNH-IM-002',
      name: 'Dr. Jennifer Davis',
      department: 'Internal Medicine',
      specialist: 'Internal Health',
      totalPatients: 175,
      todayAppointments: 3,
      status: 'Available',
      avatar: 'JD',
    },
    {
      id: 'WNH-OR-002',
      name: 'Dr. Robert Garcia',
      department: 'Orthopedics',
      specialist: 'Bone Specialist',
      totalPatients: 155,
      todayAppointments: 0,
      status: 'Unavailable',
      avatar: 'RG',
    },
  ];

  const departments = ['All', 'General Medicine', 'Cardiology', 'Pediatrics', 'Internal Medicine', 'Orthopedics', 'Neurology', 'Dermatology'];
  const specialists = ['All', 'Routine Check-Ups', 'Heart Specialist', 'Child Health', 'Internal Health', 'Bone Specialist', 'Brain Specialist', 'Skin Specialist'];
  const statuses = ['All', 'Available', 'Unavailable'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === '' || selectedDepartment === 'All' || doctor.department === selectedDepartment;
    const matchesSpecialist = selectedSpecialist === '' || selectedSpecialist === 'All' || doctor.specialist === selectedSpecialist;
    const matchesStatus = selectedStatus === '' || selectedStatus === 'All' || doctor.status === selectedStatus;
    
    return matchesSearch && matchesDepartment && matchesSpecialist && matchesStatus;
  });

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoctors = filteredDoctors.slice(startIndex, endIndex);

  const handleDelete = (doctorId: string) => {
    toast({
      title: 'Doctor Deleted',
      description: `Dr. ${doctors.find(d => d.id === doctorId)?.name} has been removed.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const getStatusColor = (status: string) => {
    return status === 'Available' ? 'green' : 'red';
  };

  return (
    <DashboardLayout>
      <VStack spacing={6} align="stretch" p={6}>
        {/* Page Header */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="gray.800">
            Doctors
          </Text>
        </Box>

        {/* Search and Filter Bar */}
        <Box bg="white" p={6} borderRadius="xl" border="1px solid" borderColor="gray.200" boxShadow="sm">
          <HStack spacing={4} align="center">
            {/* Search Input */}
            <Box position="relative" flex={1}>
              <Icon
                as={FaSearch}
                position="absolute"
                left={3}
                top="50%"
                transform="translateY(-50%)"
                color="gray.400"
                zIndex={1}
              />
              <Input
                placeholder="Search name, ID, age, etc"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                pl={10}
                borderColor="gray.300"
                _focus={{ borderColor: 'blue.500' }}
                bg="white"
                borderRadius="lg"
              />
            </Box>

            {/* Department Filter */}
            <Box position="relative">
              <Icon
                as={FaFilter}
                position="absolute"
                left={3}
                top="50%"
                transform="translateY(-50%)"
                color="gray.400"
                zIndex={1}
              />
              <Select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                placeholder="Department"
                minW="150px"
                borderColor="gray.300"
                _focus={{ borderColor: 'blue.500' }}
                bg="white"
                borderRadius="lg"
                pl={10}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </Select>
            </Box>

            {/* Specialist Filter */}
            <Box position="relative">
              <Icon
                as={FaFilter}
                position="absolute"
                left={3}
                top="50%"
                transform="translateY(-50%)"
                color="gray.400"
                zIndex={1}
              />
              <Select
                value={selectedSpecialist}
                onChange={(e) => setSelectedSpecialist(e.target.value)}
                placeholder="Specialist"
                minW="150px"
                borderColor="gray.300"
                _focus={{ borderColor: 'blue.500' }}
                bg="white"
                borderRadius="lg"
                pl={10}
              >
                {specialists.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </Select>
            </Box>

            {/* Status Filter */}
            <Box position="relative">
              <Icon
                as={FaFilter}
                position="absolute"
                left={3}
                top="50%"
                transform="translateY(-50%)"
                color="gray.400"
                zIndex={1}
              />
              <Select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                placeholder="Status"
                minW="120px"
                borderColor="gray.300"
                _focus={{ borderColor: 'blue.500' }}
                bg="white"
                borderRadius="lg"
                pl={10}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </Select>
            </Box>

            {/* Add Doctor Button */}
            <Button
              leftIcon={<FaPlus />}
              bg="blue.600"
              color="white"
              _hover={{ bg: 'blue.700' }}
              onClick={onOpen}
              borderRadius="lg"
            >
              Add Doctor
            </Button>
          </HStack>
        </Box>

        {/* Doctors Table */}
        <Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200" boxShadow="sm" overflow="hidden">
          <Box overflowX="auto">
            <Table variant="simple">
                              <Thead bg="white">
                <Tr>
                  <Th>
                    <HStack spacing={1}>
                      <Text>Name</Text>
                      <Icon as={FaSort} w={3} h={3} color="gray.400" />
                    </HStack>
                  </Th>
                  <Th>
                    <HStack spacing={1}>
                      <Text>ID</Text>
                      <Icon as={FaSort} w={3} h={3} color="gray.400" />
                    </HStack>
                  </Th>
                  <Th>
                    <HStack spacing={1}>
                      <Text>Department</Text>
                      <Icon as={FaSort} w={3} h={3} color="gray.400" />
                    </HStack>
                  </Th>
                  <Th>
                    <HStack spacing={1}>
                      <Text>Specialist</Text>
                      <Icon as={FaSort} w={3} h={3} color="gray.400" />
                    </HStack>
                  </Th>
                  <Th>
                    <HStack spacing={1}>
                      <Text>Total Patients</Text>
                      <Icon as={FaSort} w={3} h={3} color="gray.400" />
                    </HStack>
                  </Th>
                  <Th>
                    <HStack spacing={1}>
                      <Text>Today's Appointment</Text>
                      <Icon as={FaSort} w={3} h={3} color="gray.400" />
                    </HStack>
                  </Th>
                  <Th>
                    <HStack spacing={1}>
                      <Text>Availability Status</Text>
                      <Icon as={FaSort} w={3} h={3} color="gray.400" />
                    </HStack>
                  </Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentDoctors.map((doctor) => (
                                      <Tr key={doctor.id} _hover={{ bg: 'blue.50' }}>
                    <Td>
                      <HStack spacing={3}>
                        <Avatar size="sm" name={doctor.name} bg="blue.500" color="white">
                          {doctor.avatar}
                        </Avatar>
                        <Text 
                          fontWeight="medium" 
                          color="blue.600"
                          cursor="pointer"
                          _hover={{ textDecoration: 'underline' }}
                          onClick={() => navigate(`/doctors/${doctor.id}`)}
                        >
                          {doctor.name}
                        </Text>
                      </HStack>
                    </Td>
                    <Td>
                      <Text color="gray.600">{doctor.id}</Text>
                    </Td>
                    <Td>
                      <Text color="gray.600">{doctor.department}</Text>
                    </Td>
                    <Td>
                      <Text color="gray.600">{doctor.specialist}</Text>
                    </Td>
                    <Td>
                      <Text color="gray.600">{doctor.totalPatients}</Text>
                    </Td>
                    <Td>
                      <Text color="gray.600">{doctor.todayAppointments}</Text>
                    </Td>
                    <Td>
                      <Badge
                        colorScheme={getStatusColor(doctor.status)}
                        variant="subtle"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        {doctor.status}
                      </Badge>
                    </Td>
                    <Td>
                      <HStack spacing={2}>
                        <IconButton
                          aria-label="Edit doctor"
                          icon={<FaEdit />}
                          size="sm"
                          variant="ghost"
                          color="blue.500"
                          _hover={{ bg: 'blue.50' }}
                        />
                        <IconButton
                          aria-label="Delete doctor"
                          icon={<FaTrash />}
                          size="sm"
                          variant="ghost"
                          color="red.500"
                          _hover={{ bg: 'red.50' }}
                          onClick={() => handleDelete(doctor.id)}
                        />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          {/* Pagination */}
          <Box p={4} borderTop="1px solid" borderColor="gray.200">
            <Flex justify="space-between" align="center">
              <Text color="gray.600" fontSize="sm">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredDoctors.length)} out of {filteredDoctors.length}
              </Text>
              <HStack spacing={2}>
                <IconButton
                  aria-label="Previous page"
                  icon={<FaChevronLeft />}
                  size="sm"
                  variant="outline"
                  isDisabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                />
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <Button
                      key={pageNum}
                      size="sm"
                      variant={currentPage === pageNum ? 'solid' : 'outline'}
                      colorScheme={currentPage === pageNum ? 'blue' : 'gray'}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
                <IconButton
                  aria-label="Next page"
                  icon={<FaChevronRight />}
                  size="sm"
                  variant="outline"
                  isDisabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                />
              </HStack>
            </Flex>
          </Box>
        </Box>
      </VStack>

      {/* Add Doctor Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay bg="blackAlpha.600" />
        <ModalContent bg="white" borderRadius="xl" boxShadow="xl">
          <ModalHeader color="gray.800" fontSize="lg" fontWeight="semibold">
            Add New Doctor
          </ModalHeader>
          <ModalCloseButton color="gray.500" />
          <ModalBody pb={6}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel color="gray.700" fontWeight="medium">Doctor Name</FormLabel>
                <Input 
                  placeholder="Enter doctor name" 
                  bg="white"
                  borderColor="gray.300"
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="gray.700" fontWeight="medium">Department</FormLabel>
                <Select 
                  placeholder="Select department"
                  bg="white"
                  borderColor="gray.300"
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                >
                  {departments.slice(1).map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel color="gray.700" fontWeight="medium">Specialization</FormLabel>
                <Select 
                  placeholder="Select specialization"
                  bg="white"
                  borderColor="gray.300"
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                >
                  {specialists.slice(1).map((spec) => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </Select>
              </FormControl>
              <HStack spacing={4} w="full" pt={2}>
                <Button 
                  bg="blue.500" 
                  color="white" 
                  _hover={{ bg: 'blue.600' }}
                  flex={1}
                  borderRadius="lg"
                >
                  Add Doctor
                </Button>
                <Button 
                  variant="outline" 
                  borderColor="gray.300"
                  color="gray.700"
                  _hover={{ bg: 'blue.50' }}
                  flex={1} 
                  onClick={onClose}
                  borderRadius="lg"
                >
                  Cancel
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </DashboardLayout>
  );
};

export default Doctors;
