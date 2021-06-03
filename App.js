import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Buttons from "./src/components/Buttons";
import Display from "./src/components/Display";

export default function App() {
  return (
    <View style={styles.container}>
      <Display value="0" />
      <View style={styles.buttonsContainer}>
        <Buttons triple label="CE"/>
        <Buttons operation label="/"/>
        <Buttons label="7"/>
        <Buttons label="8"/>
        <Buttons label="9"/>
        <Buttons operation label="*"/>
        <Buttons label="4"/>
        <Buttons label="5"/>
        <Buttons label="6"/>
        <Buttons operation label="-"/>
        <Buttons label="1"/>
        <Buttons label="2"/>
        <Buttons label="3"/>
        <Buttons operation label="+"/>
        <Buttons double label="0"/>
        <Buttons label="."/>
        <Buttons operation label="="/>
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
