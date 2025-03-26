import DropDownMenuComponent from '@/components/DropDownMenu';
import { Stack } from 'expo-router';
import React from 'react';

const Layout = () => {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: '#121212' } }}>
      <Stack.Screen
        name='home/index'
        options={{
          title: 'Shopping Lists',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTitleStyle: { color: 'white' },
          headerRight: () => <DropDownMenuComponent />,
        }}
      />
      <Stack.Screen name='profile/index' options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
