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

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      {/* Terms Content */}
      <Box bg="white" py={20}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={16} align="start">
            <VStack spacing={6} textAlign="center" maxW="800px" align="center">
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
                Terms of Service
              </Badge>
              <Heading size="2xl" color="neutral.800" fontWeight="medium">
                Our Terms & Conditions
              </Heading>
            </VStack>

            <VStack spacing={12} align="start" w="full">
              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>1. Acceptance of Terms</Heading>
                <Text color="neutral.600" lineHeight="1.7">
                  By accessing and using Hospital.Finance services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </Text>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>2. Description of Service</Heading>
                <Text color="neutral.600" lineHeight="1.7" mb={4}>
                  Hospital.Finance provides healthcare financing solutions including:
                </Text>
                <VStack align="start" spacing={3} pl={6}>
                  <Text color="neutral.600">• Loan application processing and approval</Text>
                  <Text color="neutral.600">• AI-powered financial analytics</Text>
                  <Text color="neutral.600">• Healthcare financial management tools</Text>
                  <Text color="neutral.600">• Integration with hospital management systems</Text>
                </VStack>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>3. User Eligibility</Heading>
                <Text color="neutral.600" lineHeight="1.7" mb={4}>
                  To use our services, you must:
                </Text>
                <VStack align="start" spacing={3} pl={6}>
                  <Text color="neutral.600">• Be a registered healthcare institution in India</Text>
                  <Text color="neutral.600">• Have valid business registration and licenses</Text>
                  <Text color="neutral.600">• Provide accurate and complete information</Text>
                  <Text color="neutral.600">• Comply with all applicable laws and regulations</Text>
                </VStack>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>4. User Responsibilities</Heading>
                <Text color="neutral.600" lineHeight="1.7" mb={4}>
                  As a user of our services, you agree to:
                </Text>
                <VStack align="start" spacing={3} pl={6}>
                  <Text color="neutral.600">• Provide accurate and truthful information</Text>
                  <Text color="neutral.600">• Maintain the security of your account credentials</Text>
                  <Text color="neutral.600">• Use the service only for lawful purposes</Text>
                  <Text color="neutral.600">• Not attempt to gain unauthorized access to our systems</Text>
                  <Text color="neutral.600">• Report any security concerns immediately</Text>
                </VStack>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>5. Privacy and Data Protection</Heading>
                <Text color="neutral.600" lineHeight="1.7">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                  to understand our practices regarding the collection and use of your information.
                </Text>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>6. Intellectual Property</Heading>
                <Text color="neutral.600" lineHeight="1.7">
                  All content, features, and functionality of Hospital.Finance, including but not limited to text, graphics, 
                  logos, and software, are owned by Hospital.Finance and are protected by copyright, trademark, and other 
                  intellectual property laws.
                </Text>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>7. Limitation of Liability</Heading>
                <Text color="neutral.600" lineHeight="1.7">
                  Hospital.Finance shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from 
                  your use of the service.
                </Text>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>8. Termination</Heading>
                <Text color="neutral.600" lineHeight="1.7">
                  We may terminate or suspend your account and access to our services immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the Terms.
                </Text>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>9. Governing Law</Heading>
                <Text color="neutral.600" lineHeight="1.7">
                  These Terms shall be interpreted and governed by the laws of India. Any disputes arising from these terms 
                  shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </Text>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>10. Changes to Terms</Heading>
                <Text color="neutral.600" lineHeight="1.7">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide 
                  at least 30 days notice prior to any new terms taking effect.
                </Text>
              </Box>

              <Box>
                <Heading size="lg" color="neutral.800" mb={6}>Contact Information</Heading>
                <Text color="neutral.600" lineHeight="1.7">
                  If you have any questions about these Terms of Service, please contact us at legal@hospital.finance 
                  or call us at +91 98765 43210.
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

export default Terms;

