import React from 'react';
import {
  Grid,
  Box,
  VStack,
  HStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import {
  FaArrowUp,
  FaArrowDown,
  FaReceipt,
  FaUsers,
  FaCalendarAlt,
  FaBed,
} from 'react-icons/fa';

const MetricsCards: React.FC = () => {
  const bgColor = 'white';
  const borderColor = 'gray.200';

  const metrics = [
    {
      title: 'Total Invoice',
      value: '1,287',
      change: '+3.14%',
      changeText: '56 more than yesterday',
      icon: FaReceipt,
      trend: 'up',
      color: 'green',
    },
    {
      title: 'Total Patients',
      value: '965',
      change: '+3.78%',
      changeText: '45 more than yesterday',
      icon: FaUsers,
      trend: 'up',
      color: 'green',
    },
    {
      title: 'Appointments',
      value: '128',
      change: '-3.56%',
      changeText: '28 less than yesterday',
      icon: FaCalendarAlt,
      trend: 'down',
      color: 'red',
    },
    {
      title: 'Bedroom',
      value: '315',
      change: '+1.64%',
      changeText: '56 more than yesterday',
      icon: FaBed,
      trend: 'up',
      color: 'green',
    },
  ];

  return (
    <Grid 
      templateColumns={{ 
        base: '1fr', 
        sm: 'repeat(2, 1fr)', 
        md: 'repeat(2, 1fr)', 
        lg: 'repeat(4, 1fr)' 
      }} 
      gap={{ base: 4, md: 6 }}
    >
      {metrics.map((metric, index) => (
        <Box
          key={index}
          bg={bgColor}
          p={{ base: 4, md: 6 }}
          borderRadius="xl"
          border="1px solid"
          borderColor={borderColor}
          boxShadow="sm"
          _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
          transition="all 0.2s"
          minH={{ base: '120px', md: 'auto' }}
        >
          <VStack align="start" spacing={4}>
            {/* Header */}
            <HStack justify="space-between" w="full">
              <Icon
                as={metric.icon}
                w={6}
                h={6}
                color={`${metric.color}.500`}
              />
              <HStack spacing={1}>
                <Icon
                  as={metric.trend === 'up' ? FaArrowUp : FaArrowDown}
                  w={4}
                  h={4}
                  color={`${metric.color}.500`}
                />
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  color={`${metric.color}.500`}
                >
                  {metric.change}
                </Text>
              </HStack>
            </HStack>

            {/* Value */}
            <VStack align="start" spacing={1}>
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="gray.800">
                {metric.value}
              </Text>
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" fontWeight="medium">
                {metric.title}
              </Text>
            </VStack>

            {/* Change Text */}
            <Text fontSize="xs" color="gray.500">
              {metric.changeText}
            </Text>
          </VStack>
        </Box>
      ))}
    </Grid>
  );
};

export default MetricsCards;
