import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import { View, StyleSheet } from 'react-native';
import HomeScreen from 'screens/Home';
import AboutScreen from 'screens/About';


const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  body: {
   height: 1000,
   backgroundColor: "red"
  }
});

export default function MenuNav() {
  return (
    <View style={styles.body}>
        <Drawer.Navigator 
            screenOptions={{
                drawerStyle: {
                    backgroundColor: 'rgb(116, 172, 0)',
                    width: 240,
                    }, 
                drawerActiveBackgroundColor : 'rgb(116, 172, 172)',
                headerStyle: {
                    backgroundColor: 'rgb(116, 172, 0)',
                    
                },
                headerTintColor: 'white',
                drawerLabelStyle : {
                    color: 'white'
                }
            }}
        >
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
     
      </Drawer.Navigator>
    </View>
  );
}