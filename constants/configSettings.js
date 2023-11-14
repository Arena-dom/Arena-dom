// Define different configurations for various environments
const developmentConfig = {
    apiBaseUrl: 'https://dev-api.yourdomain.com',
    enableDebugMode: true,
    analyticsApiKey: 'DEV_ANALYTICS_KEY',
    featureFlags: {
      newFeatureX: false,
      betaFeatures: false,
    },
    // Other development-specific settings
  };
  
  const stagingConfig = {
    apiBaseUrl: 'https://staging-api.yourdomain.com',
    enableDebugMode: true,
    analyticsApiKey: 'STAGING_ANALYTICS_KEY',
    featureFlags: {
      newFeatureX: true,
      betaFeatures: true,
    },
    // Other staging-specific settings
  };
  
  const productionConfig = {
    apiBaseUrl: 'https://api.yourdomain.com',
    enableDebugMode: false,
    analyticsApiKey: 'PROD_ANALYTICS_KEY',
    featureFlags: {
      newFeatureX: true,
      betaFeatures: false,
    },
    // Other production-specific settings
  };
  
  // Function to determine which configuration to use
  const getConfig = () => {
    if (__DEV__) {
      return developmentConfig;
    }
    // Logic to determine if it's staging or production
    // Can be based on environment variables or other criteria
    return process.env.NODE_ENV === 'production' ? productionConfig : stagingConfig;
  };
  
  export const configSettings = getConfig();
  