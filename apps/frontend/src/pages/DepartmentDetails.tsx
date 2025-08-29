import React from 'react';
import {
  Box,
  Text,
  Flex,
  HStack,
  VStack,
  Card,
  CardBody,
  Avatar,
  AvatarGroup,
  SimpleGrid,
  IconButton,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import {
  FaArrowLeft,
  FaCog,
  FaBell,
  FaChevronDown,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../components/Dashboard/DashboardLayout';

// Mock data for department details
const mockDepartment = {
  id: 1,
  name: 'General Medicine',
  image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
  description: 'The General Medicine Department at WellNest Hospital provides comprehensive healthcare services focused on prevention, diagnosis, and treatment of various medical conditions. Our team takes a holistic approach to patient care, ensuring personalized treatment plans that address both immediate health concerns and long-term wellness goals. We are committed to delivering high-quality, patient-centered care that promotes overall well-being.',
  teamMembers: 12, // 5 shown + 7 others
  treatments: [
    {
      id: 1,
      name: 'Routine Check-Ups',
      description: 'Regular health assessments, physical examinations, health screenings, and preventive care.',
    },
    {
      id: 2,
      name: 'Chronic Disease Management',
      description: 'Comprehensive care plans for conditions like diabetes, hypertension, and asthma.',
    },
    {
      id: 3,
      name: 'Acute Illness Treatment',
      description: 'Prompt treatment for infections, flu, and minor injuries.',
    },
    {
      id: 4,
      name: 'Preventive Care',
      description: 'Services for preventing diseases, including vaccinations, health education, and lifestyle counseling.',
    },
    {
      id: 5,
      name: 'Geriatric Care',
      description: 'Specialized care for older adults, addressing unique health challenges.',
    },
  ],
  doctors: [
    {
      id: 1,
      name: 'Dr. Petra Winsburry',
      specialty: 'Routine Check-Ups',
      avatar: 'PW',
    },
    {
      id: 2,
      name: 'Dr. Emily Smith',
      specialty: 'Chronic Disease Management',
      avatar: 'ES',
    },
    {
      id: 3,
      name: 'Dr. John Davis',
      specialty: 'Acute Illness Treatment',
      avatar: 'JD',
    },
    {
      id: 4,
      name: 'Dr. Linda Green',
      specialty: 'Preventive Care',
      avatar: 'LG',
    },
    {
      id: 5,
      name: 'Dr. Michael Brown',
      specialty: 'Geriatric Care',
      avatar: 'MB',
    },
  ],
};

const DepartmentDetails: React.FC = () => {
  const navigate = useNavigate();
  const { departmentId } = useParams();
  // TODO: Use departmentId to fetch specific department data from backend
  console.log('Department ID:', departmentId); // Temporary to avoid unused variable warning

  const handleBackToDepartments = () => {
    navigate('/departments');
  };

  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Page Header */}
        <Flex justify="space-between" align="center" mb={8}>
          <HStack spacing={4}>
            <Link
              onClick={handleBackToDepartments}
              color="blue.500"
              _hover={{ textDecoration: 'underline' }}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FaArrowLeft size={14} />
              Back to Department List
            </Link>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Department Details
            </Text>
          </HStack>
          <HStack spacing={4}>
            <IconButton
              aria-label="Settings"
              icon={<FaCog />}
              variant="ghost"
              size="sm"
            />
            <IconButton
              aria-label="Notifications"
              icon={<FaBell />}
              variant="ghost"
              size="sm"
            />
            <HStack spacing={2}>
              <Avatar size="sm" name="Alfredo Westervelt" bg="blue.500" color="white">
                AW
              </Avatar>
              <Text fontWeight="medium">Alfredo Westervelt</Text>
              <FaChevronDown size={12} />
            </HStack>
          </HStack>
        </Flex>

        {/* Department Overview */}
        <Card mb={8} borderRadius="lg" border="1px solid" borderColor="gray.200" overflow="hidden">
          <CardBody p={0}>
            {/* Department Image */}
            <Box
              h="300px"
              bg="gray.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Box
                w="full"
                h="full"
                bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <span role="img" aria-label="hospital">
                  <Text fontSize="6xl" color="white" opacity={0.3}>
                    🏥
                  </Text>
                </span>
              </Box>
            </Box>

            {/* Department Info */}
            <Box p={6}>
              <Flex justify="space-between" align="start">
                <VStack align="start" spacing={2}>
                  <HStack spacing={2}>
                    <Text fontSize="3xl" fontWeight="bold" color="gray.800">
                      {mockDepartment.name}
                    </Text>
                    <FaChevronDown size={16} color="gray.500" />
                  </HStack>
                </VStack>
                <VStack align="end" spacing={2}>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    Team
                  </Text>
                  <HStack spacing={2}>
                    <AvatarGroup size="sm" max={5}>
                      {mockDepartment.doctors.slice(0, 5).map((doctor) => (
                        <Avatar
                          key={doctor.id}
                          name={doctor.name}
                          bg="blue.500"
                          color="white"
                        >
                          {doctor.avatar}
                        </Avatar>
                      ))}
                    </AvatarGroup>
                    <Text fontSize="sm" color="gray.500">
                      +7 others
                    </Text>
                  </HStack>
                </VStack>
              </Flex>
            </Box>
          </CardBody>
        </Card>

        {/* About Section */}
        <Card mb={8} borderRadius="lg" border="1px solid" borderColor="gray.200">
          <CardBody p={6}>
            <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={4}>
              About
            </Text>
            <Text fontSize="md" color="gray.600" lineHeight="1.7">
              {mockDepartment.description}
            </Text>
          </CardBody>
        </Card>

        {/* Our Treatments Section */}
        <Card mb={8} borderRadius="lg" border="1px solid" borderColor="gray.200">
          <CardBody p={6}>
            <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={6}>
              Our Treatments
            </Text>
            <List spacing={4}>
              {mockDepartment.treatments.map((treatment) => (
                <ListItem key={treatment.id}>
                  <HStack align="start" spacing={3}>
                    <Box
                      w={2}
                      h={2}
                      bg="blue.500"
                      borderRadius="full"
                      mt={2}
                      flexShrink={0}
                    />
                    <VStack align="start" spacing={1}>
                      <Text fontSize="md" fontWeight="semibold" color="gray.800">
                        {treatment.name}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        {treatment.description}
                      </Text>
                    </VStack>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </CardBody>
        </Card>

        {/* Our Team Section */}
        <Card borderRadius="lg" border="1px solid" borderColor="gray.200">
          <CardBody p={6}>
            <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={6}>
              Our Team
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {mockDepartment.doctors.map((doctor) => (
                <Card key={doctor.id} borderRadius="lg" border="1px solid" borderColor="gray.200">
                  <CardBody p={4}>
                    <VStack spacing={3}>
                      <Avatar size="lg" name={doctor.name} bg="blue.500" color="white">
                        {doctor.avatar}
                      </Avatar>
                      <VStack spacing={1}>
                        <Text fontSize="md" fontWeight="semibold" color="gray.800" textAlign="center">
                          {doctor.name}
                        </Text>
                        <Text fontSize="sm" color="gray.600" textAlign="center">
                          {doctor.specialty}
                        </Text>
                      </VStack>
                      <HStack spacing={2}>
                        <IconButton
                          aria-label="Twitter"
                          icon={<FaTwitter />}
                          variant="ghost"
                          size="sm"
                          color="gray.500"
                        />
                        <IconButton
                          aria-label="Twitter"
                          icon={<FaTwitter />}
                          variant="ghost"
                          size="sm"
                          color="gray.500"
                        />
                        <IconButton
                          aria-label="LinkedIn"
                          icon={<FaLinkedin />}
                          variant="ghost"
                          size="sm"
                          color="gray.500"
                        />
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Box>
    </DashboardLayout>
  );
};

export default DepartmentDetails;
