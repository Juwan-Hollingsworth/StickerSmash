import { StyleSheet, Text, View, Image } from "react-native";
import screenImage from "../assets/images/background-image.png"
import { StatusBar } from "expo-status-bar";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button";
import * as ImagePicker from 'expo-image-picker'
import { useState } from "react";
import CircleButton from "../components/CircleButton";
import IconButton from "../components/IconButton"
import EmojiPicker from "../components/EmojiPicker";



const PlaceholderImage = require('../assets/images/background-image.png')

export default function Page() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({allowsEditing: true, quality: 1})

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true)
    }else {alert('You did not select any image')}
  }
  
  const onReset = ()=>{
    setShowAppOptions(false);
  }
  const onAddSticker = ()=> {
    //to be implemented 
  }
  const onSaveImageAsync = async() =>{
    //to be implemented
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text> */}
       <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
      <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <IconButton icon="refresh" label='Reset' onPress={onReset}/>
          <CircleButton onPress={onAddSticker}/>
      <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
      </View>
      </View>
      ):(
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button onPress={()=> setShowAppOptions(true)} label="Use this photo"/>
      </View>
      )}
      <StatusBar style="auto"/>
    </View>
  );
}
//Styling the main page of the App
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#25292e",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",

  },
  subtitle: {
    fontSize: 36,
  color: "#fff",
  },
  imageContainer: {
    flex:1,
    paddingTop:58,
  },
  image: {
    width:320,
    height:440,
    borderRadius:18,
  },
   footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
