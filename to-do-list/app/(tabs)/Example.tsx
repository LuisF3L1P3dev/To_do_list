import { View, Text } from "react-native"

interface ExampleProps{
    text?: string;
    children?: string;
}


const Example = ({text, children}: ExampleProps) =>{
// const Example = (props: ExampleProps) =>{
    // const{ children, text } = props;
    return(
        <View>
            <Text style={{color: 'blue'}}>{text}</Text>
            <Text style={{color: 'red'}}>{children}</Text>
        </View>
    );
};

export default Example;