import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  Link,
  useColorModeValue,
  Container,
  Icon,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { FaHospital, FaBars } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import AuthHeader from '../Auth/AuthHeader/AuthHeader';

interface NavigationBarProps {
  scrollToContact?: () => void;
}

const NavigationBar = ({ scrollToContact }: NavigationBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = 'white'; // Fixed white background like FuturePath AI
  const textColor = useColorModeValue('gray.800', 'gray.800'); // Dark text on white
  const borderColor = useColorModeValue('gray.200', 'gray.200'); // Light border

  const navItems = [
    { name: 'Partners', href: '/partners' },
    { name: 'About us', href: '/about-us' },
    { name: 'Finance', href: '/finance' },
    { name: 'Analytics', href: '/analytics' },
  ];

  const Logo = () => (
    <HStack spacing={2}>
      <Icon as={FaHospital} w={8} h={8} color="purple.500" />
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
          as={RouterLink}
          to={item.href}
          px={3}
          py={2}
          rounded="md"
          textDecoration="none"
          color={textColor}
          fontWeight="medium"
          whiteSpace="nowrap"
          _hover={{
            textDecoration: 'none',
            color: 'purple.500',
          }}
          _focus={{
            boxShadow: 'none',
          }}
        >
          {item.name}
        </Link>
      ))}
    </HStack>
  );

  const MobileNav = () => (
    <VStack spacing={4} align="stretch" w="full">
      {navItems.map((item) => (
        <Link
          key={item.name}
          as={RouterLink}
          to={item.href}
          px={3}
          py={2}
          rounded="md"
          textDecoration="none"
          color={textColor}
          fontWeight="medium"
          _hover={{
            textDecoration: 'none',
            color: 'purple.500',
            bg: 'gray.50',
          }}
          onClick={onClose}
        >
          {item.name}
        </Link>
      ))}
    </VStack>
  );

  return (
    <>
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
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container maxW="container.xl">
          <Flex
            h={16}
            alignItems="center"
            px={6}
          >
            {/* Left Section - Logo */}
            <Box flex="1">
              <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
                <Logo />
              </Link>
            </Box>

            {/* Center Section - Navigation */}
            <Box flex="1" display="flex" justifyContent="center">
              <DesktopNav />
            </Box>

            {/* Right Section - Auth and CTA */}
            <Box flex="1" display="flex" justifyContent="flex-end" alignItems="center">
              <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
                <AuthHeader />
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

              {/* Mobile menu button */}
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                icon={<FaBars />}
                variant="ghost"
                aria-label="Open navigation menu"
                size="md"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="stretch" pt={4}>
              <MobileNav />
              <Box pt={4} borderTopWidth="1px" borderColor={borderColor}>
                <Button
                  colorScheme="purple"
                  size="md"
                  rounded="full"
                  w="full"
                  fontWeight="medium"
                  mb={4}
                  onClick={scrollToContact}
                >
                  Contact Us
                </Button>
                <AuthHeader />
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavigationBar;
