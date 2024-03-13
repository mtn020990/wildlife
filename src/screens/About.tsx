import * as React from 'react';
import { View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    home : {
        flex: 1,
        //alignItems: 'center',
        backgroundColor: 'white',
        padding: 20
    },
    header : {
       paddingTop: 5,
       fontSize:24,
       fontWeight:'700',
       textAlign: 'center',
       
    },
    textLine : {
        paddingTop : 10
    },
    textQuestion: {
        fontSize: 20
    },
    textQuote: {
        fontStyle: 'italic',
        textAlign: 'center',
    }
});

export default function AboutScreen() {
   return (
        <View style={styles.home}>
            <Text style={styles.header}>iNaturalist</Text>
            <Text style={styles.textLine}>
                iNaturalist helps you identify the plants and animals around you while generating data for science and conservation. Get connected with a community of millions scientists and naturalists who can help you learn more about nature! What’s more, by recording and sharing your observations, you’ll create research-quality data for scientists working to better understand and protect nature. So if you like recording your findings from the outdoors, or if you just like learning about life, join us!
            </Text>
            <Text style={styles.textLine}>
                Vision: iNaturalist's vision is a world where everyone can understand and sustain biodiversity through the practice of observing wild organisms and sharing information about them.
            </Text>
            <Text style={styles.textLine}>
                Mission: iNaturalist’s mission is to connect people to nature and advance biodiversity science and conservation.
            </Text>
            <Text style={[styles.textLine, styles.textQuestion]}>
                What is iNaturalist?
            </Text>
            <Text style={styles.textLine}>
                iNaturalist is a lot of different things, but at its core,
            </Text>
            <Text style={[styles.textLine,styles.textQuestion, styles.textQuote]}>
            iNaturalist is an online social network of people sharing biodiversity information to help each other learn about nature
            </Text>
        </View>
   );
 }