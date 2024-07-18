export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    locale: string
}

const appConfig: AppConfig = {
    apiPrefix: 'https://farcaster-curate.onrender.com',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
}

export default appConfig
