import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Add new task" />
            <TouchableOpacity style={styles.add_btn}>
                <Text style={styles.btn_txt}>Add</Text>
            </TouchableOpacity>
        </View>
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
        paddingVertical: 6,
        marginTop: 8,
        alignItems: "center",
    },
    btn_txt: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        
    }
});

export default HomeScreen;
