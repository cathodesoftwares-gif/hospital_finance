import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
  Card,
  CardBody,
  Icon,
  Divider,
  Grid,
  Badge,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash, FaHospital, FaArrowLeft } from 'react-icons/fa';

const DashboardLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  // Test credentials
  const TEST_CREDENTIALS = {
    username: 'demo@hospital.finance',
    password: 'demo123',
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('DashboardLogin component mounted'); // Debug log
  }, []);

  const handleInputChange = (field: string, value: string) => {
    console.log('Input change:', field, value); // Debug log
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      username: '',
      password: '',
    };

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (!formData.username.includes('@')) {
      newErrors.username = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Debug log
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const success = await login(formData.username, formData.password);
      console.log('Login result:', success); // Debug log
      
      if (success) {
        toast({
          title: 'Login Successful',
          description: 'Welcome to your Hospital Analytics Dashboard',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate('/dashboard');
      } else {
        toast({
          title: 'Login Failed',
          description: 'Invalid username or password. Please try again.',
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Login error:', error); // Debug log
      toast({
        title: 'Login Error',
        description: 'An error occurred during login. Please try again.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    console.log('Demo login clicked'); // Debug log
    setFormData({
      username: TEST_CREDENTIALS.username,
      password: TEST_CREDENTIALS.password,
    });
    setErrors({ username: '', password: '' });
  };

  return (
    <Box minH="100vh" bg="neutral.50" display="flex" alignItems="center" position="relative" overflow="hidden">
      <Container maxW="container.xl" py={{ base: 10, md: 20 }} px={{ base: 4, md: 6 }}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 8, lg: 12 }} alignItems="center">
          {/* Left Side - Content */}
          <VStack align={{ base: "center", lg: "start" }} spacing={{ base: 6, md: 8 }} textAlign={{ base: "center", lg: "left" }}>
            {/* Back to Analytics Button */}
            <Box w="full" textAlign={{ base: "center", lg: "left" }}>
              <Button
                as={Link}
                to="/analytics"
                leftIcon={<FaArrowLeft />}
                variant="ghost"
                color="neutral.600"
                _hover={{ color: 'neutral.800' }}
                size="sm"
              >
                Back to Analytics
              </Button>
            </Box>

            <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
              Hospital Analytics Dashboard
            </Badge>
            
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl" }}
              color="neutral.800"
              lineHeight="1.1"
              fontWeight="medium"
              maxW="600px"
            >
              Access Your
              <Text as="span" color="brand.600" display="block">Analytics Platform</Text>
            </Heading>
            
            <Text fontSize={{ base: "lg", md: "xl" }} color="neutral.600" maxW="500px" lineHeight="1.6">
              Sign in to your hospital analytics dashboard to view real-time insights, 
              financial metrics, and patient analytics in one comprehensive platform.
            </Text>

            {/* Demo Credentials Alert */}
            <Box w="full" maxW="500px">
              <Alert status="info" borderRadius="xl" bg="brand.50" border="1px solid" borderColor="brand.200">
                <AlertIcon color="brand.600" />
                <Box>
                  <AlertTitle fontSize="md" color="brand.700">Demo Credentials</AlertTitle>
                  <AlertDescription fontSize="sm" color="brand.600">
                    <Text fontWeight="medium">Email:</Text> demo@hospital.finance<br />
                    <Text fontWeight="medium">Password:</Text> demo123
                  </AlertDescription>
                </Box>
              </Alert>
            </Box>
          </VStack>

          {/* Right Side - Login Form */}
          <Box display="flex" justifyContent={{ base: "center", lg: "flex-end" }}>
            <Card w="full" maxW="450px" boxShadow="0 20px 40px rgba(0, 0, 0, 0.1)" borderRadius="2xl" border="1px solid" borderColor="brand.200" bg="brand.50">
              <CardBody p={{ base: 6, md: 8 }}>
                <VStack spacing={6} align="stretch">
                  {/* Header */}
                  <VStack spacing={4} textAlign="center">
                    <Box
                      w={20}
                      h={20}
                      bg="brand.500"
                      borderRadius="2xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mb={2}
                      boxShadow="0 10px 25px rgba(59, 130, 246, 0.3)"
                    >
                      <Icon as={FaHospital} w={10} h={10} color="white" />
                    </Box>
                    <VStack spacing={2}>
                      <Heading size="lg" color="neutral.800">
                        Sign In
                      </Heading>
                      <Text color="neutral.700" fontSize="md">
                        Welcome back to your dashboard
                      </Text>
                    </VStack>
                  </VStack>

                  {/* Login Form */}
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={5} align="stretch">
                      {/* Username/Email Field */}
                      <FormControl isInvalid={!!errors.username}>
                        <FormLabel color="neutral.800" fontSize="sm" fontWeight="medium">
                          Email Address
                        </FormLabel>
                        <InputGroup>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.username}
                            onChange={(e) => handleInputChange('username', e.target.value)}
                            size="lg"
                            borderRadius="xl"
                            borderColor={errors.username ? 'red.300' : 'neutral.300'}
                            bg="white"
                            color="neutral.800"
                            _placeholder={{ color: 'neutral.500' }}
                            _focus={{
                              borderColor: 'brand.500',
                              boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                            }}
                            _hover={{
                              borderColor: 'neutral.400',
                            }}
                          />
                        </InputGroup>
                        {errors.username && (
                          <Text color="red.500" fontSize="sm" mt={1}>
                            {errors.username}
                          </Text>
                        )}
                      </FormControl>

                      {/* Password Field */}
                      <FormControl isInvalid={!!errors.password}>
                        <FormLabel color="neutral.800" fontSize="sm" fontWeight="medium">
                          Password
                        </FormLabel>
                        <InputGroup>
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            size="lg"
                            borderRadius="xl"
                            borderColor={errors.password ? 'red.300' : 'neutral.300'}
                            bg="white"
                            color="neutral.800"
                            _placeholder={{ color: 'neutral.500' }}
                            _focus={{
                              borderColor: 'brand.500',
                              boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                            }}
                            _hover={{
                              borderColor: 'neutral.400',
                            }}
                          />
                          <InputRightElement>
                            <IconButton
                              aria-label={showPassword ? 'Hide password' : 'Show password'}
                              icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                              onClick={() => setShowPassword(!showPassword)}
                              variant="ghost"
                              size="sm"
                              color="neutral.500"
                              _hover={{ color: 'neutral.700' }}
                            />
                          </InputRightElement>
                        </InputGroup>
                        {errors.password && (
                          <Text color="red.500" fontSize="sm" mt={1}>
                            {errors.password}
                          </Text>
                        )}
                      </FormControl>

                      {/* Login Button */}
                      <Button
                        type="submit"
                        colorScheme="brand"
                        size="lg"
                        borderRadius="xl"
                        bg="brand.500"
                        _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }}
                        _active={{ bg: 'brand.700' }}
                        transition="all 0.2s"
                        isLoading={isLoading}
                        loadingText="Signing in..."
                        w="full"
                        mt={4}
                        py={6}
                        fontSize="md"
                        fontWeight="medium"
                      >
                        Sign In
                      </Button>
                    </VStack>
                  </form>

                  <Divider />

                  {/* Demo Login Button */}
                  <Button
                    variant="outline"
                    size="lg"
                    borderRadius="xl"
                    borderColor="brand.300"
                    color="brand.600"
                    _hover={{
                      bg: 'brand.50',
                      borderColor: 'brand.400',
                      transform: 'translateY(-1px)',
                    }}
                    transition="all 0.2s"
                    onClick={handleDemoLogin}
                    w="full"
                    py={6}
                    fontSize="md"
                    fontWeight="medium"
                  >
                    Use Demo Credentials
                  </Button>

                  {/* Footer Links */}
                  <VStack spacing={3} pt={4}>
                    <Text color="neutral.500" fontSize="sm" textAlign="center">
                      Don't have an account?{' '}
                      <Link to="/analytics" style={{ color: '#3182CE', textDecoration: 'underline', fontWeight: 'medium' }}>
                        Contact us for access
                      </Link>
                    </Text>
                    <Text color="neutral.500" fontSize="sm" textAlign="center">
                      <Link to="/support" style={{ color: '#3182CE', textDecoration: 'underline', fontWeight: 'medium' }}>
                        Need help signing in?
                      </Link>
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardLogin;
