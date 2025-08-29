import React from 'react';
import {
  Box,
  HStack,
  Text,
  Link,
  Icon,
  Flex,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const DashboardFooter = () => {
  return (
    <Box 
      bg="white" 
      borderTop="1px solid" 
      borderColor="gray.200"
      mt="auto"
    >
      <Flex 
        justify="space-between" 
        align="center" 
        px={6} 
        py={4}
        maxW="container.xl"
        mx="auto"
      >
        {/* Left Section - Links */}
        <HStack spacing={6} align="center">
          <Text color="gray.500" fontSize="sm">
            Copyright © 2024 WellNest
          </Text>
          <Link color="gray.500" fontSize="sm" _hover={{ color: 'gray.700' }}>
            Privacy Policy
          </Link>
          <Link color="gray.500" fontSize="sm" _hover={{ color: 'gray.700' }}>
            Terms and Conditions
          </Link>
          <Link color="gray.500" fontSize="sm" _hover={{ color: 'gray.700' }}>
            Contact
          </Link>
        </HStack>

        {/* Right Section - Social Media Icons */}
        <HStack spacing={3} align="center">
          <Icon 
            as={FaFacebook} 
            w={5} 
            h={5} 
            color="gray.400" 
            cursor="pointer"
            _hover={{ color: 'blue.600' }}
          />
          <Icon 
            as={FaTwitter} 
            w={5} 
            h={5} 
            color="gray.400" 
            cursor="pointer"
            _hover={{ color: 'blue.400' }}
          />
          <Icon 
            as={FaInstagram} 
            w={5} 
            h={5} 
            color="gray.400" 
            cursor="pointer"
            _hover={{ color: 'pink.500' }}
          />
          <Icon 
            as={FaYoutube} 
            w={5} 
            h={5} 
            color="gray.400" 
            cursor="pointer"
            _hover={{ color: 'red.600' }}
          />
          <Icon 
            as={FaLinkedin} 
            w={5} 
            h={5} 
            color="gray.400" 
            cursor="pointer"
            _hover={{ color: 'blue.700' }}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default DashboardFooter;
