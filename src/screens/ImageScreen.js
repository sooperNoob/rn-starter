import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="First Image Title"
                imageSource = {require('../../assets/beach.jpg')}
                score = {5}
            />
            <ImageDetail 
                title="Second Image Title"
                imageSource = {require('../../assets/forest.jpg')}
                score = {7}
            />
            <ImageDetail 
                title="Third  Image Title"
                imageSource = {require('../../assets/mountain.jpg')}
                score = {9}
            />
        </View>
    );
};

const Style = StyleSheet.create({});

export default ImageScreen;