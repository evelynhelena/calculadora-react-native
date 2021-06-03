import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Buttons from "./src/components/Buttons";
import Display from "./src/components/Display";

export default function App() {
  const [displayValue, setDisplayValue] =  useState(0);
  function addNumber(number){
    setDisplayValue(number);
  }

  function clearMomory(){
    setDisplayValue(0);
  }

  function setOperation(operation){
    
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttonsContainer}>
        <Buttons triple label="CE" action={() => clearMomory()}/>
        <Buttons operation label="/" action={() => setOperation('/')}/>
        <Buttons label="7" action={() => addNumber('7')}/>
        <Buttons label="8" action={() => addNumber('8')}/>
        <Buttons label="9" action={() => addNumber('9')}/>
        <Buttons operation label="*" action={() => setOperation('*')}/>
        <Buttons label="4" action={() => addNumber('4')}/>
        <Buttons label="5" action={() => addNumber('5')}/>
        <Buttons label="6" action={() => addNumber('6')}/>
        <Buttons operation label="-" action={() => setOperation('-')}/>
        <Buttons label="1" action={() => addNumber('1')}/>
        <Buttons label="2" action={() => addNumber('2')}/>
        <Buttons label="3" action={() => addNumber('3')}/>
        <Buttons operation label="+" action={() => setOperation('+')}/>
        <Buttons double label="0" action={() => addNumber('0')}/>
        <Buttons label="." action={() => addNumber('.')}/>
        <Buttons operation label="=" action={() => setOperation('=')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap:'wrap',
  },
});
