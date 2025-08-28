import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import {
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const bgColor = 'white';
  const borderColor = 'gray.200';
  const [currentMonth, setCurrentMonth] = useState(new Date(2028, 6, 1)); // July 2028

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const days = getDaysInMonth(currentMonth);

  const formatMonthYear = (date: Date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const isSelectedDate = (date: Date | null) => {
    if (!date) return false;
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
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
      <VStack align="start" spacing={4}>
        {/* Header */}
        <HStack justify="space-between" w="full">
          <Text fontSize="lg" fontWeight="bold" color="gray.800">
            {formatMonthYear(currentMonth)}
          </Text>
          <HStack spacing={2}>
            <IconButton
              aria-label="Previous month"
              icon={<FaChevronLeft />}
              size="sm"
              variant="outline"
              onClick={() => {
                const prevMonth = new Date(currentMonth);
                prevMonth.setMonth(prevMonth.getMonth() - 1);
                setCurrentMonth(prevMonth);
              }}
            />
            <IconButton
              aria-label="Next month"
              icon={<FaChevronRight />}
              size="sm"
              variant="outline"
              onClick={() => {
                const nextMonth = new Date(currentMonth);
                nextMonth.setMonth(nextMonth.getMonth() + 1);
                setCurrentMonth(nextMonth);
              }}
            />
          </HStack>
        </HStack>

        {/* Days of Week */}
        <Grid templateColumns="repeat(7, 1fr)" gap={1} w="full">
          {daysOfWeek.map((day) => (
            <GridItem key={day}>
              <Text
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                textAlign="center"
                py={2}
              >
                {day}
              </Text>
            </GridItem>
          ))}
        </Grid>

        {/* Calendar Grid */}
        <Grid templateColumns="repeat(7, 1fr)" gap={1} w="full">
          {days.map((date, index) => (
            <GridItem key={index}>
              <Box
                w="full"
                h="32px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="md"
                cursor={date ? 'pointer' : 'default'}
                bg={isSelectedDate(date) ? 'blue.500' : 'transparent'}
                color={isSelectedDate(date) ? 'white' : isToday(date) ? 'blue.500' : 'gray.700'}
                fontWeight={isSelectedDate(date) || isToday(date) ? 'bold' : 'normal'}
                _hover={date ? { bg: isSelectedDate(date) ? 'blue.600' : 'gray.100' } : {}}
                onClick={() => date && onDateSelect(date)}
              >
                <Text fontSize="sm">
                  {date ? date.getDate() : ''}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Calendar;
