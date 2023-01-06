import { StyleSheet, Text, View,Image,FlatList,Br } from 'react-native'
import React from 'react'

import StudentsData from '../../src/api/StudentsData'

const UserData = () => {

  const studentCard = ({ item }) => {
    return (
      <View style={styles.studentCard}>
        <View style={styles.studentContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={{
                uri: item.image,
              }}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.name}>Name:-{item.name}</Text>
            <Text style={styles.name}>Roll No. - {item.id}</Text>
            <Text style={styles.email}>Email:-{item.email}</Text>
            <Text style={styles.website}>Website:-{item.website}</Text>
          </View>
        </View>
      </View>
    );
}

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.mainHeader}>List of Students :-</Text>
      <FlatList
        keyExtrator={(item) => item.id}
        data={StudentsData}
        renderItem={studentCard}
        showsVerticalScrollIndicator={false}
      />

   
    </View>
    
  )
}

export default UserData

const styles = StyleSheet.create({
  mainHeader: {
    fontSize:20,
  },
  studentCard: {

    margin: 10,
    padding:10,
    elevation: 30,
    shadowColor: "#000",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow:'hidden'
  },
  studentContainer: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
  },
  imgContainer: {
    marginRight: 8,
  },
  img: {
    width: 80,
    height: 100,
    borderRadius: 10,
    // aspectRatio: 1
  },
  content: {
    paddingHorizontal: 5,
    overflow: 'hidden',
    
  }
});