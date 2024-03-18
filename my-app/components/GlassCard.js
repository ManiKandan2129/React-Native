import React from 'react'
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



function GlassCard(props) {
  return (
    <Container>
      <Head>
        <Icon name={props.icon} color="#121212" size={40} style={{marginTop:30}}></Icon>
        <CardTitle>{props.plan}</CardTitle>
      </Head>

      <Price>{props.price}</Price>
      <Month>{props.month} Months</Month>

      <BenefitsContainer>
      <Benefits>
      <Ionicons name='checkmark' color="#ffba00" size={20}></Ionicons>
      <BenefitsText>{props.detail1}</BenefitsText>
      </Benefits>
      <Benefits>
      <Ionicons name='checkmark' color="#ffba00" size={20}></Ionicons>
      <BenefitsText>{props.detail2}</BenefitsText>
      </Benefits>
      <Benefits>
      <Ionicons name='checkmark' color="#ffba00" size={20}></Ionicons>
      <BenefitsText>{props.detail3}</BenefitsText>
      </Benefits>
      </BenefitsContainer>

      <CardButton>
        <ButtonText>Choose Plan</ButtonText>
      </CardButton>

    </Container>
  )
}

const Container = styled.View`
  width: 280px;
  height: 420px;
  border-radius: 20px;
  background: black;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(255, 186, 0, 0.5);
  margin-left: 20px;
`;

const CardTitle = styled.Text`
  color: #121212;
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
`;
const Price = styled.Text`
  font-size: 40px;
  color: whitesmoke;                                      
  margin-top: 25px;
`;
const Month = styled.Text`
  font-size: 15px ;
  color: white;
  margin-top: 5px;
`;
const Benefits = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;
const BenefitsText = styled.Text`
  font-size: 15px;
  color: white;
`;
const BenefitsContainer = styled.View`
  margin-top: 20px;
  text-align: justify;
`;
const Head = styled.View`
  width: 100%;
  height: 120px;
  background: #ffba00;
  align-items: center;
`;
const CardButton = styled.TouchableOpacity`
  width: 60%; 
  height: 40px;
  background: #ffba00;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top:20px;
`;
const ButtonText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;


export default GlassCard