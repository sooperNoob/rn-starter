import React from "react";
import { Text, StyleSheet, Button, View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Halli Hallo</Text>
      <Button
        onPress = {() => {
          navigation.navigate('Components');
        }}
        title = "Label for the button"
      />
      <Button
        onPress = { () =>{
          navigation.navigate('List');
        }}
        title = "Display List screen"
      />
      <Button
        onPress = {() => {
          navigation.navigate('Image');
        }}
        title = "Display Image Screen"
      />
      <Button
        onPress = {() => {
          console.log('Loading counter screen');
          navigation.navigate('Counter');
          // props.navigation.navigate('Counter');
        }}
        title = "Display counter screen"
      />
      <Button
        onPress = {() => {
          navigation.navigate('ClrSrc');
        }}
        title = 'Display Color Screen'
      />
      <Button
        onPress = {() => {
          navigation.navigate('ClrList');
        }}
        title = 'Display Color List Screen'
      />
      <Button
        onPress = {() => {
          navigation.navigate('ClrModifierList');
        }}
        title = 'Display Color Modifier List Screen'
      />

      <Button
        onPress = {() => {
          navigation.navigate('ClrModListRed');
        }}
        title = 'Display Color Modifier List Reducer  Screen'
      />
      <Button
        onPress = {() =>{
          navigation.navigate('TxtScreen') ;
        }}
        title = 'Display Text Input screen.'
      />

      {/* <TouchableOpacity onPress = {() => {
          props.navigation.navigate('List');
        }}>
        <Text> Touchable Button Demo </Text>
        <Text> Touchable Button Demo </Text>
        <Text> Touchable Button Demo </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
