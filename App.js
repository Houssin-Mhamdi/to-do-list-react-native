/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  FlatList, StyleSheet,
  Text, View
} from 'react-native';
import GoalImput from './Components/GoalImput';
import GoalItem from './Components/GoalItem';
export default function App() {


  const [lists, setList] = useState([])

  console.log(lists);
  function addGoleText(textImput) {
    setList((prev) => [...prev, { text: textImput, id: Math.random().toString() }])
  }
  function deleteItems(id) {
    setList((prev) => {
      return prev.filter((item) => item.id !== id)
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>To Do List</Text>
      <GoalImput addGoleText={addGoleText} />

      <View style={styles.globalContainer}>
        <FlatList alwaysBounceVertical={false} data={lists} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} onDeleted={deleteItems} id={itemData.item.id} />
        }} />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,

  },
  text: {
    marginTop: 10,
    color: 'blue',
    fontSize: 25,
    textAlign: 'center'
  },
  input: {
    height: 50,
    width: '70%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  disign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    paddingBottom: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },

  lists: {
    marginLeft: 0,
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    backgroundColor: 'purple',
    color: 'white',
    padding: 10,
    borderRadius: 10,
  },
  globalContainer: {
    flex: 8,
  }

})