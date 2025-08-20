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
} from '@chakra-ui/react';
import { 
  FaChartLine, 
  FaChartBar,
  FaUsers,
  FaArrowUp,
  FaCog,
} from 'react-icons/fa';

const Analytics = () => {
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
                AI-Powered Analytics Platform
              </Badge>
              <Heading
                as="h1"
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                color="neutral.800"
                lineHeight="1.1"
                fontWeight="medium"
              >
                Transform Your Hospital with
                <Text as="span" color="brand.600" display="block">AI Analytics</Text>
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" lineHeight="1.6">
                Unlock the power of data-driven insights with our comprehensive analytics platform. 
                Monitor financial performance, patient analytics, and operational efficiency in real-time.
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
                  View Demo Dashboard
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
                  Start Free Trial
                </Button>
              </VStack>
            </VStack>

            {/* Right - Dashboard Mockup */}
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
              <VStack spacing={4} align="stretch">
                {/* Dashboard Header */}
                <HStack justify="space-between" p={4} bg="brand.50" borderRadius="lg" border="1px solid" borderColor="brand.200">
                  <HStack spacing={3}>
                    <Icon as={FaChartLine} color="brand.600" />
                    <Text color="neutral.800" fontWeight="bold">Hospital Analytics Dashboard</Text>
                  </HStack>
                  <Badge colorScheme="finance" variant="subtle" bg="finance.100" color="finance.700">Live</Badge>
                </HStack>

                {/* Metrics Grid */}
                <SimpleGrid columns={2} spacing={3}>
                  <Box bg="finance.50" p={4} borderRadius="lg" border="1px solid" borderColor="finance.200">
                    <VStack spacing={2} align="start">
                      <HStack spacing={2}>
                        <Icon as={FaArrowUp} color="finance.500" />
                        <Text color="neutral.700" fontSize="sm" fontWeight="medium">Revenue Growth</Text>
                      </HStack>
                      <Text color="neutral.800" fontSize="xl" fontWeight="bold">+23%</Text>
                      <Text color="finance.600" fontSize="xs">+5.2% vs last month</Text>
                    </VStack>
                  </Box>
                  <Box bg="healthcare.50" p={4} borderRadius="lg" border="1px solid" borderColor="healthcare.200">
                    <VStack spacing={2} align="start">
                      <HStack spacing={2}>
                        <Icon as={FaUsers} color="healthcare.500" />
                        <Text color="neutral.700" fontSize="sm" fontWeight="medium">Patient Satisfaction</Text>
                      </HStack>
                      <Text color="neutral.800" fontSize="xl" fontWeight="bold">94%</Text>
                      <Text color="healthcare.600" fontSize="xs">+2.1% vs last quarter</Text>
                    </VStack>
                  </Box>
                </SimpleGrid>

                {/* Chart Placeholder */}
                <Box
                  bg="brand.50"
                  h="120px"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  borderColor="brand.200"
                >
                  <VStack spacing={2}>
                    <Icon as={FaChartBar} color="brand.600" size="lg" />
                    <Text color="neutral.600" fontSize="sm">Revenue Trend Chart</Text>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Analytics Features Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="medium">
                Analytics Platform Features
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                Comprehensive analytics tools designed specifically for healthcare institutions
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }} w="full">
              {/* Feature 1 */}
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
                  <Icon as={FaChartLine} w={8} h={8} color="brand.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Real-Time Analytics
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  Monitor financial performance, patient metrics, and operational efficiency in real-time
                </Text>
              </Box>

              {/* Feature 2 */}
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
                  Patient Analytics
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  Track patient satisfaction, treatment outcomes, and demographic insights
                </Text>
              </Box>

              {/* Feature 3 */}
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
                  <Icon as={FaChartBar} w={8} h={8} color="finance.600" />
                </Box>
                <Heading size="md" color="neutral.800" mb={3}>
                  Financial Insights
                </Heading>
                <Text color="neutral.600" fontSize="sm" lineHeight="1.6">
                  Analyze revenue trends, cost optimization, and financial forecasting
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Analytics Benefits Section */}
      <Box py={{ base: 12, md: 20 }} bg="neutral.50">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="medium">
                Why Choose Our Analytics Platform?
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                Transform your hospital's data into actionable insights with our comprehensive analytics solution
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} w="full">
              {/* Benefit 1 */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <HStack spacing={4} mb={4}>
                  <Box
                    bg="brand.100"
                    w={12}
                    h={12}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaChartLine} w={6} h={6} color="brand.600" />
                  </Box>
                  <Heading size="md" color="neutral.800">
                    Data-Driven Decisions
                  </Heading>
                </HStack>
                <Text color="neutral.600" lineHeight="1.6">
                  Make informed decisions based on real-time data and predictive analytics. 
                  Our platform provides comprehensive insights into your hospital's performance, 
                  helping you optimize operations and improve patient outcomes.
                </Text>
              </Box>

              {/* Benefit 2 */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <HStack spacing={4} mb={4}>
                  <Box
                    bg="healthcare.100"
                    w={12}
                    h={12}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaUsers} w={6} h={6} color="healthcare.600" />
                  </Box>
                  <Heading size="md" color="neutral.800">
                    Patient-Centric Insights
                  </Heading>
                </HStack>
                <Text color="neutral.600" lineHeight="1.6">
                  Understand your patients better with detailed analytics on satisfaction, 
                  treatment outcomes, and demographic trends. Improve patient care and 
                  enhance the overall healthcare experience.
                </Text>
              </Box>

              {/* Benefit 3 */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <HStack spacing={4} mb={4}>
                  <Box
                    bg="finance.100"
                    w={12}
                    h={12}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaChartBar} w={6} h={6} color="finance.600" />
                  </Box>
                  <Heading size="md" color="neutral.800">
                    Financial Optimization
                  </Heading>
                </HStack>
                <Text color="neutral.600" lineHeight="1.6">
                  Optimize your hospital's financial performance with detailed revenue analysis, 
                  cost tracking, and forecasting tools. Identify opportunities for growth and 
                  improve operational efficiency.
                </Text>
              </Box>

              {/* Benefit 4 */}
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="neutral.200"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', transition: 'all 0.3s' }}
              >
                <HStack spacing={4} mb={4}>
                  <Box
                    bg="accent.100"
                    w={12}
                    h={12}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaCog} w={6} h={6} color="accent.600" />
                  </Box>
                  <Heading size="md" color="neutral.800">
                    Operational Excellence
                  </Heading>
                </HStack>
                <Text color="neutral.600" lineHeight="1.6">
                  Streamline your hospital's operations with comprehensive workflow analytics. 
                  Identify bottlenecks, optimize resource allocation, and improve overall 
                  operational efficiency.
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Analytics Metrics Section */}
      <Box py={{ base: 12, md: 20 }} bg="brand.50">
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={6} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="neutral.800" fontWeight="medium">
                Analytics Platform Metrics
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="800px" lineHeight="1.6">
                Track your hospital's performance with comprehensive analytics and insights
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 6, md: 8 }} w="full">
              {/* Metric 1 */}
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
                  <Icon as={FaChartLine} w={6} h={6} color="brand.600" />
                </Box>
                <Heading size="lg" color="neutral.800" mb={2}>
                  95%
                </Heading>
                <Text color="neutral.600" fontSize="sm" fontWeight="medium">
                  Data Accuracy
                </Text>
              </Box>

              {/* Metric 2 */}
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
                  <Icon as={FaUsers} w={6} h={6} color="healthcare.600" />
                </Box>
                <Heading size="lg" color="neutral.800" mb={2}>
                  0
                </Heading>
                <Text color="neutral.600" fontSize="sm" fontWeight="medium">
                  Hospitals Served
                </Text>
              </Box>

              {/* Metric 3 */}
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
                  <Icon as={FaChartBar} w={6} h={6} color="finance.600" />
                </Box>
                <Heading size="lg" color="neutral.800" mb={2}>
                  24/7
                </Heading>
                <Text color="neutral.600" fontSize="sm" fontWeight="medium">
                  Real-Time Monitoring
                </Text>
              </Box>

              {/* Metric 4 */}
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
                  <Icon as={FaCog} w={6} h={6} color="accent.600" />
                </Box>
                <Heading size="lg" color="neutral.800" mb={2}>
                  99.9%
                </Heading>
                <Text color="neutral.600" fontSize="sm" fontWeight="medium">
                  Uptime Reliability
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
                Ready to Transform Your Hospital Analytics?
            </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.400" maxW="800px" lineHeight="1.6">
                Join hundreds of hospitals already using our analytics platform to drive better decisions and improve patient care.
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
                Start Free Trial
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
                Schedule Demo
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

export default Analytics;
