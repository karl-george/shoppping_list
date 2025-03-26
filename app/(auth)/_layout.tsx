import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import * as DropdownMenu from 'zeego/dropdown-menu';

const Layout = () => {
  const router = useRouter();

  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: '#121212' } }}>
      <Stack.Screen
        name='home/index'
        options={{
          title: 'Shopping Lists',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTitleStyle: { color: 'white' },
          headerRight: () => (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Text className='text-3xl text-white rotate-90'>...</Text>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content>
                <DropdownMenu.Item
                  key='profile'
                  className='bg-bg'
                  onSelect={() => router.push('/profile')}
                >
                  <DropdownMenu.ItemTitle>Profile</DropdownMenu.ItemTitle>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          ),
        }}
      />
      <Stack.Screen name='profile/index' options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
