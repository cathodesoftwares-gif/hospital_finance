import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Button,
  Icon,
  Grid,
} from '@chakra-ui/react';
import { 
  FaHospital, 
  FaChartLine, 
  FaShieldAlt, 
  FaRocket,
  FaUsers,
  FaAward,
  FaHeart,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaBuilding,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Company = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactUs = () => {
    navigate('/');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <Box>
      {/* Hero Section */}
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
            {/* Left Content */}
            <VStack align={{ base: "center", lg: "start" }} spacing={{ base: 6, md: 8 }} textAlign={{ base: "center", lg: "left" }}>
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
                About Our Company
              </Badge>
              <Heading
                as="h1"
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                color="neutral.800"
                lineHeight="1.1"
                fontWeight="medium"
              >
                Building the Future of
                <Text as="span" color="brand.600" display="block">Healthcare Finance</Text>
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" lineHeight="1.6">
                Hospital.Finance is a pioneering fintech company dedicated to transforming healthcare financing 
                through innovative technology and strategic partnerships.
              </Text>
              <VStack spacing={4} pt={6} w={{ base: 'full', lg: 'auto' }} align={{ base: "center", lg: "start" }}>
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
                  w={{ base: 'full', lg: 'auto' }}
                >
                  Join Our Team
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
                  w={{ base: 'full', lg: 'auto' }}
                  onClick={handleContactUs}
                >
                  Contact Us
                </Button>
              </VStack>
            </VStack>

            {/* Right - Company Stats */}
            <Box
              bg="white"
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="lg"
            >
              <VStack spacing={8}>
                <Heading size="lg" color="neutral.800" textAlign="center">
                  Company Overview
                </Heading>
                <SimpleGrid columns={2} spacing={6} w="full">
                  <VStack spacing={2}>
                    <Icon as={FaBuilding} w={8} h={8} color="brand.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="brand.600">2025</Text>
                    <Text fontSize="sm" color="neutral.600" textAlign="center">Founded</Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Icon as={FaUsers} w={8} h={8} color="healthcare.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="healthcare.600">2</Text>
                    <Text fontSize="sm" color="neutral.600" textAlign="center">Team Members</Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Icon as={FaHospital} w={8} h={8} color="finance.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="finance.600">0</Text>
                    <Text fontSize="sm" color="neutral.600" textAlign="center">Hospitals Served</Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Icon as={FaAward} w={8} h={8} color="accent.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="accent.600">100%</Text>
                    <Text fontSize="sm" color="neutral.600" textAlign="center">Success Rate</Text>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box bg="white" py={20}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" maxW="800px">
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
                Our Purpose
              </Badge>
              <Heading size="2xl" color="neutral.800" fontWeight="medium">
                Mission & Vision
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="start">
              {/* Mission */}
              <VStack align="start" spacing={6} p={8} bg="brand.50" borderRadius="xl" border="1px solid" borderColor="brand.200">
                <HStack spacing={4}>
                  <Box w={12} h={12} bg="brand.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                    <Icon as={FaRocket} w={6} h={6} color="brand.600" />
                  </Box>
                  <Heading size="lg" color="neutral.800">
                    Our Mission
                  </Heading>
                </HStack>
                <Text fontSize="lg" color="neutral.600" lineHeight="1.7">
                  To revolutionize healthcare financing by providing hospitals with innovative, 
                  AI-powered financial solutions that enable better patient care and sustainable growth.
                </Text>
              </VStack>

              {/* Vision */}
              <VStack align="start" spacing={6} p={8} bg="healthcare.50" borderRadius="xl" border="1px solid" borderColor="healthcare.200">
                <HStack spacing={4}>
                  <Box w={12} h={12} bg="healthcare.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                    <Icon as={FaLightbulb} w={6} h={6} color="healthcare.600" />
                  </Box>
                  <Heading size="lg" color="neutral.800">
                    Our Vision
                  </Heading>
                </HStack>
                <Text fontSize="lg" color="neutral.600" lineHeight="1.7">
                  To become the leading healthcare finance platform in India, empowering hospitals 
                  to focus on what matters most - delivering exceptional patient care.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Values Section */}
      <Box bg="neutral.50" py={20}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" maxW="800px">
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
                What Drives Us
              </Badge>
              <Heading size="2xl" color="neutral.800" fontWeight="medium">
                Our Core Values
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              <VStack align="start" spacing={4} p={6} bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200">
                <Box w={12} h={12} bg="brand.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaShieldAlt} w={6} h={6} color="brand.600" />
                </Box>
                <Heading size="md" color="neutral.800">Trust & Security</Heading>
                <Text color="neutral.600" lineHeight="1.6">
                  We prioritize the security and privacy of our clients' data, building trust through transparency and reliability.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} p={6} bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200">
                <Box w={12} h={12} bg="healthcare.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaHeart} w={6} h={6} color="healthcare.600" />
                </Box>
                <Heading size="md" color="neutral.800">Patient-Centric</Heading>
                <Text color="neutral.600" lineHeight="1.6">
                  Every solution we create is designed to ultimately improve patient care and healthcare outcomes.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} p={6} bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200">
                <Box w={12} h={12} bg="finance.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaChartLine} w={6} h={6} color="finance.600" />
                </Box>
                <Heading size="md" color="neutral.800">Innovation</Heading>
                <Text color="neutral.600" lineHeight="1.6">
                  We continuously innovate to provide cutting-edge financial solutions that drive healthcare transformation.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} p={6} bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200">
                <Box w={12} h={12} bg="accent.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaHandshake} w={6} h={6} color="accent.600" />
                </Box>
                <Heading size="md" color="neutral.800">Partnership</Heading>
                <Text color="neutral.600" lineHeight="1.6">
                  We believe in building strong partnerships with hospitals, lenders, and healthcare providers.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} p={6} bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200">
                <Box w={12} h={12} bg="alert.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaGlobe} w={6} h={6} color="alert.600" />
                </Box>
                <Heading size="md" color="neutral.800">Accessibility</Heading>
                <Text color="neutral.600" lineHeight="1.6">
                  We make healthcare financing accessible to hospitals of all sizes across India.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} p={6} bg="white" borderRadius="xl" border="1px solid" borderColor="gray.200">
                <Box w={12} h={12} bg="neutral.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaAward} w={6} h={6} color="neutral.600" />
                </Box>
                <Heading size="md" color="neutral.800">Excellence</Heading>
                <Text color="neutral.600" lineHeight="1.6">
                  We strive for excellence in everything we do, from technology to customer service.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box bg="white" py={20}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" maxW="800px">
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
                Get In Touch
              </Badge>
              <Heading size="2xl" color="neutral.800" fontWeight="medium">
                Contact Information
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <VStack spacing={4} p={6} bg="brand.50" borderRadius="xl" border="1px solid" borderColor="brand.200">
                <Icon as={FaMapMarkerAlt} w={8} h={8} color="brand.600" />
                <Heading size="md" color="neutral.800">Address</Heading>
                <Text color="neutral.600" textAlign="center">
                  Delhi, India
                </Text>
              </VStack>

              <VStack spacing={4} p={6} bg="healthcare.50" borderRadius="xl" border="1px solid" borderColor="healthcare.200">
                <Icon as={FaPhone} w={8} h={8} color="healthcare.600" />
                <Heading size="md" color="neutral.800">Phone</Heading>
                <Text color="neutral.600">
                  +91 8700242456
                </Text>
              </VStack>

              <VStack spacing={4} p={6} bg="finance.50" borderRadius="xl" border="1px solid" borderColor="finance.200">
                <Icon as={FaEnvelope} w={8} h={8} color="finance.600" />
                <Heading size="md" color="neutral.800">Email</Heading>
                <Text color="neutral.600">
                  hello@hospital.finance
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
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

export default Company;

