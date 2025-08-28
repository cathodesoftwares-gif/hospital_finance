import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  FaFileContract,
  FaGavel,
} from 'react-icons/fa';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="neutral.50" minH="100vh" display="flex" alignItems="center">
        <Container maxW="container.xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 8, lg: 12 }} alignItems="center">
            <VStack align={{ base: "center", lg: "start" }} spacing={{ base: 6, md: 8 }} textAlign={{ base: "center", lg: "left" }}>
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
                Terms & Conditions
              </Badge>
              <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} color="neutral.800" lineHeight="1.1" fontWeight="medium">
                Terms of Service
                <Text as="span" color="brand.600" display="block">Agreement</Text>
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" lineHeight="1.6">
                Please read these terms and conditions carefully before using our services. 
                By using Hospital.Finance, you agree to be bound by these terms.
              </Text>
              <VStack spacing={4} pt={6} w={{ base: 'full', lg: 'auto' }} align={{ base: "center", lg: "start" }}>
                <Button size={{ base: "md", md: "lg" }} colorScheme="brand" bg="brand.500" _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }} transition="all 0.2s" px={{ base: 6, md: 8 }} py={{ base: 4, md: 6 }} fontSize={{ base: "md", md: "lg" }} rounded="full" w={{ base: 'full', lg: 'auto' }}>
                  Contact Legal Team
                </Button>
              </VStack>
            </VStack>

            <Box bg="white" p={{ base: 6, md: 8 }} borderRadius="xl" border="1px solid" borderColor="gray.200" boxShadow="lg">
              <VStack spacing={8}>
                <Heading size="lg" color="neutral.800" textAlign="center">Terms Overview</Heading>
                <SimpleGrid columns={2} spacing={6} w="full">
                  <VStack spacing={2}>
                    <Icon as={FaFileContract} w={8} h={8} color="brand.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="brand.600">2025</Text>
                    <Text fontSize="sm" color="neutral.600" textAlign="center">Last Updated</Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Icon as={FaGavel} w={8} h={8} color="healthcare.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="healthcare.600">India</Text>
                    <Text fontSize="sm" color="neutral.600" textAlign="center">Jurisdiction</Text>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

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

      {/* Footer */}
      <Box bg="neutral.900" color="white" py={16}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <Box>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={8} mb={8}>
              <VStack align={{ base: "center", md: "start" }} spacing={6} w="full">
                <VStack align={{ base: "center", md: "start" }} spacing={4}>
                  <HStack spacing={3}>
                    <Box w={12} h={12} bg="brand.500" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                      <Text fontSize="sm" fontWeight="bold" color="white">HF</Text>
                    </Box>
                    <VStack align="start" spacing={0}>
                      <Text fontSize="xl" fontWeight="bold" color="white">Hospital.Finance</Text>
                      <Text fontSize="sm" color="brand.400">Transforming Healthcare Finance</Text>
                    </VStack>
                  </HStack>
                  <Text color="neutral.400" fontSize="md" textAlign={{ base: "center", md: "left" }}>
                    Empowering hospitals with innovative financial solutions and AI-powered analytics.
                  </Text>
                </VStack>
              </VStack>

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

            <VStack align={{ base: "center", md: "start" }} spacing={4} mb={8} textAlign={{ base: "center", md: "left" }}>
              <Text color="neutral.500" fontSize="md">
                24-hour loan approval • 0% success rate • AI-powered risk assessment
              </Text>
            </VStack>
          </Box>

          <Box borderTop="1px solid" borderColor="neutral.700" pt={6} textAlign={{ base: "center", md: "left" }}>
            <Text color="neutral.400" fontSize="sm">
              © 2025 by Hospital.Finance. All Rights reserved.
            </Text>
          </Box>
        </Container>
        
        <Box bg="brand.500" h="4px" w="full" />
      </Box>
    </Box>
  );
};

export default Terms;

