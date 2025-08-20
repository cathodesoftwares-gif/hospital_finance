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
  FaShieldAlt,
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
        bg="neutral.50" 
        minH="100vh" 
        display="flex" 
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 6, md: 8 }} textAlign="center">
            <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
              Strategic Partnerships
            </Badge>
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              color="neutral.800"
              lineHeight="1.1"
              fontWeight="medium"
              maxW="800px"
            >
              Partner with India's Leading
              <Text as="span" color="brand.600" display="block">Healthcare Finance Platform</Text>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="600px" lineHeight="1.6">
              Join our ecosystem of healthcare institutions, technology partners, and financial institutions 
              to transform hospital financing across India.
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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                w={{ base: 'full', md: 'auto' }}
              >
                Become a Partner
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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                w={{ base: 'full', md: 'auto' }}
              >
                View Partners
              </Button>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Our Lenders and Lending Partners Section - Matching Home Page Style */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            {/* Section Header - Matching Home Page Style */}
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="bold">
                Our Lenders and Lending Partners
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                We collaborate with leading financial institutions across India to provide comprehensive 
                hospital financing solutions with transparent terms and competitive rates.
              </Text>
            </VStack>

            {/* Detailed Lender Information Cards - Matching Home Page Problem Statement Style */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} w="full">
              {lenderDetails.map((lender, index) => (
                <Box
                  key={index}
                  bg="brand.50"
                  p={{ base: 6, md: 8 }}
                  borderRadius="xl"
                  boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                  border="1px solid"
                  borderColor="brand.200"
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
                        <Text fontSize="lg" fontWeight="bold" color="brand.600">
                          {lender.logoText}
                        </Text>
                        <Heading size="md" color="neutral.800" fontWeight="bold">
                          {lender.name}
                        </Heading>
                      </VStack>
                    </HStack>

                    {/* Contact Information */}
                    <VStack spacing={4} align="start" w="full">
                      <HStack spacing={3}>
                        <Icon as={FaExternalLinkAlt} color="brand.500" w={4} h={4} />
                        <Link href={lender.website} color="brand.500" isExternal fontWeight="medium">
                          {lender.website}
                        </Link>
                      </HStack>
                      
                      <HStack spacing={3}>
                        <Icon as={FaEnvelope} color="brand.500" w={4} h={4} />
                        <Link href={`mailto:${lender.email}`} color="brand.500" fontWeight="medium">
                          {lender.email}
                        </Link>
                      </HStack>
                      
                      <HStack spacing={3} align="start">
                        <Icon as={FaMapMarkerAlt} color="brand.500" w={4} h={4} mt={1} />
                        <Text color="neutral.600" fontSize="sm" lineHeight="1.5">
                          {lender.address}
                        </Text>
                      </HStack>
                      
                      {lender.grievanceOfficer && (
                        <HStack spacing={3}>
                          <Icon as={FaUserTie} color="brand.500" w={4} h={4} />
                          <Text color="neutral.600" fontSize="sm">
                            <strong>Grievance Redressal Officer:</strong> {lender.grievanceOfficer}
                          </Text>
                        </HStack>
                      )}
                      
                      <HStack spacing={3}>
                        <Icon as={FaShieldAlt} color="brand.500" w={4} h={4} />
                        <Link color="brand.500" fontSize="sm" fontWeight="medium">
                          {lender.grievancePolicy}
                        </Link>
                      </HStack>
                    </VStack>

                    {/* Stats Section - Matching Home Page Style */}
                    <Box pt={4} borderTop="1px solid" borderColor="brand.300" w="full">
                      <Text fontSize="sm" color="neutral.500" mb={2}>
                        Partnership Status
                      </Text>
                      <Text fontSize="xl" color="finance.500" fontWeight="bold">
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
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={12} mb={12} flex={1}>
              {/* Left Section - Contact */}
              <VStack align={{ base: "center", md: "start" }} spacing={6} textAlign={{ base: "center", md: "left" }}>
                <Text fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="wide">
                  Contact
                </Text>
                <VStack align={{ base: "center", md: "start" }} spacing={4}>
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
              <VStack align="center" spacing={6}>
                <Text fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="wide">
                  Services
                </Text>
                <VStack align="center" spacing={4}>
                  <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'brand.300' }} transition="color 0.2s">
                    Instant Loan Approval
                  </Text>
                  <Text color="neutral.400" fontSize="md" cursor="pointer" _hover={{ color: 'healthcare.300' }} transition="color 0.2s">
                    AI Analytics Platform
                  </Text>
                </VStack>
              </VStack>

              {/* Right Section - Menu */}
              <VStack align={{ base: "center", md: "end" }} spacing={6} textAlign={{ base: "center", md: "right" }}>
                <Text fontSize="xl" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="wide">
                  Menu
                </Text>
                <VStack align={{ base: "center", md: "end" }} spacing={4}>
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

export default Partners;
