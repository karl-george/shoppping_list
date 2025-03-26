import { useRouter } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import * as DropdownMenu from 'zeego/dropdown-menu';

const DropDownMenuComponent = () => {
  const router = useRouter();

  return (
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
  );
};

export default DropDownMenuComponent;
