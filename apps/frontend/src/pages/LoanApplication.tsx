import React, { useState, useEffect } from 'react';
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
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Checkbox,
  Progress,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { 
  FaHospital,
  FaFileAlt,
  FaUpload,
  FaCheck,
  FaEdit,
  FaDownload,
  FaEye,
  FaTrash,
  FaArrowLeft,
  FaArrowRight,
  FaSave,
} from 'react-icons/fa';

const LoanApplication = () => {
  // State management
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Step 1: Hospital Information
    hospitalName: '',
    registrationNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    hospitalType: '',
    contactPerson: '',
    phone: '',
    email: '',
    
    // Step 2: Financial Details
    pan: '',
    gst: '',
    annualTurnover: '',
    annualProfit: '',
    previousLoans: '',
    existingLoanAmount: '',
    bankName: '',
    accountNumber: '',
    
    // Step 3: Loan Details
    loanAmount: '',
    loanPurpose: '',
    loanTerm: '',
    collateralType: '',
    collateralValue: '',
    collateralDescription: '',
    
    // Step 4: Documents
    documents: [],
    
    // Step 5: Review
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedProgress, setSavedProgress] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('loanApplicationProgress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed.formData);
        setCurrentStep(parsed.currentStep);
        setSavedProgress(true);
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = () => {
    const progress = {
      formData,
      currentStep,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('loanApplicationProgress', JSON.stringify(progress));
    toast({
      title: 'Progress Saved',
      description: 'Your application progress has been saved locally.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  // Type definitions
  interface FormData {
    hospitalName: string;
    registrationNumber: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    hospitalType: string;
    contactPerson: string;
    phone: string;
    email: string;
    pan: string;
    gst: string;
    annualTurnover: string;
    annualProfit: string;
    previousLoans: string;
    existingLoanAmount: string;
    bankName: string;
    accountNumber: string;
    loanAmount: string;
    loanPurpose: string;
    loanTerm: string;
    collateralType: string;
    collateralValue: string;
    collateralDescription: string;
    documents: Array<{
      id: number;
      name: string;
      size: number;
      type: string;
      file: File;
      preview: string | null;
    }>;
    termsAccepted: boolean;
  }

  interface FormErrors {
    [key: string]: string;
  }

  // Map fields validated per step to compute active errors correctly
  const stepFieldMap: Record<number, Array<keyof FormData>> = {
    1: [
      'hospitalName',
      'registrationNumber',
      'address',
      'city',
      'state',
      'pincode',
      'hospitalType',
      'contactPerson',
      'phone',
      'email',
    ],
    2: [
      'pan',
      'gst',
      'annualTurnover',
      'annualProfit',
    ],
    3: [
      'loanAmount',
      'loanPurpose',
      'loanTerm',
      'collateralValue',
    ],
    4: ['documents'],
    5: ['termsAccepted'],
  };

  // Validation functions
  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.hospitalName.trim()) newErrors.hospitalName = 'Hospital name is required';
        if (!formData.registrationNumber.trim()) newErrors.registrationNumber = 'Registration number is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
        if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Pincode must be 6 digits';
        if (!formData.hospitalType) newErrors.hospitalType = 'Hospital type is required';
        if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        break;

      case 2:
        if (!formData.pan.trim()) newErrors.pan = 'PAN is required';
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) newErrors.pan = 'Valid PAN format required (e.g., ABCDE1234F)';
        if (!formData.gst.trim()) newErrors.gst = 'GST number is required';
        if (!formData.annualTurnover.trim()) newErrors.annualTurnover = 'Annual turnover is required';
        if (isNaN(Number(formData.annualTurnover)) || parseFloat(formData.annualTurnover) <= 0) {
          newErrors.annualTurnover = 'Valid annual turnover amount is required';
        }
        if (!formData.annualProfit.trim()) newErrors.annualProfit = 'Annual profit is required';
        if (isNaN(Number(formData.annualProfit))) newErrors.annualProfit = 'Valid annual profit amount is required';
        break;

      case 3:
        if (!formData.loanAmount.trim()) newErrors.loanAmount = 'Loan amount is required';
        if (isNaN(Number(formData.loanAmount)) || parseFloat(formData.loanAmount) < 100000) {
          newErrors.loanAmount = 'Loan amount must be at least ₹1,00,000';
        }
        if (!formData.loanPurpose.trim()) newErrors.loanPurpose = 'Loan purpose is required';
        if (!formData.loanTerm) newErrors.loanTerm = 'Loan term is required';
        if (formData.collateralType && formData.collateralType !== 'none' && !formData.collateralValue.trim()) {
          newErrors.collateralValue = 'Collateral value is required when collateral type is selected';
        }
        break;

      case 4:
        if (formData.documents.length === 0) newErrors.documents = 'At least one document is required';
        break;

      case 5:
        if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear active error for this field by removing the key (avoids lingering empty-string keys)
    if (errors[field]) {
      setErrors(prev => {
        const { [field as string]: _removed, ...rest } = prev;
        return rest;
      });
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
      saveProgress();
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    
    const newDocuments = Array.from(files).map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
    }));

    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...newDocuments]
    }));
  };

  const removeDocument = (id: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter(doc => doc.id !== id)
    }));
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onOpen();
      // Clear saved progress after successful submission
      localStorage.removeItem('loanApplicationProgress');
    }, 2000);
  };

  const steps = [
    { number: 1, title: 'Hospital Information', icon: FaHospital },
    { number: 2, title: 'Financial Details', icon: FaFileAlt },
    { number: 3, title: 'Loan Details', icon: FaUpload },
    { number: 4, title: 'Documents', icon: FaFileAlt },
    { number: 5, title: 'Review & Submit', icon: FaCheck },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="neutral.50" py={12}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          <VStack spacing={6} textAlign="center">
            <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" bg="brand.100" color="brand.700">
              Loan Application
            </Badge>
            <Heading size="2xl" color="neutral.800" fontWeight="medium">
              Hospital Loan Application
            </Heading>
            <Text fontSize="lg" color="neutral.600" maxW="600px">
              Complete this form to apply for a hospital loan. Your progress will be saved automatically.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Form Section */}
      <Box bg="white" py={12}>
        <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
          {savedProgress && (
            <Alert status="info" mb={6} borderRadius="lg">
              <AlertIcon />
              <Box>
                <AlertTitle>Saved Progress Found!</AlertTitle>
                <AlertDescription>
                  We found a saved application. You can continue from where you left off or start fresh.
                </AlertDescription>
              </Box>
            </Alert>
          )}

          {/* Step Indicator */}
          <VStack spacing={6} mb={8}>
            <HStack spacing={8} justify="center" w="full">
              {steps.map((step, index) => (
                <VStack key={step.number} spacing={2} align="center">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg={currentStep > step.number ? 'brand.500' : currentStep === step.number ? 'brand.100' : 'gray.200'}
                    color={currentStep >= step.number ? 'white' : 'gray.500'}
                    border={currentStep === step.number ? '2px solid' : 'none'}
                    borderColor="brand.500"
                    transition="all 0.3s"
                  >
                    {currentStep > step.number ? (
                      <Icon as={FaCheck} w={5} h={5} />
                    ) : (
                      <Icon as={step.icon} w={5} h={5} />
                    )}
                  </Box>
                  <Text fontSize="sm" fontWeight="medium" color={currentStep >= step.number ? 'brand.600' : 'gray.500'}>
                    {step.title}
                  </Text>
                </VStack>
              ))}
            </HStack>
            <Progress value={(currentStep / 5) * 100} w="full" colorScheme="brand" size="sm" />
          </VStack>

          {/* Form Content */}
          <Box bg="white" p={8} borderRadius="xl" border="1px solid" borderColor="gray.200" boxShadow="lg">
            {currentStep === 1 && (
              <VStack spacing={6} align="start" w="full">
                <Heading size="lg" color="neutral.800">Hospital Information</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                  <FormControl isInvalid={!!errors.hospitalName}>
                    <FormLabel color="neutral.700">Hospital Name *</FormLabel>
                    <Input
                      value={formData.hospitalName}
                      onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                      placeholder="Enter hospital name"
                      borderColor={errors.hospitalName ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.hospitalName && <Text color="red.500" fontSize="sm" mt={1}>{errors.hospitalName}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.registrationNumber}>
                    <FormLabel color="neutral.700">Registration Number *</FormLabel>
                    <Input
                      value={formData.registrationNumber}
                      onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                      placeholder="Enter registration number"
                      borderColor={errors.registrationNumber ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.registrationNumber && <Text color="red.500" fontSize="sm" mt={1}>{errors.registrationNumber}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.hospitalType}>
                    <FormLabel color="neutral.700">Hospital Type *</FormLabel>
                    <Select
                      value={formData.hospitalType}
                      onChange={(e) => handleInputChange('hospitalType', e.target.value)}
                      placeholder="Select hospital type"
                      borderColor={errors.hospitalType ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    >
                      <option value="private">Private Hospital</option>
                      <option value="public">Public Hospital</option>
                      <option value="charitable">Charitable Hospital</option>
                      <option value="specialty">Specialty Hospital</option>
                      <option value="clinic">Clinic</option>
                    </Select>
                    {errors.hospitalType && <Text color="red.500" fontSize="sm" mt={1}>{errors.hospitalType}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.contactPerson}>
                    <FormLabel color="neutral.700">Contact Person *</FormLabel>
                    <Input
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      placeholder="Enter contact person name"
                      borderColor={errors.contactPerson ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.contactPerson && <Text color="red.500" fontSize="sm" mt={1}>{errors.contactPerson}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.phone}>
                    <FormLabel color="neutral.700">Phone Number *</FormLabel>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter 10-digit phone number"
                      borderColor={errors.phone ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.phone && <Text color="red.500" fontSize="sm" mt={1}>{errors.phone}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel color="neutral.700">Email Address *</FormLabel>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter email address"
                      borderColor={errors.email ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.email && <Text color="red.500" fontSize="sm" mt={1}>{errors.email}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.address}>
                    <FormLabel color="neutral.700">Address *</FormLabel>
                    <Textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter complete address"
                      rows={3}
                      borderColor={errors.address ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.address && <Text color="red.500" fontSize="sm" mt={1}>{errors.address}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.city}>
                    <FormLabel color="neutral.700">City *</FormLabel>
                    <Input
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Enter city"
                      borderColor={errors.city ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.city && <Text color="red.500" fontSize="sm" mt={1}>{errors.city}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.state}>
                    <FormLabel color="neutral.700">State *</FormLabel>
                    <Input
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      placeholder="Enter state"
                      borderColor={errors.state ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.state && <Text color="red.500" fontSize="sm" mt={1}>{errors.state}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.pincode}>
                    <FormLabel color="neutral.700">Pincode *</FormLabel>
                    <Input
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      placeholder="Enter 6-digit pincode"
                      borderColor={errors.pincode ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.pincode && <Text color="red.500" fontSize="sm" mt={1}>{errors.pincode}</Text>}
                  </FormControl>
                </SimpleGrid>
              </VStack>
            )}

            {currentStep === 2 && (
              <VStack spacing={6} align="start" w="full">
                <Heading size="lg" color="neutral.800">Financial Details</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                  <FormControl isInvalid={!!errors.pan}>
                    <FormLabel color="neutral.700">PAN Number *</FormLabel>
                    <Input
                      value={formData.pan}
                      onChange={(e) => handleInputChange('pan', e.target.value.toUpperCase())}
                      placeholder="ABCDE1234F"
                      borderColor={errors.pan ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.pan && <Text color="red.500" fontSize="sm" mt={1}>{errors.pan}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.gst}>
                    <FormLabel color="neutral.700">GST Number *</FormLabel>
                    <Input
                      value={formData.gst}
                      onChange={(e) => handleInputChange('gst', e.target.value.toUpperCase())}
                      placeholder="Enter GST number"
                      borderColor={errors.gst ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.gst && <Text color="red.500" fontSize="sm" mt={1}>{errors.gst}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.annualTurnover}>
                    <FormLabel color="neutral.700">Annual Turnover (₹) *</FormLabel>
                    <Input
                      value={formData.annualTurnover}
                      onChange={(e) => handleInputChange('annualTurnover', e.target.value)}
                      placeholder="Enter annual turnover"
                      borderColor={errors.annualTurnover ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.annualTurnover && <Text color="red.500" fontSize="sm" mt={1}>{errors.annualTurnover}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.annualProfit}>
                    <FormLabel color="neutral.700">Annual Profit (₹) *</FormLabel>
                    <Input
                      value={formData.annualProfit}
                      onChange={(e) => handleInputChange('annualProfit', e.target.value)}
                      placeholder="Enter annual profit"
                      borderColor={errors.annualProfit ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.annualProfit && <Text color="red.500" fontSize="sm" mt={1}>{errors.annualProfit}</Text>}
                  </FormControl>

                  <FormControl>
                    <FormLabel color="neutral.700">Previous Loans</FormLabel>
                    <Select
                      value={formData.previousLoans}
                      onChange={(e) => handleInputChange('previousLoans', e.target.value)}
                      placeholder="Select option"
                      borderColor="neutral.300"
                      _focus={{ borderColor: 'brand.500' }}
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Select>
                  </FormControl>

                  {formData.previousLoans === 'yes' && (
                    <FormControl>
                      <FormLabel color="neutral.700">Existing Loan Amount (₹)</FormLabel>
                      <Input
                        value={formData.existingLoanAmount}
                        onChange={(e) => handleInputChange('existingLoanAmount', e.target.value)}
                        placeholder="Enter existing loan amount"
                        borderColor="neutral.300"
                        _focus={{ borderColor: 'brand.500' }}
                      />
                    </FormControl>
                  )}

                  <FormControl>
                    <FormLabel color="neutral.700">Bank Name</FormLabel>
                    <Input
                      value={formData.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      placeholder="Enter bank name"
                      borderColor="neutral.300"
                      _focus={{ borderColor: 'brand.500' }}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="neutral.700">Account Number</FormLabel>
                    <Input
                      value={formData.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      placeholder="Enter account number"
                      borderColor="neutral.300"
                      _focus={{ borderColor: 'brand.500' }}
                    />
                  </FormControl>
                </SimpleGrid>
              </VStack>
            )}

            {currentStep === 3 && (
              <VStack spacing={6} align="start" w="full">
                <Heading size="lg" color="neutral.800">Loan Details</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                  <FormControl isInvalid={!!errors.loanAmount}>
                    <FormLabel color="neutral.700">Loan Amount (₹) *</FormLabel>
                    <Input
                      value={formData.loanAmount}
                      onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                      placeholder="Enter loan amount (min ₹1,00,000)"
                      borderColor={errors.loanAmount ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    />
                    {errors.loanAmount && <Text color="red.500" fontSize="sm" mt={1}>{errors.loanAmount}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.loanPurpose}>
                    <FormLabel color="neutral.700">Loan Purpose *</FormLabel>
                    <Select
                      value={formData.loanPurpose}
                      onChange={(e) => handleInputChange('loanPurpose', e.target.value)}
                      placeholder="Select loan purpose"
                      borderColor={errors.loanPurpose ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    >
                      <option value="equipment">Medical Equipment</option>
                      <option value="expansion">Hospital Expansion</option>
                      <option value="working-capital">Working Capital</option>
                      <option value="renovation">Renovation</option>
                      <option value="technology">Technology Upgrade</option>
                      <option value="other">Other</option>
                    </Select>
                    {errors.loanPurpose && <Text color="red.500" fontSize="sm" mt={1}>{errors.loanPurpose}</Text>}
                  </FormControl>

                  <FormControl isInvalid={!!errors.loanTerm}>
                    <FormLabel color="neutral.700">Loan Term *</FormLabel>
                    <Select
                      value={formData.loanTerm}
                      onChange={(e) => handleInputChange('loanTerm', e.target.value)}
                      placeholder="Select loan term"
                      borderColor={errors.loanTerm ? 'red.300' : 'neutral.300'}
                      _focus={{ borderColor: 'brand.500' }}
                    >
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                      <option value="36">36 months</option>
                      <option value="48">48 months</option>
                      <option value="60">60 months</option>
                    </Select>
                    {errors.loanTerm && <Text color="red.500" fontSize="sm" mt={1}>{errors.loanTerm}</Text>}
                  </FormControl>

                  <FormControl>
                    <FormLabel color="neutral.700">Collateral Type</FormLabel>
                    <Select
                      value={formData.collateralType}
                      onChange={(e) => handleInputChange('collateralType', e.target.value)}
                      placeholder="Select collateral type (optional)"
                      borderColor="neutral.300"
                      _focus={{ borderColor: 'brand.500' }}
                    >
                      <option value="property">Property</option>
                      <option value="equipment">Medical Equipment</option>
                      <option value="vehicles">Vehicles</option>
                      <option value="securities">Securities</option>
                      <option value="none">No Collateral</option>
                    </Select>
                  </FormControl>

                  {formData.collateralType && formData.collateralType !== 'none' && (
                    <>
                      <FormControl isInvalid={!!errors.collateralValue}>
                        <FormLabel color="neutral.700">Collateral Value (₹) *</FormLabel>
                        <Input
                          value={formData.collateralValue}
                          onChange={(e) => handleInputChange('collateralValue', e.target.value)}
                          placeholder="Enter collateral value"
                          borderColor={errors.collateralValue ? 'red.300' : 'neutral.300'}
                          _focus={{ borderColor: 'brand.500' }}
                        />
                        {errors.collateralValue && <Text color="red.500" fontSize="sm" mt={1}>{errors.collateralValue}</Text>}
                      </FormControl>

                      <FormControl>
                        <FormLabel color="neutral.700">Collateral Description</FormLabel>
                        <Textarea
                          value={formData.collateralDescription}
                          onChange={(e) => handleInputChange('collateralDescription', e.target.value)}
                          placeholder="Describe the collateral"
                          rows={3}
                          borderColor="neutral.300"
                          _focus={{ borderColor: 'brand.500' }}
                        />
                      </FormControl>
                    </>
                  )}
                </SimpleGrid>
              </VStack>
            )}

            {currentStep === 4 && (
              <VStack spacing={6} align="start" w="full">
                <Heading size="lg" color="neutral.800">Document Upload</Heading>
                
                <Box
                  border="2px dashed"
                  borderColor="neutral.300"
                  borderRadius="lg"
                  p={8}
                  textAlign="center"
                  w="full"
                  _hover={{ borderColor: 'brand.500' }}
                  transition="all 0.3s"
                >
                  <VStack spacing={4}>
                    <Icon as={FaUpload} w={12} h={12} color="brand.500" />
                    <VStack spacing={2}>
                      <Text fontSize="lg" fontWeight="medium" color="neutral.800">
                        Drag and drop files here, or click to select
                      </Text>
                      <Text fontSize="sm" color="neutral.600">
                        Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB each)
                      </Text>
                    </VStack>
                    <Button
                      colorScheme="brand"
                      variant="outline"
                      onClick={() => document.getElementById('fileInput')?.click()}
                    >
                      Choose Files
                    </Button>
                    <input
                      id="fileInput"
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      style={{ display: 'none' }}
                    />
                  </VStack>
                </Box>

                {formData.documents.length > 0 && (
                  <VStack spacing={4} w="full">
                    <Text fontWeight="medium" color="neutral.800">Uploaded Documents:</Text>
                    {formData.documents.map((doc) => (
                      <HStack key={doc.id} w="full" p={4} bg="neutral.50" borderRadius="lg" justify="space-between">
                        <HStack spacing={4}>
                          <Icon as={FaFileAlt} w={5} h={5} color="brand.500" />
                          <VStack align="start" spacing={1}>
                            <Text fontWeight="medium" color="neutral.800">{doc.name}</Text>
                            <Text fontSize="sm" color="neutral.600">
                              {(doc.size / 1024 / 1024).toFixed(2)} MB
                            </Text>
                          </VStack>
                        </HStack>
                        <HStack spacing={2}>
                          {doc.preview && (
                            <Tooltip label="Preview">
                              <IconButton
                                icon={<FaEye />}
                                size="sm"
                                variant="ghost"
                                aria-label="Preview document"
                                onClick={() => window.open(doc.preview || undefined)}
                              />
                            </Tooltip>
                          )}
                          <Tooltip label="Remove">
                            <IconButton
                              icon={<FaTrash />}
                              size="sm"
                              variant="ghost"
                              colorScheme="red"
                              aria-label="Remove document"
                              onClick={() => removeDocument(doc.id)}
                            />
                          </Tooltip>
                        </HStack>
                      </HStack>
                    ))}
                  </VStack>
                )}

                {errors.documents && <Text color="red.500" fontSize="sm">{errors.documents}</Text>}
              </VStack>
            )}

            {currentStep === 5 && (
              <VStack spacing={6} align="start" w="full">
                <Heading size="lg" color="neutral.800">Review & Submit</Heading>
                
                <VStack spacing={6} w="full">
                  {/* Hospital Information Summary */}
                  <Box w="full" p={6} bg="neutral.50" borderRadius="lg">
                    <HStack justify="space-between" mb={4}>
                      <Heading size="md" color="neutral.800">Hospital Information</Heading>
                      <Button size="sm" variant="outline" leftIcon={<FaEdit />} onClick={() => setCurrentStep(1)}>
                        Edit
                      </Button>
                    </HStack>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      <Text><strong>Hospital Name:</strong> {formData.hospitalName}</Text>
                      <Text><strong>Registration Number:</strong> {formData.registrationNumber}</Text>
                      <Text><strong>Type:</strong> {formData.hospitalType}</Text>
                      <Text><strong>Contact Person:</strong> {formData.contactPerson}</Text>
                      <Text><strong>Phone:</strong> {formData.phone}</Text>
                      <Text><strong>Email:</strong> {formData.email}</Text>
                    </SimpleGrid>
                  </Box>

                  {/* Financial Details Summary */}
                  <Box w="full" p={6} bg="neutral.50" borderRadius="lg">
                    <HStack justify="space-between" mb={4}>
                      <Heading size="md" color="neutral.800">Financial Details</Heading>
                      <Button size="sm" variant="outline" leftIcon={<FaEdit />} onClick={() => setCurrentStep(2)}>
                        Edit
                      </Button>
                    </HStack>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      <Text><strong>PAN:</strong> {formData.pan}</Text>
                      <Text><strong>GST:</strong> {formData.gst}</Text>
                      <Text><strong>Annual Turnover:</strong> ₹{formData.annualTurnover}</Text>
                      <Text><strong>Annual Profit:</strong> ₹{formData.annualProfit}</Text>
                    </SimpleGrid>
                  </Box>

                  {/* Loan Details Summary */}
                  <Box w="full" p={6} bg="neutral.50" borderRadius="lg">
                    <HStack justify="space-between" mb={4}>
                      <Heading size="md" color="neutral.800">Loan Details</Heading>
                      <Button size="sm" variant="outline" leftIcon={<FaEdit />} onClick={() => setCurrentStep(3)}>
                        Edit
                      </Button>
                    </HStack>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      <Text><strong>Loan Amount:</strong> ₹{formData.loanAmount}</Text>
                      <Text><strong>Purpose:</strong> {formData.loanPurpose}</Text>
                      <Text><strong>Term:</strong> {formData.loanTerm} months</Text>
                      {formData.collateralType && formData.collateralType !== 'none' && (
                        <Text><strong>Collateral:</strong> {formData.collateralType} - ₹{formData.collateralValue}</Text>
                      )}
                    </SimpleGrid>
                  </Box>

                  {/* Documents Summary */}
                  <Box w="full" p={6} bg="neutral.50" borderRadius="lg">
                    <HStack justify="space-between" mb={4}>
                      <Heading size="md" color="neutral.800">Documents ({formData.documents.length})</Heading>
                      <Button size="sm" variant="outline" leftIcon={<FaEdit />} onClick={() => setCurrentStep(4)}>
                        Edit
                      </Button>
                    </HStack>
                    <VStack align="start" spacing={2}>
                      {formData.documents.map((doc) => (
                        <Text key={doc.id} fontSize="sm" color="neutral.600">
                          • {doc.name} ({(doc.size / 1024 / 1024).toFixed(2)} MB)
                        </Text>
                      ))}
                    </VStack>
                  </Box>

                  {/* Terms and Conditions */}
                  <FormControl isInvalid={!!errors.termsAccepted}>
                    <Checkbox
                      isChecked={formData.termsAccepted}
                      onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                      colorScheme="brand"
                    >
                      I agree to the terms and conditions and confirm that all information provided is accurate
                    </Checkbox>
                    {errors.termsAccepted && <Text color="red.500" fontSize="sm" mt={1}>{errors.termsAccepted}</Text>}
                  </FormControl>
                </VStack>
              </VStack>
            )}

            {/* Navigation Buttons */}
            <HStack justify="space-between" mt={8} pt={6} borderTop="1px solid" borderColor="gray.200">
              <Button
                leftIcon={<FaArrowLeft />}
                variant="outline"
                onClick={prevStep}
                isDisabled={currentStep === 1}
              >
                Previous
              </Button>

              <HStack spacing={4}>
                <Button
                  leftIcon={<FaSave />}
                  variant="ghost"
                  onClick={saveProgress}
                >
                  Save Progress
                </Button>

                {currentStep < 5 ? (
                  <Button
                    rightIcon={<FaArrowRight />}
                    colorScheme="brand"
                    onClick={nextStep}
                    // Disable Next only if there are errors for fields of the current step
                    isDisabled={Object.keys(errors).some((k) => (stepFieldMap[currentStep] as string[]).includes(k))}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    colorScheme="brand"
                    onClick={handleSubmit}
                    isLoading={isSubmitting}
                    loadingText="Submitting..."
                    // Disable Submit only if any error exists in final step
                    isDisabled={Object.keys(errors).some((k) => (stepFieldMap[5] as string[]).includes(k))}
                  >
                    Submit Application
                  </Button>
                )}
              </HStack>
            </HStack>
          </Box>
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

      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="brand.600">Application Submitted Successfully!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={6} textAlign="center">
              <Box w={16} h={16} bg="green.100" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                <Icon as={FaCheck} w={8} h={8} color="green.600" />
              </Box>
              <VStack spacing={2}>
                <Text fontSize="lg" fontWeight="medium" color="neutral.800">
                  Your loan application has been submitted successfully!
                </Text>
                <Text fontSize="sm" color="neutral.600">
                  Application ID: HF-{Date.now().toString().slice(-6)}
                </Text>
                <Text fontSize="sm" color="neutral.600">
                  We will review your application and contact you within 24 hours.
                </Text>
              </VStack>
              <HStack spacing={4}>
                <Button colorScheme="brand" onClick={onClose}>
                  Continue
                </Button>
                <Button variant="outline" leftIcon={<FaDownload />}>
                  Download Copy
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LoanApplication;
