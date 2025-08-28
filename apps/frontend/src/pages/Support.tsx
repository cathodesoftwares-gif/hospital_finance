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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { 
  FaHeadset,
  FaEnvelope,
  FaPhone,
  FaComments,
} from 'react-icons/fa';

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData = [
    {
      question: "How do I apply for a loan?",
      answer: "You can apply for a loan through our online application portal. Simply fill out the required information, upload necessary documents, and our AI system will process your application within 24 hours."
    },
    {
      question: "What documents are required for loan approval?",
      answer: "We require basic hospital information, financial statements, and identification documents. Our team will guide you through the specific requirements based on your loan type."
    },
    {
      question: "How long does loan approval take?",
      answer: "Our AI-powered system processes applications within 24 hours. Once approved, funds are typically disbursed within 48-72 hours."
    },
    {
      question: "What are the interest rates?",
      answer: "Interest rates vary based on loan type, amount, and hospital profile. Our rates typically range from 12% to 22% annually, competitive with market standards."
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="neutral.50" minH="100vh" display="flex" alignItems="center">
        <Container maxW="container.xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 8, lg: 12 }} alignItems="center">
            <VStack align={{ base: "center", lg: "start" }} spacing={{ base: 6, md: 8 }} textAlign={{ base: "center", lg: "left" }}>
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
                Customer Support
              </Badge>
              <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} color="neutral.800" lineHeight="1.1" fontWeight="medium">
                We're Here to
                <Text as="span" color="brand.600" display="block">Help You Succeed</Text>
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" lineHeight="1.6">
                Get the support you need to make the most of our healthcare finance platform. 
                Our expert team is ready to assist you 24/7.
              </Text>
              <VStack spacing={4} pt={6} w={{ base: 'full', lg: 'auto' }} align={{ base: "center", lg: "start" }}>
                <Button size={{ base: "md", md: "lg" }} colorScheme="brand" bg="brand.500" _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }} transition="all 0.2s" px={{ base: 6, md: 8 }} py={{ base: 4, md: 6 }} fontSize={{ base: "md", md: "lg" }} rounded="full" w={{ base: 'full', lg: 'auto' }}>
                  Contact Support
                </Button>
              </VStack>
            </VStack>

            <Box bg="white" p={{ base: 6, md: 8 }} borderRadius="xl" border="1px solid" borderColor="gray.200" boxShadow="lg">
              <VStack spacing={8}>
                <Heading size="lg" color="neutral.800" textAlign="center">Support Overview</Heading>
                <SimpleGrid columns={2} spacing={6} w="full">
                  <VStack spacing={2}>
                    <Icon as={FaHeadset} w={8} h={8} color="brand.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="brand.600">24/7</Text>
                    <Text fontSize="sm" color="neutral.600" textAlign="center">Support Available</Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Icon as={FaComments} w={8} h={8} color="healthcare.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="healthcare.600">{"<5min"}</Text>
                    <Text fontSize="sm" color="neutral.600" textAlign="center">Response Time</Text>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box bg="neutral.50" py={20}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" maxW="800px">
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
                Common Questions
              </Badge>
              <Heading size="2xl" color="neutral.800" fontWeight="medium">
                Frequently Asked Questions
              </Heading>
            </VStack>

            <Box w="full" maxW="800px">
              <Accordion allowToggle>
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} border="1px solid" borderColor="gray.200" borderRadius="lg" mb={4}>
                    <h2>
                      <AccordionButton py={6} px={6} _expanded={{ bg: 'brand.50' }}>
                        <Box flex="1" textAlign="left" fontWeight="medium" color="neutral.800">
                          {faq.question}
                        </Box>
                        <AccordionIcon color="brand.500" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={6} px={6} color="neutral.600" lineHeight="1.6">
                      {faq.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
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
                Contact Our Support Team
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <VStack spacing={4} p={6} bg="brand.50" borderRadius="xl" border="1px solid" borderColor="brand.200">
                <Icon as={FaPhone} w={8} h={8} color="brand.600" />
                <Heading size="md" color="neutral.800">Phone Support</Heading>
                <Text color="neutral.600">+91 98765 43210</Text>
                <Text fontSize="sm" color="neutral.500">Available 24/7</Text>
              </VStack>

              <VStack spacing={4} p={6} bg="healthcare.50" borderRadius="xl" border="1px solid" borderColor="healthcare.200">
                <Icon as={FaEnvelope} w={8} h={8} color="healthcare.600" />
                <Heading size="md" color="neutral.800">Email Support</Heading>
                <Text color="neutral.600">support@hospital.finance</Text>
                <Text fontSize="sm" color="neutral.500">Response within 2 hours</Text>
              </VStack>

              <VStack spacing={4} p={6} bg="finance.50" borderRadius="xl" border="1px solid" borderColor="finance.200">
                <Icon as={FaComments} w={8} h={8} color="finance.600" />
                <Heading size="md" color="neutral.800">Live Chat</Heading>
                <Text color="neutral.600">Available on website</Text>
                <Text fontSize="sm" color="neutral.500">Instant response</Text>
              </VStack>
            </SimpleGrid>
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

export default Support;
