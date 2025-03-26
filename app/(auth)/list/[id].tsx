import { View, Text } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import DropDownMenuComponent from '@/components/DropDownMenu';

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{
          title: id as string,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
          headerRight: () => <DropDownMenuComponent />,
        }}
      />
      <View>
        <View></View>
      </View>
    </>
  );
};

export default Page;
