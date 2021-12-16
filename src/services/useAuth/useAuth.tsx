import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { axios } from '../api';
import { getErrorMessage } from '../Utilities/getErrorMessage';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setCurrentUser(value);
      }
    })();
  }, []);

  const loginAPI = (data: { username: string; password: string }) =>
    new Promise((resolve, reject) => {
      axios
        ._post('/Auth/authentication', data)
        .then((token: any) => {
          AsyncStorage.setItem('token', token.authToken);
          setCurrentUser(token);
          resolve(token);
        })
        .catch((err: any) => {
          console.log(Object.values(err));
          reject(err);
        });
    });

  const login = async (username: string, password: string) => {
    try {
      await loginAPI({ username: username, password: password });
    } catch (error: any) {
      throw getErrorMessage(error.message);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setCurrentUser(null);
    } catch (error: any) {
      throw getErrorMessage(error.message);
    }
  };

  return { login, logout, currentUser, loading };
};

export default useAuth;
