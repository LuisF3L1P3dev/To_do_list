import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Texto from '@/components/to-do-list/textos';

export default function TabOneScreen() {
  return (
    <View>
      <Texto texto="Texto 1" />
      <Texto texto="Texto 2" />
      <Texto texto="Texto 3" subtitulo='oi' />
      <Texto texto="Texto 3" subtitulo='oi' />
      <Texto texto="Texto 3" subtitulo='oi' subtitulo2='oi'/>
      <Texto texto="Texto 3" subtitulo='oi' subtitulo2='oi'/>
    </View>
  );
};
