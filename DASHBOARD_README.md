# Hospital Analytics Dashboard

## Overview
The Hospital Analytics Dashboard is an AI-powered analytics platform that provides comprehensive insights into hospital performance, patient analytics, and financial metrics.

## Features
- **Secure Login System**: Protected access with authentication
- **Real-time Analytics**: Live dashboard with key performance indicators
- **Financial Metrics**: Revenue tracking, growth analysis, and financial insights
- **Patient Analytics**: Patient satisfaction, bed occupancy, and stay duration metrics
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Test Credentials
For testing purposes, use the following demo credentials:

```
Email: demo@hospital.finance
Password: demo123
```

## How to Access

### 1. From Analytics Page
1. Navigate to the Analytics page (`/analytics`)
2. Click the "View Demo Dashboard" button
3. You'll be redirected to the login page

### 2. Direct Access
1. Go directly to `/dashboard-login`
2. Enter the test credentials above
3. Click "Sign In" or use the "Use Demo Credentials" button

## Dashboard Features

### Key Metrics Displayed
- **Total Revenue**: Current month's revenue with growth percentage
- **Total Patients**: Number of patients with growth trend
- **Bed Occupancy**: Current occupancy rate and trend
- **Average Stay Duration**: Patient stay duration with trend

### Quick Actions
- **View Detailed Reports**: Access comprehensive analytics
- **Patient Analytics**: Monitor patient satisfaction and outcomes
- **Financial Reports**: Track revenue, expenses, and profitability

### Navigation
- **Home Button**: Return to main website
- **Logout Button**: Sign out and return to analytics page

## Technical Implementation

### Authentication
- Uses React Context for state management
- Protected routes ensure only authenticated users can access dashboard
- Session management with automatic redirects

### Components
- `DashboardLogin`: Login page with form validation
- `Dashboard`: Main dashboard with metrics and actions
- `ProtectedRoute`: Route protection component
- `AuthContext`: Authentication state management

### Routes
- `/dashboard-login`: Login page
- `/dashboard`: Protected dashboard page (requires authentication)

## Security Features
- Form validation for email and password
- Protected routes prevent unauthorized access
- Automatic logout functionality
- Secure credential handling

## Future Enhancements
- Real-time data integration
- Advanced analytics and reporting
- User role management
- Data export functionality
- Custom dashboard configurations

## Development Notes
- Built with React and TypeScript
- Uses Chakra UI for consistent design
- Responsive design for all screen sizes
- Mock data for demonstration purposes
