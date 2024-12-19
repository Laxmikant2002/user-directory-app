import React from 'react';
import { View } from 'react-native';
import UserList from '../components/UserList';

const UserListScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <UserList />
    </View>
  );
};

export default UserListScreen;