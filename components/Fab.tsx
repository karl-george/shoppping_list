import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Fab = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity
      className='absolute p-4 rounded-full bg-accent bottom-12 right-8'
      onPress={onPress}
    >
      <Ionicons name='add' size={36} color={'white'} />
    </TouchableOpacity>
  );
};

export default Fab;
