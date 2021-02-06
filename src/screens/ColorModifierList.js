//Note: Implementation using useState
//UseState is good for handling a few states but for more complex states it is better to use useReducer.

import React, {useState} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import ColorModifier from './../components/ColorModifier';

const COLOR_INCREMENT = 20;


const ColorModifierList = () => {

    const [red, setRed] = useState(0);      //NOTE: Hooks need to be with in a function
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (modifierFunction, colorValue, change) => {    //NOTE: Need to be defined here to resolve scope issues regarding color definitions within the hooks.
        if(colorValue + change > 255 || colorValue + change < 0)
            return;
        modifierFunction(colorValue + change);
        // modifierFunction(Math.max(0, Math.min(255, colorValue + change)))
    };

    return (
        <View>
            <ColorModifier 
                color='red'
                onIncrease = {() => setColor(setRed, red, COLOR_INCREMENT)}            //NOTE: Function needs to be passed setting it to () => 
                colorDecrease = {() => setColor(setRed, red, -1 * COLOR_INCREMENT)}
            />
            <ColorModifier 
                color='green'
                onIncrease = {() => setColor(setGreen, green, COLOR_INCREMENT)}            //NOTE: Function needs to be passed setting it to () => 
                colorDecrease = {() => setColor(setGreen, green, -1 * COLOR_INCREMENT)}
            />
            <ColorModifier 
                color='blue'
                onIncrease = {() => setColor(setBlue, blue, COLOR_INCREMENT)}            //NOTE: Function needs to be passed setting it to () => 
                colorDecrease = {() => setColor(setBlue, blue, -1 * COLOR_INCREMENT)}
            />

            <View style={{height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`}}>
            </View>
        </View>
    );
};

const style = StyleSheet.create({});

export default ColorModifierList;