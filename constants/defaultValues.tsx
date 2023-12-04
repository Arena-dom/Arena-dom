export interface AuthDetails{
    isLogenIn: boolean,
    authToken: string | null,
    refreshToken: string | null
}

export interface userProfile{
    name: string,
    email: string,
    phone: string,
    age: number,
    postion: string,
    about: string,
    profilePicture: File | null
}

export interface agentProfile {
    name: string,
    agencyName: string,
    licenseNumber: string,
    contactEmail: string,
    contactPhone: string,
    regionOfOperation: string,
    experienceYears: number
}

export interface teamInfo{
    teamName: string, 
    foundedYear: number,
    location: string,
    teamMembers: userProfile[],
    teamLogo: File | null

}

export interface appSettings{
    notificationsEnabled: boolean,
    darkMode: boolean,
    language: string,
    allowLocationAccess: boolean
}

export interface searchCriteria{
    ageRange: [number, number],
    positions: string[],
    location: string,
    experienceLevel: string
}

export interface chatDefaults {
    unreaderCount: number,
    recentContacts: userProfile[],
    messageNotifications: boolean
}

export interface videoUploadSettings{
    maxDuration: number,
    resolution: string,
    fileSizeLimit: number
}
export interface rankingsDefaults{
    lastUpdated: string | null,
    topPlayers: userProfile[],
    topTeams: teamInfo[]
}
export interface feedbackForm{
    subject: string,
    message: string,
    contactInfo: string
}

export interface DefaultValues{
    authDetails: AuthDetails,
    userProfile: userProfile,
    agentProfile: agentProfile,
    teamInfo: teamInfo,
    appSettings: appSettings,
    searchCriteria: searchCriteria,
    chatDefaults: chatDefaults,
    videoUploadSettings: videoUploadSettings,
    rankingDefaults: rankingsDefaults,
    feedbackForm: feedbackForm,
    lastSyncTime: string,
    initialLoadDone: boolean
}

export const defaultValues: DefaultValues = {
    authDetails: {
        isLogenIn: false,
        authToken: null,
        refreshToken: null
    },
    userProfile:{
        name: '',
        email: '',
        phone: '',
        age: 18,
        postion: 'Midfielder',
        about: '',
        profilePicture: null
    },
    agentProfile:{
        name: '',
        agencyName: '',
        licenseNumber: '',
        contactEmail: '',
        contactPhone: '',
        regionOfOperation: '',
        experienceYears: 0
    },
    teamInfo:{
        teamName: '',
        foundedYear: new Date().getFullYear(),
        location: '',
        teamMembers: [],
        teamLogo: null
    },
    appSettings:{
        notificationsEnabled: true,
        darkMode: false,
        language: 'en',
        allowLocationAccess: false
    },
    searchCriteria:{
        ageRange: [18,35],
        positions: ['Goalkeeper', 'Defender','Midfielder','Forward'],
        location: '',
        experienceLevel: 'Any'
    },
    chatDefaults:{
        unreaderCount: 0,
        recentContacts: [],
        messageNotifications:true
    },
    videoUploadSettings:{
        maxDuration:180,
        resolution: '720p',
        fileSizeLimit: 50
    },
    rankingDefaults:{
        lastUpdated: null,
        topPlayers: [],
        topTeams: []
    },
    feedbackForm:{
        subject: '',
        message: '',
        contactInfo:''
    },
    lastSyncTime: new Date().toISOString(),
    initialLoadDone: false,
}