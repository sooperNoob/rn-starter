import React, {useReducer} from 'react';
import {Text, StyleSheet, View}  from 'react-native';
import ColorModifier from '../components/ColorModifier'

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
    // state = { red: number, green: nuber, blue: number}'
    // action = { colorToChange: 'red' || 'green' ||'blue', amoutn: 15:-15}
    var newState;
    var newValue;

    switch(action.type){
        case 'change_red':
            // return stateModifier(state, {green: state.green, blue: state.blue, red: state.red + action.payload}, state.red + action.payload);
            newState = {red: state.red + action.payload, green: state.green, blue: state.blue};
            newValue =  state.red + action.payload;
            break;
        case 'change_green':
            newState = {red: state.red, green: state.green + action.payload, blue: state.blue};
            newValue =  state.green + action.payload;
            break;
            // return {...state, green: state.green + action.payload};
        case 'change_blue':
            newState = {red: state.red, green: state.green,  blue: state.blue + action.payload};
            newValue =  state.blue + action.payload;
            break;
        default:
            return state;
    }
    return stateModifier(state, newState, newValue);
};

const stateModifier = (state, newState, newValue) =>{
    if(newValue>=0 && newValue<=255){
        return newState;
    }
    return state;
};

const ColorModifierListRed = () => {

    const [state, dispatch] = useReducer(reducer, {red:0, green: 0, blue: 0});
    return (
        <View>
            <ColorModifier 
                color='red'
                onIncrease = {() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease = {() => dispatch({type: 'change_red', payload: -1*COLOR_INCREMENT})}
            />
            <ColorModifier 
                color='green'
                onIncrease = {() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease = {() => dispatch({type: 'change_green', payload: -1*COLOR_INCREMENT})}
            />
            <ColorModifier 
                color='blue'
                onIncrease = {() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease = {() => dispatch({type: 'change_blue', payload: -1*COLOR_INCREMENT})}
            />

            <View style={{height:100, width:100, backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}>  
                  {/* //This is how I understand the syntex here for double curly braces
                  //We need first curly brace , because we are putting javascript inside a react tag. Second is because we are creating an object.*/}
            </View>             
        </View>
    );
};


const style = StyleSheet.create({});

export default ColorModifierListRed;
