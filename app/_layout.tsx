import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Stack, usePathname, useRouter, useSegments } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import React, { Suspense, useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './globals.css';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  );
}

const InitialLayout = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  const pathname = usePathname();
  const segments = useSegments();

  // UseEffect to check for signed in user
  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (isSignedIn && !inAuthGroup) {
      router.replace('/(auth)/home');
    } else if (!isSignedIn && pathname !== '/') {
      router.replace('/');
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded) {
    return (
      <View className='items-center justify-center flex-1'>
        <Loading />
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor={'#1E1E1E'} barStyle={'light-content'} />
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <Suspense fallback={<Loading />}>
          <SQLiteProvider databaseName='shopping_list' useSuspense>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <InitialLayout />
            </GestureHandlerRootView>
          </SQLiteProvider>
        </Suspense>
      </ClerkLoaded>
    </ClerkProvider>
  );
};

const Loading = () => {
  return <ActivityIndicator size={'large'} color={'#B2860C'} />;
};

export default RootLayout;
