import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  };
  onPress: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{ uri: user.avatar || 'https://via.placeholder.com/150' }}
          style={{ width: 50, height: 50, borderRadius: 25, marginRight: 16 }}
        />
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{user.name}</Text>
          <Text style={{ color: '#666' }}>{user.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;