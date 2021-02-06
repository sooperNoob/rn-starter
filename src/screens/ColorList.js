import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import { color } from 'react-native-reanimated';

const ColorList = () => {
    const [colors, setColors] = useState([]);
    // console.log(colors);
    
    return (
        <View>
            <Button
                onPress = { ()=>{
                        setColors([...colors, randomRGB()]);
                    }
                }
                title='Add color'
            />
            <FlatList
                keyExtractor = {(color) =>{
                        console.log(color);
                        return color;
                    }
                }
                data={colors}
                renderItem = { (color) => {
                        console.log(color);
                        return <View style = {{height: 100, width: 100, backgroundColor:color.item}}/>
                    }
                }
            />
        </View>
    );
};

const randomRGB = ()=>{
    var red     = Math.floor(Math.random()*256);
    var blue    = Math.floor(Math.random()*256);
    var green   = Math.floor(Math.random()*256);
    return `rgb(${red},${blue},${green})`;
}

const style = StyleSheet.create({});

export default ColorList;