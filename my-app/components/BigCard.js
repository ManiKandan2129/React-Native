import React from 'react'
import styled from 'styled-components/native';

function BigCard(props) {
  return (
    <Container>
        <Image source={{uri:props.image}}></Image>
    </Container>
  )
}

const Container = styled.View`
width:338px;
height:198px;
border-radius:5px;
background:white;
margin-left:10px;
overflow:hidden;
`;
const Image = styled.Image`
width:100%;
height:100%;
`;

export default BigCard