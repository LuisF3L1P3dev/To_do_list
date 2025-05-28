import React from "react";
import { StyleSheet, Text, View } from "react-native";


interface TextoProps {
  texto: string;
  subtitulo?: string;
  subtitulo2?: string;
}

function Texto(props: TextoProps) {
  return(
    <Text style={styles.texto}>
      {props.texto}

      <Text style={styles.subtitulo}>{props.subtitulo}</Text>
      
      {props.subtitulo2 && (
        <Text style={styles.subtitulo2}>{props.subtitulo2}</Text>
      )}
    </Text> 
  );
} 

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    color: 'yellow',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitulo:{
    fontSize: 34,
    color: 'gray',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 5,
  },
  subtitulo2:{
    fontSize: 34,
    color: 'red',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 5,
  }

});

export default Texto;
