import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import Menu from '../component/Menu';

export default Home = (props) => {
 
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/homeImage.jpg")}
        />
        <Text style={styles.mainHeaders}>Welcome to</Text>
        <Text
          style={styles.mainHeaders}
        >
          {props.channelName}
        </Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      {/* Menu Items  */}
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu/>
        {/* <View style={[styles.lineStyle, {
          marginVertical:20,
        }]}></View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  mainHeaders: {
    textTransform:'uppercase',
    fontSize: 30,
    color: "#4c5dab",
    marginVertical: 5,

  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: 200,
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    marginTop: 100,
    borderRadius: 20,
  },
  description: {
    textAlign: "left",
    fontSize: 15,
    color:'#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight:20,
    

  },
  menuStyle: {
    marginBottom:20,
  },
  lineStyle: {
    marginBottom:10,
    borderTopWidth: 0.5,
    borderColor: "grey",
  },
});