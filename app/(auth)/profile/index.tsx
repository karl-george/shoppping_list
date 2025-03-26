import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
  const { user } = useUser();

  return (
    <View>
      <Text className='text-white'>Profile</Text>
    </View>
  );
};

export default Profile;
