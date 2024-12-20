import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import AuthStack from './authStack';
import MainStack from './mainStack';

const Navigator = () => {
  const isLogin = useSelector((state: RootState) => state.authSlice.isLoggedIn);
  return isLogin ? <MainStack /> : <AuthStack />;
};

export default Navigator;
