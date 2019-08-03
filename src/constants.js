const {NODE_ENV: env, REACT_APP_NAME: appName, REAC_APP_DESCRIPTION: appDescription} = process.env

export default {
    appName,
    appDescription,
    isDevelopment: env === 'development',
    isProduction: env === 'production',
}
