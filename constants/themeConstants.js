export const themeConstants = {
    // Spacing Constants
    spacing: {
      xsmall: 4,
      small: 8,
      medium: 16,
      large: 24,
      xlarge: 32,
      xxlarge: 40,
      xxxlarge: 48,
    },
  
    // Border Radius
    borderRadius: {
      none: 0,
      small: 4,
      medium: 8,
      large: 12,
      xlarge: 16,
      pill: 50,
    },
  
    // Shadow Styles
    shadow: {
      none: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
      },
      light: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      heavy: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
      },
    },
  
    // Gradient Styles
    gradients: {
      primary: ['#004aad', '#003366'], // Blue gradient
      secondary: ['#ff5733', '#cc2900'], // Orange gradient
      neutral: ['#f5f5f5', '#e0e0e0'], // Grey gradient
    },
  
    // Text Styles
    textStyles: {
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      subheading: {
        fontSize: 18,
        fontWeight: '600',
      },
      body: {
        fontSize: 16,
        fontWeight: 'normal',
      },
      caption: {
        fontSize: 12,
        fontWeight: '300',
      },
      button: {
        fontSize: 16,
        fontWeight: '500',
      },
    },
  
    // Button Styles
    button: {
      defaultHeight: 48,
      borderRadius: 4,
      padding: 16,
    },
  
    // Icon Sizes
    iconSize: {
      small: 16,
      medium: 24,
      large: 32,
      xlarge: 40,
    },
  
    // Opacity Constants
    opacity: {
      disabled: 0.5,
      hover: 0.8,
      active: 0.9,
    },
  
    // Add other theme-related constants as needed
  };
  