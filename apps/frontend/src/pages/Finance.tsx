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
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { 
  FaMoneyBillWave, 
  FaCalculator,
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaChartLine,
  FaHandshake,
  FaRocket,
  FaUsers,
  FaAward,
  FaArrowRight,
  FaHospital,
} from 'react-icons/fa';

const Finance = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loanProducts = [
    {
      name: 'Working Capital Loan',
      amount: '₹50 Lakhs - 1 CR',
      duration: '12-36 months',
      rate: '12-18%',
      icon: FaMoneyBillWave,
      color: 'blue',
      features: [
        'Quick disbursement within 24 hours',
        'No collateral required',
        'Flexible repayment options',
        'Minimal documentation'
      ]
    },
    {
      name: 'Equipment Financing',
      amount: '₹25 Lakhs - 2 CR',
      duration: '24-60 months',
      rate: '14-20%',
      icon: FaCalculator,
      color: 'green',
      features: [
        'Finance for medical equipment',
        'Equipment as collateral',
        'Extended repayment period',
        'Tax benefits available'
      ]
    },
    {
      name: 'Hospital Expansion Loan',
      amount: '₹1 CR - 5 CR',
      duration: '36-84 months',
      rate: '15-22%',
      icon: FaRocket,
      color: 'purple',
      features: [
        'Large amount financing',
        'Long-term repayment',
        'Property as collateral',
        'Structured disbursement'
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out our online application form with basic hospital information',
      icon: FaFileAlt,
      color: 'blue'
    },
    {
      step: 2,
      title: 'Document Upload',
      description: 'Upload required documents through our secure portal',
      icon: FaShieldAlt,
      color: 'green'
    },
    {
      step: 3,
      title: 'AI Assessment',
      description: 'Our AI analyzes your financial data and provides instant risk assessment',
      icon: FaChartLine,
      color: 'purple'
    },
    {
      step: 4,
      title: 'Approval & Disbursement',
      description: 'Get approved and receive funds in your account within 24 hours',
      icon: FaHandshake,
      color: 'orange'
    }
  ];

  const eligibilityCriteria = [
    'Hospital must be registered and operational for minimum 2 years',
    'Annual revenue should be above ₹50 Lakhs',
    'No major defaults in last 3 years',
    'Valid business licenses and certifications',
    'Complete financial documentation for last 2 years',
    'Bank statements for last 12 months'
  ];

  const requiredDocuments = [
    'Hospital registration certificate',
    'Business license and permits',
    'Financial statements (P&L, Balance Sheet)',
    'Bank statements (last 12 months)',
    'Income tax returns (last 2 years)',
    'GST registration and returns',
    'Property documents (if applicable)',
    'Equipment invoices (for equipment financing)'
  ];

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
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={{ base: 8, lg: 12 }} alignItems="center">
            {/* Left Section - Main Content */}
            <VStack align={{ base: "center", lg: "start" }} spacing={{ base: 6, md: 8 }} textAlign={{ base: "center", lg: "left" }}>
              <Heading
                as="h1"
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                color="neutral.800"
                lineHeight="1.1"
                fontWeight="medium"
                maxW="600px"
              >
                India's first AI powered
                <Text as="span" color="brand.600" display="block">Healthcare Credit Infrastructure</Text>
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="500px" lineHeight="1.6">
                Hospital.Finance speeds up the flow of money throughout India's healthcare ecosystem with instant access to working capital.
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
                  Sign Up
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
                  Log In
                </Button>
              </VStack>
            </VStack>

            {/* Right Section - Financing Details Card */}
            <Box
              bg="white"
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.15)"
              border="1px solid"
              borderColor="gray.200"
              position="relative"
              overflow="hidden"
            >
              <VStack spacing={6} align="stretch">
                {/* Header */}
                <Text color="gray.600" fontSize="sm" fontWeight="medium">
                  Hospital Partner
                </Text>
                
                {/* Partner Name & Status */}
                <HStack justify="space-between" align="center">
                  <Text color="gray.900" fontSize="lg" fontWeight="bold">
                    Jeevan Hospital, Delhi
                  </Text>
                  <Badge colorScheme="green" variant="solid" px={3} py={1} borderRadius="md" fontSize="xs">
                    Verified
                  </Badge>
                </HStack>
                
                {/* Insurance Claims Value */}
                <Box>
                  <Text color="gray.700" fontSize="sm" fontWeight="medium" mb={2}>
                    Insurance Claims Value
                  </Text>
                  <HStack justify="space-between" align="center" mb={2}>
                    <Box flex={1} bg="gray.200" h={3} borderRadius="full" overflow="hidden" mr={4}>
                      <Box bg="brand.600" h="full" w="85%" borderRadius="full" />
                    </Box>
                    <Text color="gray.900" fontSize="lg" fontWeight="bold">
                      ₹52,50,000
                    </Text>
                  </HStack>
                </Box>
                
                {/* Financing Metrics */}
                <SimpleGrid columns={2} spacing={4}>
                  <Box bg="gray.50" p={4} borderRadius="lg" border="1px solid" borderColor="gray.200">
                    <Text color="gray.600" fontSize="xs" fontWeight="medium" mb={1}>
                      Time to Financing
                    </Text>
                    <Text color="gray.900" fontSize="lg" fontWeight="bold">
                      24 Hours
                    </Text>
                  </Box>
                  <Box bg="gray.50" p={4} borderRadius="lg" border="1px solid" borderColor="gray.200">
                    <Text color="gray.600" fontSize="xs" fontWeight="medium" mb={1}>
                      Working Capital Released
                    </Text>
                    <Text color="green.600" fontSize="lg" fontWeight="bold">
                      ₹39,37,500
                    </Text>
                  </Box>
                </SimpleGrid>
                
                {/* View Details Button */}
                <Button
                  colorScheme="purple"
                  bg="purple.600"
                  _hover={{ bg: 'purple.700' }}
                  w="full"
                  rounded="lg"
                  size="md"
                >
                  View Financing Details
                </Button>
                
                {/* Disclaimer */}
                <Text color="gray.500" fontSize="xs" textAlign="center">
                  Actual customer data, names changed for privacy
                </Text>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>



      {/* Solution Section */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="gray.800" fontWeight="medium">
                Our Solution: AI-Powered Healthcare Financing
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="800px" lineHeight="1.6">
                We bridge the cash flow gap with instant financing solutions for hospitals, distributors, and healthcare providers
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} w="full">
              {loanProducts.map((product, index) => (
                <Card
                  key={index}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                  border="1px solid"
                  borderColor="gray.200"
                  _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s' }}
                >
                  <CardHeader pb={4}>
                    <VStack spacing={4} align="center">
                      <Box
                        bg={`${product.color}.100`}
                        p={4}
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={product.icon} w={8} h={8} color={`${product.color}.600`} />
                      </Box>
                      <VStack spacing={2} align="center">
                        <Heading size="lg" color="gray.800" textAlign="center">
                          {product.name}
                        </Heading>
                        <Text fontSize="2xl" color={`${product.color}.600`} fontWeight="bold">
                          {product.amount}
                        </Text>
                      </VStack>
                    </VStack>
                  </CardHeader>
                  
                  <CardBody pt={0}>
                    <VStack spacing={6} align="stretch">
                      <HStack justify="space-between" bg="gray.50" p={3} borderRadius="md">
                        <Text color="gray.600" fontSize="sm">Duration</Text>
                        <Text color="gray.800" fontWeight="bold">{product.duration}</Text>
                      </HStack>
                      <HStack justify="space-between" bg="gray.50" p={3} borderRadius="md">
                        <Text color="gray.600" fontSize="sm">Interest Rate</Text>
                        <Text color="gray.800" fontWeight="bold">{product.rate}</Text>
                      </HStack>
                      
                      <Box>
                        <Text color="gray.700" fontWeight="bold" mb={3}>Key Features:</Text>
                        <VStack spacing={2} align="start">
                          {product.features.map((feature, idx) => (
                            <HStack key={idx} spacing={2}>
                              <Icon as={FaCheckCircle} w={4} h={4} color="green.500" />
                              <Text color="gray.600" fontSize="sm">{feature}</Text>
                            </HStack>
                          ))}
                        </VStack>
                      </Box>
                      
                      <Button
                        colorScheme={product.color}
                        variant="outline"
                        rightIcon={<FaArrowRight />}
                        w="full"
                        mt={4}
                      >
                        Apply Now
                      </Button>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Healthcare Ecosystem Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="medium">
                Serving the Complete Healthcare Ecosystem
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                From hospitals to distributors, we provide financing solutions for every player in India's healthcare value chain
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} w="full">
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
                  <Icon as={FaHospital} w={8} h={8} color="brand.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Hospitals & Clinics
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6" mb={4}>
                  Instant working capital against insurance claims, equipment financing, and expansion loans
                </Text>
                <VStack spacing={2} align="start">
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} w={4} h={4} color="green.500" />
                    <Text color="gray.600" fontSize="xs">Up to ₹5 CR financing</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} w={4} h={4} color="green.500" />
                    <Text color="gray.600" fontSize="xs">24-hour approval</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} w={4} h={4} color="green.500" />
                    <Text color="gray.600" fontSize="xs">No collateral required</Text>
                  </HStack>
                </VStack>
              </Box>
              
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
                  <Icon as={FaUsers} w={8} h={8} color="healthcare.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Distributors & Suppliers
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6" mb={4}>
                  Inventory financing, receivables factoring, and supply chain credit solutions
                </Text>
                <VStack spacing={2} align="start">
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} w={4} h={4} color="green.500" />
                    <Text color="gray.600" fontSize="xs">Up to ₹2 CR credit</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} w={4} h={4} color="green.500" />
                    <Text color="gray.600" fontSize="xs">Flexible repayment</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} w={4} h={4} color="green.500" />
                    <Text color="gray.600" fontSize="xs">Quick disbursement</Text>
                  </HStack>
                </VStack>
              </Box>
              
              <Box
                bg="finance.50"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="finance.200"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s' }}
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
                  <Icon as={FaRocket} w={8} h={8} color="finance.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Healthcare Startups
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6" mb={4}>
                  Growth capital, equipment leasing, and operational funding for innovative healthcare solutions
                </Text>
                <VStack spacing={2} align="start">
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} w={4} h={4} color="green.500" />
                    <Text color="gray.600" fontSize="xs">Up to ₹1 CR funding</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} w={4} h={4} color="green.500" />
                    <Text color="gray.600" fontSize="xs">AI-powered assessment</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} w={4} h={4} color="green.500" />
                    <Text color="gray.600" fontSize="xs">Minimal documentation</Text>
                  </HStack>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Application Process Section */}
      <Box py={{ base: 12, md: 20 }} bg="neutral.50">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="medium">
                Simple 4-Step Application Process
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                Get your loan approved in just 24 hours with our streamlined application process
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 6, md: 8 }} w="full">
              {applicationSteps.map((step, index) => (
                <VStack
                  key={index}
                  spacing={6}
                  p={8}
                  bg="white"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="neutral.200"
                  textAlign="center"
                  position="relative"
                  boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                  _hover={{ transform: 'translateY(-4px)', transition: 'all 0.3s' }}
                >
                  <Box
                    bg={`${step.color}.500`}
                    w={16}
                    h={16}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                  >
                    <Icon as={step.icon} w={8} h={8} color="white" />
                    <Box
                      position="absolute"
                      top="-8px"
                      right="-8px"
                      bg="purple.500"
                      color="white"
                      borderRadius="full"
                      w={8}
                      h={8}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      {step.step}
                    </Box>
                  </Box>
                  
                  <VStack spacing={3}>
                    <Heading size="md" color="gray.800">
                      {step.title}
                    </Heading>
                    <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                      {step.description}
                    </Text>
                  </VStack>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Eligibility & Requirements Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 8, lg: 12 }}>
            {/* Eligibility Criteria */}
            <VStack align="start" spacing={6}>
              <VStack align="start" spacing={4}>
                <Badge colorScheme="green" px={4} py={2} borderRadius="full" fontSize="sm">
                  Eligibility
                </Badge>
                <Heading size="lg" color="gray.800">
                  Eligibility Criteria
                </Heading>
                <Text color="gray.600" lineHeight="1.6">
                  Ensure your hospital meets our basic eligibility requirements for loan approval
                </Text>
              </VStack>
              
              <List spacing={3} w="full">
                {eligibilityCriteria.map((criteria, index) => (
                  <ListItem key={index}>
                    <HStack align="start" spacing={3}>
                      <ListIcon as={FaCheckCircle} color="green.500" mt={1} />
                      <Text color="gray.700" fontSize="sm">{criteria}</Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </VStack>

            {/* Required Documents */}
            <VStack align="start" spacing={6}>
              <VStack align="start" spacing={4}>
                <Badge colorScheme="blue" px={4} py={2} borderRadius="full" fontSize="sm">
                  Documentation
                </Badge>
                <Heading size="lg" color="gray.800">
                  Required Documents
                </Heading>
                <Text color="gray.600" lineHeight="1.6">
                  Prepare these documents to expedite your loan application process
                </Text>
              </VStack>
              
              <List spacing={3} w="full">
                {requiredDocuments.map((document, index) => (
                  <ListItem key={index}>
                    <HStack align="start" spacing={3}>
                      <ListIcon as={FaFileAlt} color="blue.500" mt={1} />
                      <Text color="gray.700" fontSize="sm">{document}</Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* Success Metrics Section */}
      <Box py={{ base: 12, md: 20 }} bg="brand.50">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="bold">
                Why Choose Hospital.Finance?
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                Join hundreds of hospitals that have transformed their financial future with our platform
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 6, md: 8 }} w="full">
              <VStack spacing={4} textAlign="center" p={6}>
                <Box
                  bg="brand.100"
                  p={6}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaClock} w={8} h={8} color="brand.600" />
                </Box>
                <VStack spacing={2}>
                  <Text fontSize="3xl" color="brand.600" fontWeight="bold">24 Hours</Text>
                  <Text color="neutral.600" fontSize="sm">Average Approval Time</Text>
                </VStack>
              </VStack>
              
              <VStack spacing={4} textAlign="center" p={6}>
                <Box
                  bg="finance.100"
                  p={6}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaAward} w={8} h={8} color="finance.600" />
                </Box>
                <VStack spacing={2}>
                  <Text fontSize="3xl" color="finance.600" fontWeight="bold">0%</Text>
                  <Text color="neutral.600" fontSize="sm">Success Rate</Text>
                </VStack>
              </VStack>
              
              <VStack spacing={4} textAlign="center" p={6}>
                <Box
                  bg="healthcare.100"
                  p={6}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaUsers} w={8} h={8} color="healthcare.600" />
                </Box>
                <VStack spacing={2}>
                  <Text fontSize="3xl" color="healthcare.600" fontWeight="bold">0</Text>
                  <Text color="neutral.600" fontSize="sm">Hospitals Served</Text>
                </VStack>
              </VStack>
              
              <VStack spacing={4} textAlign="center" p={6}>
                <Box
                  bg="accent.100"
                  p={6}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaMoneyBillWave} w={8} h={8} color="accent.600" />
                </Box>
                <VStack spacing={2}>
                  <Text fontSize="3xl" color="accent.600" fontWeight="bold">₹500 CR+</Text>
                  <Text color="neutral.600" fontSize="sm">Total Disbursed</Text>
                </VStack>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 12, md: 20 }} bg="neutral.900">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={8} align="center" textAlign="center">
            <Heading size={{ base: "xl", md: "2xl" }} color="white" maxW="800px">
              Ready to Transform Your Hospital's Financial Future?
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.400" maxW="600px" lineHeight="1.6">
              Join hundreds of hospitals that have already secured funding with our AI-powered platform.
            </Text>
            <HStack spacing={4} pt={6}>
              <Button 
                size="lg" 
                colorScheme="brand" 
                leftIcon={<FaCalculator />}
                bg="brand.500"
                _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                px={8}
                py={6}
                fontSize="lg"
                rounded="full"
              >
                Calculate Loan Amount
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                leftIcon={<FaFileAlt />}
                color="neutral.400"
                borderColor="neutral.400"
                _hover={{ 
                  bg: 'neutral.100', 
                  color: 'neutral.800',
                  borderColor: 'neutral.500'
                }}
                transition="all 0.2s"
                px={8}
                py={6}
                fontSize="lg"
                rounded="full"
              >
                Start Application
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

export default Finance;
