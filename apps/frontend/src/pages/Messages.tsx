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
  InputRightElement,
  Badge,
  Avatar,
  IconButton,
} from '@chakra-ui/react';
import {
  FaSearch,
  FaFilter,
  FaEllipsisH,
  FaPaperPlane,
  FaPaperclip,
  FaCheck,
  FaCheckDouble,
  FaPlus,
} from 'react-icons/fa';
import DashboardLayout from '../components/Dashboard/DashboardLayout';

// Mock data for messages
const mockConversations = [
  {
    id: 1,
    name: 'Dr. Michael Brown',
    role: 'Doctor',
    avatar: 'MB',
    lastMessage: "You're welcome, Dr. Brown. If you need anyt...",
    timestamp: '10:40 AM',
    unreadCount: 0,
    isActive: true,
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Patient',
    avatar: 'JD',
    lastMessage: 'Thank you for the appointment confirmation.',
    timestamp: '10:15 AM',
    unreadCount: 3,
    isActive: false,
  },
  {
    id: 3,
    name: 'Dr. Emily Smith',
    role: 'Doctor',
    avatar: 'ES',
    lastMessage: 'Can you send me the patient reports?',
    timestamp: '09:30 AM',
    unreadCount: 5,
    isActive: false,
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Patient',
    avatar: 'SJ',
    lastMessage: 'I have a question about my medication.',
    timestamp: 'Yesterday',
    unreadCount: 2,
    isActive: false,
  },
  {
    id: 5,
    name: 'Dr. William Carter',
    role: 'Doctor',
    avatar: 'WC',
    lastMessage: 'The surgery schedule has been updated.',
    timestamp: 'Yesterday',
    unreadCount: 1,
    isActive: false,
  },
];

const mockMessages = [
  {
    id: 1,
    sender: 'Dr. Michael Brown',
    content: 'Can you confirm the schedule for the Geriatric Care session tomorrow afternoon?',
    timestamp: '10:00 AM',
    isOwn: false,
    isRead: true,
  },
  {
    id: 2,
    sender: 'Alfredo Westervelt',
    content: 'Sure, Dr. Brown. Let me check the schedule for you.',
    timestamp: '10:20 AM',
    isOwn: true,
    isRead: true,
  },
  {
    id: 3,
    sender: 'Alfredo Westervelt',
    content: 'The Geriatric Care session is scheduled for 2:00 PM to 4:00 PM tomorrow. You have five patients lined up.',
    timestamp: '10:20 AM',
    isOwn: true,
    isRead: true,
  },
  {
    id: 4,
    sender: 'Dr. Michael Brown',
    content: 'Thank you. Can you please provide me the list of patients and their conditions?',
    timestamp: '10:26 AM',
    isOwn: false,
    isRead: true,
  },
  {
    id: 5,
    sender: 'Alfredo Westervelt',
    content: 'Of course. The patients are: 1. James Wilson - Arthritis Management 2. Mary Johnson - Diabetes Monitoring 3. Susan Lee - Hypertension Check-Up 4. Robert Brown - Heart Disease Follow-Up 5. Emily Thompson - Medication Review',
    timestamp: '10:30 AM',
    isOwn: true,
    isRead: true,
  },
  {
    id: 6,
    sender: 'Dr. Michael Brown',
    content: 'Great, thanks for the information. I\'ll be prepared for the session.',
    timestamp: '10:35 AM',
    isOwn: false,
    isRead: true,
  },
  {
    id: 7,
    sender: 'Alfredo Westervelt',
    content: 'You\'re welcome, Dr. Brown. If you need anything else, just let me know.',
    timestamp: '10:40 AM',
    isOwn: true,
    isRead: true,
  },
];

const Messages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [messageText, setMessageText] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Doctor':
        return 'blue';
      case 'Patient':
        return 'green';
      default:
        return 'gray';
    }
  };

  const filteredConversations = mockConversations.filter(conversation =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // TODO: Implement send message functionality
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const handleConversationSelect = (conversation: typeof mockConversations[0]) => {
    setSelectedConversation(conversation);
  };

  return (
    <DashboardLayout>
      <Box p={6} h="calc(100vh - 120px)" bg="white">
        <Flex h="full" gap={6}>
          {/* Left Pane - Message List */}
          <Box w="400px" bg="white" borderRadius="lg" border="1px solid" borderColor="gray.200" display="flex" flexDirection="column">
            {/* Header */}
            <Box p={4} borderBottom="1px solid" borderColor="gray.200">
              <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={4}>
                Messages
              </Text>
              
              {/* Search Bar */}
              <InputGroup>
                <InputLeftElement>
                  <FaSearch color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search name, chat, etc"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  bg="white"
                  borderColor="gray.300"
                  borderRadius="lg"
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Filter"
                    icon={<FaFilter />}
                    variant="ghost"
                    size="sm"
                  />
                </InputRightElement>
              </InputGroup>
            </Box>

            {/* Message Threads */}
            <Box flex={1} overflowY="auto">
              {filteredConversations.map((conversation) => (
                <Box
                  key={conversation.id}
                  w="full"
                  p={4}
                  cursor="pointer"
                  bg={conversation.isActive ? 'blue.50' : 'transparent'}
                  borderBottom="1px solid"
                  borderColor="gray.100"
                  _hover={{ bg: conversation.isActive ? 'blue.50' : 'blue.50' }}
                  onClick={() => handleConversationSelect(conversation)}
                >
                  <Flex justify="space-between" align="start">
                    <HStack spacing={3} flex={1}>
                      <Avatar size="sm" name={conversation.name} bg="blue.500" color="white">
                        {conversation.avatar}
                      </Avatar>
                      <VStack align="start" spacing={1} flex={1}>
                        <HStack justify="space-between" w="full">
                          <Text fontWeight="medium" fontSize="sm">
                            {conversation.name}
                          </Text>
                          <Text fontSize="xs" color="gray.500">
                            {conversation.timestamp}
                          </Text>
                        </HStack>
                        <HStack spacing={2}>
                          <Badge
                            colorScheme={getRoleColor(conversation.role)}
                            variant="subtle"
                            size="sm"
                            fontSize="xs"
                          >
                            {conversation.role}
                          </Badge>
                          {conversation.unreadCount > 0 && (
                            <Badge
                              colorScheme="red"
                              variant="solid"
                              size="sm"
                              borderRadius="full"
                              fontSize="xs"
                            >
                              {conversation.unreadCount}
                            </Badge>
                          )}
                        </HStack>
                        <Text fontSize="sm" color="gray.600" noOfLines={1}>
                          {conversation.lastMessage}
                        </Text>
                      </VStack>
                    </HStack>
                  </Flex>
                </Box>
              ))}
            </Box>

            {/* New Message Button */}
            <Box p={4} borderTop="1px solid" borderColor="gray.200">
              <Button
                colorScheme="blue"
                w="full"
                leftIcon={<FaPlus />}
                onClick={() => console.log('New message clicked')}
              >
                New Message
              </Button>
            </Box>
          </Box>

          {/* Right Pane - Chat Window */}
          <Box flex={1} bg="white" borderRadius="lg" border="1px solid" borderColor="gray.200" display="flex" flexDirection="column">
            {/* Chat Header */}
            <Box p={4} borderBottom="1px solid" borderColor="gray.200">
              <Flex justify="space-between" align="center">
                <Text fontWeight="medium" fontSize="lg">
                  {selectedConversation.name}
                </Text>
                <IconButton
                  aria-label="More options"
                  icon={<FaEllipsisH />}
                  variant="ghost"
                  size="sm"
                />
              </Flex>
            </Box>

            {/* Chat Messages */}
            <Box flex={1} p={4} overflowY="auto">
              <VStack spacing={4} align="stretch">
                {/* Date Separator */}
                <Text textAlign="center" fontSize="xs" color="gray.500" fontWeight="medium">
                  Today, July 20
                </Text>

                {/* Messages */}
                {mockMessages.map((message) => (
                  <Box
                    key={message.id}
                    alignSelf={message.isOwn ? 'flex-end' : 'flex-start'}
                    maxW="70%"
                  >
                    <Box
                      bg={message.isOwn ? 'blue.100' : 'blue.500'}
                      color={message.isOwn ? 'gray.800' : 'white'}
                      p={3}
                      borderRadius="lg"
                      position="relative"
                    >
                      <Text fontSize="sm" mb={1}>
                        {message.content}
                      </Text>
                      <HStack justify="space-between" align="center">
                        <Text fontSize="xs" color={message.isOwn ? 'gray.500' : 'blue.100'}>
                          {message.timestamp}
                        </Text>
                        {message.isOwn && (
                          <HStack spacing={1}>
                            {message.isRead ? (
                              <FaCheckDouble size={12} color="#90EE90" />
                            ) : (
                              <FaCheck size={12} color="#90EE90" />
                            )}
                          </HStack>
                        )}
                      </HStack>
                    </Box>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* Message Input */}
            <Box p={4} borderTop="1px solid" borderColor="gray.200">
              <HStack spacing={3}>
                <IconButton
                  aria-label="Attach file"
                  icon={<FaPaperclip />}
                  variant="ghost"
                  size="sm"
                />
                <Input
                  placeholder="Type a message.."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  borderColor="gray.300"
                  _focus={{ borderColor: 'blue.500' }}
                />
                <Button
                  colorScheme="blue"
                  leftIcon={<FaPaperPlane />}
                  onClick={handleSendMessage}
                  isDisabled={!messageText.trim()}
                >
                  Send
                </Button>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </DashboardLayout>
  );
};

export default Messages;
