import { useSSO } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { useCallback, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Preloads the browser for Android devices to reduce authentication load time
    void WebBrowser.warmUpAsync();
    return () => {
      // Cleanup: closes browser when component unmounts
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

// Handle any pending authentication sessions
WebBrowser.maybeCompleteAuthSession();

export default function Index() {
  useWarmUpBrowser();

  // Use the useSSO hook to access the startSSOFlow() method
  const { startSSOFlow } = useSSO();

  const handleGoogleSignIn = useCallback(async () => {
    try {
      // Start the SSO flow
      const { createdSessionId, setActive, signIn, signUp } =
        await startSSOFlow({
          strategy: 'oauth_google',
          redirectUrl: AuthSession.makeRedirectUri({
            path: '/(auth)',
          }),
        });

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  const handleAppleSignIn = useCallback(async () => {
    try {
      // Start the SSO flow
      const { createdSessionId, setActive, signIn, signUp } =
        await startSSOFlow({
          strategy: 'oauth_apple',
          redirectUrl: AuthSession.makeRedirectUri({
            path: '/(auth)',
          }),
        });

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <View className='items-center justify-center flex-1 gap-4 bg-[#D2A785]'>
      <Image
        source={require('@/assets/images/splash.jpg')}
        className='w-[98%] mt-24 rounded-full h-3/5'
        resizeMode='cover'
      />

      <TouchableOpacity
        className='flex-row items-center justify-center w-3/4 h-16 gap-3 p-4 rounded-md bg-bgItem'
        onPress={handleGoogleSignIn}
      >
        <Ionicons name='logo-google' size={20} color='white' />
        <Text className='text-lg text-white'>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className='flex-row items-center justify-center w-3/4 h-16 gap-3 p-4 rounded-md bg-bgItem'
        onPress={handleAppleSignIn}
      >
        <Ionicons name='logo-apple' size={22} color='white' />
        <Text className='text-lg text-white'>Continue with Apple</Text>
      </TouchableOpacity>
    </View>
  );
}
