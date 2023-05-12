import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FlatBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btn5}>
        <Text style={styles.btn1}>box 1</Text>
        <Text style={styles.btn2}>box 2</Text>
        <Text style={styles.btn3}>box 3</Text>
        <Text style={styles.btn4}>box 4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 100,
    marginRight: 100,
    textAlign: "center",
    marginTop: 150,
    justifyContent: "center",
    backgroundColor: "green",
    flex: 2,
  },
  btn1: {
    backgroundColor: "red",
    marginTop: 10,
    flex: 2,
  },
  btn2: {
    backgroundColor: "red",
    marginTop: 10,
    flex: 3,
  },
  btn3: {
    backgroundColor: "red",
    marginTop: 10,
    flex: 4,
  },
  btn4: {
    backgroundColor: "brown",
    marginTop: 10,
    flex: 5,
  },
  btn5: {
    backgroundColor: "black",
    marginTop: 10,
    flex: 1,
  },
});

export default FlatBox;
