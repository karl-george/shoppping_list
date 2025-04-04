import { useClerk, useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleDelete = async () => {
    try {
      Alert.alert(
        'Delete Account',
        'Are you sure you want to delete your account?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: async () => {
              await user?.delete();
              router.replace('/');
            },
            style: 'destructive',
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to delete account');
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    router.replace('/');
  };

  return (
    <View className='px-12 mt-6'>
      <View className='flex-row items-center gap-4'>
        <Image
          source={{ uri: user?.imageUrl }}
          width={74}
          height={74}
          resizeMode='contain'
          className='rounded-full'
        />
        <View className='gap-1'>
          <Text className='text-lg text-white underline'>
            {user?.emailAddresses[0].emailAddress}
          </Text>
          <Text className='text-textFaded'>
            Joined {user?.createdAt?.toLocaleDateString('en-US')}
          </Text>
        </View>
      </View>
      <View className='mt-12'>
        <TouchableOpacity
          onPress={() => {}}
          className='flex-row items-center justify-center gap-2'
        >
          <Ionicons name='star' size={20} color={'white'} />
          <Text className='text-lg text-white'>Rate App</Text>
        </TouchableOpacity>
      </View>
      <View className='mt-12'>
        <TouchableOpacity
          onPress={handleSignOut}
          className='items-center justify-center'
        >
          <Text className='text-lg text-accent'>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <View className='mt-12'>
        <TouchableOpacity
          onPress={handleDelete}
          className='items-center justify-center'
        >
          <Text className='text-lg text-red-800'>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
