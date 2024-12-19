import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { User } from '../types';

type UserDetailsScreenProps = {
  route: RouteProp<{ params: { user: User } }, 'params'>;
  navigation: StackNavigationProp<any>;
};

const UserDetailsScreen: React.FC<UserDetailsScreenProps> = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.detail}>Email: {user.email}</Text>
      <Text style={styles.detail}>Address: {user.address.street}, {user.address.city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default UserDetailsScreen;