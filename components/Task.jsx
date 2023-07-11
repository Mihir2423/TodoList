import React from "react";
import { View, Text } from "react-native";

import { styles } from "../styles/taskStyles";

const Task = ({ text }) => {
  return (
    <View style={styles.items}>
      <View style={styles.leftSide}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

export default Task;
