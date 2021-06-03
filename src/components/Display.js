import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Display(props) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
      padding:20,
      backgroundColor:'rgba(0,0,0,0.5)',
      alignItems:'flex-end',
      flex: 1,
  },
  displayValue: {
      color:'#fff',
      fontSize: 60,
      
  }
});

export default Display;
