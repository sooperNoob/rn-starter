import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const ColorModifier = (props) => {
    return (
        <View>
            <Text>
                Color: {props.color}
            </Text>
            <Button 
                onPress = {props.onIncrease}
                title={`Increase Color ${props.color}`}
            />
            <Button 
                onPress = {props.onDecrease}
                title={`Decrease Color ${props.color}`}
            />
        </View>
    );
}

const style = StyleSheet.create({});

export default ColorModifier;
