import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Image source = {props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>Score = {props.score}</Text>
        </View>
    );
};

const Style = StyleSheet.create({});

export default ImageDetail;