const { withNativeWind } = require('nativewind/metro');
const { getSentryExpoConfig } = require('@sentry/react-native/metro');

const config = getSentryExpoConfig(__dirname, {
  enableSourceContextInDevelopment: true,
  annotateReactComponents: true,
});
config.resolver.sourceExts.push('sql');

module.exports = withNativeWind(config, { input: './app/globals.css' });
