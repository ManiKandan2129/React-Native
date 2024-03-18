import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components/native';
import { Animated, TouchableOpacity, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Context } from '../ContextApi/Context';
import MenuCard from './MenuCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function Menu() {

    const screenHeight = Dimensions.get('window').height;
    const[animateTop, setanimateTop] = useState(new Animated.Value(screenHeight));
    const {menu, setmenu} = useContext(Context)
    const navigation = useNavigation();

    useEffect(() => {
      if(menu === "open"){
        openMenu();
      }
      if(menu === "close"){
        closemenu();
      }
      }, [menu]);

      const openMenu = () => {
        Animated.spring(animateTop, {
          toValue: 200,
          useNativeDriver: false,
        }).start();
      };

      const closemenu = () => {
        Animated.spring(animateTop, {
          toValue: screenHeight,
          useNativeDriver: false,
        }).start();
      } 

      function close(){
        setmenu("close")
      }

      const Logout = async()=> {
        await AsyncStorage.clear();
        navigation.navigate('Login');
        setmenu("close");
      }

  return (
    <AnimatedContainer style={{position:"absolute", top:animateTop, zIndex:100}}>
        <Cover>
          <CoverText>Menu</CoverText>
        </Cover>
        <TouchableOpacity onPress={close} style={{position:"absolute", top:120, left:"50%", marginLeft:-22}}>
        <CloseView>
        <Ionicons name='close' color="#ffba00" size={40}></Ionicons>
        </CloseView>
        </TouchableOpacity>

        <Content>
          <MenuCard menu="Account" name="settings"></MenuCard>
          <MenuCard menu="Subscribe" name="wallet"></MenuCard>
          <MenuCard menu="Help" name="help-circle"></MenuCard>
          <TouchableOpacity onPress={Logout}>
           <MenuCard menu="Logout" name="log-out"></MenuCard>
          </TouchableOpacity>
        </Content>
    </AnimatedContainer>
  )
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  background:#121212;
  border-radius: 20px;
  overflow: hidden;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Cover = styled.View`
  width: 100%;
  height: 142px;
  background: #ffba00;
`;
const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 30px;
`;
const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: #121212;
  justify-content: center;
  align-items: center;
`;
const CoverText = styled.Text`
  font-weight: 700;
  color: #121212;
  font-size: 22px;
  position: absolute;
  top:55px;
  left:42%;
`;


export default Menu