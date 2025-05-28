import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
// import BotaoPersonalizado from '@/components/botoes/botaoPersonalizado';

const App = () => {
    const alertaBotaoPrimario = () => {
        console.log('Botão Primário Pressionado');
        alert('Botão Primário Pressionado');
    }

    return (
        <SafeAreaView>
            <View>
                <Text>Teste</Text> 
            </View>
        </SafeAreaView>
    )
}

export default App;