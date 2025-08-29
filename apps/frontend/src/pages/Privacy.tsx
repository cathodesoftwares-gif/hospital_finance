import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Grid,
} from '@chakra-ui/react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      {/* Privacy Policy Content */}
      <Box bg="white" py={20}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={16} align="start">
            <VStack spacing={6} textAlign="center" maxW="800px" align="center">
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
                Privacy Policy
              </Badge>
              <Heading size="2xl" color="neutral.800" fontWeight="medium">
                How We Protect Your Data
              </Heading>
            </VStack>

            <VStack spacing={12} align="start" w="full">
              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>Information We Collect</Heading>
                <Text color="neutral.600" lineHeight="1.7" mb={4}>
                  We collect information that you provide directly to us, such as when you create an account, 
                  apply for a loan, or contact our support team. This may include:
                </Text>
                <VStack align="start" spacing={3} pl={6}>
                  <Text color="neutral.600">• Personal identification information (name, email, phone number)</Text>
                  <Text color="neutral.600">• Hospital information and financial data</Text>
                  <Text color="neutral.600">• Documentation required for loan processing</Text>
                  <Text color="neutral.600">• Communication records and support interactions</Text>
                </VStack>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>How We Use Your Information</Heading>
                <Text color="neutral.600" lineHeight="1.7" mb={4}>
                  We use the information we collect to:
                </Text>
                <VStack align="start" spacing={3} pl={6}>
                  <Text color="neutral.600">• Process and evaluate loan applications</Text>
                  <Text color="neutral.600">• Provide customer support and respond to inquiries</Text>
                  <Text color="neutral.600">• Improve our services and develop new features</Text>
                  <Text color="neutral.600">• Comply with legal and regulatory requirements</Text>
                  <Text color="neutral.600">• Send important updates and notifications</Text>
                </VStack>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>Data Security</Heading>
                <Text color="neutral.600" lineHeight="1.7" mb={4}>
                  We implement comprehensive security measures to protect your data:
                </Text>
                <VStack align="start" spacing={3} pl={6}>
                  <Text color="neutral.600">• End-to-end encryption for all data transmission</Text>
                  <Text color="neutral.600">• Secure data centers with 24/7 monitoring</Text>
                  <Text color="neutral.600">• Regular security audits and penetration testing</Text>
                  <Text color="neutral.600">• Access controls and authentication protocols</Text>
                  <Text color="neutral.600">• HIPAA compliance for healthcare data</Text>
                </VStack>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>Data Sharing</Heading>
                <Text color="neutral.600" lineHeight="1.7" mb={4}>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </Text>
                <VStack align="start" spacing={3} pl={6}>
                  <Text color="neutral.600">• With your explicit consent</Text>
                  <Text color="neutral.600">• To comply with legal obligations</Text>
                  <Text color="neutral.600">• With trusted service providers who assist in our operations</Text>
                  <Text color="neutral.600">• To protect our rights and prevent fraud</Text>
                </VStack>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>Your Rights</Heading>
                <Text color="neutral.600" lineHeight="1.7" mb={4}>
                  You have the right to:
                </Text>
                <VStack align="start" spacing={3} pl={6}>
                  <Text color="neutral.600">• Access and review your personal information</Text>
                  <Text color="neutral.600">• Request corrections to inaccurate data</Text>
                  <Text color="neutral.600">• Request deletion of your data (subject to legal requirements)</Text>
                  <Text color="neutral.600">• Opt out of marketing communications</Text>
                  <Text color="neutral.600">• File a complaint with relevant authorities</Text>
                </VStack>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>Contact Us</Heading>
                <Text color="neutral.600" lineHeight="1.7">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at privacy@hospital.finance or call us at +91 98765 43210.
                </Text>
              </Box>
            </VStack>
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

export default Privacy;

