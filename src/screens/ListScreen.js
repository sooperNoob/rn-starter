import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends=[
        {name: 'Book #1'},
        {name: 'Book #2'},
        {name: 'Book #3'},
        {name: 'Book #4'},
        {name: 'Book #5'},
        {name: 'Book #6'},
        {name: 'Book #7'},
        {name: 'Book #8'},
        {name: 'Book #9'},
        {name: 'Book #10'},
        {name: 'Book #11'},
    ];
    return (
        <FlatList
            // horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor = {(friend) =>{
                    return friend.name;
                }
            }
            data={friends}
            renderItem = { (element) => {
                    return <Text style={styles.textStyle}>{element.item.name}</Text>;
                }
            }
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 80
    }
});

export default ListScreen;