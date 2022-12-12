
// import { useState } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import { ScrollView } from 'react-native';
import { RefreshControl } from 'react-native';




export default function App() {
  const [items, setItems] = useState([
  {key:1,item:"item 1"},
  {key:2,item:"item 2"},
  {key:3,item:"item 3"},
  {key:4,item:"item 4"},
  {key:5,item:"item 5"},
  {key:6,item:"item 6"},

])
const [refreshing, setRefreshing]=useState(false)
  const onRefresh = () => {
    setRefreshing(true)
    setItems([...items])
  }
  
  
  return (
    <View style={styles.body}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} />}
        style={styles.body}
      >
        {items.map((item) => (
          <View style={styles.item} key={item.key}>
            <Text style={styles.text}>{item.item}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        value="type something here"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: "#4ae1fa",
    marginTop: 20,
  },
  text: {
    color: "#00000",
    fontSize: 35,
    fontStyle: "italic",
    margin: 10,
  },
});
