import React from "react";
import { Text, TouchableHighlight, StyleSheet, Dimensions } from "react-native";

function Buttons(props) {
  const stylesButton = [styles.button];
  //Validaçãos de estilo de botão
  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.triple) stylesButton.push(styles.buttonTriple);
  if (props.operation) stylesButton.push(styles.buttonOperation);
  return (
    <TouchableHighlight onPress={props.action}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderWidth: 1,
    borderColor: "#bbb",
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
    textAlign: "center",
  },
  buttonOperation: {
    backgroundColor: "#eb9a09",
    color: "#fff",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  },
});

export default Buttons;
