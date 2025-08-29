import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Badge,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { 
  FaHospital, 
  FaChartLine, 
  FaShieldAlt, 
  FaRocket,
  FaCog,
  FaLock,
  FaEye,
  FaClock,
  FaAward,
  FaUserShield,
  FaFingerprint
} from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [panel1Visible, setPanel1Visible] = useState(false);
  const [panel2Visible, setPanel2Visible] = useState(false);
  const [panel3Visible, setPanel3Visible] = useState(false);
  
  const trustSectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hospitalName: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hospitalName: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      // Check if trust section is in view
      if (trustSectionRef.current) {
        const rect = trustSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start animation when section comes into view
        if (rect.top < windowHeight * 0.8) {
          // Animate all panels with delays (scroll down)
          setTimeout(() => setHeaderVisible(true), 0);
          setTimeout(() => setPanel1Visible(true), 300);
          setTimeout(() => setPanel2Visible(true), 600);
          setTimeout(() => setPanel3Visible(true), 900);
        } else {
          // Reverse animation when scrolling back up
          setHeaderVisible(false);
          setPanel1Visible(false);
          setPanel2Visible(false);
          setPanel3Visible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateField = (field: string, value: string) => {
    let error = '';
    
    switch (field) {
      case 'firstName':
        if (!value.trim()) error = 'First name is required';
        else if (value.trim().length < 2) error = 'First name must be at least 2 characters';
        break;
      case 'lastName':
        if (!value.trim()) error = 'Last name is required';
        else if (value.trim().length < 2) error = 'Last name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!validateEmail(value)) error = 'Please enter a valid email address';
        break;
      case 'phone':
        if (value.trim() && !validatePhone(value)) error = 'Please enter a valid 10-digit phone number';
        break;
      case 'hospitalName':
        if (!value.trim()) error = 'Hospital name is required';
        else if (value.trim().length < 3) error = 'Hospital name must be at least 3 characters';
        break;
    }
    
    return error;
  };

  const handleBlur = (field: string) => {
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = () => {
    const newErrors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      hospitalName: validateField('hospitalName', formData.hospitalName),
      message: ''
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Box>
      {/* Hero Section - Full Viewport Height */}
      <Box 
        bg="neutral.50" 
        minH="100vh" 
        display="flex" 
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 8, lg: 12 }} alignItems="center">
            <VStack align="start" spacing={{ base: 6, md: 8 }} textAlign={{ base: 'center', lg: 'left' }}>
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
                AI-Powered Healthcare Financing
              </Badge>
              <Heading
                as="h1"
                size={{ base: "2xl", md: "3xl" }}
                color="neutral.800"
                lineHeight="1.1"
                fontWeight="medium"
                maxW="600px"
              >
                Transform Your Hospital's
                <Text as="span" color="brand.600" display="block"> Financial Future</Text>
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="500px" lineHeight="1.6">
                Get quick access to short-term financing with our AI-powered risk assessment platform. 
                Upload documents, get instant decisions, and secure funding in 24 hours.
              </Text>
              <VStack spacing={4} pt={6} w={{ base: 'full', md: 'auto' }}>
                <Button 
                  size={{ base: "md", md: "lg" }}
                  colorScheme="brand" 
                  bg="brand.500"
                  _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }}
                  transition="all 0.2s"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 4, md: 6 }}
                  fontSize={{ base: "md", md: "lg" }}
                  rounded="full"
                  onClick={scrollToContact}
                  w={{ base: 'full', md: 'auto' }}
                >
                  Get Started
                </Button>
                <Button 
                  size={{ base: "md", md: "lg" }}
                  variant="outline" 
                  color="neutral.700"
                  borderColor="neutral.300"
                  _hover={{ 
                    bg: 'neutral.100', 
                    color: 'neutral.800',
                    borderColor: 'neutral.400'
                  }}
                  transition="all 0.2s"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 4, md: 6 }}
                  fontSize={{ base: "md", md: "lg" }}
                  rounded="full"
                  w={{ base: 'full', md: 'auto' }}
                >
                  View Demo
                </Button>
              </VStack>
            </VStack>
            <Box display={{ base: 'none', lg: 'flex' }} justifyContent="center" alignItems="center">
              <Box
                bg="brand.500"
                h={{ base: "300px", md: "400px", lg: "500px" }}
                w={{ base: "300px", md: "400px", lg: "500px" }}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                boxShadow="0 0 100px rgba(59, 130, 246, 0.3)"
              >
                <VStack spacing={6}>
                  <Icon as={FaHospital} w={24} h={24} color="white" />
                  <Text fontSize="2xl" color="white" fontWeight="bold" textAlign="center">
                    Hospital Financing
                  </Text>
                  <Text fontSize="lg" color="brand.100" textAlign="center" maxW="300px">
                    AI-Powered Risk Assessment & Quick Funding
                  </Text>
                </VStack>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Problem Statement Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="bold">
                India's Healthcare Has a Cash Flow Problem
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                From hospitals waiting months for insurance claims to distributors struggling with retailer credit, 
                the entire healthcare ecosystem is trapped in a cycle of delayed payments.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
              {/* Card 1: Delayed Payments */}
              <Box
                bg="alert.50"
                p={{ base: 6, md: 8 }}
                borderRadius="xl"
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="alert.200"
                _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s' }}
              >
                <VStack spacing={6} align="start">
                  <Box
                    bg="red.100"
                    p={4}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaClock} w={6} h={6} color="red.500" />
                  </Box>
                  <VStack spacing={3} align="start">
                    <Heading size="md" color="gray.800" fontWeight="bold">
                      Delayed Payments
                    </Heading>
                    <Text color="gray.600" lineHeight="1.6">
                      Hospitals wait 90-120 days for insurance claim settlements, while suppliers wait 60+ days for hospital payments.
                    </Text>
                  </VStack>
                  <Box pt={4} borderTop="1px solid" borderColor="purple.200" w="full">
                    <Text fontSize="sm" color="gray.500" mb={1}>
                      Industry Average Wait Time
                    </Text>
                    <Text fontSize="xl" color="red.500" fontWeight="bold">
                      3-4 Months
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* Card 2: Working Capital Crunch */}
              <Box
                bg="accent.50"
                p={8}
                borderRadius="xl"
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="accent.200"
                _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s' }}
              >
                <VStack spacing={6} align="start">
                  <Box
                    bg="yellow.100"
                    p={4}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaChartLine} w={6} h={6} color="yellow.600" />
                  </Box>
                  <VStack spacing={3} align="start">
                    <Heading size="md" color="gray.800" fontWeight="bold">
                      Working Capital Crunch
                    </Heading>
                    <Text color="gray.600" lineHeight="1.6">
                      The financial gap forces healthcare businesses to delay growth plans and limit essential inventory purchases.
                    </Text>
                  </VStack>
                  <Box pt={4} borderTop="1px solid" borderColor="purple.200" w="full">
                    <Text fontSize="sm" color="gray.500" mb={1}>
                      Capital Locked in Pipeline
                    </Text>
                    <Text fontSize="xl" color="yellow.600" fontWeight="bold">
                      $1.1B+
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* Card 3: Limited Financing Options */}
              <Box
                bg="healthcare.50"
                p={8}
                borderRadius="xl"
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="healthcare.200"
                _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s' }}
              >
                <VStack spacing={6} align="start">
                  <Box
                    bg="blue.100"
                    p={4}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaShieldAlt} w={6} h={6} color="blue.500" />
                  </Box>
                  <VStack spacing={3} align="start">
                    <Heading size="md" color="gray.800" fontWeight="bold">
                      Limited Financing Options
                    </Heading>
                    <Text color="gray.600" lineHeight="1.6">
                      Traditional lenders lack healthcare-specific insights, making it difficult to access timely capital at fair rates.
                    </Text>
                  </VStack>
                  <Box pt={4} borderTop="1px solid" borderColor="purple.200" w="full">
                    <Text fontSize="sm" color="gray.500" mb={1}>
                      Rejection Rate for New Businesses
                    </Text>
                    <Text fontSize="xl" color="blue.500" fontWeight="bold">
                      70%+
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Integration Section */}
      <Box py={20} bg="neutral.50">
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            {/* Main Heading */}
            <Box>
              <VStack align="start" spacing={6}>
                <Heading
                  as="h2"
                  size="4xl"
                  color="neutral.800"
                  lineHeight="1.1"
                  fontWeight="normal"
                  maxW="600px"
                >
                  Transform your
                  <Text as="span" display="block">Hospital's Finances with <Text as="span" color="brand.600">US</Text></Text>
                </Heading>
              </VStack>
            </Box>

            {/* Descriptive Text - Right Aligned */}
            <Box display="flex" justifyContent="flex-end">
              <Text 
                fontSize="xl" 
                color="gray.300" 
                maxW="500px" 
                lineHeight="1.6"
                textAlign="right"
              >
                Our platform integrates effortlessly with leading healthcare systems, 
                financial tools, and compliance technologies, creating a unified 
                ecosystem to maximize efficiency and accelerate funding decisions.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Instant Loans Section */}
      <Box py={20} bg="white">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            {/* Left Side - Text Content */}
            <VStack align="start" spacing={8}>
              <Heading
                as="h2"
                size="2xl"
                color="neutral.800"
                lineHeight="1.1"
                fontWeight="light"
                maxW="500px"
              >
                Unlock Instant
                <Text as="span" display="block">Hospital Financing</Text>
              </Heading>
              <Text 
                fontSize="lg" 
                color="neutral.600" 
                lineHeight="1.6"
                maxW="500px"
              >
                Access instant loans up to 1 CR rupees within 24 hours, all just one click away. 
                Our AI-powered platform analyzes your hospital's financial data and provides 
                immediate funding decisions with minimal documentation requirements.
              </Text>
            </VStack>

            {/* Right Side - Interactive Interface */}
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                bg="brand.50"
                p={8}
                borderRadius="2xl"
                boxShadow="0 20px 40px rgba(59, 130, 246, 0.15)"
                border="1px solid"
                borderColor="brand.200"
                position="relative"
                minH="400px"
                w="full"
                maxW="500px"
              >
                {/* Main Interface */}
                <VStack spacing={6} align="stretch">
                  {/* Header */}
                  <HStack justify="space-between" align="center">
                                      <Text fontSize="lg" fontWeight="bold" color="brand.700">
                    Loan Application
                  </Text>
                    <Badge colorScheme="green" borderRadius="full" px={3}>
                      AI Active
                    </Badge>
                  </HStack>

                  {/* Application Status */}
                  <Box bg="white" p={4} borderRadius="xl" border="1px solid" borderColor="brand.200">
                    <VStack spacing={3} align="start">
                      <HStack spacing={2}>
                        <Icon as={FaHospital} w={4} h={4} color="brand.500" />
                        <Text fontSize="sm" fontWeight="medium" color="gray.700">
                          Hospital Profile Verified
                        </Text>
                      </HStack>
                      <HStack spacing={2}>
                        <Icon as={FaChartLine} w={4} h={4} color="green.500" />
                        <Text fontSize="sm" fontWeight="medium" color="gray.700">
                          Risk Assessment: Low
                        </Text>
                      </HStack>
                      <HStack spacing={2}>
                        <Icon as={FaRocket} w={4} h={4} color="blue.500" />
                        <Text fontSize="sm" fontWeight="medium" color="gray.700">
                          Processing: 24hrs
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>

                  {/* Loan Amount */}
                  <Box bg="finance.100" p={4} borderRadius="xl">
                    <VStack spacing={2}>
                      <Text fontSize="sm" color="finance.700" fontWeight="medium">
                        Approved Amount
                      </Text>
                      <Text fontSize="2xl" fontWeight="bold" color="finance.800">
                        ₹1,00,00,000
                      </Text>
                      <Text fontSize="xs" color="finance.600">
                        Available within 24 hours
                      </Text>
                    </VStack>
                  </Box>

                  {/* Action Button */}
                  <Button
                    colorScheme="purple"
                    size="lg"
                    rounded="full"
                    bg="purple.500"
                    _hover={{ bg: 'purple.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                    leftIcon={<FaRocket />}
                  >
                    Get Instant Loan
                  </Button>

                  {/* AI Processing Indicator */}
                  <HStack spacing={3} justify="center">
                    <Box w={2} h={2} bg="purple.400" borderRadius="full" animation="pulse 2s infinite" />
                    <Text fontSize="sm" color="purple.600" fontWeight="medium">
                      AI Processing Your Application
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Analytics Platform Section */}
      <Box bg="healthcare.50" py={20}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            {/* Analytics Dashboard */}
            <Box>
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="0 20px 40px rgba(0, 0, 0, 0.1)"
                position="relative"
                overflow="hidden"
              >
                {/* Dashboard Header */}
                <Flex justify="space-between" align="center" mb={6}>
                  <Heading size="md" color="gray.800">Hospital Analytics Dashboard</Heading>
                  <Box w={3} h={3} bg="green.400" borderRadius="full"></Box>
                </Flex>
                
                {/* Metrics Grid */}
                <SimpleGrid columns={2} spacing={4} mb={6}>
                  <Box bg="finance.50" p={4} borderRadius="lg">
                    <Text fontSize="sm" color="neutral.600">Revenue</Text>
                    <Text fontSize="xl" fontWeight="bold" color="finance.600">₹2.4M</Text>
                  </Box>
                  <Box bg="blue.50" p={4} borderRadius="lg">
                    <Text fontSize="sm" color="gray.600">Patients</Text>
                    <Text fontSize="xl" fontWeight="bold" color="blue.600">1,247</Text>
                  </Box>
                  <Box bg="green.50" p={4} borderRadius="lg">
                    <Text fontSize="sm" color="gray.600">Efficiency</Text>
                    <Text fontSize="xl" fontWeight="bold" color="green.600">87%</Text>
                  </Box>
                  <Box bg="orange.50" p={4} borderRadius="lg">
                    <Text fontSize="sm" color="gray.600">Growth</Text>
                    <Text fontSize="xl" fontWeight="bold" color="orange.600">+12%</Text>
                  </Box>
                </SimpleGrid>
                
                {/* AI Recommendations */}
                <Box bg="neutral.100" p={4} borderRadius="lg">
                  <Flex align="center" mb={2}>
                    <Box w={2} h={2} bg="healthcare.500" borderRadius="full" mr={2}></Box>
                    <Text fontSize="sm" fontWeight="medium" color="neutral.800">AI Recommendations</Text>
                  </Flex>
                  <Text fontSize="sm" color="neutral.600">
                    Optimize bed utilization by 15% through predictive scheduling
                  </Text>
                </Box>
              </Box>
            </Box>

            {/* Content */}
            <Box>
              <Heading
                as="h2"
                size="2xl"
                color="neutral.800"
                lineHeight="1.1"
                fontWeight="light"
                maxW="500px"
              >
                Deliver Truly Intelligent
                <Text as="span" display="block">Hospital Analytics</Text>
              </Heading>
              <Text 
                fontSize="lg" 
                color="neutral.600" 
                lineHeight="1.6"
                maxW="500px"
              >
                Our AI-powered analytics platform provides real-time financial and patient insights, 
                helping hospitals develop data-driven strategies to increase productivity and profits. 
                Get personalized recommendations for operational optimization.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box bg="white" minH="100vh" display="flex" alignItems="center">
        <Container maxW="full" px={0}>
          {/* Section Header */}
          <Box textAlign="center" mb={16} px={8}>
            <Heading
              as="h2"
              size="3xl"
              color="neutral.800"
              fontWeight="light"
              mb={4}
            >
              Why Choose Hospital.Finance?
            </Heading>
          </Box>

          {/* Three Panels - Full Screen, No Spacing */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={0}>
            {/* Left Panel - Abstract Visual */}
            <Box
              bg="neutral.100"
              p={{ base: 6, md: 8 }}
              minH={{ base: "70vh", md: "80vh" }}
              position="relative"
              overflow="hidden"
              transition="all 0.5s ease"
              _hover={{
                bg: "brand.500",
                "& .panel-content": {
                  opacity: 1,
                  transform: "translateY(0)"
                },
                "& .panel-description": {
                  opacity: 1,
                  transform: "translateY(0)",
                  maxHeight: "300px"
                }
              }}
              cursor="pointer"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              {/* Abstract Lines Pattern */}
              <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.3}>
                {[...Array(20)].map((_, i) => (
                  <Box
                    key={i}
                    position="absolute"
                    top={`${Math.random() * 100}%`}
                    left={`${Math.random() * 100}%`}
                    w={`${Math.random() * 200 + 50}px`}
                    h="1px"
                    bg="neutral.300"
                    transform={`rotate(${Math.random() * 360}deg)`}
                    opacity={Math.random() * 0.5 + 0.3}
                  />
                ))}
              </Box>
              
              {/* Spacer for top */}
              <Box flex={1}></Box>
              
              {/* Paragraph in Middle */}
              <Box 
                position="relative" 
                zIndex={1} 
                textAlign="center"
                className="panel-description"
                opacity={0}
                transform="translateY(20px)"
                maxHeight="0"
                overflow="hidden"
                transition="all 0.6s ease"
                flex={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                px={{ base: 2, md: 4 }}
              >
                <Text 
                  color="neutral.700" 
                  lineHeight="1.6"
                  fontSize={{ base: "md", md: "lg" }}
                  textAlign="center"
                >
                  Advanced machine learning algorithms analyze your hospital's financial data 
                  to provide actionable insights and predictive analytics for better decision-making.
                </Text>
              </Box>
              
              {/* Spacer for bottom */}
              <Box flex={1}></Box>
              
              {/* Heading slightly above bottom */}
              <Box 
                position="relative" 
                zIndex={1} 
                textAlign="center"
                className="panel-content"
                opacity={0.9}
                transform="translateY(0)"
                transition="all 0.5s ease"
                mb={8}
              >
                <Heading size={{ base: "lg", md: "xl" }} color="neutral.800" fontWeight="light">
                  AI Powered Analytics
                </Heading>
              </Box>
            </Box>

            {/* Center Panel - Highlight */}
            <Box
              bg="neutral.100"
              p={{ base: 6, md: 8 }}
              minH={{ base: "70vh", md: "80vh" }}
              textAlign="center"
              transition="all 0.5s ease"
              _hover={{
                bg: "brand.500",
                "& .panel-content": {
                  opacity: 1,
                  transform: "translateY(0)"
                },
                "& .panel-description": {
                  opacity: 1,
                  transform: "translateY(0)",
                  maxHeight: "300px"
                }
              }}
              cursor="pointer"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              {/* Spacer for top */}
              <Box flex={1}></Box>
              
              {/* Paragraph in Middle */}
              <Box 
                className="panel-description"
                opacity={0}
                transform="translateY(20px)"
                maxHeight="0"
                overflow="hidden"
                transition="all 0.6s ease"
                flex={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                px={{ base: 2, md: 4 }}
              >
                <Text 
                  color="neutral.700" 
                  lineHeight="1.6" 
                  fontSize={{ base: "md", md: "lg" }}
                  textAlign="center"
                >
                  Get approved for loans up to 1 CR rupees within 24 hours. 
                  Our streamlined process ensures quick access to working capital 
                  when your hospital needs it most.
                </Text>
              </Box>
              
              {/* Spacer for bottom */}
              <Box flex={1}></Box>
              
              {/* Heading slightly above bottom */}
              <Box 
                className="panel-content"
                opacity={0.9}
                transform="translateY(0)"
                transition="all 0.5s ease"
                mb={8}
              >
                <Heading size={{ base: "lg", md: "xl" }} color="neutral.800" fontWeight="light">
                  Instant Loan Approval
                </Heading>
              </Box>
            </Box>

            {/* Right Panel - Interface Mockup */}
            <Box
              bg="neutral.100"
              p={{ base: 6, md: 8 }}
              minH={{ base: "70vh", md: "80vh" }}
              position="relative"
              overflow="hidden"
              transition="all 0.5s ease"
              _hover={{
                bg: "brand.500",
                "& .panel-content": {
                  opacity: 1,
                  transform: "translateY(0)"
                },
                "& .panel-description": {
                  opacity: 1,
                  transform: "translateY(0)",
                  maxHeight: "400px"
                }
              }}
              cursor="pointer"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              {/* Spacer for top */}
              <Box flex={1}></Box>
              
              {/* Paragraph in Middle */}
              <Box 
                className="panel-description"
                opacity={0}
                transform="translateY(20px)"
                maxHeight="0"
                overflow="hidden"
                transition="all 0.6s ease"
                flex={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                px={{ base: 2, md: 4 }}
              >
                <Text 
                  color="neutral.700" 
                  lineHeight="1.6"
                  fontSize={{ base: "md", md: "lg" }}
                  textAlign="center"
                >
                  Seamlessly integrate with your existing hospital systems through our secure API endpoints. 
                  We ensure complete data privacy with end-to-end encryption, HIPAA compliance, and 
                  enterprise-grade security protocols to protect your sensitive financial information.
                </Text>
              </Box>
              
              {/* Spacer for bottom */}
              <Box flex={1}></Box>
              
              {/* Heading centered horizontally */}
              <Box 
                className="panel-content"
                opacity={0.9}
                transform="translateY(0)"
                transition="all 0.5s ease"
                mb={8}
                textAlign="center"
              >
                <Heading size={{ base: "lg", md: "xl" }} color="neutral.800" fontWeight="light">
                  Secure Integration
                </Heading>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Why Trust Us Section */}
      <Box bg="neutral.50" py={20} ref={trustSectionRef}>
        <Container maxW="full" px={8}>
          {/* Three Trust Boxes */}
          <VStack spacing={12}>
            {/* Header Panel */}
            <Box
              ref={headerRef}
              bg="white"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              p={12}
              w="full"
              minH="50vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity={headerVisible ? 1 : 0}
              transform={headerVisible ? 'translateY(0)' : 'translateY(100px)'}
              transition="all 0.8s ease"
              position="relative"
              zIndex={headerVisible ? 4 : 1}
            >
              <Heading
                as="h2"
                size="3xl"
                color="neutral.800"
                fontWeight="light"
                textAlign="center"
              >
                Why <Text as="span" color="brand.600">Trust</Text> Us?
              </Heading>
            </Box>
            {/* Box 1: Building Trust Through Excellence */}
            <Box
              ref={panel1Ref}
              bg="white"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              p={12}
              w="full"
              minH="50vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity={panel1Visible ? 1 : 0}
              transform={panel1Visible ? 'translateY(0)' : 'translateY(100px)'}
              transition="all 0.8s ease"
              position="relative"
              zIndex={panel1Visible ? 3 : 1}
            >
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
                {/* Left Side - Content */}
                <Box>
                  <VStack spacing={6} align="start">
                    <Box>
                      <HStack spacing={4} align="center" mb={4}>
                        <Box w={12} h={12} bg="purple.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaAward} w={6} h={6} color="purple.500" />
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="purple.400" fontWeight="medium" mb={1}>
                            01
                          </Text>
                          <Heading size="lg" color="gray.800" fontWeight="light">
                            Building Trust Through Excellence
                          </Heading>
                        </Box>
                      </HStack>
                      <Box w="full" h="1px" bg="gray.200" mb={4} />
                      <Text color="gray.600" lineHeight="1.6">
                        At the core of our hospital financing platform lies an unwavering commitment to trust. 
                        We prioritize security, privacy, AI ethics, and reliability, ensuring our solutions 
                        not only drive innovation but also uphold the highest standards of responsibility and dependability.
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                {/* Right Side - Trust Excellence Graphics */}
                <Box>
                  <VStack spacing={6} align="center">
                    <Box textAlign="center">
                      <Box w={20} h={20} bg="purple.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center" mx="auto" mb={4}>
                        <Icon as={FaAward} w={10} h={10} color="purple.500" />
                      </Box>
                      <Text fontSize="lg" fontWeight="bold" color="purple.600" mb={2}>
                        Excellence
                      </Text>
                    </Box>
                    
                    <HStack spacing={6} justify="center">
                      <VStack spacing={2}>
                        <Box w={8} h={8} bg="purple.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaShieldAlt} w={4} h={4} color="purple.600" />
                        </Box>
                        <Text fontSize="sm" color="gray.600" textAlign="center">
                          Trust Score
                        </Text>
                      </VStack>
                      
                      <VStack spacing={2}>
                        <Box w={8} h={8} bg="purple.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaChartLine} w={4} h={4} color="purple.600" />
                        </Box>
                        <Text fontSize="sm" color="gray.600" textAlign="center">
                          Reliability
                        </Text>
                      </VStack>
                      
                      <VStack spacing={2}>
                        <Box w={8} h={8} bg="purple.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaRocket} w={4} h={4} color="purple.600" />
                        </Box>
                        <Text fontSize="sm" color="gray.600" textAlign="center">
                          Innovation
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Box 2: Security You Can Rely On */}
            <Box
              ref={panel2Ref}
              bg="white"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              p={12}
              w="full"
              minH="50vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity={panel2Visible ? 1 : 0}
              transform={panel2Visible ? 'translateY(0)' : 'translateY(100px)'}
              transition="all 0.8s ease"
              position="relative"
              zIndex={panel2Visible ? 2 : 1}
            >
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
                {/* Left Side - Content */}
                <Box>
                  <VStack spacing={6} align="start">
                    <Box>
                      <HStack spacing={4} align="center" mb={4}>
                        <Box w={12} h={12} bg="blue.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaUserShield} w={6} h={6} color="blue.500" />
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="blue.400" fontWeight="medium" mb={1}>
                            02
                          </Text>
                          <Heading size="lg" color="gray.800" fontWeight="light">
                            Security You Can Rely On
                          </Heading>
                        </Box>
                      </HStack>
                      <Box w="full" h="1px" bg="gray.200" mb={4} />
                      <Text color="gray.600" lineHeight="1.6">
                        Your hospital's data safety is our top priority. Our platform is built with enterprise-grade 
                        security measures, including end-to-end encryption, compliance certifications, and 
                        role-based access controls to ensure complete protection of sensitive information.
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                {/* Right Side - Security Graphics */}
                <Box>
                  <VStack spacing={6} align="center">
                    <Box textAlign="center">
                      <Box w={20} h={20} bg="blue.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center" mx="auto" mb={4}>
                        <Icon as={FaUserShield} w={10} h={10} color="blue.500" />
                      </Box>
                      <Text fontSize="lg" fontWeight="bold" color="blue.600" mb={2}>
                        Security
                      </Text>
                    </Box>
                    
                    <HStack spacing={6} justify="center">
                      <VStack spacing={2}>
                        <Box w={8} h={8} bg="blue.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaLock} w={4} h={4} color="blue.600" />
                        </Box>
                        <Text fontSize="sm" color="gray.600" textAlign="center">
                          Encryption
                        </Text>
                      </VStack>
                      
                      <VStack spacing={2}>
                        <Box w={8} h={8} bg="blue.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaShieldAlt} w={4} h={4} color="blue.600" />
                        </Box>
                        <Text fontSize="sm" color="gray.600" textAlign="center">
                          Protection
                        </Text>
                      </VStack>
                      
                      <VStack spacing={2}>
                        <Box w={8} h={8} bg="blue.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaEye} w={4} h={4} color="blue.600" />
                        </Box>
                        <Text fontSize="sm" color="gray.600" textAlign="center">
                          Monitoring
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Box 3: Privacy by Design */}
            <Box
              ref={panel3Ref}
              bg="white"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              p={12}
              w="full"
              minH="50vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity={panel3Visible ? 1 : 0}
              transform={panel3Visible ? 'translateY(0)' : 'translateY(100px)'}
              transition="all 0.8s ease"
              position="relative"
              zIndex={panel3Visible ? 1 : 1}
            >
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
                {/* Left Side - Content */}
                <Box>
                  <VStack spacing={6} align="start">
                    <Box>
                      <HStack spacing={4} align="center" mb={4}>
                        <Box w={12} h={12} bg="green.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaFingerprint} w={6} h={6} color="green.500" />
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="green.400" fontWeight="medium" mb={1}>
                            03
                          </Text>
                          <Heading size="lg" color="gray.800" fontWeight="light">
                            Privacy by Design
                          </Heading>
                        </Box>
                      </HStack>
                      <Box w="full" h="1px" bg="gray.200" mb={4} />
                      <Text color="gray.600" lineHeight="1.6">
                        We respect your hospital's data and your privacy. Our platform incorporates data anonymization, 
                        zero data leakage policy, and customizable privacy settings to meet your organization's 
                        unique needs and compliance requirements.
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                {/* Right Side - Privacy Graphics */}
                <Box>
                  <VStack spacing={6} align="center">
                    <Box textAlign="center">
                      <Box w={20} h={20} bg="green.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center" mx="auto" mb={4}>
                        <Icon as={FaFingerprint} w={10} h={10} color="green.500" />
                      </Box>
                      <Text fontSize="lg" fontWeight="bold" color="green.600" mb={2}>
                        Privacy
                      </Text>
                    </Box>
                    
                    <HStack spacing={6} justify="center">
                      <VStack spacing={2}>
                        <Box w={8} h={8} bg="green.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaFingerprint} w={4} h={4} color="green.600" />
                        </Box>
                        <Text fontSize="sm" color="gray.600" textAlign="center">
                          Anonymization
                        </Text>
                      </VStack>
                      
                      <VStack spacing={2}>
                        <Box w={8} h={8} bg="green.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaLock} w={4} h={4} color="green.600" />
                        </Box>
                        <Text fontSize="sm" color="gray.600" textAlign="center">
                          Zero Leakage
                        </Text>
                      </VStack>
                      
                      <VStack spacing={2}>
                        <Box w={8} h={8} bg="green.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FaCog} w={4} h={4} color="green.600" />
                        </Box>
                        <Text fontSize="sm" color="gray.600" textAlign="center">
                          Custom Settings
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box bg="gray.900" py={20}>
        <Container maxW="container.xl">
          <VStack align="start" spacing={8}>
            <Heading
              as="h2"
              size="4xl"
              color="white"
              lineHeight="1.1"
              fontWeight="light"
              maxW="600px"
            >
              Are You Ready to
              <Text as="span" display="block">Transform Your</Text>
              <Text as="span" color="purple.400" display="block">Hospital?</Text>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="500px" lineHeight="1.6">
              Contact us and request a free demo today!
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box bg="white" py={20} id="contact-section">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            {/* Left Side - Decorative Circles */}
            <Box display="flex" justifyContent="center" alignItems="center" minH="400px">
              <Box position="relative" w="300px" h="300px">
                {/* Large Purple Circle */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  w="200px"
                  h="200px"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="purple.400"
                  opacity={0.3}
                  animation="float1 8s ease-in-out infinite"
                  sx={{
                    '@keyframes float1': {
                      '0%, 100%': {
                        transform: 'translate(-50%, -50%) translateY(0px) rotate(0deg)',
                      },
                      '25%': {
                        transform: 'translate(-50%, -50%) translateY(-30px) rotate(90deg)',
                      },
                      '50%': {
                        transform: 'translate(-50%, -50%) translateY(0px) rotate(180deg)',
                      },
                      '75%': {
                        transform: 'translate(-50%, -50%) translateY(30px) rotate(270deg)',
                      },
                    },
                  }}
                />
                {/* Medium Blue Circle */}
                <Box
                  position="absolute"
                  top="40%"
                  left="40%"
                  w="150px"
                  h="150px"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="blue.400"
                  opacity={0.4}
                  animation="float2 6s ease-in-out infinite"
                  sx={{
                    '@keyframes float2': {
                      '0%, 100%': {
                        transform: 'translate(-50%, -50%) translateY(0px) rotate(0deg)',
                      },
                      '33%': {
                        transform: 'translate(-50%, -50%) translateY(-25px) rotate(120deg)',
                      },
                      '66%': {
                        transform: 'translate(-50%, -50%) translateY(25px) rotate(240deg)',
                      },
                    },
                  }}
                />
                {/* Small Cyan Circle */}
                <Box
                  position="absolute"
                  top="60%"
                  left="60%"
                  w="100px"
                  h="100px"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="cyan.400"
                  opacity={0.5}
                  animation="float3 10s ease-in-out infinite"
                  sx={{
                    '@keyframes float3': {
                      '0%, 100%': {
                        transform: 'translate(-50%, -50%) translateY(0px) rotate(0deg)',
                      },
                      '20%': {
                        transform: 'translate(-50%, -50%) translateY(-20px) rotate(72deg)',
                      },
                      '40%': {
                        transform: 'translate(-50%, -50%) translateY(0px) rotate(144deg)',
                      },
                      '60%': {
                        transform: 'translate(-50%, -50%) translateY(20px) rotate(216deg)',
                      },
                      '80%': {
                        transform: 'translate(-50%, -50%) translateY(0px) rotate(288deg)',
                      },
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Right Side - Contact Form */}
            <Box bg="brand.50" p={8} borderRadius="xl" border="1px solid" borderColor="brand.200">
              <VStack spacing={6} align="stretch">
                <Heading size="lg" color="neutral.800" mb={4}>
                  Get in Touch
                </Heading>
                
                {/* First Row - First Name and Last Name */}
                <SimpleGrid columns={2} spacing={4}>
                  <FormControl isInvalid={!!errors.firstName}>
                    <FormLabel color="neutral.700" fontSize="sm" mb={1}>
                      First name *
                    </FormLabel>
                    <Box
                      borderBottom="2px solid"
                      borderColor={errors.firstName ? "alert.500" : "brand.500"}
                      pb={2}
                    >
                      <Input
                        variant="unstyled"
                        placeholder="Enter your first name"
                        color="neutral.800"
                        _placeholder={{ color: 'neutral.500' }}
                        fontSize="md"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        onBlur={() => handleBlur('firstName')}
                      />
                      {errors.firstName && (
                        <Text color="alert.500" fontSize="sm" mt={1}>
                          {errors.firstName}
                        </Text>
                      )}
                    </Box>
                  </FormControl>
                  
                  <FormControl isInvalid={!!errors.lastName}>
                    <FormLabel color="gray.700" fontSize="sm" mb={1}>
                      Last name *
                    </FormLabel>
                    <Box
                      borderBottom="2px solid"
                      borderColor={errors.lastName ? "red.400" : "lightPurple.500"}
                      pb={2}
                    >
                      <Input
                        variant="unstyled"
                        placeholder="Enter your last name"
                        color="gray.800"
                        _placeholder={{ color: 'gray.500' }}
                        fontSize="md"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        onBlur={() => handleBlur('lastName')}
                      />
                      {errors.lastName && (
                        <Text color="red.500" fontSize="sm" mt={1}>
                          {errors.lastName}
                        </Text>
                      )}
                    </Box>
                  </FormControl>
                </SimpleGrid>

                {/* Second Row - Email and Phone */}
                <SimpleGrid columns={2} spacing={4}>
                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel color="gray.700" fontSize="sm" mb={1}>
                      Email *
                    </FormLabel>
                    <Box
                      borderBottom="2px solid"
                      borderColor={errors.email ? "red.400" : "lightPurple.500"}
                      pb={2}
                    >
                      <Input
                        variant="unstyled"
                        type="email"
                        placeholder="Enter your email"
                        color="gray.800"
                        _placeholder={{ color: 'gray.500' }}
                        fontSize="md"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                      />
                      {errors.email && (
                        <Text color="red.500" fontSize="sm" mt={1}>
                          {errors.email}
                        </Text>
                      )}
                    </Box>
                  </FormControl>
                  
                  <FormControl isInvalid={!!errors.phone}>
                    <FormLabel color="gray.700" fontSize="sm" mb={1}>
                      Phone
                    </FormLabel>
                    <HStack spacing={2}>
                      <HStack spacing={1} color="gray.500" fontSize="sm" minW="80px">
                        <Text fontSize="lg">
                          <span role="img" aria-label="Indian flag">🇮🇳</span>
                        </Text>
                        <Text>India</Text>
                      </HStack>
                      <Box
                        borderBottom="2px solid"
                        borderColor={errors.phone ? "red.400" : "lightPurple.500"}
                        pb={2}
                        flex={1}
                      >
                        <Input
                          variant="unstyled"
                          placeholder="Enter your phone number"
                          color="gray.800"
                          _placeholder={{ color: 'gray.500' }}
                          fontSize="md"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                        />
                        {errors.phone && (
                          <Text color="red.500" fontSize="sm" mt={1}>
                            {errors.phone}
                          </Text>
                        )}
                      </Box>
                    </HStack>
                  </FormControl>
                </SimpleGrid>

                {/* Third Row - Hospital Name */}
                <FormControl isInvalid={!!errors.hospitalName}>
                  <FormLabel color="gray.700" fontSize="sm" mb={1}>
                    Hospital name *
                  </FormLabel>
                  <Box
                    borderBottom="2px solid"
                    borderColor={errors.hospitalName ? "red.400" : "lightPurple.500"}
                    pb={2}
                  >
                    <Input
                      variant="unstyled"
                      placeholder="Enter your hospital name"
                      color="gray.800"
                      _placeholder={{ color: 'gray.500' }}
                      fontSize="md"
                      value={formData.hospitalName}
                      onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                      onBlur={() => handleBlur('hospitalName')}
                    />
                    {errors.hospitalName && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.hospitalName}
                      </Text>
                    )}
                  </Box>
                </FormControl>

                {/* Message Field */}
                <FormControl>
                  <FormLabel color="gray.700" fontSize="sm" mb={1}>
                    Message
                  </FormLabel>
                  <Box
                    borderBottom="2px solid"
                    borderColor="lightPurple.500"
                    pb={2}
                  >
                    <Textarea
                      variant="unstyled"
                      placeholder="Enter your message"
                      color="gray.800"
                      _placeholder={{ color: 'gray.500' }}
                      fontSize="md"
                      rows={4}
                      resize="none"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </Box>
                </FormControl>

                {/* Submit Button */}
                <Button
                  variant="outline"
                  color="neutral.700"
                  borderColor="brand.500"
                  borderRadius="md"
                  py={3}
                  px={8}
                  fontSize="sm"
                  fontWeight="medium"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  _hover={{
                    bg: 'brand.500',
                    color: 'white'
                  }}
                  transition="all 0.2s"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box bg="neutral.900" borderTop="1px solid" borderColor="neutral.700" minH="70vh" display="flex" flexDirection="column">
        <Container maxW="container.xl" py={12} flex={1} display="flex" flexDirection="column" justifyContent="space-between">
          {/* Main Content - Spread Out */}
          <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between" py={8}>
            {/* Top Section - Logo and Brand */}
            <VStack align={{ base: "center", md: "start" }} spacing={6} mb={12} textAlign={{ base: "center", md: "left" }}>
              <HStack spacing={4}>
                <Box
                  w={16}
                  h={16}
                  bg="brand.500"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="bold"
                  color="white"
                  fontSize="2xl"
                >
                  HF
                </Box>
                <VStack align={{ base: "center", md: "start" }} spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    HOSPITAL.FINANCE
                  </Text>
                  <Text color="brand.400" fontSize="sm" fontWeight="medium">
                    AI-Powered Healthcare Financing Platform
                  </Text>
                </VStack>
              </HStack>
              <Text color="neutral.400" fontSize="lg" lineHeight="1.7" maxW="400px">
                Reach out to us to explore how Hospital.Finance can transform your hospital's financial future with AI-driven solutions.
              </Text>
            </VStack>

            {/* Middle Section - Three Columns Spread Out */}
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={12} mb={12} flex={1} w="full">
              {/* Left Section - Contact */}
              <VStack align={{ base: "center", md: "start" }} spacing={6} w="full" textAlign={{ base: "center", md: "left" }}>
                <Text fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="wide">
                  Contact
                </Text>
                <VStack align={{ base: "center", md: "start" }} spacing={4} w="full">
                  <Text color="neutral.400" fontSize="md">
                    Get in touch with our team
                  </Text>
                  <HStack spacing={4}>
                    <Box
                      w={12}
                      h={12}
                      bg="brand.500"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      _hover={{ bg: 'brand.600', transform: 'scale(1.1)' }}
                      transition="all 0.2s"
                    >
                      <Text fontSize="sm" fontWeight="bold" color="white">
                        in
                      </Text>
                    </Box>
                    <Box
                      w={12}
                      h={12}
                      bg="healthcare.500"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      _hover={{ bg: 'healthcare.600', transform: 'scale(1.1)' }}
                      transition="all 0.2s"
                    >
                      <Text fontSize="sm" fontWeight="bold" color="white">
                        <span role="img" aria-label="Camera">📷</span>
                      </Text>
                    </Box>
                  </HStack>
                  <Text color="neutral.400" fontSize="md" fontWeight="medium">
                    https://www.hospital.finance
                  </Text>
                </VStack>
              </VStack>

              {/* Middle Section - Services */}
              <VStack align="center" spacing={6} w="full">
                <Text fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="wide">
                  Services
                </Text>
                <VStack align="center" spacing={4} w="full">
                  <Link to="/finance">
                    <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                      Instant Loan Approval
                    </Text>
                  </Link>
                  <Link to="/analytics">
                    <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'healthcare.300' }} transition="color 0.2s">
                      AI Analytics Platform
                    </Text>
                  </Link>
                </VStack>
              </VStack>

              {/* Right Section - Menu */}
              <VStack align={{ base: "center", md: "end" }} spacing={6} w="full" textAlign={{ base: "center", md: "right" }}>
                <Text fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="wide">
                  Menu
                </Text>
                <VStack align={{ base: "center", md: "end" }} spacing={4} w="full">
                  <Link to="/company">
                    <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                      Company
                    </Text>
                  </Link>
                  <Link to="/support">
                    <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                      Support
                    </Text>
                  </Link>
                  <Link to="/privacy">
                    <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                      Privacy Policy
                    </Text>
                  </Link>
                  <Link to="/terms">
                    <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                      Terms of Service
                    </Text>
                  </Link>
                </VStack>
              </VStack>
            </Grid>

            {/* Bottom Section - Additional Info */}
            <VStack align={{ base: "center", md: "start" }} spacing={4} mb={8} textAlign={{ base: "center", md: "left" }}>
              <Text color="neutral.500" fontSize="md">
                24-hour loan approval • 0% success rate • AI-powered risk assessment
              </Text>
            </VStack>
          </Box>

          {/* Copyright Section */}
          <Box borderTop="1px solid" borderColor="neutral.700" pt={6} textAlign={{ base: "center", md: "left" }}>
            <Text color="neutral.400" fontSize="sm">
              © 2025 by Hospital.Finance. All Rights reserved.
            </Text>
          </Box>
        </Container>
        
        {/* Brand Bar at Bottom */}
        <Box bg="brand.500" h="4px" w="full" />
      </Box>
    </Box>
  );
};

export default Home;
