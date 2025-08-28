import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { FaEllipsisH, FaChevronDown } from 'react-icons/fa';

const DepartmentChart: React.FC = () => {
  const bgColor = 'white';
  const borderColor = 'gray.200';

  const departmentData = [
    { name: 'Emergency Medicine', percentage: 35, color: '#1E40AF' },
    { name: 'General Medicine', percentage: 28, color: '#0D9488' },
    { name: 'Internal Medicine', percentage: 20, color: '#7DD3FC' },
    { name: 'Other Departments', percentage: 17, color: '#9CA3AF' },
  ];

  const totalPatients = 1890;

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
          <VStack align="start" spacing={0}>
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              Patient Overview
            </Text>
            <Text fontSize="sm" color="gray.600">
              by Departments
            </Text>
          </VStack>
          <IconButton
            aria-label="Options"
            icon={<FaEllipsisH />}
            size="sm"
            variant="ghost"
            color="gray.500"
          />
        </HStack>

                {/* Simple Progress Chart */}
        <Box position="relative" w="full" h="200px" display="flex" alignItems="center" justifyContent="center">
          {/* Center Text */}
          <VStack spacing={1} position="absolute" zIndex={2}>
            <Text fontSize="sm" color="gray.600">
              Overall
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              {totalPatients.toLocaleString()}
            </Text>
            <HStack spacing={1}>
              <Text fontSize="sm" color="gray.600">
                This Week
              </Text>
              <FaChevronDown size={12} color="#6B7280" />
            </HStack>
          </VStack>

          {/* Donut Chart with Colored Borders */}
          <Box position="relative" w="160px" h="160px">
            {/* Background Circle */}
            <Box
              w="full"
              h="full"
              borderRadius="full"
              border="8px solid"
              borderColor="gray.200"
              position="relative"
            />
            
            {/* Colored Border Segments */}
            {departmentData.map((dept, index) => {
              const previousPercentages = departmentData
                .slice(0, index)
                .reduce((sum, d) => sum + d.percentage, 0);
              
              const startAngle = (previousPercentages / 100) * 360;
              const endAngle = ((previousPercentages + dept.percentage) / 100) * 360;
              
              // Calculate arc path for the border segment
              const radius = 76; // Outer radius for border
              const centerX = 80;
              const centerY = 80;
              
              const startRadians = (startAngle - 90) * (Math.PI / 180);
              const endRadians = (endAngle - 90) * (Math.PI / 180);
              
              const x1 = centerX + radius * Math.cos(startRadians);
              const y1 = centerY + radius * Math.sin(startRadians);
              const x2 = centerX + radius * Math.cos(endRadians);
              const y2 = centerY + radius * Math.sin(endRadians);
              
              const largeArcFlag = dept.percentage > 50 ? 1 : 0;
              
              const arcPath = [
                `M ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`
              ].join(' ');
              
              return (
                <Box
                  key={dept.name}
                  position="absolute"
                  w="full"
                  h="full"
                  top="0"
                  left="0"
                >
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                  >
                    <path
                      d={arcPath}
                      fill="none"
                      stroke={dept.color}
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </svg>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Legend Below Chart - Vertical List */}
        <VStack spacing={3} w="full" align="start">
          {departmentData.map((dept, index) => (
            <HStack key={index} spacing={3} w="full">
              <Box w={3} h={3} bg={dept.color} borderRadius="full" />
              <Text fontSize="sm" color="gray.800" flex={1}>
                {dept.name}
              </Text>
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
                {dept.percentage}%
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default DepartmentChart;
