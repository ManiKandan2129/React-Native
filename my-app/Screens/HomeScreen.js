import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components/native';
import { StatusBar, ScrollView, TouchableOpacity, Animated, Dimensions } from 'react-native'
import BigCard from '../components/BigCard';
import MedCard from '../components/MedCard';
import { Ionicons } from '@expo/vector-icons'
import Menu from '../components/Menu';
import { Context } from '../ContextApi/Context';
import { useNavigation } from '@react-navigation/native';
import HighCard from '../components/HighCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


function HomeScreen() {

    const navigation = useNavigation();
    const {menu, setmenu} =useContext(Context);
    const screenHeight = Dimensions.get('window').height;
    const[blackTop, setblackTop] = useState(new Animated.Value(screenHeight));
    const[opacity, setopacity] = useState(new Animated.Value(0));

    useEffect(()=>{
        animateBlack()
    },[menu])

    const animateBlack = () => {
        if(menu === "close"){
            Animated.timing(blackTop, {toValue: screenHeight, useNativeDriver: false, duration: 10}).start();
            Animated.timing(opacity, {toValue: 0, useNativeDriver: false, duration: 500}).start();
        }
        if(menu === "open"){
            Animated.timing(blackTop, {toValue: 0, useNativeDriver: false, duration: 10 }).start();
            Animated.timing(opacity, {toValue: 0.7, useNativeDriver: false, duration: 500}).start();
        }
    }

    function openMenu(){
        setmenu("open")
    }


  return (
    <Root>
    <Main>
      <ScrollView showsHorizontalScrollIndicator={false}>

      <StatusBar hidden></StatusBar>

      <Header>
        <TouchableOpacity onPress={openMenu} style={{position:"absolute",
          top:6,
          right:5,
          zIndex:100}}>
          <Ionicons name='menu' color="#ffba00" size={40}></Ionicons>
        </TouchableOpacity>
        <Logo source={require('../assets/logo.png')}></Logo>
      </Header>

      <BigCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {movie.map((data, index)=>(
          <BigCard key={index} image = {data.image}></BigCard>
        ))}
        </ScrollView>
      </BigCardContainer>

      <ContinueText>Continue Watching</ContinueText>

      <MedCardContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {ContinueMovie.map((data, index)=>(
          <TouchableOpacity key={index} onPress={()=>{navigation.navigate('Video',{MovieData:data, allData:ContinueMovie, topmovies:Topmovie});}}>
          <MedCard image={data.image}></MedCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </MedCardContainer>

      <ContinueText>Top Picks For You</ContinueText>

      <HighCardContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Topmovie.map((data, index)=>(
          <TouchableOpacity key={index} >
          <HighCard image={data.image}></HighCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </HighCardContainer>

      <TrendingMoviesText>Trending Movies</TrendingMoviesText>

      <TrendCardContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Trendingmovie.map((data, index)=>(
          <TouchableOpacity key={index} >
          <HighCard image={data.image}></HighCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </TrendCardContainer>

      </ScrollView>
    </Main>
    <AnimatedBlackContainer style={{top:blackTop, opacity:opacity }}></AnimatedBlackContainer>
    <Menu></Menu>
    </Root>
  )
}


const Root = styled.View`
  flex: 1;
`;
const Main = styled.View`
  flex: 1;
  background:#121212;
`;
const BlackMenu = styled.View`      
  width: 100%;
  height: 100%;
  position: absolute;
  background: black;
  opacity: 0.6;
`;
const AnimatedBlackContainer = Animated.createAnimatedComponent(BlackMenu);
const Header = styled.View`
width:100%;
background:#121212;
height:50px;
`;
const Logo = styled.Image`
width:155px;
height:35px;
position:absolute;
top:13px;
left:-10px;
`;
const BigCardContainer = styled.View`
margin-top:15px;
`;
const ContinueText = styled.Text`
color:white;
font-size:18px;
margin-left:10px;
margin-top:20px;
`;
const MedCardContainer = styled.View`
margin-top:13px;
`;
const HighCardContainer = styled.View`
margin-top:13px;
`;
const TrendingMoviesText = styled.Text`
color:white;
font-size:18px;
margin-left:10px;
margin-top:20px;
`;
const TrendCardContainer = styled.View`
  margin-top:13px;
  margin-bottom: 20px;
`;





const  movie = [
  {image:"https://tse3.mm.bing.net/th?id=OIP.xU3TPXoDbaPxRwp_EO8__QHaEK&pid=Api&P=0&h=180"},
  {image:"https://tse2.mm.bing.net/th?id=OIP.1B2NrOydzEsUdC-IbdEavQHaEK&pid=Api&P=0&h=180"},
  {image:"https://tse2.mm.bing.net/th?id=OIP.oVadnAO66hdY_ZLlqontFQHaF7&pid=Api&P=0&h=180"},
  {image:"https://tse3.mm.bing.net/th?id=OIP.1qr0E_YN8rNnC2Mub_oJvQHaFN&pid=Api&P=0&h=180"},
];

const  ContinueMovie = [
  {image:"https://tse2.mm.bing.net/th?id=OIP.7Dv6PSXH550EL_dJGwgVnAHaEo&pid=Api&P=0&h=180", title:"Brahmastra", 
  description:"Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",},
  {image:"https://tse2.mm.bing.net/th?id=OIP.NcBB8Yi7WtHNwJmlgaa_2AHaEo&pid=Api&P=0&h=180", title:"Toy Story",
  description:"The first Blender Open Movie from 2006"},
  {image:"https://tse1.mm.bing.net/th?id=OIP.RInoH7E2SnN5Xb_JkPbfFgHaEK&pid=Api&P=0&h=180", title:"Chennai Express",
  description:"HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",},
  {image:"https://tse3.mm.bing.net/th?id=OIF.zzjpHrl1Qer1mmfKk7R7%2fA&pid=Api&P=0&h=180", title:"the Detective",
  description:"Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast."},
]

const  Topmovie = [
  {image:"https://tse4.mm.bing.net/th?id=OIP.m0WHztjn01Y2PyeUMF9mxwHaK2&pid=Api&P=0&h=180"},
  {image:"https://tse1.mm.bing.net/th?id=OIP.eVy1gFD9xJ4DK1Ghi2QK6AHaKl&pid=Api&P=0&h=180"},
  {image:"https://tse1.mm.bing.net/th?id=OIP.p_sjdQiUqK36Dq1eH5LaggHaK-&pid=Api&P=0&h=180"},
  {image:"https://tse1.mm.bing.net/th?id=OIP.rPOuJl5NPMWl8Y6DGfq5kgHaLH&pid=Api&P=0&h=180"},
  {image:"https://tse2.mm.bing.net/th?id=OIP.gF--XR-CwFzNmC-zfsJD1QHaKu&pid=Api&P=0&h=180"},
  {image:"https://tse3.explicit.bing.net/th?id=OIP.ToMpTp95EdFvSTQzF8aEzQHaLa&pid=Api&P=0&h=180"},
  {image:"https://tse4.mm.bing.net/th?id=OIP.VgrCo7BBdIs0PVMbuxToBwHaKe&pid=Api&P=0&h=180"},
];

const  Trendingmovie = [
  {image:"https://tse3.explicit.bing.net/th?id=OIP.fo7DWN_tjEXAA4CWxd3HnAHaLH&pid=Api&P=0&h=180"},
  {image:"https://tse1.mm.bing.net/th?id=OIP.XbVpPhVGhYdQguHBkv4WfgHaLk&pid=Api&P=0&h=180"},
  {image:"https://tse1.mm.bing.net/th?id=OIP.-VWubEnpZinKF7XjqnOlTwHaLk&pid=Api&P=0&h=180"},
  {image:"https://tse1.mm.bing.net/th?id=OIP.9b2pqF_QeYWxiTr_3b0ZiQAAAA&pid=Api&P=0&h=180"},
  {image:"https://tse3.mm.bing.net/th?id=OIP.cq0KdNx3laBUcBB488s9PgHaLm&pid=Api&P=0&h=180"},
  {image:"https://tse3.mm.bing.net/th?id=OIP.QA8Glc1dgHVpVq8H0E8A9gHaJ4&pid=Api&P=0&h=180"},
  {image:"https://tse2.mm.bing.net/th?id=OIP.9B8kEwGXWyY0U0I4rdy6iwAAAA&pid=Api&P=0&h=180"},
];


export default HomeScreen