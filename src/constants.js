const {
    NODE_ENV: env, 
    REACT_APP_NAME: appName, 
    REACT_APP_DESCRIPTION: appDescription,
    REACT_APP_GRAPH_API: graphAPI, 
} = process.env

export default {
    appName,
    appDescription,
    graphAPI,
    isDevelopment: env === 'development',
    isProduction: env === 'production',
}
