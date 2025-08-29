import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Card,
  CardBody,
  Avatar,
  AvatarGroup,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  FaStethoscope,
  FaHeart,
  FaBaby,
  FaUserMd,
  FaBrain,
  FaBone,
  FaRibbon,
  FaFemale,
} from 'react-icons/fa';
import DashboardLayout from '../components/Dashboard/DashboardLayout';

// Mock data for departments
const mockDepartments = [
  {
    id: 1,
    name: 'General Medicine',
    description: 'Comprehensive healthcare services including routine check-ups, preventive care, and treatment of common illnesses.',
    image: FaStethoscope,
    teamMembers: 21, // 6 shown + 15 others
    color: 'blue',
  },
  {
    id: 2,
    name: 'Cardiology',
    description: 'Diagnosis and treatment of heart-related conditions, providing expert cardiac care and preventive cardiology services.',
    image: FaHeart,
    teamMembers: 16, // 6 shown + 10 others
    color: 'red',
  },
  {
    id: 3,
    name: 'Pediatrics',
    description: 'Health and well-being of children, providing specialized care for infants, children, and adolescents.',
    image: FaBaby,
    teamMembers: 13, // 6 shown + 7 others
    color: 'green',
  },
  {
    id: 4,
    name: 'Dermatology',
    description: 'Treatment of skin conditions, offering medical and cosmetic dermatology services for all skin types.',
    image: FaUserMd,
    teamMembers: 11, // 6 shown + 5 others
    color: 'orange',
  },
  {
    id: 5,
    name: 'Internal Medicine',
    description: 'Primary care for adults, focusing on the prevention, diagnosis, and treatment of adult diseases.',
    image: FaStethoscope,
    teamMembers: 19, // 6 shown + 13 others
    color: 'purple',
  },
  {
    id: 6,
    name: 'Orthopedics',
    description: 'Treatment of musculoskeletal system disorders, including bones, joints, ligaments, tendons, and muscles.',
    image: FaBone,
    teamMembers: 15, // 6 shown + 9 others
    color: 'teal',
  },
  {
    id: 7,
    name: 'Neurology',
    description: 'Disorders of the nervous system, offering expert care for conditions affecting the brain, spinal cord, and nerves.',
    image: FaBrain,
    teamMembers: 12, // 6 shown + 6 others
    color: 'cyan',
  },
  {
    id: 8,
    name: 'Oncology',
    description: 'Diagnosis and treatment of cancer, providing comprehensive cancer care and support services.',
    image: FaRibbon,
    teamMembers: 14, // 6 shown + 8 others
    color: 'pink',
  },
  {
    id: 9,
    name: 'Obstetrics and Gynecology',
    description: 'Care for women\'s health, including pregnancy, childbirth, and reproductive health services.',
    image: FaFemale,
    teamMembers: 17, // 6 shown + 11 others
    color: 'purple',
  },
];

// Mock team members for avatar groups
const mockTeamMembers = [
  { name: 'Dr. Sarah Johnson', src: 'SJ' },
  { name: 'Dr. Michael Brown', src: 'MB' },
  { name: 'Dr. Emily Davis', src: 'ED' },
  { name: 'Dr. James Wilson', src: 'JW' },
  { name: 'Dr. Lisa Anderson', src: 'LA' },
  { name: 'Dr. Robert Taylor', src: 'RT' },
];

const Departments: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSeeDetail = (departmentId: number) => {
    navigate(`/departments/${departmentId}`);
  };

  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Page Header */}
        <Box mb={8}>
          <Text fontSize="3xl" fontWeight="bold" color="gray.900">
            Departments
          </Text>
        </Box>

        {/* Departments Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {mockDepartments.map((department) => {
            const IconComponent = department.image;
            const othersCount = department.teamMembers - 6;
            
            return (
              <Card key={department.id} bg="white" borderRadius="lg" border="1px solid" borderColor="gray.200" overflow="hidden">
                <CardBody p={0}>
                  {/* Department Image */}
                  <Box
                    h="200px"
                    bg={`${department.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                  >
                    <IconComponent size={80} color={`var(--chakra-colors-${department.color}-500)`} />
                  </Box>

                  {/* Department Info */}
                  <Box p={6}>
                    <VStack align="start" spacing={4}>
                      {/* Department Name */}
                      <Text fontSize="xl" fontWeight="bold" color="gray.900">
                        {department.name}
                      </Text>

                      {/* Description */}
                      <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                        {department.description}
                      </Text>

                      {/* Team Members and See Detail Button */}
                      <VStack align="start" spacing={2} w="full">
                        <Text fontSize="sm" fontWeight="medium" color="gray.800">
                          Team Members
                        </Text>
                        <HStack spacing={3} justify="space-between" w="full">
                          <HStack spacing={3}>
                            <AvatarGroup size="sm" max={6}>
                              {mockTeamMembers.map((member, index) => (
                                <Avatar
                                  key={index}
                                  name={member.name}
                                  src={member.src}
                                  bg="blue.500"
                                  color="white"
                                />
                              ))}
                            </AvatarGroup>
                            {othersCount > 0 && (
                              <Text fontSize="sm" color="gray.500">
                                +{othersCount} others
                              </Text>
                            )}
                          </HStack>
                          <Button
                            colorScheme="blue"
                            onClick={() => handleSeeDetail(department.id)}
                            size="sm"
                          >
                            See Detail
                          </Button>
                        </HStack>
                      </VStack>
                    </VStack>
                  </Box>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      </Box>
    </DashboardLayout>
  );
};

export default Departments;
