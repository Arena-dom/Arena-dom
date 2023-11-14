export const validationPatterns = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // Min 8 characters, at least one letter and one number
    phone: /^\+?([0-9]{1,3})?[-. (]?([0-9]{3})[-. )]?([0-9]{3})[-. ]?([0-9]{4})$/, // International format
    username: /^[a-zA-Z0-9._-]{3,}$/, // Alphanumeric with underscores, hyphens, and dots, min 3 characters
    zipCode: /^[0-9]{5}(?:-[0-9]{4})?$/, // US ZIP code format
    name: /^[a-zA-Z ]{2,30}$/, // For validating names (first, last)
    date: /^\d{4}-\d{2}-\d{2}$/, // Date in YYYY-MM-DD format
    soccerPosition: /^(Goalkeeper|Defender|Midfielder|Forward)$/, // Soccer positions
    age: /^(1[89]|[2-9]\d)$/, // Age, for example, between 18 and 99
    height: /^[1-2]\.\d{2}$/, // Height in meters (e.g., 1.75)
    weight: /^[3-9]\d{1,2}$/, // Weight in kilograms (e.g., 75)
    agentLicenseNumber: /^[A-Z0-9]{6,10}$/, // Example pattern for agent license numbers
    teamName: /^[a-zA-Z0-9 .'-]{2,50}$/, // Team names, alphanumeric and some special characters
    // Add other validation patterns as needed
  };
  