import React from 'react'
import styled from 'styled-components/native';
import GlassCard from '../components/GlassCard';
import { ScrollView } from 'react-native';



function Channels() {

  const getIconName = (plan) => {
    switch (plan) {
      case 'Basic':
        return 'navigation-variant';
      case 'Standard':
        return 'rocket-launch';
      case 'Premium':
        return 'crown-circle';
      default:
        return 'paper-plane'; 
    }
  }
  return (
    <Container>
      <SubText>Subscription Plan</SubText>
        <SubCards>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {SubscriptionPlan.map((data, index)=>(
          <GlassCard key = {index} 
          plan = {data.Plan} 
          price = {data.price} 
          month = {data.months} 
          detail1 = {data.detail1}
          detail2 = {data.detail2} 
          detail3 = {data.detail3}
          icon = {getIconName(data.Plan)}
          ></GlassCard>
        ))}
        </ScrollView>
        </SubCards>
    </Container>
  )
}


const Container = styled.View`
    flex: 1;
    background: #121212;
    align-items: center;
    `;
const SubCards = styled.View`
    margin-top: 70px;
`;
const SubText = styled.Text`
    color: #ffba00;
    font-size: 25px;
    font-weight: 600;
    margin-top: 60px;
    /* position: absolute;
    top: 20px; */
`;

const SubscriptionPlan = [
  { Plan: "Basic", price: "₹600", months: "3", detail1: "Tv, Laptop, Mobile", detail2: "Ads on All Content", detail3: "Watch on 2 Devices"},
  { Plan: "Standard", price: "₹1000", months: "6", detail1: "Tv, Laptop, Mobile", detail2: "Ads on All Content", detail3: "Watch on 4 Devices"},
  { Plan: "Premium", price: "₹1800", months: "12", detail1: "Tv, Laptop, Mobile", detail2: "Ads Free", detail3: "Watch on 8 Devices"}
]



export default Channels;