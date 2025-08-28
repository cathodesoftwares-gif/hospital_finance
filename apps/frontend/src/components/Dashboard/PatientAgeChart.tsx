import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Select,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const PatientAgeChart: React.FC = () => {
  const bgColor = 'white';
  const borderColor = 'gray.200';
  const [timeFilter, setTimeFilter] = useState('Last 8 Days');

  // Mock data for the chart
  const chartData = [
    { date: '4 Jul', child: 85, adult: 92, elderly: 28 },
    { date: '5 Jul', child: 92, adult: 98, elderly: 32 },
    { date: '6 Jul', child: 78, adult: 105, elderly: 25 },
    { date: '7 Jul', child: 88, adult: 110, elderly: 30 },
    { date: '8 Jul', child: 105, adult: 112, elderly: 35 },
    { date: '9 Jul', child: 95, adult: 108, elderly: 28 },
    { date: '10 Jul', child: 102, adult: 115, elderly: 32 },
    { date: '11 Jul', child: 98, adult: 120, elderly: 30 },
  ];

  const maxValue = Math.max(
    ...chartData.flatMap(d => [d.child, d.adult, d.elderly])
  );

  const colors = {
    child: '#3B82F6',
    adult: '#10B981',
    elderly: '#F59E0B',
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
            Patient Overview by Age Stages
          </Text>
          <Select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            size="sm"
            w="auto"
            minW="150px"
            bg="white"
            borderColor={borderColor}
          >
            <option value="Last 8 Days">Last 8 Days</option>
            <option value="Last 30 Days">Last 30 Days</option>
            <option value="Last 3 Months">Last 3 Months</option>
          </Select>
        </HStack>

        {/* Legend */}
        <HStack spacing={6}>
          <HStack spacing={2}>
            <Box w={3} h={3} bg={colors.child} borderRadius="sm" />
            <Text fontSize="sm" color="gray.600">Child</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w={3} h={3} bg={colors.adult} borderRadius="sm" />
            <Text fontSize="sm" color="gray.600">Adult</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w={3} h={3} bg={colors.elderly} borderRadius="sm" />
            <Text fontSize="sm" color="gray.600">Elderly</Text>
          </HStack>
        </HStack>

        {/* Chart */}
        <Box w="full" h="200px" position="relative">
          <Grid templateColumns="repeat(8, 1fr)" gap={2} h="full" alignItems="end">
            {chartData.map((data, index) => (
              <GridItem key={index}>
                <VStack spacing={1} h="full" justify="end">
                  {/* Bars */}
                  <HStack spacing={1} h="full" align="end">
                    <Box
                      bg={colors.child}
                      h={`${(data.child / maxValue) * 100}%`}
                      w="full"
                      borderRadius="sm"
                      minH="4px"
                    />
                    <Box
                      bg={colors.adult}
                      h={`${(data.adult / maxValue) * 100}%`}
                      w="full"
                      borderRadius="sm"
                      minH="4px"
                    />
                    <Box
                      bg={colors.elderly}
                      h={`${(data.elderly / maxValue) * 100}%`}
                      w="full"
                      borderRadius="sm"
                      minH="4px"
                    />
                  </HStack>
                  
                  {/* Date Label */}
                  <Text fontSize="xs" color="gray.500" textAlign="center">
                    {data.date}
                  </Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* Current Day Stats */}
        <Box
          bg="gray.50"
          p={4}
          borderRadius="lg"
          w="full"
          border="1px solid"
          borderColor="gray.200"
        >
          <HStack justify="space-between">
            <Text fontSize="sm" color="gray.600">
              Current Day (8 Jul):
            </Text>
            <HStack spacing={4}>
              <Text fontSize="sm" color={colors.child} fontWeight="medium">
                Child ({chartData[4].child})
              </Text>
              <Text fontSize="sm" color={colors.adult} fontWeight="medium">
                Adult ({chartData[4].adult})
              </Text>
              <Text fontSize="sm" color={colors.elderly} fontWeight="medium">
                Elderly ({chartData[4].elderly})
              </Text>
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default PatientAgeChart;
