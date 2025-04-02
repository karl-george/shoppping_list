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
      <Stack.Screen
        name='home/color-select'
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.52, 1],
          animation: 'slide_from_bottom',
          contentStyle: { backgroundColor: '#1E1E1E' },
        }}
      />
      <Stack.Screen
        name='home/icon-select'
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.52, 1],
          animation: 'slide_from_bottom',
          contentStyle: { backgroundColor: '#1E1E1E' },
        }}
      />
      <Stack.Screen
        name='home/new-list'
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.38, 1],
          animation: 'slide_from_bottom',
          contentStyle: { backgroundColor: '#1E1E1E' },
        }}
      />
      <Stack.Screen
        name='list/new'
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.25, 1],
          animation: 'slide_from_bottom',
          contentStyle: { backgroundColor: '#1E1E1E' },
        }}
      />
      <Stack.Screen
        name='profile/index'
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
        }}
      />
    </Stack>
  );
};

export default Layout;
