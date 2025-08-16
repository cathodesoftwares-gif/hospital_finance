import type { Meta, StoryObj } from '@storybook/react';
import SignInCardUI from './SignInCardUI';

const meta: Meta<typeof SignInCardUI> = {
  title: 'Components/Auth/SignInCard',
  component: SignInCardUI,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A sign-in form component for hospital users to access their accounts on the financing platform.',
      },
    },
  },
  argTypes: {
    onSubmit: {
      action: 'submitted',
      description: 'Callback function called when the form is submitted',
    },
    handleRememberMe: {
      action: 'remember-me-changed',
      description: 'Callback function called when remember me checkbox is toggled',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rememberMe: false,
    onSubmit: (values) => console.log('Form submitted:', values),
    handleRememberMe: (value) => console.log('Remember me changed:', value),
  },
};

export const WithRememberMeChecked: Story = {
  args: {
    rememberMe: true,
    onSubmit: (values) => console.log('Form submitted:', values),
    handleRememberMe: (value) => console.log('Remember me changed:', value),
  },
};

export const WithDarkBackground: Story = {
  args: {
    rememberMe: false,
    onSubmit: (values) => console.log('Form submitted:', values),
    handleRememberMe: (value) => console.log('Remember me changed:', value),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

