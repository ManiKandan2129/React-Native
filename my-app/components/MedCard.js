import React from 'react'
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'


function MedCard(props) {
    return (
        <Container>
            <Image source={{uri:props.image}}></Image>
            <LinearGradient colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
            style={{position:"absolute",width:"100%",height:"50%", top:56 }}/>
            <TextContainer>
            <Ionicons name='play' color="white" size={20
            }></Ionicons>
            <Text>Play</Text>
            </TextContainer>
        </Container>
      )
    }
    
    const Container = styled.View`
    width:197px;
    height:110px;
    border-radius:5px;
    background:white;
    margin-left:10px;
    overflow:hidden;
    `;
    const Image = styled.Image`
    width:100%;
    height:100%;
    `;
    const Text = styled.Text`
    font-size:18px;
    color:white;
    font-weight:500;
    `;
    const TextContainer = styled.View`
    position:absolute;
    bottom:8px;
    left:5px;
    flex-direction:row;
    align-items:center;
    `;

export default MedCard