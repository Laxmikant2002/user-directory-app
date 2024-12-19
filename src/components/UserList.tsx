import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserCard from './UserCard';

interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  const loadUsers = async () => {
    setLoading(true);
    try {
      // Replace with your data fetching logic
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      setUsers(prevUsers => [...prevUsers, ...data]);
    } catch (err) {
      setError('Failed to load users. Please try again later.');
      Alert.alert('Error', 'Failed to load users. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const renderItem = ({ item }: { item: User }) => (
    <UserCard user={item} onPress={() => navigation.navigate('UserDetails', { user: item })} />
  );

  return (
    <View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text>{error}</Text>}
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadUsers}
      />
    </View>
  );
};

export default UserList;