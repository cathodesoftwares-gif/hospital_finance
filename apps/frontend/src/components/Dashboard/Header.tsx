import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Icon,
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  FaSearch,
  FaCog,
  FaBell,
  FaChevronDown,
  FaHospital,
  FaUser,
} from 'react-icons/fa';

interface HeaderProps {
  onMenuClick: () => void;
  user?: {
    id: number;
    username: string;
    hospitalName: string;
    role: string;
  } | null;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, user }) => {
  const bgColor = 'white';
  const borderColor = 'gray.200';
  const textColor = 'gray.600';

  return (
    <Box
      bg={bgColor}
      borderBottom="1px solid"
      borderColor={borderColor}
      px={6}
      py={4}
      position="sticky"
      top={0}
      zIndex={5}
    >
      <HStack justify="space-between" w="full">
        {/* Hospital Logo */}
        <HStack spacing={3}>
          <Icon as={FaHospital} w={8} h={8} color="blue.500" />
          <Text fontSize="xl" fontWeight="bold" color="blue.500">
            WellNest
          </Text>
        </HStack>
        
        {/* Search Bar */}
        <Box flex={1} maxW="400px" mx={4}>
          <InputGroup>
            <InputLeftElement>
              <Icon as={FaSearch} color={textColor} />
            </InputLeftElement>
            <Input
              placeholder="Search anything"
              bg="gray.50"
              border="1px solid"
              borderColor={borderColor}
              borderRadius="lg"
              _focus={{
                borderColor: 'blue.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
              }}
            />
          </InputGroup>
        </Box>

        {/* Right Side Icons and User */}
        <HStack spacing={4}>
          {/* Settings */}
          <IconButton
            aria-label="Settings"
            icon={<FaCog />}
            variant="ghost"
            color={textColor}
            _hover={{ bg: 'gray.100' }}
          />

          {/* Notifications */}
          <IconButton
            aria-label="Notifications"
            icon={<FaBell />}
            variant="ghost"
            color={textColor}
            _hover={{ bg: 'gray.100' }}
          />

          {/* User Profile */}
          <Menu>
            <MenuButton
              as={IconButton}
              variant="ghost"
              _hover={{ bg: 'gray.100' }}
            >
              <HStack spacing={3}>
                <Avatar
                  size="sm"
                  name="Naman Raghuvanshi"
                  bg="blue.500"
                  color="white"
                  icon={<FaUser />}
                />
                <VStack spacing={0} align="start" display={{ base: 'none', md: 'flex' }}>
                  <Text fontSize="sm" fontWeight="medium" color="gray.800">
                    Naman Raghuvanshi
                  </Text>
                  <Text fontSize="xs" color={textColor}>
                    Administrator
                  </Text>
                </VStack>
                <Icon as={FaChevronDown} color={textColor} />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
