import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from 'react'


const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>I am Fullstack Web Developer</Text>

      <View style={styles.imageBox}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/saiful.jpg")}
        />
      </View>

      <View style={styles.paraContainer}>
        <Text style={styles.para}>
          I am a web developer with a passion for building beautiful, responsive
          websites and applications. I have a background in graphic design and I
          am currently working on a career in web development.
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    padding:20,
  },
  mainHeader: {
    marginTop:20,
    textAlign: 'center',
    fontSize:24
  },
  imageBox: {
    display: 'flex',
    alignItems:'center',
    marginVertical:45
  }
  ,
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius:100,
  }
})
export default About
