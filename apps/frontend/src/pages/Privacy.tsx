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
  FaShieldAlt,
  FaLock,
} from 'react-icons/fa';

const Privacy = () => {
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
                Privacy & Security
              </Badge>
              <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} color="neutral.800" lineHeight="1.1" fontWeight="medium">
                Your Privacy is Our
                <Text as="span" color="brand.600" display="block">Top Priority</Text>
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" lineHeight="1.6">
                We are committed to protecting your privacy and ensuring the security of your data. 
                Learn how we collect, use, and safeguard your information.
              </Text>
              <VStack spacing={4} pt={6} w={{ base: 'full', lg: 'auto' }} align={{ base: "center", lg: "start" }}>
                <Button size={{ base: "md", md: "lg" }} colorScheme="brand" bg="brand.500" _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }} transition="all 0.2s" px={{ base: 6, md: 8 }} py={{ base: 4, md: 6 }} fontSize={{ base: "md", md: "lg" }} rounded="full" w={{ base: 'full', lg: 'auto' }}>
                  Contact Privacy Team
                </Button>
              </VStack>
            </VStack>

            <Box bg="white" p={{ base: 6, md: 8 }} borderRadius="xl" border="1px solid" borderColor="gray.200" boxShadow="lg">
              <VStack spacing={8}>
                <Heading size="lg" color="neutral.800" textAlign="center">Privacy Overview</Heading>
                <SimpleGrid columns={2} spacing={6} w="full">
                  <VStack spacing={2}>
                    <Icon as={FaShieldAlt} w={8} h={8} color="brand.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="brand.600">HIPAA</Text>
                    <Text fontSize="sm" color="neutral.600" textAlign="center">Compliant</Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Icon as={FaLock} w={8} h={8} color="healthcare.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="healthcare.600">256-bit</Text>
                    <Text fontSize="sm" color="neutral.600" textAlign="center">Encryption</Text>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

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

export default Privacy;

