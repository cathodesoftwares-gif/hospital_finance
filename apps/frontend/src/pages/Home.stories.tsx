import type { Meta, StoryObj } from '@storybook/react';
import Home from './Home';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The main landing page for the Hospital Financing Platform featuring hero section, features, statistics, integrations, and contact form.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithDarkBackground: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const WithGrayBackground: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'gray',
    },
  },
};

