import * as React from 'react';
import { View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    home : {
        flex: 1,
        backgroundColor: 'red'
    }
});

export default function HomeScreen() {
   return (
<View style={styles.home}>
    <Text style={{fontSize:16,fontWeight:'700'}}>Home Screen</Text>
</View>
   );
 }