import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {styles} from "./styles/appStyles"

import Task from "./components/Task";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState();
  const [textItems, setTextItems] = useState(["First", "Second"]);

  const handleSubmit = () => {
    if (task) {
      setTextItems([...textItems, task]);
    }
    setTask(null);
  };

  const completedTask = (index) => {
    let taskItems = [...textItems];
    taskItems.splice(index, 1);
    setTextItems(taskItems);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.sectionItems}>
            {textItems?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completedTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChange={(event) => setTask(event.nativeEvent.text)}
        ></TextInput>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
