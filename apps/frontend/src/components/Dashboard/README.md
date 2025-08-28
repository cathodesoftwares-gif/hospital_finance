# Hospital Management Dashboard Components

This directory contains all the modular components for the WellNest Hospital Management Dashboard. Each component is designed to be easily integrated with backend services, database, and AI models.

## Component Architecture

The dashboard is built with a modular architecture where each component is self-contained and can be easily connected to backend services. Here's the structure:

```
Dashboard/
├── Sidebar.tsx              # Navigation sidebar with menu items
├── Header.tsx               # Top header with search and user profile
├── MetricsCards.tsx         # KPI cards showing key metrics
├── PatientAgeChart.tsx      # Bar chart for patient age distribution
├── RevenueChart.tsx         # Line chart for revenue trends
├── DepartmentChart.tsx      # Donut chart for department distribution
├── DoctorsSchedule.tsx      # List of doctors and their availability
├── ReportList.tsx           # Urgent tasks and reports
├── AppointmentTable.tsx     # Patient appointments table
├── Calendar.tsx             # Monthly calendar widget
├── DailySchedule.tsx        # Daily schedule for selected date
├── RecentActivity.tsx       # Recent activity feed
└── README.md               # This documentation
```

## Component Details

### 1. Sidebar.tsx
**Purpose**: Main navigation sidebar with menu items and upgrade card
**Integration Points**:
- Menu items can be dynamically loaded from backend
- User permissions can control menu visibility
- Upgrade card can connect to subscription management API

**Backend Integration**:
```typescript
// Example API calls
const menuItems = await fetch('/api/menu-items');
const userPermissions = await fetch('/api/user/permissions');
const subscriptionStatus = await fetch('/api/subscription/status');
```

### 2. Header.tsx
**Purpose**: Top header with search functionality and user profile
**Integration Points**:
- Search can connect to global search API
- User profile can fetch from user management service
- Notifications can connect to real-time notification system

**Backend Integration**:
```typescript
// Example API calls
const searchResults = await fetch('/api/search?q=${query}');
const userProfile = await fetch('/api/user/profile');
const notifications = await fetch('/api/notifications');
```

### 3. MetricsCards.tsx
**Purpose**: Displays key performance indicators (KPIs)
**Integration Points**:
- All metrics can be fetched from analytics API
- Real-time updates via WebSocket
- Historical data for trend calculations

**Backend Integration**:
```typescript
// Example API calls
const metrics = await fetch('/api/analytics/metrics');
const trends = await fetch('/api/analytics/trends');
// WebSocket for real-time updates
const ws = new WebSocket('ws://api/analytics/realtime');
```

### 4. PatientAgeChart.tsx
**Purpose**: Bar chart showing patient distribution by age
**Integration Points**:
- Patient data from patient management system
- Time-based filtering
- Export functionality

**Backend Integration**:
```typescript
// Example API calls
const patientData = await fetch('/api/patients/age-distribution?period=${period}');
const exportData = await fetch('/api/patients/export?format=csv');
```

### 5. RevenueChart.tsx
**Purpose**: Line chart showing income vs expense trends
**Integration Points**:
- Financial data from accounting system
- Multiple time periods (week/month/year)
- Budget vs actual comparisons

**Backend Integration**:
```typescript
// Example API calls
const revenueData = await fetch('/api/finance/revenue?period=${period}');
const budgetData = await fetch('/api/finance/budget');
```

### 6. DepartmentChart.tsx
**Purpose**: Donut chart showing patient distribution by department
**Integration Points**:
- Department data from hospital management system
- Capacity planning integration
- Resource allocation insights

**Backend Integration**:
```typescript
// Example API calls
const departmentData = await fetch('/api/departments/patient-distribution');
const capacityData = await fetch('/api/departments/capacity');
```

### 7. DoctorsSchedule.tsx
**Purpose**: List of doctors with availability status
**Integration Points**:
- Doctor data from HR system
- Real-time availability updates
- Schedule management integration

**Backend Integration**:
```typescript
// Example API calls
const doctors = await fetch('/api/doctors/schedule');
const availability = await fetch('/api/doctors/availability');
// WebSocket for real-time updates
const ws = new WebSocket('ws://api/doctors/realtime');
```

### 8. ReportList.tsx
**Purpose**: Displays urgent tasks and maintenance reports
**Integration Points**:
- Task management system
- Maintenance scheduling
- Alert system integration

**Backend Integration**:
```typescript
// Example API calls
const urgentTasks = await fetch('/api/tasks/urgent');
const maintenanceReports = await fetch('/api/maintenance/reports');
// WebSocket for real-time alerts
const ws = new WebSocket('ws://api/alerts/realtime');
```

### 9. AppointmentTable.tsx
**Purpose**: Patient appointments table with filtering
**Integration Points**:
- Appointment booking system
- Patient management system
- Doctor scheduling system

**Backend Integration**:
```typescript
// Example API calls
const appointments = await fetch('/api/appointments?date=${date}');
const patients = await fetch('/api/patients');
const doctors = await fetch('/api/doctors');
```

### 10. Calendar.tsx
**Purpose**: Monthly calendar widget
**Integration Points**:
- Event management system
- Appointment scheduling
- Holiday and leave management

**Backend Integration**:
```typescript
// Example API calls
const events = await fetch('/api/calendar/events?month=${month}&year=${year}');
const appointments = await fetch('/api/appointments/calendar');
```

### 11. DailySchedule.tsx
**Purpose**: Daily schedule for selected date
**Integration Points**:
- Schedule management system
- Event creation and editing
- Resource allocation

**Backend Integration**:
```typescript
// Example API calls
const dailySchedule = await fetch('/api/schedule/daily?date=${date}');
const createEvent = await fetch('/api/schedule/events', { method: 'POST' });
```

### 12. RecentActivity.tsx
**Purpose**: Recent activity feed
**Integration Points**:
- Activity logging system
- Audit trail
- Real-time activity updates

**Backend Integration**:
```typescript
// Example API calls
const activities = await fetch('/api/activities/recent');
// WebSocket for real-time updates
const ws = new WebSocket('ws://api/activities/realtime');
```

## AI Integration Points

### 1. Predictive Analytics
- **Patient Flow Prediction**: AI models can predict patient admission rates
- **Resource Optimization**: ML algorithms can optimize staff scheduling
- **Revenue Forecasting**: Predictive models for financial planning

### 2. Intelligent Recommendations
- **Staff Scheduling**: AI-powered recommendations for optimal staff allocation
- **Inventory Management**: ML-based predictions for medication and supply needs
- **Patient Care**: AI recommendations for treatment plans

### 3. Anomaly Detection
- **Financial Anomalies**: Detect unusual billing patterns
- **Patient Safety**: Identify potential safety issues
- **System Health**: Monitor equipment and system performance

## Database Schema Suggestions

### Core Tables
```sql
-- Patients
CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  age INTEGER,
  department_id INTEGER,
  admission_date DATE,
  discharge_date DATE
);

-- Appointments
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER,
  doctor_id INTEGER,
  appointment_date DATE,
  appointment_time TIME,
  status VARCHAR(50),
  treatment_type VARCHAR(255)
);

-- Doctors
CREATE TABLE doctors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  specialty VARCHAR(255),
  availability_status VARCHAR(50),
  schedule JSONB
);

-- Departments
CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  capacity INTEGER,
  current_patients INTEGER
);

-- Financial Records
CREATE TABLE financial_records (
  id SERIAL PRIMARY KEY,
  date DATE,
  income DECIMAL(10,2),
  expense DECIMAL(10,2),
  category VARCHAR(255)
);

-- Activities
CREATE TABLE activities (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP,
  activity_type VARCHAR(255),
  description TEXT,
  user_id INTEGER
);
```

## API Endpoints Structure

### Analytics Endpoints
```
GET /api/analytics/metrics
GET /api/analytics/trends
GET /api/analytics/patient-age-distribution
GET /api/analytics/revenue
GET /api/analytics/department-distribution
```

### Management Endpoints
```
GET /api/patients
GET /api/doctors
GET /api/appointments
GET /api/departments
GET /api/finance
```

### Real-time Endpoints
```
WS /api/realtime/metrics
WS /api/realtime/notifications
WS /api/realtime/activities
```

## State Management

Consider using a state management solution like Redux Toolkit or Zustand for:
- Global application state
- Caching API responses
- Real-time data synchronization
- User preferences and settings

## Performance Optimization

1. **Lazy Loading**: Load components on demand
2. **Data Caching**: Cache frequently accessed data
3. **Pagination**: Implement pagination for large datasets
4. **Virtual Scrolling**: For large lists and tables
5. **Image Optimization**: Optimize avatar and profile images

## Security Considerations

1. **Authentication**: Implement proper authentication for all API calls
2. **Authorization**: Role-based access control for different user types
3. **Data Encryption**: Encrypt sensitive patient data
4. **Audit Logging**: Log all user actions for compliance
5. **Input Validation**: Validate all user inputs

## Testing Strategy

1. **Unit Tests**: Test individual components
2. **Integration Tests**: Test API integrations
3. **E2E Tests**: Test complete user workflows
4. **Performance Tests**: Test dashboard performance with large datasets

## Deployment Considerations

1. **Environment Variables**: Configure API endpoints for different environments
2. **Build Optimization**: Optimize bundle size for production
3. **CDN**: Use CDN for static assets
4. **Monitoring**: Implement error tracking and performance monitoring

This modular architecture ensures that each component can be developed, tested, and deployed independently while maintaining a cohesive user experience.
