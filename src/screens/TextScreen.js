import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize = 'none'
                autoCorrect ={false}
                value = {name}
                onChangeText = {(newName) => setName(newName)}
            />
            <Text>My name is {name}</Text>
            {
                name.length<5?<Text>Input must be at least 5 characters long</Text>:null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;