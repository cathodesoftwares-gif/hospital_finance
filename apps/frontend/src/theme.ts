import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: 'gray.50',
      color: 'gray.800',
    },
  }),
};

const colors = {
  // Professional Healthcare-Finance Color Palette
  brand: {
    // Primary Blue - Trust, Calmness, Professionalism
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Primary brand blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  healthcare: {
    // Teal - Healing, Growth, Wellness
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6', // Healthcare accent
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  finance: {
    // Green - Wealth, Stability, Growth
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // Finance success
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  neutral: {
    // Professional Grays
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  alert: {
    // Red - Urgency, Alerts (used sparingly)
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  accent: {
    // Orange - Call-to-action, Warmth
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
};

const components = {
  // Custom component styles
  Button: {
    defaultProps: {
      colorScheme: 'brand',
    },
  },
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles,
  colors,
  components,
});

export default theme;
