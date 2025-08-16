import type { Meta, StoryObj } from '@storybook/react';
import SignUpCardUI from './SignUpCardUI';

const meta: Meta<typeof SignUpCardUI> = {
  title: 'Components/Auth/SignUpCard',
  component: SignUpCardUI,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A sign-up form component for hospital users to create accounts on the financing platform.',
      },
    },
  },
  argTypes: {
    onSubmit: {
      action: 'submitted',
      description: 'Callback function called when the form is submitted',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (values) => console.log('Form submitted:', values),
  },
};

export const WithDarkBackground: Story = {
  args: {
    onSubmit: (values) => console.log('Form submitted:', values),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const WithGrayBackground: Story = {
  args: {
    onSubmit: (values) => console.log('Form submitted:', values),
  },
  parameters: {
    backgrounds: {
      default: 'gray',
    },
  },
};
