import * as React from 'react';
import { View, Text, StyleSheet} from "react-native";
import api from 'api/index'
import { useState } from "react";

const styles = StyleSheet.create({
    home : {
        flex: 1,
        backgroundColor: 'red'
    }
});

const getListRestro = async () =>{
    const [listRestro, setListRestro] = useState([]);
    var data = await api.base.getListRestro();
    setListRestro(data);
    console.log("List resto",listRestro);
}

export default function HomeScreen() {
    getListRestro();
   return (
        <View style={styles.home}>
            <Text style={{fontSize:16,fontWeight:'700'}}>Home Screen</Text>
        </View>
   );
 }