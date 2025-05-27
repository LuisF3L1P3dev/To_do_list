import { View, Text } from "react-native"

interface ExampleProps{
    text?: string;
    children?: string;
}


const Example = (props: ExampleProps) =>{
    return(
        <View>
            <Text style={{color: 'blue'}}>{props.text}</Text>
            <Text style={{color: 'red'}}>{props.children}</Text>
        </View>
    );
};

export default Example;