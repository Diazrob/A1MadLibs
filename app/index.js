import { StyleSheet, Text, TextInput, View } from "react-native";
import { Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";

export default function Page() {
  const[name, onChangeName] = useState('');
  const[noun, onChangeNoun] = useState('');
  const[event, onChangeEvent] = useState('');

  const clearTexts = () => {setName(''), setNoun(''),setEvent('');};

  return (
    <View style={styles.container}>

      <View style={styles.nav}>
        <Text style={styles.title}>Assignment 1</Text>
      </View>

      <View style={styles.instructions}>
        <Text style={styles.texts}>How to play Mad Libs.</Text>
        <Text style={styles.texts}>Hall Pass</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.inputContainer}>
           <TextInput
           style={styles.input}
           placeholder="Name"
           onChangeText={onChangeName}
           value={name}
           ></TextInput>
        </View>
        <View style={styles.inputContainer}>
           <TextInput
           style={styles.input}
           placeholder="Noun"
           onChangeText={onChangeNoun}
           value={noun}
           ></TextInput>
        </View>
        <View style={styles.inputContainer}>
           <TextInput
           style={styles.input}
           placeholder="An Event"
           onChangeText={onChangeEvent}
           value={event}
           ></TextInput>
        </View>
      </View>
      <Pressable
      style={styles.submitButton}
      >
        <Link 
        style={styles.buttonText}
        href={{
          pathname: "/hallPass",
          params: {name,noun,event},
        }}
        >Make my hall pass</Link>
      </Pressable>
      <Pressable
      style={styles.clearButton}
      onPress={clearTexts}
      >
        <Text style={styles.buttonText}>Clear</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 0,
  },
  main: {
    marginHorizontal: "auto",
    width: '80%',
  },
  nav: {
    height: 60,
    width: "100%",
    backgroundColor:"lightblue",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 25,
  },
  texts: {
    fontSize: 36,
    color: "#38434D",
  },
  instructions: {
    marginHorizontal: "auto",
    marginVertical: 40,
  },
  inputContainer:{
    borderWidth: 4,
    height:50,
    justifyContent: 'center',
    padding: 5,
    marginBottom: 14,
    width: '100%'
  },
  input: {
    height: 50,
    fontSize: 20,
  },
  submitButton: {
    width: '80%',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems:'center'
  },
  clearButton: {
    width: '50%',
    padding: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});
