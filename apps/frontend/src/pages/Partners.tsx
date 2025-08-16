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
  Link,
  Grid,
} from '@chakra-ui/react';
import { 
  FaHandshake, 
  FaShieldAlt,
  FaUsers,
  FaExternalLinkAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie
} from 'react-icons/fa';
import React, { useEffect } from 'react';

const Partners = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lenderDetails = [
    {
      name: 'Bajaj Finserv Limited',
      logoText: 'BAJAJ FINSERV',
      website: 'https://www.bajajfinserv.in/',
      email: 'wecare@bajajfinserv.in',
      address: '3rd Floor, Panchshil Tech Park Plot 43/1, 43/2 & 44/2, Viman Nagar Pune, Maharashtra, 411014',
      grievanceOfficer: '',
      grievancePolicy: 'View Policy',
      color: 'blue'
    },
    {
      name: 'Hindon Mercantile Limited',
      logoText: 'HINDON MERCANTILE LIMITED',
      website: 'https://hindon.co',
      email: 'helpdesk@mufinfinance.com',
      address: '201-202, 2nd Floor, Best Sky Tower, Plot no F5, Netaji Subhash Place, Pitampura, New Delhi -110034',
      grievanceOfficer: 'Ms. Savita Bhogra',
      grievancePolicy: 'View Policy',
      color: 'red'
    },
    {
      name: 'Mufin Green Finance Limited',
      logoText: 'MUFIN',
      website: 'https://mufingreenfinance.com/',
      email: 'info@mufinfinance.com',
      address: '202, 2nd Floor, Best Sky Tower, Netaji Subhash Place, Pitampura, New Delhi -110034',
      grievanceOfficer: 'Ms. Savita Bhogra',
      grievancePolicy: 'View Policy',
      color: 'green'
    },
    {
      name: 'Prateek Securities Private Limited',
      logoText: 'Prateek',
      website: 'https://prateeksecurities.in',
      email: 'prateeksecurities@gmail.com',
      address: '901 A, 9th FLOOR, Devika Tower Nehru Place Market Road South East Delhi 110019',
      grievanceOfficer: 'Mr. Nabin Pradhan',
      grievancePolicy: 'View Policy',
      color: 'blue'
    }
  ];

  return (
    <Box>
      {/* Hero Section - Matching Home Page Style */}
      <Box 
        bg="gray.900" 
        minH="100vh" 
        display="flex" 
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl" py={20}>
          <VStack spacing={8} textAlign="center">
            <Badge colorScheme="purple" px={4} py={2} borderRadius="full" fontSize="sm">
              Strategic Partnerships
            </Badge>
            <Heading
              as="h1"
              size="4xl"
              color="white"
              lineHeight="1.1"
              fontWeight="bold"
              maxW="800px"
            >
              Partner with India's Leading
              <Text as="span" color="purple.400" display="block">Hospital Finance Platform</Text>
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="600px" lineHeight="1.6">
              Join our ecosystem of healthcare institutions, technology partners, and financial institutions 
              to transform hospital financing across India.
            </Text>
            <HStack spacing={4} pt={6}>
              <Button 
                size="lg" 
                colorScheme="purple" 
                leftIcon={<FaHandshake />}
                bg="purple.400"
                _hover={{ bg: 'purple.500', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                px={8}
                py={6}
                fontSize="lg"
                rounded="full"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Become a Partner
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                leftIcon={<FaUsers />}
                color="white"
                borderColor="gray.400"
                _hover={{ 
                  bg: 'white', 
                  color: 'gray.900',
                  borderColor: 'white'
                }}
                transition="all 0.2s"
                px={8}
                py={6}
                fontSize="lg"
                rounded="full"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                View Partners
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Our Lenders and Lending Partners Section - Matching Home Page Style */}
      <Box py={20} bg="gray.900">
        <Container maxW="container.xl">
          <VStack spacing={16}>
            {/* Section Header - Matching Home Page Style */}
            <VStack spacing={6} textAlign="center">
              <Heading size="2xl" color="white" fontWeight="bold">
                Our Lenders and Lending Partners
              </Heading>
              <Text fontSize="xl" color="gray.300" maxW="800px" lineHeight="1.6">
                We collaborate with leading financial institutions across India to provide comprehensive 
                hospital financing solutions with transparent terms and competitive rates.
              </Text>
            </VStack>

            {/* Detailed Lender Information Cards - Matching Home Page Problem Statement Style */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {lenderDetails.map((lender, index) => (
                <Box
                  key={index}
                  bg="purple.50"
                  p={8}
                  borderRadius="xl"
                  boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                  border="1px solid"
                  borderColor="purple.100"
                  _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s' }}
                >
                  <VStack spacing={6} align="start">
                    {/* Logo and Company Name */}
                    <HStack spacing={4} align="center">
                      <Box
                        bg={`${lender.color}.100`}
                        p={4}
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text fontSize="xl" fontWeight="bold" color={`${lender.color}.600`}>
                          {lender.logoText.charAt(0)}
                        </Text>
                      </Box>
                      <VStack align="start" spacing={1}>
                        <Text fontSize="lg" fontWeight="bold" color={`${lender.color}.600`}>
                          {lender.logoText}
                        </Text>
                        <Heading size="md" color="gray.800" fontWeight="bold">
                          {lender.name}
                        </Heading>
                      </VStack>
                    </HStack>

                    {/* Contact Information */}
                    <VStack spacing={4} align="start" w="full">
                      <HStack spacing={3}>
                        <Icon as={FaExternalLinkAlt} color="blue.500" w={4} h={4} />
                        <Link href={lender.website} color="blue.500" isExternal fontWeight="medium">
                          {lender.website}
                        </Link>
                      </HStack>
                      
                      <HStack spacing={3}>
                        <Icon as={FaEnvelope} color="blue.500" w={4} h={4} />
                        <Link href={`mailto:${lender.email}`} color="blue.500" fontWeight="medium">
                          {lender.email}
                        </Link>
                      </HStack>
                      
                      <HStack spacing={3} align="start">
                        <Icon as={FaMapMarkerAlt} color="blue.500" w={4} h={4} mt={1} />
                        <Text color="gray.600" fontSize="sm" lineHeight="1.5">
                          {lender.address}
                        </Text>
                      </HStack>
                      
                      {lender.grievanceOfficer && (
                        <HStack spacing={3}>
                          <Icon as={FaUserTie} color="blue.500" w={4} h={4} />
                          <Text color="gray.600" fontSize="sm">
                            <strong>Grievance Redressal Officer:</strong> {lender.grievanceOfficer}
                          </Text>
                        </HStack>
                      )}
                      
                      <HStack spacing={3}>
                        <Icon as={FaShieldAlt} color="blue.500" w={4} h={4} />
                        <Link color="blue.500" fontSize="sm" fontWeight="medium">
                          {lender.grievancePolicy}
                        </Link>
                      </HStack>
                    </VStack>

                    {/* Stats Section - Matching Home Page Style */}
                    <Box pt={4} borderTop="1px solid" borderColor="purple.200" w="full">
                      <Text fontSize="sm" color="gray.500" mb={2}>
                        Partnership Status
                      </Text>
                      <Text fontSize="xl" color="green.500" fontWeight="bold">
                        Active Partner
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Footer Section - Same as Home Page */}
      <Box bg="gray.900" borderTop="1px solid" borderColor="gray.700" minH="70vh" display="flex" flexDirection="column">
        <Container maxW="container.xl" py={12} flex={1} display="flex" flexDirection="column" justifyContent="space-between">
          {/* Main Content - Spread Out */}
          <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between" py={8}>
            {/* Top Section - Logo and Brand */}
            <VStack align="start" spacing={6} mb={12}>
              <HStack spacing={4}>
                <Box
                  w={16}
                  h={16}
                  bg="purple.400"
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
                <VStack align="start" spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    HOSPITAL.FINANCE
                  </Text>
                  <Text color="purple.400" fontSize="sm" fontWeight="medium">
                    AI-Powered Hospital Financing Platform
                  </Text>
                </VStack>
              </HStack>
              <Text color="gray.400" fontSize="lg" lineHeight="1.7" maxW="400px">
                Reach out to us to explore how Hospital.Finance can transform your hospital's financial future with AI-driven solutions.
              </Text>
            </VStack>

            {/* Middle Section - Three Columns Spread Out */}
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={12} mb={12} flex={1}>
              {/* Left Section - Contact */}
              <VStack align="start" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="wide">
                  Contact
                </Text>
                <VStack align="start" spacing={4}>
                  <Text color="gray.400" fontSize="md">
                    Get in touch with our team
                  </Text>
                  <HStack spacing={4}>
                    <Box
                      w={12}
                      h={12}
                      bg="white"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      _hover={{ bg: 'gray.200', transform: 'scale(1.1)' }}
                      transition="all 0.2s"
                    >
                      <Text fontSize="sm" fontWeight="bold" color="gray.800">
                        in
                      </Text>
                    </Box>
                    <Box
                      w={12}
                      h={12}
                      bg="white"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      _hover={{ bg: 'gray.200', transform: 'scale(1.1)' }}
                      transition="all 0.2s"
                    >
                      <Text fontSize="sm" fontWeight="bold" color="gray.800">
                        <span role="img" aria-label="Camera">📷</span>
                      </Text>
                    </Box>
                  </HStack>
                  <Text color="gray.400" fontSize="md" fontWeight="medium">
                    https://www.hospital.finance
                  </Text>
                </VStack>
              </VStack>

              {/* Middle Section - Services */}
              <VStack align="center" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="wide">
                  Services
                </Text>
                <VStack align="center" spacing={4}>
                  <Text color="gray.400" fontSize="md" cursor="pointer" _hover={{ color: 'white' }} transition="color 0.2s">
                    Instant Loan Approval
                  </Text>
                  <Text color="gray.400" fontSize="md" cursor="pointer" _hover={{ color: 'white' }} transition="color 0.2s">
                    AI Analytics Platform
                  </Text>
                </VStack>
              </VStack>

              {/* Right Section - Menu */}
              <VStack align="end" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="wide">
                  Menu
                </Text>
                <VStack align="end" spacing={4}>
                  <Text color="gray.400" fontSize="md" cursor="pointer" _hover={{ color: 'white' }} transition="color 0.2s">
                    Company
                  </Text>
                  <Text color="gray.400" fontSize="md" cursor="pointer" _hover={{ color: 'white' }} transition="color 0.2s">
                    Support
                  </Text>
                  <Text color="gray.400" fontSize="md" cursor="pointer" _hover={{ color: 'white' }} transition="color 0.2s">
                    Privacy Policy
                  </Text>
                  <Text color="gray.400" fontSize="md" cursor="pointer" _hover={{ color: 'white' }} transition="color 0.2s">
                    Terms of Service
                  </Text>
                </VStack>
              </VStack>
            </Grid>

            {/* Bottom Section - Additional Info */}
            <VStack align="start" spacing={4} mb={8}>
              <Text color="gray.500" fontSize="md">
                24-hour loan approval • 98% success rate • AI-powered risk assessment
              </Text>
            </VStack>
          </Box>

          {/* Copyright Section */}
          <Box borderTop="1px solid" borderColor="gray.700" pt={6}>
            <Text color="gray.400" fontSize="sm">
              © 2025 by Hospital.Finance. All Rights reserved.
            </Text>
          </Box>
        </Container>
        
        {/* Blue Bar at Bottom */}
        <Box bg="blue.600" h="4px" w="full" />
      </Box>
    </Box>
  );
};

export default Partners;
