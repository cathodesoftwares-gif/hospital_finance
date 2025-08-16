import type { Meta, StoryObj } from '@storybook/react';
import NavigationBar from './NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  title: 'Components/Navigation/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Modern navigation bar component inspired by FuturePath AI design, featuring logo, navigation links, CTA button, and mobile-responsive drawer.',
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
