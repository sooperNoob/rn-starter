import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const ColorScreen = () => {
    const [colors, setColor] = useState([]);

    return(
        <View style={{height:100, width:100, backgroundColor: randomRGB()}}>
            <Button
                title = 'Add Color'
                onPress = {() => {
                    setColor([...colors, randomRGB()]);
                }}
            />
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;  //NOTE: This is how you construct the string using JS
    // return  'rgb(' + red + ',' + green + ',' + blue + ')';
}

const style = StyleSheet.create({});


export default ColorScreen;
