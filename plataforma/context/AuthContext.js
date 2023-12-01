import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState, useEffect, useTransition } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const login = (email, password) => {
    setIsLoading(true);
      axios
      .post(`http://172.17.51.166:3001/login`, {
        email,
        password,
      })
      .then(res =>{
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  }

  const logout = () => {
    setSplashLoading(true);
    setUserInfo({});
    AsyncStorage.removeItem('userInfo');    
    setSplashLoading(false);
  }

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`isLoggedIn error ${e}`);
    }
  };

  const buscarComentarios = async () => {
    try {
      const response = await axios.get(`http://172.17.51.166:3001/comentarios`);
      const comentarios = response.data;
      return comentarios;
    } catch (error) {
      console.error('Error al buscar comentarios:', error);
      return {};
    }
  };

  const crearComentario = async (nuevoComentario) => {
    try {
      const response = await axios.post(`http://172.17.51.166:3001/comentarios`, nuevoComentario);
      const comentarioCreado = response.data;
      console.log('Comentario creado:', comentarioCreado);
    } catch (error) {
      console.error('Error al crear el comentario:', error);
    }
  };

  const crearUsuario = async (nuevoUsuario) => {
    try {
      const response = await axios.post(`http://172.17.51.166:3001/sign`, nuevoUsuario);
      const usuarioCreado = response.data;
      console.log('Usuario creado:', usuarioCreado);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        login,
        logout,
        buscarComentarios,
        crearComentario,
        crearUsuario,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
