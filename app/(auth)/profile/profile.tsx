import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
  const { user } = useUser();

  return (
    <View>
      <Text>Profie le</Text>
    </View>
  );
};

export default Profile;
