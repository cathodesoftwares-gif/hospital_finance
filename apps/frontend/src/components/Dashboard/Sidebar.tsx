import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import {
  FaHospital,
  FaCalendarAlt,
  FaUsers,
  FaUserMd,
  FaBuilding,
  FaClock,
  FaCreditCard,
  FaBoxes,
  FaEnvelope,
  FaLock,
} from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const bgColor = 'white';
  const borderColor = 'gray.200';
  const textColor = 'gray.600';
  const activeBgColor = 'blue.50';
  const activeTextColor = 'blue.600';

  const menuItems = [
    { icon: FaHospital, label: 'Dashboard', isActive: true },
    { icon: FaCalendarAlt, label: 'Appointments' },
    { icon: FaUsers, label: 'Patients' },
    { icon: FaUserMd, label: 'Doctors' },
    { icon: FaBuilding, label: 'Departments' },
    { icon: FaClock, label: "Doctors' Schedule" },
    { icon: FaCreditCard, label: 'Payments' },
    { icon: FaBoxes, label: 'Inventory' },
    { icon: FaEnvelope, label: 'Messages', badge: 7 },
  ];

  const SidebarContent = () => (
    <VStack
      h="100vh"
      w="280px"
      bg={bgColor}
      borderRight="1px solid"
      borderColor={borderColor}
      spacing={0}
      position="fixed"
      left={0}
      top={0}
      zIndex={10}
    >
      {/* Logo Section */}
      <Box p={6} w="full" borderBottom="1px solid" borderColor={borderColor}>
        <HStack spacing={3}>
          <Icon as={FaHospital} w={8} h={8} color="blue.500" />
          <Text fontSize="xl" fontWeight="bold" color="blue.500">
            WellNest
          </Text>
        </HStack>
      </Box>

      {/* Navigation Menu */}
      <VStack spacing={2} p={4} w="full" flex={1} overflowY="auto">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            w="full"
            justifyContent="flex-start"
            variant="ghost"
            size="lg"
            px={4}
            py={3}
            bg={item.isActive ? activeBgColor : 'transparent'}
            color={item.isActive ? activeTextColor : textColor}
            _hover={{
              bg: item.isActive ? activeBgColor : 'gray.100',
            }}
            leftIcon={<Icon as={item.icon} w={5} h={5} />}
            position="relative"
          >
            <HStack w="full" justify="space-between">
              <Text fontWeight="medium">{item.label}</Text>
              {item.badge && (
                <Badge
                  colorScheme="red"
                  borderRadius="full"
                  px={2}
                  py={1}
                  fontSize="xs"
                >
                  {item.badge}
                </Badge>
              )}
            </HStack>
          </Button>
        ))}
      </VStack>

      {/* Upgrade Card */}
      <Box p={4} w="full" borderTop="1px solid" borderColor={borderColor}>
        <Box
          bg="blue.600"
          color="white"
          p={4}
          borderRadius="xl"
          textAlign="center"
        >
          <VStack spacing={3}>
            <Icon as={FaLock} w={6} h={6} />
            <Text fontSize="sm" fontWeight="medium">
              Unlock New Features & Maximize Your Hospital Management Efficiency
            </Text>
            <HStack spacing={2} w="full">
              <Button
                size="sm"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: 'white', color: 'blue.600' }}
                flex={1}
              >
                What's New?
              </Button>
              <Button
                size="sm"
                bg="white"
                color="blue.600"
                _hover={{ bg: 'gray.100' }}
                flex={1}
              >
                Upgrade
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </VStack>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <Box display={{ base: 'none', lg: 'block' }}>
        <SidebarContent />
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onToggle} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <HStack spacing={3}>
              <Icon as={FaHospital} w={6} h={6} color="blue.500" />
              <Text fontSize="lg" fontWeight="bold" color="blue.500">
                WellNest
              </Text>
            </HStack>
          </DrawerHeader>
          <DrawerBody p={0}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
