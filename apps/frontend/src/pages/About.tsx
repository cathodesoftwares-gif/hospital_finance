import React, { useEffect } from 'react';
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
  Image,
  Avatar,
  AvatarGroup,
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
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                About Hospital.Finance
              </Badge>
              <Heading
                as="h1"
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                color="neutral.800"
                lineHeight="1.1"
                fontWeight="medium"
              >
                Transforming Healthcare
                <Text as="span" color="brand.600" display="block">Through Innovation</Text>
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" lineHeight="1.6">
                We're on a mission to revolutionize healthcare financing by providing hospitals with 
                AI-powered solutions that drive growth, improve patient care, and ensure financial stability.
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
                  Learn More
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
                >
                  Contact Us
                </Button>
              </VStack>
            </VStack>

            {/* Right - Team Image */}
            <Box
              bg="white"
              p={{ base: 4, md: 6 }}
              borderRadius="xl"
              border="1px solid"
              borderColor="neutral.200"
              position="relative"
              overflow="hidden"
              boxShadow="0 10px 25px rgba(0, 0, 0, 0.1)"
            >
              <VStack spacing={6} align="stretch">
                {/* Team Members */}
                <Box textAlign="center">
                  <AvatarGroup size="lg" max={4} mb={4}>
                    <Avatar name="Team Member 1" bg="brand.500" />
                    <Avatar name="Team Member 2" bg="healthcare.500" />
                    <Avatar name="Team Member 3" bg="finance.500" />
                    <Avatar name="Team Member 4" bg="accent.500" />
                  </AvatarGroup>
                  <Text color="neutral.600" fontSize="sm" fontWeight="medium">
                    Our Dedicated Team
                  </Text>
                </Box>

                {/* Stats */}
                <SimpleGrid columns={2} spacing={4}>
                  <Box bg="brand.50" p={4} borderRadius="lg" border="1px solid" borderColor="brand.200">
                    <VStack spacing={2}>
                      <Text color="brand.600" fontSize="2xl" fontWeight="bold">0</Text>
                      <Text color="neutral.600" fontSize="sm">Team Members</Text>
                    </VStack>
                  </Box>
                  <Box bg="healthcare.50" p={4} borderRadius="lg" border="1px solid" borderColor="healthcare.200">
                    <VStack spacing={2}>
                      <Text color="healthcare.600" fontSize="2xl" fontWeight="bold">500+</Text>
                      <Text color="neutral.600" fontSize="sm">Hospitals Served</Text>
                    </VStack>
                  </Box>
                </SimpleGrid>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="medium">
                Our Mission & Vision
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                Empowering hospitals with innovative financial solutions to deliver better patient care
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} w="full">
              {/* Mission */}
              <Box
                bg="brand.50"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="brand.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s' }}
              >
                <Box
                  bg="brand.100"
                  w={16}
                  h={16}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <Icon as={FaRocket} w={8} h={8} color="brand.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Our Mission
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  To revolutionize healthcare financing by providing hospitals with AI-powered solutions 
                  that ensure financial stability while enabling them to focus on delivering exceptional patient care.
                </Text>
              </Box>

              {/* Vision */}
              <Box
                bg="healthcare.50"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="healthcare.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s' }}
              >
                <Box
                  bg="healthcare.100"
                  w={16}
                  h={16}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <Icon as={FaGlobe} w={8} h={8} color="healthcare.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Our Vision
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  To become the leading platform that transforms how hospitals manage their finances, 
                  making quality healthcare accessible to everyone through innovative technology.
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py={{ base: 12, md: 20 }} bg="neutral.50">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="medium">
                Our Core Values
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                The principles that guide everything we do
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }} w="full">
              {/* Innovation */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <Box
                  bg="brand.100"
                  w={16}
                  h={16}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <Icon as={FaLightbulb} w={8} h={8} color="brand.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Innovation
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  We constantly push boundaries to create cutting-edge solutions that transform healthcare financing.
                </Text>
              </Box>

              {/* Trust */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <Box
                  bg="healthcare.100"
                  w={16}
                  h={16}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <Icon as={FaHandshake} w={8} h={8} color="healthcare.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Trust
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  We build lasting relationships based on transparency, reliability, and mutual respect.
                </Text>
              </Box>

              {/* Excellence */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <Box
                  bg="finance.100"
                  w={16}
                  h={16}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <Icon as={FaAward} w={8} h={8} color="finance.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Excellence
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  We strive for excellence in every aspect of our work, from technology to customer service.
                </Text>
              </Box>

              {/* Compassion */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <Box
                  bg="accent.100"
                  w={16}
                  h={16}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <Icon as={FaHeart} w={8} h={8} color="accent.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Compassion
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  We care deeply about the impact of our work on patients and healthcare providers.
                </Text>
              </Box>

              {/* Security */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <Box
                  bg="alert.100"
                  w={16}
                  h={16}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <Icon as={FaShieldAlt} w={8} h={8} color="alert.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Security
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  We prioritize the security and privacy of all data entrusted to our platform.
                </Text>
              </Box>

              {/* Collaboration */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <Box
                  bg="neutral.100"
                  w={16}
                  h={16}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={4}
                >
                  <Icon as={FaUsers} w={8} h={8} color="neutral.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Collaboration
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  We believe in the power of teamwork and partnerships to achieve greater impact.
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Team Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="medium">
                Meet Our Founders
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                Visionary leaders dedicated to transforming healthcare financing
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} w="full">
              {/* Naman Raghuvanshi */}
              <Box
                bg="neutral.50"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <Avatar size="xl" name="Naman Raghuvanshi" bg="brand.500" mb={4} />
                <Heading size="md" color="neutral.800" mb={2}>
                  Naman Raghuvanshi
                </Heading>
                <Text color="brand.600" fontSize="sm" fontWeight="medium" mb={3}>
                  Founder
                </Text>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6" mb={4}>
                  Passionate entrepreneur with a vision to revolutionize healthcare financing through innovative technology solutions.
                </Text>
                <HStack spacing={3} justify="center">
                  <Icon as={FaLinkedin} color="brand.500" cursor="pointer" _hover={{ color: 'brand.600' }} />
                  <Icon as={FaTwitter} color="brand.500" cursor="pointer" _hover={{ color: 'brand.600' }} />
                </HStack>
              </Box>

              {/* Tarapreet Singh */}
              <Box
                bg="neutral.50"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <Avatar size="xl" name="Tarapreet Singh" bg="healthcare.500" mb={4} />
                <Heading size="md" color="neutral.800" mb={2}>
                  Tarapreet Singh
                </Heading>
                <Text color="healthcare.600" fontSize="sm" fontWeight="medium" mb={3}>
                  Founder
                </Text>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6" mb={4}>
                  Strategic leader committed to building sustainable healthcare financing solutions that benefit hospitals and patients alike.
                </Text>
                <HStack spacing={3} justify="center">
                  <Icon as={FaLinkedin} color="healthcare.500" cursor="pointer" _hover={{ color: 'healthcare.600' }} />
                  <Icon as={FaTwitter} color="healthcare.500" cursor="pointer" _hover={{ color: 'healthcare.600' }} />
                </HStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={{ base: 12, md: 20 }} bg="brand.50">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="medium">
                Our Impact in Numbers
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                Transforming healthcare financing across the country
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 6, md: 8 }} w="full">
              {/* Hospitals Served */}
              <Box
                bg="white"
                p={6}
                borderRadius="xl"
                border="1px solid"
                borderColor="brand.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'md', transition: 'all 0.3s' }}
              >
                <Box
                  bg="brand.100"
                  w={12}
                  h={12}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={3}
                >
                  <Icon as={FaHospital} w={6} h={6} color="brand.600" />
                </Box>
                <Heading size="lg" color="neutral.800" mb={2}>
                  0
                </Heading>
                <Text color="neutral.600" fontSize="sm" fontWeight="medium">
                  Hospitals Served
                </Text>
              </Box>

              {/* Loans Disbursed */}
              <Box
                bg="white"
                p={6}
                borderRadius="xl"
                border="1px solid"
                borderColor="healthcare.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'md', transition: 'all 0.3s' }}
              >
                <Box
                  bg="healthcare.100"
                  w={12}
                  h={12}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={3}
                >
                  <Icon as={FaChartLine} w={6} h={6} color="healthcare.600" />
                </Box>
                <Heading size="lg" color="neutral.800" mb={2}>
                  ₹0
                </Heading>
                <Text color="neutral.600" fontSize="sm" fontWeight="medium">
                  Loans Disbursed
                </Text>
              </Box>

              {/* Success Rate */}
              <Box
                bg="white"
                p={6}
                borderRadius="xl"
                border="1px solid"
                borderColor="finance.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'md', transition: 'all 0.3s' }}
              >
                <Box
                  bg="finance.100"
                  w={12}
                  h={12}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={3}
                >
                  <Icon as={FaAward} w={6} h={6} color="finance.600" />
                </Box>
                <Heading size="lg" color="neutral.800" mb={2}>
                  0%
                </Heading>
                <Text color="neutral.600" fontSize="sm" fontWeight="medium">
                  Success Rate
                </Text>
              </Box>

              {/* Team Size */}
              <Box
                bg="white"
                p={6}
                borderRadius="xl"
                border="1px solid"
                borderColor="accent.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'md', transition: 'all 0.3s' }}
              >
                <Box
                  bg="accent.100"
                  w={12}
                  h={12}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={3}
                >
                  <Icon as={FaUsers} w={6} h={6} color="accent.600" />
                </Box>
                <Heading size="lg" color="neutral.800" mb={2}>
                  0
                </Heading>
                <Text color="neutral.600" fontSize="sm" fontWeight="medium">
                  Team Members
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 12, md: 20 }} bg="neutral.900">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={8} textAlign="center">
            <VStack spacing={6}>
              <Heading size={{ base: "xl", md: "2xl" }} color="white" fontWeight="medium">
                Join Us in Transforming Healthcare
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.400" maxW="800px" lineHeight="1.6">
                Be part of the revolution in healthcare financing. Let's work together to create a better future for hospitals and patients.
              </Text>
            </VStack>
            
            <HStack spacing={4} flexWrap="wrap" justify="center">
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
              >
                Get Started
              </Button>
              <Button
                size={{ base: "md", md: "lg" }}
                variant="outline"
                color="neutral.400"
                borderColor="neutral.400"
                _hover={{ 
                  bg: 'neutral.100', 
                  color: 'neutral.800',
                  borderColor: 'neutral.600'
                }}
                transition="all 0.2s"
                px={{ base: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "md", md: "lg" }}
                rounded="full"
              >
                Contact Us
              </Button>
            </HStack>
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
                  <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                    Instant Loan Approval
                  </Text>
                  <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'healthcare.300' }} transition="color 0.2s">
                    AI Analytics Platform
                  </Text>
                </VStack>
              </VStack>

              {/* Right Section - Menu */}
              <VStack align={{ base: "center", md: "end" }} spacing={6} w="full" textAlign={{ base: "center", md: "right" }}>
                <Text fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="wide">
                  Menu
                </Text>
                <VStack align={{ base: "center", md: "end" }} spacing={4} w="full">
                  <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                    Company
                  </Text>
                  <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                    Support
                  </Text>
                  <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                    Privacy Policy
                  </Text>
                  <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                    Terms of Service
                  </Text>
                </VStack>
              </VStack>
            </Grid>

            {/* Bottom Section - Additional Info */}
            <VStack align={{ base: "center", md: "start" }} spacing={4} mb={8} textAlign={{ base: "center", md: "left" }}>
              <Text color="neutral.500" fontSize="md">
                24-hour loan approval • 98% success rate • AI-powered risk assessment
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

export default About;
