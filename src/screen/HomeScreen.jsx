import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";

const dummydata = [
  {
    id: "1",
    title: "Wash Car",
  },
  {
    id: "2",
    title: "Clean Sink",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Add new task" />
      <TouchableOpacity style={styles.add_btn}>
        <Text style={styles.btn_txt}>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        styles={styles.list}
        data={dummydata}
        keyExtractor={(items) => items.id}
        renderItem={({ item: { id, title }, item }) => (
          <View
            style={{
              backgroundColor: "#5385adc6",
              borderRadius: 6,
              paddingHorizontal: 6,
              paddingVertical: 12,
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {item.title}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: "#c2c2c2",
    padding: 10,
    borderRadius: 5,
  },
  add_btn: {
    backgroundColor: "#000000",
    borderRadius: 6,
    paddingVertical: 8,
    marginTop: 16,
    marginBottom: 50,
    alignItems: "center",
  },
  btn_txt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  list: {},
});

export default HomeScreen;
