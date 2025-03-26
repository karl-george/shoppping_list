import { useClerk, useUser } from '@clerk/clerk-expo';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Profile = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <View>
      <Text className='text-white'>{user?.firstName}</Text>
       <Text className='text-white'>{user?.emailAddresses[0].emailAddress}</Text>
      <Button title='Sign out' onPress={() => signOut} />
    </View>
  );
};

export default Profile;
