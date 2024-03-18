import React from 'react'
import styled from 'styled-components/native';

function Sports() {
  return (
    <Container>
        <Notify>Comming Soon...</Notify>
    </Container>
  )
}


const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #121212;
`;
const Notify = styled.Text`
  color:#ffba00;
  font-size: 30px;
`;
export default Sports