export const defaultValues = {
    // User Authentication and Profile Defaults
    authDetails: {
      isLoggedIn: false,
      authToken: null,
      refreshToken: null
    },
    userProfile: {
      name: '',
      email: '',
      phone: '',
      age: 18,
      position: 'Midfielder', // Default position for a soccer player
      about: '',
      profilePicture: null
    },
  
    // Agent Profile Defaults
    agentProfile: {
      name: '',
      agencyName: '',
      licenseNumber: '',
      contactEmail: '',
      contactPhone: '',
      regionOfOperation: '',
      experienceYears: 0
    },
  
    // Team Information Defaults
    teamInfo: {
      teamName: '',
      foundedYear: new Date().getFullYear(),
      location: '',
      teamMembers: [],
      teamLogo: null
    },
  
    // App Settings and Preferences
    appSettings: {
      notificationsEnabled: true,
      darkMode: false,
      language: 'en',
      allowLocationAccess: false
    },
  
    // Player Search Criteria Defaults
    searchCriteria: {
      ageRange: [18, 35],
      positions: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'],
      location: '',
      experienceLevel: 'Any'
    },
  
    // Chat Defaults
    chatDefaults: {
      unreadCount: 0,
      recentContacts: [],
      messageNotifications: true
    },
  
    // Video Upload Defaults
    videoUploadSettings: {
      maxDuration: 180, // Maximum duration in seconds
      resolution: '720p',
      fileSizeLimit: 50 // Limit in MB
    },
  
    // Rankings and Statistics
    rankingsDefaults: {
      lastUpdated: null,
      topPlayers: [],
      topTeams: []
    },
  
    // Feedback Form Defaults
    feedbackForm: {
      subject: '',
      message: '',
      contactInfo: ''
    },
  
    // Miscellaneous Defaults
    lastSyncTime: new Date().toISOString(),
    initialLoadDone: false,
  
    // Add other default values as needed for your application
  };
  