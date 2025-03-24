import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Layout = () => {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: '#121212' } }}>
      <Stack.Screen
        name='index'
        options={{
          title: 'Shopping Lists',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTitleStyle: { color: 'white' },
          headerRight: () => (
            // Todo: Add Zeego dots menu
            <View>
              <Text className='text-white'>Menu</Text>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
