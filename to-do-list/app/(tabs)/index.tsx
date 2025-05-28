import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Texto from '@/components/to-do-list/textos';
import {Task} from '@/components/to-do-list/tasks';

export default function TabOneScreen() {
  return (
    <View>
      {/* <Texto texto="Texto 1" />
      <Texto texto="Texto 2" />
      <Texto texto="Texto 3" subtitulo='oi' />
      <Texto texto="Texto 4" subtitulo='oi' />
      <Texto texto="Texto 5" subtitulo='oi' subtitulo2='oi'/>
      <Texto texto="Texto 6" subtitulo='oi' subtitulo2='oi'/> */}

      <Task titulo='task1'/>
      <Task titulo='task2'/>
      <Task titulo='task3'/>
      <Task titulo='task4'/>
    </View>
  );
};
