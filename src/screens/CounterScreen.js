import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    console.log('Counter scereen, initiated');
    return (
        <View>
            <Button 
                onPress = { () => {
                    setCounter(counter + 1);
                }}
                title = 'Increment counter'
            />
            <Button
                onPress = {() => {
                    setCounter(counter -1);
                }}
                title = 'Decrement counter'
            />
            <Text>
                Current Count : {counter}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default CounterScreen;
