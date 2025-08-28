import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const RevenueChart: React.FC = () => {
  const bgColor = 'white';
  const borderColor = 'gray.200';
  const [timeFilter, setTimeFilter] = useState('Week');

  // Mock data for the chart
  const chartData = [
    { day: 'Sun', income: 1200, expense: 800 },
    { day: 'Mon', income: 1400, expense: 900 },
    { day: 'Tue', income: 1600, expense: 1100 },
    { day: 'Wed', income: 1485, expense: 950 },
    { day: 'Thu', income: 1800, expense: 1200 },
    { day: 'Fri', income: 1700, expense: 1000 },
    { day: 'Sat', income: 1500, expense: 850 },
  ];

  const maxValue = Math.max(
    ...chartData.flatMap(d => [d.income, d.expense])
  );

  const colors = {
    income: '#3B82F6',
    expense: '#9CA3AF',
  };

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
    >
      <VStack align="start" spacing={6}>
        {/* Header */}
        <HStack justify="space-between" w="full">
          <Text fontSize="lg" fontWeight="bold" color="gray.800">
            Revenue
          </Text>
          <HStack spacing={2}>
            {['Week', 'Month', 'Year'].map((filter) => (
              <Button
                key={filter}
                size="sm"
                variant={timeFilter === filter ? 'solid' : 'outline'}
                colorScheme={timeFilter === filter ? 'blue' : 'gray'}
                onClick={() => setTimeFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </HStack>
        </HStack>

        {/* Legend */}
        <HStack spacing={6}>
          <HStack spacing={2}>
            <Box w={3} h={3} bg={colors.income} borderRadius="sm" />
            <Text fontSize="sm" color="gray.600">Income</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w={3} h={3} bg={colors.expense} borderRadius="sm" />
            <Text fontSize="sm" color="gray.600">Expense</Text>
          </HStack>
        </HStack>

        {/* Chart */}
        <Box w="full" h="200px" position="relative">
          <Grid templateColumns="repeat(7, 1fr)" gap={2} h="full" alignItems="end">
            {chartData.map((data, index) => (
              <GridItem key={index}>
                <VStack spacing={1} h="full" justify="end">
                  {/* Lines */}
                  <Box position="relative" w="full" h="full">
                    {/* Income Line */}
                    <Box
                      position="absolute"
                      bottom={`${(data.income / maxValue) * 100}%`}
                      left="50%"
                      transform="translateX(-50%)"
                      w={3}
                      h={3}
                      bg={colors.income}
                      borderRadius="full"
                      border="2px solid white"
                      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
                    />
                    
                    {/* Expense Line */}
                    <Box
                      position="absolute"
                      bottom={`${(data.expense / maxValue) * 100}%`}
                      left="50%"
                      transform="translateX(-50%)"
                      w={3}
                      h={3}
                      bg={colors.expense}
                      borderRadius="full"
                      border="2px solid white"
                      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
                    />

                    {/* Connect lines to previous points */}
                    {index > 0 && (
                      <>
                        <Box
                          position="absolute"
                          bottom={`${(data.income / maxValue) * 100}%`}
                          left="50%"
                          w="100%"
                          h="2px"
                          bg={colors.income}
                          transform="translateX(-50%)"
                          zIndex={1}
                        />
                        <Box
                          position="absolute"
                          bottom={`${(data.expense / maxValue) * 100}%`}
                          left="50%"
                          w="100%"
                          h="2px"
                          bg={colors.expense}
                          transform="translateX(-50%)"
                          zIndex={1}
                        />
                      </>
                    )}
                  </Box>
                  
                  {/* Day Label */}
                  <Text fontSize="xs" color="gray.500" textAlign="center">
                    {data.day}
                  </Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* Tooltip for Wednesday */}
        <Box
          bg="blue.50"
          p={4}
          borderRadius="lg"
          w="full"
          border="1px solid"
          borderColor="blue.200"
        >
          <HStack justify="space-between">
            <Text fontSize="sm" color="blue.700">
              Wednesday (Wed):
            </Text>
            <Text fontSize="sm" color={colors.income} fontWeight="medium">
              Income: ${chartData[3].income}
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default RevenueChart;
