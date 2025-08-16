import type { Meta, StoryObj } from '@storybook/react';
import AuthHeaderUI from './AuthHeaderUI';

const meta: Meta<typeof AuthHeaderUI> = {
  title: 'Components/Auth/AuthHeader',
  component: AuthHeaderUI,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Authentication header component that shows user profile when logged in or sign up/sign in buttons when not authenticated.',
      },
    },
  },
  argTypes: {
    handleSignOut: {
      action: 'sign-out',
      description: 'Callback function called when user signs out',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NotAuthenticated: Story = {
  args: {
    user: undefined,
    handleSignOut: () => console.log('Sign out clicked'),
  },
};

export const AuthenticatedUser: Story = {
  args: {
    user: {
      username: 'john.doe@hospital.com',
      role: 'Hospital Admin',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    handleSignOut: () => console.log('Sign out clicked'),
  },
};

export const AuthenticatedWithoutAvatar: Story = {
  args: {
    user: {
      username: 'jane.smith@clinic.com',
      role: 'Hospital Manager',
      avatarUrl: '',
    },
    handleSignOut: () => console.log('Sign out clicked'),
  },
};
