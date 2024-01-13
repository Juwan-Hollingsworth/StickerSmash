import { StyleSheet, Text, View, Image } from "react-native";
import screenImage from "../assets/images/background-image.png"
import { StatusBar } from "expo-status-bar";

const PlaceholderImage = require('../assets/images/background-image.png')

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Image source= {PlaceholderImage} style={styles.image}/>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

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
  }
});
