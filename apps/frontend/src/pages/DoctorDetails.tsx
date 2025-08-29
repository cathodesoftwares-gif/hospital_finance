import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  Flex,
  IconButton,
  Divider,
  Progress,
  Select,
} from '@chakra-ui/react';
import {
  FaArrowLeft,
  FaUser,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaEllipsisH,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import DashboardLayout from '../components/Dashboard/DashboardLayout';

interface DoctorDetails {
  id: string;
  name: string;
  avatar: string;
  status: 'Available' | 'Unavailable';
  specialist: string;
  about: string;
  phone: string;
  email: string;
  address: string;
  totalPatients: number;
  totalAppointments: number;
  workExperience: Array<{
    role: string;
    hospital: string;
    type: string;
    period: string;
  }>;
  weeklyStats: {
    total: number;
    newPatients: number;
    followUpPatients: number;
    dailyData: Array<{
      day: string;
      newPatients: number;
      followUpPatients: number;
    }>;
  };
  schedule: Array<{
    id: string;
    patientName: string;
    type: string;
    time: string;
    category: 'appointment' | 'meeting' | 'task';
  }>;
  feedback: Array<{
    id: string;
    patientName: string;
    date: string;
    rating: number;
    comment: string;
  }>;
}

const DoctorDetails = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { doctorId } = useParams<{ doctorId: string }>();
  const navigate = useNavigate();
  // TODO: Use doctorId to fetch doctor data from backend
  // TODO: Implement date navigation functionality

  // Mock data - this will come from backend
  const doctorData: DoctorDetails = {
    id: 'WNH-GM-001',
    name: 'Dr. Petra Winsburry',
    avatar: 'PW',
    status: 'Available',
    specialist: 'Routine Check-Ups',
    about: 'Dr. Petra Winsburry is a seasoned general medicine practitioner with over 15 years of experience. He is dedicated to patient well-being through routine check-ups and preventive care, ensuring comprehensive health management for all patients.',
    phone: '+1 555-234-5678',
    email: 'petra.wins@wellnesthospital.com',
    address: 'WellNest Hospital, 456 Elm Street, Springfield, IL, USA',
    totalPatients: 150,
    totalAppointments: 320,
    workExperience: [
      {
        role: 'General Practitioner',
        hospital: 'WellNest Hospital',
        type: 'Full-Time',
        period: '2010-Present'
      },
      {
        role: 'Resident Doctor',
        hospital: 'Springfield Medical Center',
        type: 'Full-Time',
        period: '2008-2010'
      }
    ],
    weeklyStats: {
      total: 50,
      newPatients: 22,
      followUpPatients: 28,
      dailyData: [
        { day: 'Mon', newPatients: 3, followUpPatients: 4 },
        { day: 'Tue', newPatients: 5, followUpPatients: 3 },
        { day: 'Wed', newPatients: 6, followUpPatients: 5 },
        { day: 'Thu', newPatients: 4, followUpPatients: 6 },
        { day: 'Fri', newPatients: 3, followUpPatients: 5 },
        { day: 'Sat', newPatients: 1, followUpPatients: 5 }
      ]
    },
    schedule: [
      {
        id: '1',
        patientName: 'Rupert Twinny',
        type: 'Routine Check-Up',
        time: '09:00 AM',
        category: 'appointment'
      },
      {
        id: '2',
        patientName: 'Ruth Herdinger',
        type: 'Follow-Up Visit',
        time: '10:00 AM',
        category: 'appointment'
      },
      {
        id: '3',
        patientName: 'Caren G. Simpson',
        type: 'Routine Check-Up',
        time: '11:00 AM',
        category: 'appointment'
      },
      {
        id: '4',
        patientName: 'Staff Meeting',
        type: 'Meeting',
        time: '01:00 PM',
        category: 'meeting'
      },
      {
        id: '5',
        patientName: 'Administrative Work',
        type: 'Task',
        time: '03:00 PM',
        category: 'task'
      }
    ],
    feedback: [
      {
        id: '1',
        patientName: 'Alice Johnson',
        date: '2028-07-01',
        rating: 5,
        comment: 'Dr. Winsburry is very thorough and caring. He took the time to explain my condition and treatment options clearly. Highly recommend!'
      },
      {
        id: '2',
        patientName: 'Robert Brown',
        date: '2028-06-25',
        rating: 5,
        comment: 'Great experience, highly recommend Dr. Winsburry. He is attentive and professional. Made me feel comfortable throughout the visit.'
      },
      {
        id: '3',
        patientName: 'Chance Siphron',
        date: '2028-06-11',
        rating: 4,
        comment: 'Dr. Winsburry is efficient, professional, and skilled. He quickly diagnosed my issue, provided a clear treatment plan, and I\'m happy with the results.'
      },
      {
        id: '4',
        patientName: 'Lincoln Donin',
        date: '2028-05-27',
        rating: 5,
        comment: 'Dr. Winsburry is an exceptional physician who combines deep knowledge with genuine care, addressing all concerns and making patients feel valued.'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    return status === 'Available' ? 'green' : 'red';
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'appointment':
        return 'blue';
      case 'meeting':
        return 'purple';
      case 'task':
        return 'orange';
      default:
        return 'gray';
    }
  };



  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Header */}
        <Flex justify="space-between" align="center" mb={6}>
          <HStack spacing={4}>
            <Button
              leftIcon={<FaArrowLeft />}
              variant="ghost"
              onClick={() => navigate('/doctors')}
              color="gray.600"
            >
              Back to Doctor List
            </Button>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              Doctor Details
            </Text>
          </HStack>
        </Flex>

        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }} gap={6}>
          {/* Left Column - Doctor Details */}
          <VStack spacing={6} align="stretch">
            {/* Doctor Details Card */}
            <Card>
              <CardBody>
                <VStack spacing={6} align="center">
                  <Avatar size="2xl" name={doctorData.name} bg="blue.500" color="white">
                    {doctorData.avatar}
                  </Avatar>
                  <VStack spacing={2} textAlign="center">
                    <Text fontSize="xl" fontWeight="bold" color="gray.800">
                      {doctorData.name}
                    </Text>
                    <Text color="gray.600">{doctorData.id}</Text>
                    <Badge
                      colorScheme={getStatusColor(doctorData.status)}
                      variant="subtle"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {doctorData.status}
                    </Badge>
                  </VStack>
                  
                  <Divider />
                  
                  <VStack spacing={4} align="start" w="full">
                    <Text fontWeight="semibold" color="gray.800">
                      Specialist: {doctorData.specialist}
                    </Text>
                    <Text color="gray.600" lineHeight="tall">
                      {doctorData.about}
                    </Text>
                  </VStack>

                  <Divider />

                  <VStack spacing={3} align="start" w="full">
                    <Text fontWeight="semibold" color="gray.800">Contact Information</Text>
                    <HStack spacing={3} color="gray.600">
                      <Icon as={FaPhone} />
                      <Text>{doctorData.phone}</Text>
                    </HStack>
                    <HStack spacing={3} color="gray.600">
                      <Icon as={FaEnvelope} />
                      <Text>{doctorData.email}</Text>
                    </HStack>
                    <HStack spacing={3} color="gray.600" align="start">
                      <Icon as={FaMapMarkerAlt} mt={1} />
                      <Text>{doctorData.address}</Text>
                    </HStack>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardBody>
                <VStack spacing={4} align="start">
                  <Text fontSize="lg" fontWeight="semibold" color="gray.800">
                    Work Experience
                  </Text>
                  <VStack spacing={3} align="start" w="full">
                    {doctorData.workExperience.map((exp, index) => (
                      <Box key={index} w="full" p={3} bg="gray.50" borderRadius="md">
                        <Text fontWeight="medium" color="gray.800">
                          {exp.role}
                        </Text>
                        <Text color="gray.600" fontSize="sm">
                          {exp.hospital} • {exp.type} • {exp.period}
                        </Text>
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </VStack>

          {/* Middle Column - Stats and Analytics */}
          <VStack spacing={6} align="stretch" h="full">
            {/* Summary Statistics */}
            <Grid templateColumns="1fr 1fr" gap={4}>
              <Card>
                <CardBody>
                  <Stat>
                    <StatLabel color="gray.600">Total Patients</StatLabel>
                    <StatNumber color="gray.800">{doctorData.totalPatients}</StatNumber>
                    <StatHelpText>
                      <Icon as={FaUser} color="blue.500" />
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Stat>
                    <StatLabel color="gray.600">Total Appointments</StatLabel>
                    <StatNumber color="gray.800">{doctorData.totalAppointments}</StatNumber>
                    <StatHelpText>
                      <Icon as={FaCalendarAlt} color="green.500" />
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>
            </Grid>

            {/* Appointment Stats */}
            <Card flex={1} display="flex" flexDirection="column">
              <CardBody display="flex" flexDirection="column" flex={1}>
                <VStack spacing={4} align="start" flex={1}>
                  <Flex justify="space-between" align="center" w="full">
                    <Text fontSize="lg" fontWeight="semibold" color="gray.800">
                      Appointment Stats
                    </Text>
                    <Select size="sm" w="120px" defaultValue="this-week">
                      <option value="this-week">This Week</option>
                      <option value="last-week">Last Week</option>
                      <option value="this-month">This Month</option>
                    </Select>
                  </Flex>
                  
                  <VStack spacing={3} w="full" flex={1}>
                    {doctorData.weeklyStats.dailyData.map((day, index) => (
                      <Box key={index} w="full">
                        <Flex justify="space-between" mb={1}>
                          <Text fontSize="sm" color="gray.600">{day.day}</Text>
                          <Text fontSize="sm" color="gray.600">
                            {day.newPatients + day.followUpPatients}
                          </Text>
                        </Flex>
                        <Progress
                          value={day.newPatients + day.followUpPatients}
                          max={10}
                          size="sm"
                          colorScheme="blue"
                          borderRadius="full"
                        />
                      </Box>
                    ))}
                  </VStack>

                  <Divider />

                  <Grid templateColumns="1fr 1fr 1fr" gap={4} w="full">
                    <Box textAlign="center">
                      <Text fontSize="lg" fontWeight="bold" color="gray.800">
                        {doctorData.weeklyStats.total}
                      </Text>
                      <Text fontSize="sm" color="gray.600">Total Appointments</Text>
                    </Box>
                    <Box textAlign="center">
                      <Text fontSize="lg" fontWeight="bold" color="blue.600">
                        {doctorData.weeklyStats.newPatients}
                      </Text>
                      <Text fontSize="sm" color="gray.600">New Patients</Text>
                    </Box>
                    <Box textAlign="center">
                      <Text fontSize="lg" fontWeight="bold" color="green.600">
                        {doctorData.weeklyStats.followUpPatients}
                      </Text>
                      <Text fontSize="sm" color="gray.600">Follow-Up Patients</Text>
                    </Box>
                  </Grid>
                </VStack>
              </CardBody>
            </Card>
          </VStack>

          {/* Right Column - Schedule */}
          <VStack spacing={6} align="stretch" h="full">
            <Card flex={1} display="flex" flexDirection="column">
              <CardBody display="flex" flexDirection="column" flex={1}>
                <VStack spacing={4} align="start" flex={1}>
                  <Flex justify="space-between" align="center" w="full">
                    <Text fontSize="lg" fontWeight="semibold" color="gray.800">
                      Schedule
                    </Text>
                    <IconButton
                      aria-label="More options"
                      icon={<FaEllipsisH />}
                      size="sm"
                      variant="ghost"
                    />
                  </Flex>

                  {/* Date Navigation */}
                  <HStack spacing={2} w="full" justify="center">
                    <IconButton
                      aria-label="Previous dates"
                      icon={<FaChevronLeft />}
                      size="sm"
                      variant="ghost"
                    />
                    {['Mon 17', 'Tue 18', 'Wed 19', 'Thu 20', 'Fri 21', 'Sat 22'].map((date, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant={index === 3 ? 'solid' : 'ghost'}
                        colorScheme={index === 3 ? 'blue' : 'gray'}
                        borderRadius="md"
                        px={3}
                        py={1}
                      >
                        {date}
                      </Button>
                    ))}
                    <IconButton
                      aria-label="Next dates"
                      icon={<FaChevronRight />}
                      size="sm"
                      variant="ghost"
                    />
                  </HStack>

                  <Text fontSize="sm" color="gray.600">5 schedules today</Text>

                  <VStack spacing={3} w="full" flex={1}>
                    {doctorData.schedule.map((item, index) => (
                      <Box key={index} w="full">
                        <HStack spacing={3} align="start">
                          <Box
                            w={2}
                            h="full"
                            bg={getCategoryColor(item.category)}
                            borderRadius="full"
                            minH="40px"
                          />
                          <VStack spacing={1} align="start" flex={1}>
                            <Text fontWeight="medium" color="gray.800">
                              {item.patientName}
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                              {item.type}
                            </Text>
                            <HStack spacing={1}>
                              <Box w={1} h={1} bg="gray.400" borderRadius="full" />
                              <Text fontSize="sm" color="gray.500">
                                {item.time}
                              </Text>
                            </HStack>
                          </VStack>
                        </HStack>
                        {index < doctorData.schedule.length - 1 && <Divider mt={3} />}
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default DoctorDetails;
