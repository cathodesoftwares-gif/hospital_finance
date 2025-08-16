import type { Meta, StoryObj } from '@storybook/react';
import SidebarWithHeader from './SidebarWithHeader';
import { Box, Text, VStack, Heading } from '@chakra-ui/react';

const meta: Meta<typeof SidebarWithHeader> = {
  title: 'Components/Layout/SidebarWithHeader',
  component: SidebarWithHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main layout component with sidebar navigation and header for the Hospital Financing Platform.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <VStack spacing={6} align="stretch">
    <Heading size="lg">Dashboard Content</Heading>
    <Text>This is the main content area of the application.</Text>
    <Box p={6} bg="blue.50" borderRadius="md">
      <Text>Sample content block to demonstrate the layout.</Text>
    </Box>
    <Box p={6} bg="green.50" borderRadius="md">
      <Text>Another content block with different styling.</Text>
    </Box>
  </VStack>
);

export const Default: Story = {
  args: {
    children: <SampleContent />,
  },
};

export const WithLongContent: Story = {
  args: {
    children: (
      <VStack spacing={6} align="stretch">
        <Heading size="lg">Long Content Example</Heading>
        {Array.from({ length: 10 }, (_, i) => (
          <Box key={i} p={4} bg={`${i % 2 === 0 ? 'blue' : 'green'}.50`} borderRadius="md">
            <Text>Content block {i + 1}</Text>
          </Box>
        ))}
      </VStack>
    ),
  },
};

export const WithFormContent: Story = {
  args: {
    children: (
      <VStack spacing={6} align="stretch">
        <Heading size="lg">Application Form</Heading>
        <Box p={6} bg="white" borderRadius="md" boxShadow="md">
          <Text>This could be a loan application form or any other form content.</Text>
        </Box>
      </VStack>
    ),
  },
};

