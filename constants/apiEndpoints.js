// Base URL for your API
const BASE_URL = 'https://your-api-domain.com';

export const apiEndpoints = {
  // Authentication
  login: `${BASE_URL}/auth/login`,
  register: `${BASE_URL}/auth/register`,
  logout: `${BASE_URL}/auth/logout`,
  refreshToken: `${BASE_URL}/auth/refresh`,

  // Player Profiles
  playerProfile: (playerId) => `${BASE_URL}/players/${playerId}`,
  playerList: `${BASE_URL}/players`,
  updatePlayerProfile: (playerId) => `${BASE_URL}/players/${playerId}/update`,
  uploadPlayerVideo: (playerId) => `${BASE_URL}/players/${playerId}/uploadVideo`,
  playerStats: (playerId) => `${BASE_URL}/players/${playerId}/stats`,

  // Agent Actions
  agentProfile: (agentId) => `${BASE_URL}/agents/${agentId}`,
  searchPlayers: `${BASE_URL}/agents/searchPlayers`,
  contactPlayer: `${BASE_URL}/agents/contact`,
  agentList: `${BASE_URL}/agents`,

  // Team Information
  teamProfile: (teamId) => `${BASE_URL}/teams/${teamId}`,
  teamList: `${BASE_URL}/teams`,
  updateTeamProfile: (teamId) => `${BASE_URL}/teams/${teamId}/update`,

  // Rankings and Statistics
  playerRankings: `${BASE_URL}/rankings/players`,
  teamRankings: `${BASE_URL}/rankings/teams`,
  overallStats: `${BASE_URL}/stats/overall`,

  // Chat and Messaging
  fetchMessages: (conversationId) => `${BASE_URL}/chat/${conversationId}`,
  sendMessage: `${BASE_URL}/chat/send`,
  chatHistory: `${BASE_URL}/chat/history`,

  // Video and Media Content
  videoLibrary: `${BASE_URL}/videos/library`,
  videoDetails: (videoId) => `${BASE_URL}/videos/${videoId}`,
  uploadVideo: `${BASE_URL}/videos/upload`,

  // Notifications
  notifications: `${BASE_URL}/notifications`,
  markNotificationRead: (notificationId) => `${BASE_URL}/notifications/${notificationId}/read`,

  // User Management
  userProfile: (userId) => `${BASE_URL}/users/${userId}`,
  updateUserProfile: (userId) => `${BASE_URL}/users/${userId}/update`,
  deleteUser: (userId) => `${BASE_URL}/users/${userId}/delete`,

  // Misc
  feedback: `${BASE_URL}/feedback`,
  systemSettings: `${BASE_URL}/settings`
  // ... Add any additional endpoints specific to your app's functionality
};
