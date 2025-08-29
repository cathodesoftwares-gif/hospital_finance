import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  HStack,
  VStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  IconButton,
  Select,
  Card,
  CardBody,
} from '@chakra-ui/react';
import {
  FaSearch,
  FaFilter,
  FaPlus,
  FaEye,
  FaChevronUp,
  FaChevronDown,
} from 'react-icons/fa';
import DashboardLayout from '../components/Dashboard/DashboardLayout';

// Mock data for inventory items
const mockInventoryItems = [
  {
    id: 1,
    name: 'Surgical Masks',
    category: 'PPE',
    availability: 'Available',
    qtyInStock: 500,
    qtyInReorder: 200,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Gloves',
    category: 'PPE',
    availability: 'Low',
    qtyInStock: 50,
    qtyInReorder: 150,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Hand Sanitizer',
    category: 'Sanitizer',
    availability: 'Available',
    qtyInStock: 200,
    qtyInReorder: 100,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'Thermometers',
    category: 'Medical Equipment',
    availability: 'Out of Stock',
    qtyInStock: 0,
    qtyInReorder: 300,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop',
  },
  {
    id: 5,
    name: 'Stethoscopes',
    category: 'Medical Equipment',
    availability: 'Available',
    qtyInStock: 30,
    qtyInReorder: 50,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=100&h=100&fit=crop',
  },
  {
    id: 6,
    name: 'Blood Pressure Monitors',
    category: 'Medical Equipment',
    availability: 'Low',
    qtyInStock: 20,
    qtyInReorder: 100,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop',
  },
  {
    id: 7,
    name: 'Bandages',
    category: 'First Aid',
    availability: 'Available',
    qtyInStock: 300,
    qtyInReorder: 200,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=100&h=100&fit=crop',
  },
  {
    id: 8,
    name: 'IV Fluids',
    category: 'Medical Supplies',
    availability: 'Low',
    qtyInStock: 10,
    qtyInReorder: 150,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop',
  },
  {
    id: 9,
    name: 'Scalpel Blades',
    category: 'Surgical Instruments',
    availability: 'Out of Stock',
    qtyInStock: 0,
    qtyInReorder: 200,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=100&h=100&fit=crop',
  },
];

const Inventory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available':
        return 'blue';
      case 'Low':
        return 'red';
      case 'Out of Stock':
        return 'gray';
      default:
        return 'gray';
    }
  };

  const filteredItems = mockInventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddItem = () => {
    // TODO: Implement add item functionality
    console.log('Add item clicked');
  };

  const handleViewItem = (itemId: number) => {
    // TODO: Implement view item functionality
    console.log('View item:', itemId);
  };

  const handleReorder = (itemId: number) => {
    // TODO: Implement reorder functionality
    console.log('Reorder item:', itemId);
  };

  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Page Header */}
        <Box mb={6}>
          <Text fontSize="2xl" fontWeight="bold" color="gray.900">
            Inventory
          </Text>
        </Box>

        {/* Search, Filters, and Action Bar */}
        <Flex justify="space-between" align="center" mb={6}>
          <HStack spacing={4}>
            {/* Filter Dropdowns */}
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              w="200px"
              size="sm"
              bg="white"
              borderColor="gray.300"
              borderRadius="lg"
            >
              <option value="All Category">All Category</option>
              <option value="PPE">PPE</option>
              <option value="Sanitizer">Sanitizer</option>
              <option value="Medical Equipment">Medical Equipment</option>
              <option value="First Aid">First Aid</option>
              <option value="Medical Supplies">Medical Supplies</option>
              <option value="Surgical Instruments">Surgical Instruments</option>
            </Select>
            <Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              w="200px"
              size="sm"
              bg="white"
              borderColor="gray.300"
              borderRadius="lg"
            >
              <option value="All Status">All Status</option>
              <option value="Available">Available</option>
              <option value="Low">Low</option>
              <option value="Out of Stock">Out of Stock</option>
            </Select>
            
            {/* Search Bar */}
            <InputGroup w="300px">
              <InputLeftElement>
                <FaSearch color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Search item, etc"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                bg="white"
                borderColor="gray.300"
                borderRadius="lg"
              />
            </InputGroup>
            
            {/* Filter Icon */}
            <IconButton
              aria-label="Filter"
              icon={<FaFilter />}
              variant="outline"
              size="sm"
              borderRadius="lg"
            />
          </HStack>
          
          {/* Add Item Button */}
          <Button
            leftIcon={<FaPlus />}
            colorScheme="blue"
            onClick={handleAddItem}
            size="sm"
            borderRadius="lg"
          >
            + Add Item
          </Button>
        </Flex>

        {/* Inventory Table */}
        <Card bg="white">
          <CardBody p={0}>
            <Box overflowX="auto">
              <Table variant="simple">
                <Thead bg="white">
                  <Tr>
                    <Th px={4} py={3}>
                      <Checkbox />
                    </Th>
                    <Th px={4} py={3}>Image</Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Item</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDown size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Category</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDown size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Availability</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDown size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Qty In Stock</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDown size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>
                      <HStack spacing={1}>
                        <Text>Qty In Reorder</Text>
                        <VStack spacing={0}>
                          <FaChevronUp size={8} color="gray.400" />
                          <FaChevronDown size={8} color="gray.400" />
                        </VStack>
                      </HStack>
                    </Th>
                    <Th px={4} py={3}>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredItems.map((item) => (
                    <Tr key={item.id} _hover={{ bg: 'blue.50' }}>
                      <Td px={4} py={3}>
                        <Checkbox />
                      </Td>
                      <Td px={4} py={3}>
                        <Box
                          w="50px"
                          h="50px"
                          bg="blue.100"
                          borderRadius="md"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <span role="img" aria-label="package">
                            <Text fontSize="xs" color="gray.500">
                              📦
                            </Text>
                          </span>
                        </Box>
                      </Td>
                      <Td px={4} py={3}>
                        <Text fontWeight="medium" color="gray.900">{item.name}</Text>
                      </Td>
                      <Td px={4} py={3}>
                        <Text color="gray.800">{item.category}</Text>
                      </Td>
                      <Td px={4} py={3}>
                        <Badge
                          colorScheme={getAvailabilityColor(item.availability)}
                          variant="subtle"
                          px={2}
                          py={1}
                          borderRadius="full"
                        >
                          {item.availability}
                        </Badge>
                      </Td>
                      <Td px={4} py={3}>
                        <Text fontWeight="medium" color="gray.900">{item.qtyInStock}</Text>
                      </Td>
                      <Td px={4} py={3}>
                        <Text fontWeight="medium" color="gray.900">{item.qtyInReorder}</Text>
                      </Td>
                      <Td px={4} py={3}>
                        <HStack spacing={2}>
                          <IconButton
                            aria-label="View item"
                            icon={<FaEye />}
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewItem(item.id)}
                          />
                          <Button
                            size="xs"
                            variant="outline"
                            onClick={() => handleReorder(item.id)}
                          >
                            Reorder
                          </Button>
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </DashboardLayout>
  );
};

export default Inventory;
