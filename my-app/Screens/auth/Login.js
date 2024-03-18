import styled from 'styled-components/native';
import Svg, { Path } from 'react-native-svg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



function Login() {
  
  const navigation = useNavigation();
  const[email, setEmail] = useState(" ");
  const[password, setPassword] = useState(" ");
  const[errorMessage, seterrorMessage] = useState("");
  const[emailError, setemailError] =useState("")

  const Login = ()=>{
    console.log(email)
    console.log(password)
    authenticateUser (email, password);
  }

  const authenticateUser = async(username, password) => {
    try {

      const response = await axios.get("http://localhost:3001/users");

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      const users = response.data;

      const user = users.find((user)=>
        user.username === username && user.password === password
      );

      console.log("who", user);

      if(user){
        console.log("user exist")
        await AsyncStorage.setItem("login", "Login Successfull");
        navigation.navigate('Homepage');
        
      } else{
        console.log("user not exist")
        seterrorMessage("Invalid Username or Password, Please try again.")
      }
      
    } catch (error) {
      console.error('Error during authentication:', error.message);
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email)
  }

  const handleEmailChange = (text) => {
    setEmail(text);
    if(!validateEmail(text)){
      setemailError("Invalid Email Format");
    }
    else{
      setemailError("")
    }
  }


  return (
    <Container>
      {/* <SmallDummy>
        <Path fill="#ffba00" d="M57.5,-59.4C72.3,-42.8,80.3,-21.4,77.9,-2.4C75.5,16.6,62.7,33.2,47.9,45.2C33.2,57.2,16.6,64.6,-1.7,66.3C-20,68,-40,64,-53.1,52C-66.2,40,-72.3,20,-68.2,4C-64.2,-12,-50.1,-23.9,-37,-40.5C-23.9,-57.1,-12,-78.3,4.7,-83C21.4,-87.7,42.8,-76,57.5,-59.4Z" transform="translate(100 100)" />
      </SmallDummy>
      <Dummy>
        <Path fill="#ffba00" d="M57.5,-59.4C72.3,-42.8,80.3,-21.4,77.9,-2.4C75.5,16.6,62.7,33.2,47.9,45.2C33.2,57.2,16.6,64.6,-1.7,66.3C-20,68,-40,64,-53.1,52C-66.2,40,-72.3,20,-68.2,4C-64.2,-12,-50.1,-23.9,-37,-40.5C-23.9,-57.1,-12,-78.3,4.7,-83C21.4,-87.7,42.8,-76,57.5,-59.4Z" transform="translate(100 100)" />
      </Dummy> */}
      <Logo source={require('../../assets/logo.png')}></Logo>
      <Title>Login</Title>
      <InputContainer>
        <InputLabel>Email</InputLabel>
        <InputBox placeholder="Enter your email" placeholderTextColor="gray" onChangeText={handleEmailChange} inputMode="email"/>
        {emailError?<ErrorText>{emailError}</ErrorText>:null}
      </InputContainer>

      <InputContainer>
        <InputLabel>Password</InputLabel>
        <InputBox placeholder="Enter your password" placeholderTextColor="gray" secureTextEntry onChangeText={(pass)=>{setPassword(pass)}}/>
        <ForgotPasswordLink onPress={() => console.log('Forgot Password pressed')}>
          Forgot Password?
        </ForgotPasswordLink>
      </InputContainer>

      {errorMessage?<ErrorText>{errorMessage}</ErrorText>:null}
      
      <LoginButton onPress={Login}>
        <ButtonText>Login</ButtonText>
      </LoginButton>

      <SignupText>
        Don't have an account?{'  '}
        <SignupLink onPress={() => console.log('Signup pressed')}>Signup</SignupLink>
      </SignupText>

      <TermsandCondition>
        <Termstext>By creating or logging into an account your are agreeing with our <TermsLink>Terms and Condition</TermsLink> and <TermsLink>Privacy Statement</TermsLink>.</Termstext>
      </TermsandCondition>

      {/* <BottomDummy>
        <Path fill="#ffba00" d="M57.5,-59.4C72.3,-42.8,80.3,-21.4,77.9,-2.4C75.5,16.6,62.7,33.2,47.9,45.2C33.2,57.2,16.6,64.6,-1.7,66.3C-20,68,-40,64,-53.1,52C-66.2,40,-72.3,20,-68.2,4C-64.2,-12,-50.1,-23.9,-37,-40.5C-23.9,-57.1,-12,-78.3,4.7,-83C21.4,-87.7,42.8,-76,57.5,-59.4Z" transform="translate(100 100)" />
      </BottomDummy> */}
    </Container>
  )
}

const Container = styled.View`
flex: 1;
justify-content: flex-start;
align-items: center;
padding-top: 160px;
background-color: #121212;
overflow:hidden;
`;


const Title = styled.Text`
color: #ffba00;
font-size: 50px;
margin-bottom: 30px;
font-weight: bold;
`;
const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 15px;
`;
const InputLabel = styled.Text`
  color: lightgray;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight:bold;
`;
const InputBox = styled.TextInput`
  width: 100%;
  height: 40px;
  border-color: #ffba00;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  color: white;
`;
const ForgotPasswordLink = styled.Text`
  font-size: 14px;
  color: #ffba00;
  text-align: right;
  font-weight:bold;
`;
const LoginButton = styled.TouchableOpacity`
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
const SignupText = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  color: lightgray;
`;

const SignupLink = styled.Text`
  color:#ffba00;
  font-weight:bold;
`;
const TermsandCondition = styled.View`
 width:90%;
 margin-top:30px;
`;
const Termstext = styled.Text`
  color:lightgray;
  font-size:12px;
  text-align:center;
`;
const TermsLink = styled.Text`
  color:#ffba00;
`;
const Dummy = styled(Svg).attrs({
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg",
})`
  width: 300px;
  height: 300px;
  position: absolute;
  top:-100px;
  right:-140px;
`;
const BottomDummy = styled(Svg).attrs({
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg",
})`
  width: 300px;
  height: 300px;
  position: absolute;
  bottom:-100px;
  left:-100px;
`;

const SmallDummy = styled(Svg).attrs({
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg",
})`
  width: 100px;
  height: 100px;
  position: absolute;
  left:10px;
  top:50px;

`;
const Logo = styled.Image`
width:220px;
height:65px;
position:absolute;
top:45px;
`;
const ErrorText = styled.Text`
color: red;
margin-top: 10px;
  
`;


export default Login