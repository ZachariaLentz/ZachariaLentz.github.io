// Modern, Professional Industrial Operations Color Theme
export const modernTheme = {
  // Primary Colors - Industrial & Professional
  primary: "#1a202c", // Deep charcoal
  primaryLight: "#2d3748", // Lighter charcoal
  secondary: "#2563eb", // Professional blue
  accent: "#dc2626", // Tesla red (industrial accent)

  // Backgrounds
  background: "#f8fafc", // Soft light background
  surface: "#ffffff", // White surfaces
  surfaceAlt: "#f1f5f9", // Subtle alt surface

  // Text Colors
  textPrimary: "#1a202c", // Dark text
  textSecondary: "#64748b", // Medium gray
  textTertiary: "#94a3b8", // Light gray
  textInverse: "#ffffff", // White text on dark

  // Borders & Dividers
  border: "#e2e8f0", // Light border
  borderDark: "#cbd5e1", // Darker border
  divider: "#f1f5f9", // Divider line

  // States
  success: "#10b981", // Green
  warning: "#f59e0b", // Amber
  error: "#ef4444", // Red
  info: "#0ea5e9", // Sky blue

  // Shadows
  shadowSm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  shadowMd: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  shadowLg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  shadowXl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",

  // Gradients
  gradientPrimary: "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)",
  gradientSecondary: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",

  // Typography Scales
  fontXs: "12px",
  fontSm: "14px",
  fontBase: "16px",
  fontLg: "18px",
  fontXl: "20px",
  fontXxl: "24px",
  fontXxxl: "30px",
  fontXxxxl: "36px",
  fontXxxxxl: "48px",

  // Font Families
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontFamilyMono: "'Courier New', 'Monaco', 'Consolas', monospace",

  // Spacing
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    xxxl: "64px",
  },

  // Border Radius
  radiusSm: "4px",
  radiusMd: "8px",
  radiusLg: "12px",
  radiusXl: "16px",
  radiusFull: "9999px",

  // Transitions
  transitionFast: "150ms ease-in-out",
  transitionBase: "200ms ease-in-out",
  transitionSlow: "300ms ease-in-out",

  // Z-index
  zIndex: {
    hide: -1,
    auto: "auto",
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    backdrop: 1040,
    offcanvas: 1050,
    modal: 1060,
    tooltip: 1070,
  },
};

// Legacy compatibility - export as chosenTheme
export const chosenTheme = modernTheme;

// Kept for backward compatibility with old component code
export const blueTheme = modernTheme;
export const brownTheme = modernTheme;
export const purpleTheme = modernTheme;
export const yelGreenTheme = modernTheme;
export const redTheme = modernTheme;
export const blackTheme = modernTheme;
export const pinkTheme = modernTheme;
export const violetTheme = modernTheme;
export const greenTheme = modernTheme;
export const orangeTheme = modernTheme;
