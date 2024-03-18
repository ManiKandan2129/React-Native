import React, {useState} from 'react'
import styled from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { Video } from 'expo-av';
import MedCard from '../components/MedCard';
import { ScrollView, TouchableOpacity,} from 'react-native'
import HighCard from '../components/HighCard';
import { useNavigation } from '@react-navigation/native';

function VideoScreen() {

    const route = useRoute();
    const MovieData = route.params?.MovieData;
    const allData = route.params?.allData;
    const topmovies = route.params?.topmovies;
    const navigation = useNavigation();
    console.log(allData)
    console.log("top", topmovies)

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
      setShowFullDescription(!showFullDescription);
    };
  return (
    <Container>
      <ScrollView showsHorizontalScrollIndicator={false}>

       <VideoContainer>
        <Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}} shouldPlay 
        resizeMode='cover'
        useNativeControls={true}
        style={{width:"100%", height:"100%"}}
        ></Video>
       </VideoContainer>

       <VideoTitle>
        <Title>{MovieData.title}</Title>

          <Description>
            {showFullDescription ? MovieData.description : `${MovieData.description.slice(0, 150)}...`}
            <ReadMoreButton onPress={toggleDescription}>
              {showFullDescription ? ' Read Less' : 'Read More'}
            </ReadMoreButton>
          </Description>

       </VideoTitle>

       <MedCardText>More Like This</MedCardText>

       <MedCardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {allData?.map((data, index)=>(
            <TouchableOpacity key={index} onPress={()=>{navigation.navigate('Video',{MovieData:data, allData:allData, topmovies:topmovies});}}>
            <MedCard image={data.image}></MedCard>
            </TouchableOpacity>
            ))}
        </ScrollView>
      </MedCardContainer>

      <HighCardText>Top Picks For You</HighCardText>

      <HighCardContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {topmovies.map((data, index)=>(
          <TouchableOpacity key={index} >
          <HighCard image={data.image}></HighCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </HighCardContainer> 
          
      

     </ScrollView>
    </Container>
    
  )
}

const Container = styled.View`
  flex: 1;
  background: #121212;
`;
const VideoContainer = styled.View`
  width: 100%;
  height: 250px;
  background: gray;
`;
const VideoTitle = styled.View`
  padding: 15px;
`;
const Title = styled.Text`
  color: #ffba00;
  font-size: 25px;
  font-weight: 600;
`;
const Description = styled.Text`
  color: gray;
  font-size: 16px;
  text-align: justify;
`;
const MedCardContainer = styled.View`
    margin-top:13px;
`;
const HighCardContainer = styled.View`
  margin-top:13px;
  margin-bottom: 20px;
`;
const MedCardText = styled.Text`
    color:gray;
    font-size:18px;
    margin-left:10px;
    margin-top:10px;
`;
const HighCardText = styled.Text`
    color:gray;
    font-size:18px;
    margin-left:10px;
    margin-top:10px;
`;
const ReadMoreButton = styled.Text`
  color: #ffba00;
  font-size: 16px;
  margin-top: 5px;
`;

export default VideoScreen