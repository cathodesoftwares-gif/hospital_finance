import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Box,
  Flex,
  Grid,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import Sidebar from '../components/Dashboard/Sidebar';
import Header from '../components/Dashboard/Header';
import MetricsCards from '../components/Dashboard/MetricsCards';
import PatientAgeChart from '../components/Dashboard/PatientAgeChart';
import RevenueChart from '../components/Dashboard/RevenueChart';
import DepartmentChart from '../components/Dashboard/DepartmentChart';
import DoctorsSchedule from '../components/Dashboard/DoctorsSchedule';
import ReportList from '../components/Dashboard/ReportList';
import AppointmentTable from '../components/Dashboard/AppointmentTable';
import Calendar from '../components/Dashboard/Calendar';
import DailySchedule from '../components/Dashboard/DailySchedule';
import RecentActivity from '../components/Dashboard/RecentActivity';

const Dashboard = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { isOpen, onToggle } = useDisclosure();
  
  const bgColor = 'gray.50';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box minH="100vh" bg={bgColor}>
      <Flex>
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} onToggle={onToggle} />
        
        {/* Main Content */}
        <Box 
          flex="1" 
          ml={{ base: 0, lg: '280px' }}
          transition="margin-left 0.3s ease"
        >
          {/* Header */}
          <Header onMenuClick={onToggle} user={user} />
          
          {/* Dashboard Content */}
          <Box p={{ base: 4, md: 6 }} overflowX="auto">
            <VStack spacing={6} align="stretch" maxW="100%">
              {/* Metrics Cards */}
              <MetricsCards />
              
              {/* Charts Row */}
              <Grid 
                templateColumns={{ 
                  base: '1fr', 
                  md: '1fr 1fr' 
                }} 
                gap={{ base: 4, md: 6 }}
              >
                <PatientAgeChart />
                <RevenueChart />
              </Grid>
              
              {/* Patient Overview, Doctors Schedule and Reports */}
              <Grid 
                templateColumns={{ 
                  base: '1fr', 
                  md: '1fr 1fr', 
                  lg: '1fr 1fr 1fr' 
                }} 
                gap={{ base: 4, md: 6 }}
              >
                <DepartmentChart />
                <DoctorsSchedule />
                <ReportList />
              </Grid>
              
              {/* Appointment Table */}
              <AppointmentTable selectedDate={selectedDate} />
              
              {/* Calendar and Schedule Section */}
              <Grid 
                templateColumns={{ 
                  base: '1fr', 
                  md: '1fr 1fr', 
                  lg: '1fr 1fr 1fr' 
                }} 
                gap={{ base: 4, md: 6 }}
              >
                <Calendar 
                  selectedDate={selectedDate} 
                  onDateSelect={setSelectedDate} 
                />
                <DailySchedule selectedDate={selectedDate} />
                <RecentActivity />
              </Grid>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
