import * as React from 'react';
import { View, Text, StyleSheet, FlatList} from "react-native";
import api from 'api/index'
import { useState, useEffect  } from "react";

const styles = StyleSheet.create({
    home : {
        flex: 1,
        backgroundColor: 'white'
    },
    item: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        flexDirection: 'column'
    },
    name: {
        flex: 1,
        height: 44,
        paddingTop: 5,
        paddingLeft: 10
    },
    description: {
        flex: 2,
        height: 44,
        padding: 10,
    }
});

export default function HomeScreen({ navigation }: any) {   
    const [listRestro, setListRestro] = useState();

    const getListRestro = async () =>{  
        var data = await api.base.getListRestro();
        setListRestro(data);
    }
 
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action and update data
            getListRestro();
          });
      
          // Return the function to unsubscribe from the event so it gets removed on unmount
          return unsubscribe;
    },[navigation]);
 
    return (
        <View style = {styles.home}>
            <FlatList
                data = {listRestro}
                renderItem = {
                    ({item}) => 
                    <View style={styles.item}>
                        <Text style={styles.name}>Restro Name: {item.name}</Text>
                        <Text style={styles.description}>Restro Description: {item.description}</Text>
                    </View>
                }
        />
        </View>
    );
 }