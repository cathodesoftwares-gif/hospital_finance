import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  IconButton,
  Input,
  Select,
  Flex,
  Grid,
  Card,
  CardBody,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
} from 'react-icons/fa';
import DashboardLayout from '../components/Dashboard/DashboardLayout';

// Backend-ready interfaces
interface Doctor {
  id: string;
  name: string;
  department: string;
  specialist: string;
  avatar: string;
}

interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  date: string;
  time: string;
  type: 'routine' | 'follow-up' | 'emergency' | 'consultation';
  description: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  appointments: Appointment[];
}

const DoctorsSchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('month');
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const toast = useToast(); // Will be used when backend is connected

  // Backend-ready mock data - will be replaced with tRPC queries
  const doctors: Doctor[] = [
    { id: '1', name: 'Dr. Petra Winsburry', department: 'General Medicine', specialist: 'Routine Check-Ups', avatar: 'PW' },
    { id: '2', name: 'Dr. Emily Smith', department: 'Cardiology', specialist: 'Heart Specialist', avatar: 'ES' },
    { id: '3', name: 'Dr. John Davis', department: 'Pediatrics', specialist: 'Child Health', avatar: 'JD' },
    { id: '4', name: 'Dr. Linda Green', department: 'Dermatology', specialist: 'Skin Care', avatar: 'LG' },
    { id: '5', name: 'Dr. Michael Brown', department: 'Geriatrics', specialist: 'Elderly Care', avatar: 'MB' },
  ];

  const appointments: Appointment[] = [
    {
      id: '1',
      doctorId: '1',
      doctorName: 'Dr. Petra Winsburry',
      patientName: 'John Smith',
      date: '2028-07-01',
      time: '09:00 AM',
      type: 'routine',
      description: 'Routine Check-Up with John Smith',
      status: 'scheduled'
    },
    {
      id: '2',
      doctorId: '2',
      doctorName: 'Dr. Emily Smith',
      patientName: 'John Smith',
      date: '2028-07-01',
      time: '10:00 AM',
      type: 'routine',
      description: 'Routine Check-Up with John Smith',
      status: 'scheduled'
    },
    {
      id: '3',
      doctorId: '3',
      doctorName: 'Dr. John Davis',
      patientName: 'Sarah Johnson',
      date: '2028-07-03',
      time: '11:00 AM',
      type: 'consultation',
      description: 'Consultation with Sarah Johnson',
      status: 'scheduled'
    },
    {
      id: '4',
      doctorId: '4',
      doctorName: 'Dr. Linda Green',
      patientName: 'Patricia Clark',
      date: '2028-07-03',
      time: '01:00 PM',
      type: 'follow-up',
      description: 'Follow-up with Patricia Clark',
      status: 'scheduled'
    },
    {
      id: '5',
      doctorId: '5',
      doctorName: 'Dr. Michael Brown',
      patientName: 'Robert Wilson',
      date: '2028-07-04',
      time: '02:00 PM',
      type: 'consultation',
      description: 'Consultation with Robert Wilson',
      status: 'scheduled'
    },
    {
      id: '6',
      doctorId: '1',
      doctorName: 'Dr. Petra Winsburry',
      patientName: 'Emily Thompson',
      date: '2028-07-04',
      time: '03:00 PM',
      type: 'routine',
      description: 'Routine Check-Up with Emily Thompson',
      status: 'scheduled'
    },
    {
      id: '7',
      doctorId: '2',
      doctorName: 'Dr. Emily Smith',
      patientName: 'Patricia Clark',
      date: '2028-07-05',
      time: '04:00 PM',
      type: 'follow-up',
      description: 'Chronic Disease Management for Hypertension with Patricia Clark',
      status: 'scheduled'
    },
    {
      id: '8',
      doctorId: '1',
      doctorName: 'Dr. Petra Winsburry',
      patientName: 'Robert Brown',
      date: '2028-07-06',
      time: '10:00 AM',
      type: 'emergency',
      description: 'Acute Illness Treatment for Flu Symptoms with Robert Brown',
      status: 'scheduled'
    },
    {
      id: '9',
      doctorId: '3',
      doctorName: 'Dr. John Davis',
      patientName: 'Daniel Lewis',
      date: '2028-07-07',
      time: '09:00 AM',
      type: 'consultation',
      description: 'Consultation with Daniel Lewis',
      status: 'scheduled'
    },
    {
      id: '10',
      doctorId: '4',
      doctorName: 'Dr. Linda Green',
      patientName: 'Nancy Martinez',
      date: '2028-07-07',
      time: '10:00 AM',
      type: 'consultation',
      description: 'Preventive Care Consultation with Nancy Martinez',
      status: 'scheduled'
    },
    {
      id: '11',
      doctorId: '5',
      doctorName: 'Dr. Michael Brown',
      patientName: 'Barbara Lewis',
      date: '2028-07-09',
      time: '11:00 AM',
      type: 'consultation',
      description: 'Consultation with Barbara Lewis',
      status: 'scheduled'
    },
    {
      id: '12',
      doctorId: '1',
      doctorName: 'Dr. Petra Winsburry',
      patientName: 'David Thompson',
      date: '2028-07-09',
      time: '01:00 PM',
      type: 'routine',
      description: 'Routine Check-Up with David Thompson',
      status: 'scheduled'
    },
    {
      id: '13',
      doctorId: '2',
      doctorName: 'Dr. Emily Smith',
      patientName: 'Rachel Green',
      date: '2028-07-11',
      time: '02:00 PM',
      type: 'follow-up',
      description: 'Chronic Disease Management for Asthma with Rachel Green',
      status: 'scheduled'
    },
    {
      id: '14',
      doctorId: '3',
      doctorName: 'Dr. John Davis',
      patientName: 'Daniel Lewis',
      date: '2028-07-12',
      time: '03:00 PM',
      type: 'emergency',
      description: 'Acute Illness Treatment for Skin Rash with Daniel Lewis',
      status: 'scheduled'
    },
    {
      id: '15',
      doctorId: '4',
      doctorName: 'Dr. Linda Green',
      patientName: 'Susan Clark',
      date: '2028-07-14',
      time: '04:00 PM',
      type: 'consultation',
      description: 'Preventive Care Consultation with Susan Clark',
      status: 'scheduled'
    },
    {
      id: '16',
      doctorId: '1',
      doctorName: 'Dr. Petra Winsburry',
      patientName: 'John Smith',
      date: '2028-07-15',
      time: '09:00 AM',
      type: 'routine',
      description: 'Routine Check-Up with John Smith',
      status: 'scheduled'
    },
    {
      id: '17',
      doctorId: '2',
      doctorName: 'Dr. Emily Smith',
      patientName: 'Sarah Johnson',
      date: '2028-07-16',
      time: '10:00 AM',
      type: 'follow-up',
      description: 'Chronic Disease Management for Diabetes Check-Up with Sarah Johnson',
      status: 'scheduled'
    },
    {
      id: '18',
      doctorId: '3',
      doctorName: 'Dr. John Davis',
      patientName: 'James Brown',
      date: '2028-07-18',
      time: '11:00 AM',
      type: 'emergency',
      description: 'Acute Illness Treatment for Flu Symptoms with James Brown',
      status: 'scheduled'
    },
    {
      id: '19',
      doctorId: '4',
      doctorName: 'Dr. Linda Green',
      patientName: 'Susan Clark',
      date: '2028-07-19',
      time: '01:00 PM',
      type: 'consultation',
      description: 'Preventive Care Consultation with Susan Clark',
      status: 'scheduled'
    },
    {
      id: '20',
      doctorId: '5',
      doctorName: 'Dr. Michael Brown',
      patientName: 'Robert Wilson',
      date: '2028-07-22',
      time: '02:00 PM',
      type: 'consultation',
      description: 'Geriatric Care for Arthritis Management with Robert Wilson',
      status: 'scheduled'
    },
    {
      id: '21',
      doctorId: '1',
      doctorName: 'Dr. Petra Winsburry',
      patientName: 'Emily Thompson',
      date: '2028-07-23',
      time: '03:00 PM',
      type: 'routine',
      description: 'Routine Check-Up with Emily Thompson',
      status: 'scheduled'
    },
    {
      id: '22',
      doctorId: '2',
      doctorName: 'Dr. Emily Smith',
      patientName: 'Jessica Green',
      date: '2028-07-25',
      time: '04:00 PM',
      type: 'follow-up',
      description: 'Chronic Disease Management for Hypertension with Jessica Green',
      status: 'scheduled'
    },
    {
      id: '23',
      doctorId: '3',
      doctorName: 'Dr. John Davis',
      patientName: 'Michael White',
      date: '2028-07-26',
      time: '09:00 AM',
      type: 'emergency',
      description: 'Acute Illness Treatment for Respiratory Infection with Michael White',
      status: 'scheduled'
    },
    {
      id: '24',
      doctorId: '4',
      doctorName: 'Dr. Linda Green',
      patientName: 'Jennifer Harris',
      date: '2028-07-28',
      time: '10:00 AM',
      type: 'consultation',
      description: 'Preventive Care Consultation with Jennifer Harris',
      status: 'scheduled'
    },
    {
      id: '25',
      doctorId: '5',
      doctorName: 'Dr. Michael Brown',
      patientName: 'Barbara Lewis',
      date: '2028-07-29',
      time: '11:00 AM',
      type: 'consultation',
      description: 'Geriatric Care for Medication Review with Barbara Lewis',
      status: 'scheduled'
    },
    {
      id: '26',
      doctorId: '1',
      doctorName: 'Dr. Petra Winsburry',
      patientName: 'David Thompson',
      date: '2028-07-30',
      time: '01:00 PM',
      type: 'routine',
      description: 'Routine Check-Up with David Thompson',
      status: 'scheduled'
    }
  ];

  // Backend-ready functions - will be replaced with tRPC mutations
  const handleAddSchedule = () => {
    onOpen();
  };

  // TODO: Replace with tRPC mutation when backend is connected
  // const handleSaveSchedule = (scheduleData: AppointmentFormData) => {
  //   await createAppointment.mutateAsync(scheduleData);
  //   toast({
  //     title: 'Schedule Added',
  //     description: 'New appointment has been scheduled successfully.',
  //     status: 'success',
  //     duration: 3000,
  //     isClosable: true,
  //   });
  //   onClose();
  // };

  const getAppointmentColor = (type: string) => {
    switch (type) {
      case 'routine': return 'blue';
      case 'follow-up': return 'green';
      case 'emergency': return 'red';
      case 'consultation': return 'purple';
      default: return 'gray';
    }
  };

  const generateCalendarDays = (): CalendarDay[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days: CalendarDay[] = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      
      const dayAppointments = appointments.filter(apt => {
        const aptDate = new Date(apt.date);
        return aptDate.toDateString() === date.toDateString();
      });
      
      days.push({
        date,
        isCurrentMonth,
        isToday,
        appointments: dayAppointments
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Header */}
        <Flex justify="space-between" align="center" mb={6}>
          <VStack align="start" spacing={1}>
            <Text fontSize="2xl" fontWeight="bold" color="gray.900">
              Doctors' Schedule
            </Text>
            <Text color="gray.700">Manage and view all doctor appointments</Text>
          </VStack>
          

        </Flex>

        {/* Calendar */}
        <Card bg="white">
          <CardBody>
            {/* Calendar Header */}
            <Flex justify="space-between" align="center" mb={6}>
              {/* Left Side - Month Navigation */}
              <HStack spacing={3}>
                <Text fontSize="xl" fontWeight="bold" color="gray.900">
                  {monthName}
                </Text>
                <HStack spacing={1}>
                  <IconButton
                    aria-label="Previous month"
                    icon={<FaChevronLeft />}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newDate = new Date(currentDate);
                      newDate.setMonth(newDate.getMonth() - 1);
                      setCurrentDate(newDate);
                    }}
                  />
                  <IconButton
                    aria-label="Next month"
                    icon={<FaChevronRight />}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newDate = new Date(currentDate);
                      newDate.setMonth(newDate.getMonth() + 1);
                      setCurrentDate(newDate);
                    }}
                  />
                </HStack>
              </HStack>

              {/* Right Side - View Controls and Add Schedule */}
              <HStack spacing={3}>
                <HStack spacing={2}>
                  <Button
                    size="sm"
                    variant={viewMode === 'day' ? 'solid' : 'outline'}
                    colorScheme="blue"
                    onClick={() => setViewMode('day')}
                  >
                    Day
                  </Button>
                  <Button
                    size="sm"
                    variant={viewMode === 'week' ? 'solid' : 'outline'}
                    colorScheme="blue"
                    onClick={() => setViewMode('week')}
                  >
                    Week
                  </Button>
                  <Button
                    size="sm"
                    variant={viewMode === 'month' ? 'solid' : 'outline'}
                    colorScheme="blue"
                    onClick={() => setViewMode('month')}
                  >
                    Month
                  </Button>
                  <Select size="sm" w="120px" defaultValue="all">
                    <option value="all">All Agenda</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                  </Select>
                </HStack>
                
                <Button
                  leftIcon={<FaPlus />}
                  colorScheme="blue"
                  onClick={handleAddSchedule}
                >
                  + Add Schedule
                </Button>
              </HStack>
            </Flex>

            {/* Day Headers */}
            <Grid templateColumns="repeat(7, 1fr)" gap={1} mb={2}>
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <Box key={day} p={3} textAlign="center">
                  <Text fontWeight="semibold" color="gray.600" fontSize="sm">
                    {day}
                  </Text>
                </Box>
              ))}
            </Grid>

            {/* Calendar Grid */}
            <Grid templateColumns="repeat(7, 1fr)" gap={1}>
              {calendarDays.map((day, index) => (
                <Box
                  key={index}
                  minH="120px"
                  p={2}
                  border="1px solid"
                  borderColor="gray.200"
                                        bg={day.isCurrentMonth ? 'white' : 'blue.50'}
                  position="relative"
                >
                  {/* Date Number */}
                  <Text
                    fontSize="sm"
                    fontWeight={day.isToday ? 'bold' : 'normal'}
                    color={day.isCurrentMonth ? 'gray.800' : 'gray.400'}
                    mb={2}
                  >
                    {day.date.getDate()}
                  </Text>
                  
                  {/* Today Indicator */}
                  {day.isToday && (
                    <Box
                      position="absolute"
                      top={1}
                      right={1}
                      w={2}
                      h={2}
                      bg="blue.500"
                      borderRadius="full"
                    />
                  )}

                  {/* Appointments */}
                  <VStack spacing={1} align="stretch">
                    {day.appointments.slice(0, 3).map((appointment) => (
                      <Box
                        key={appointment.id}
                        p={1}
                        bg={`${getAppointmentColor(appointment.type)}.100`}
                        border="1px solid"
                        borderColor={`${getAppointmentColor(appointment.type)}.200`}
                        borderRadius="sm"
                        fontSize="xs"
                        cursor="pointer"
                        _hover={{ bg: `${getAppointmentColor(appointment.type)}.200` }}
                      >
                        <Text fontWeight="medium" color={`${getAppointmentColor(appointment.type)}.800`}>
                          {appointment.doctorName}
                        </Text>
                        <Text color={`${getAppointmentColor(appointment.type)}.700`}>
                          {appointment.time}
                        </Text>
                        <Text color={`${getAppointmentColor(appointment.type)}.600`} noOfLines={1}>
                          {appointment.description}
                        </Text>
                      </Box>
                    ))}
                    
                    {day.appointments.length > 3 && (
                      <Text fontSize="xs" color="gray.500" textAlign="center">
                        +{day.appointments.length - 3} more
                      </Text>
                    )}
                  </VStack>
                </Box>
              ))}
            </Grid>
          </CardBody>
        </Card>

        {/* Add Schedule Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Schedule</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Doctor</FormLabel>
                  <Select placeholder="Select doctor">
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name} - {doctor.specialist}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                
                <FormControl>
                  <FormLabel>Patient Name</FormLabel>
                  <Input placeholder="Enter patient name" />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input type="date" />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Time</FormLabel>
                  <Input type="time" />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Appointment Type</FormLabel>
                  <Select placeholder="Select type">
                    <option value="routine">Routine Check-Up</option>
                    <option value="follow-up">Follow-Up</option>
                    <option value="emergency">Emergency</option>
                    <option value="consultation">Consultation</option>
                  </Select>
                </FormControl>
                
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input placeholder="Enter appointment description" />
                </FormControl>
                
                <HStack spacing={4} w="full">
                  <Button colorScheme="blue" flex={1}>
                    Save Schedule
                  </Button>
                  <Button variant="outline" flex={1} onClick={onClose}>
                    Cancel
                  </Button>
                </HStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </DashboardLayout>
  );
};

export default DoctorsSchedule;
