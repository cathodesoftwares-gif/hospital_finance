# 🎨 Frontend Preview System

This document explains how to use the Storybook preview system for the Hospital Financing Platform.

## 🚀 Quick Start

### Start the Preview Server
```bash
npm run frontend:storybook
```

### Access the Preview
- **URL**: http://localhost:4400
- **Network**: http://192.168.1.10:4400 (for team access)

## 📚 Available Stories

### 🏠 Pages
- **Home Page** - Complete landing page with all sections
  - Default view
  - Dark background
  - Gray background

### 🔐 Authentication Components
- **SignUpCard** - User registration form
  - Form validation
  - Password visibility toggle
  - Responsive design

- **SignInCard** - User login form
  - Remember me functionality
  - Form validation
  - Multiple background variations

- **AuthHeader** - User profile and navigation
  - Not authenticated state
  - Authenticated user with avatar
  - Authenticated user without avatar

### 🏗️ Layout Components
- **SidebarWithHeader** - Main application layout
  - Default dashboard layout
  - Long content example
  - Form content example

### 📖 Component Library
- **Complete Showcase** - All components in one place
  - Authentication components
  - Header components
  - Layout components
  - Design system (colors, typography, badges)

## 🎯 Features

### Interactive Controls
- **Background Switcher** - Test components on different backgrounds
- **Action Logging** - See form submissions and interactions in the Actions panel
- **Responsive Testing** - View components at different screen sizes

### Documentation
- **Auto-generated Docs** - Component descriptions and props
- **Usage Examples** - Multiple story variations
- **Design Guidelines** - Color palette and typography

## 🛠️ Development Workflow

### Adding New Components
1. Create your component in the appropriate directory
2. Create a `.stories.tsx` file for your component
3. Add multiple story variations to showcase different states
4. Include proper documentation and descriptions

### Example Story Structure
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import YourComponent from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'Category/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'padded', // or 'fullscreen'
    docs: {
      description: {
        component: 'Description of your component',
      },
    },
  },
  argTypes: {
    // Define your component props here
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Your component props
  },
};
```

### Best Practices
- **Use meaningful story names** - Make it clear what each story demonstrates
- **Include multiple variations** - Show different states and props
- **Add proper documentation** - Describe what the component does
- **Test interactions** - Use action logging for user interactions
- **Consider responsive design** - Test on different screen sizes

## 🎨 Design System

The preview system includes a comprehensive design system showcasing:

### Colors
- Primary blue palette
- Gray scale
- Status colors (success, error, warning)

### Typography
- Heading sizes (2XL, XL, LG)
- Body text variations
- Font weights

### Components
- Badges and status indicators
- Buttons and form elements
- Layout components

## 🔧 Troubleshooting

### Common Issues
1. **Storybook not starting** - Check for TypeScript errors in stories
2. **Components not loading** - Verify import paths are correct
3. **Styling issues** - Ensure ChakraUI theme is properly imported

### Useful Commands
```bash
# Start Storybook
npm run frontend:storybook

# Build Storybook for production
npm run build-storybook

# Check for TypeScript errors
npm run lint
```

## 📱 Mobile Testing

Storybook includes responsive testing tools:
- **Viewport controls** - Test different screen sizes
- **Device simulation** - iPhone, iPad, desktop views
- **Touch interactions** - Test mobile gestures

## 🚀 Next Steps

1. **Explore existing stories** - Familiarize yourself with the component library
2. **Add new components** - Create stories for new features
3. **Share with team** - Use the network URL for team collaboration
4. **Document patterns** - Add design system documentation

---

**Happy Previewing! 🎉**

