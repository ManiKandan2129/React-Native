import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native';

function MenuCard(props) {
  return (
    <Container>
        <IconsContainer>
         <Ionicons name={props.name} color="#ffba00" size={22}></Ionicons>
        </IconsContainer>
        <ButtonContainer>
        <MenuButtons>{props.menu}</MenuButtons>
        </ButtonContainer>
    </Container>
  )
}


const Container = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  justify-content: left;
`;
const MenuButtons = styled.Text`
  color: #ffba00;
  font-size: 22px;
  width: 100%;
`;
const IconsContainer = styled.View`
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.View`
  
`;
export default MenuCard