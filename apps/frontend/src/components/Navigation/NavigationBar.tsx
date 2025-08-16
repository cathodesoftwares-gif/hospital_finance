import React from 'react';
import {
  Box,
  Button,
  HStack,
  Text,
  useColorModeValue,
  Container,
  Flex,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaHospital } from 'react-icons/fa';

interface NavigationBarProps {
  scrollToContact?: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ scrollToContact }) => {
  const location = useLocation();
  const bgColor = 'white';
  const textColor = useColorModeValue('gray.800', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.200');

  const navItems = [
    { name: 'Partners', path: '/partners' },
    { name: 'About us', path: '/about' },
    { name: 'Finance', path: '/finance' },
    { name: 'Analytics', path: '/analytics' },
  ];

  const handleLogoClick = () => {
    // Scroll to top when logo is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Logo = () => (
    <HStack spacing={2}>
      <FaHospital size={32} color="#805AD5" />
      <Text
        fontSize="xl"
        fontWeight="bold"
        color={textColor}
        letterSpacing="tight"
      >
        HOSPITAL.FINANCE
      </Text>
    </HStack>
  );

  const DesktopNav = () => (
    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          style={{ textDecoration: 'none' }}
        >
          <Text
            color={location.pathname === item.path ? 'purple.500' : textColor}
            fontWeight="medium"
            fontSize="sm"
            cursor="pointer"
            _hover={{ color: 'purple.500' }}
            transition="color 0.2s"
            whiteSpace="nowrap"
          >
            {item.name}
          </Text>
        </Link>
      ))}
    </HStack>
  );

  return (
    <Box
      bg={bgColor}
      position="sticky"
      top={0}
      zIndex={1000}
      mx={4}
      mt={4}
      borderRadius="xl"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={borderColor}
    >
      <Container maxW="container.xl">
        <Flex
          h={16}
          alignItems="center"
          px={6}
        >
          {/* Left Section - Logo */}
          <Box flex="1">
            <Link to="/" onClick={handleLogoClick} style={{ textDecoration: 'none' }}>
              <Logo />
            </Link>
          </Box>

          {/* Center Section - Navigation */}
          <Box flex="1" display="flex" justifyContent="center">
            <DesktopNav />
          </Box>

          {/* Right Section - CTA */}
          <Box flex="1" display="flex" justifyContent="flex-end" alignItems="center">
            <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Button
                colorScheme="purple"
                size="md"
                rounded="full"
                px={6}
                fontWeight="medium"
                _hover={{
                  transform: 'translateY(-1px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.2s"
                onClick={scrollToContact}
              >
                Contact Us
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavigationBar;
