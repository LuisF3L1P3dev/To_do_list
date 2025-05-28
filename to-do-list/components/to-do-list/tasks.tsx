import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface TaskProps {
  titulo: string;
  status?: boolean;
  onToggleStatus?: () => void;
  onDelete?: () => void;
}

export function Task(props: TaskProps) {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity 
        style={[]}
        // onPress={onToggleStatus}
      >
        <Ionicons 
          name={isCompleted ? 'checkmark' : 'square-outline'} 
          size={18} 
          color="white" 
        />
      </TouchableOpacity> */}
      <View style={styles.container}></View>
      <Text style={styles.titulo}> 
        { props.titulo }
      </Text>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#304163',
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  checkboxUnchecked: {
    backgroundColor:'#E88A1A',
  }
});
