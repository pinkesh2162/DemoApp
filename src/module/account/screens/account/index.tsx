import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { logout } from '../../../../redux/slices/authSlice';

const Account = () => {
  const userName = 'DemoApp User';
  const userEmail = 'demo@example.com';

  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = async () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Information</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>{userName}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{userEmail}</Text>
      </View>
      <Button title="Log Out" onPress={handleLogOut} />
    </View>
  );
};

export default Account;
