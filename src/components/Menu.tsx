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
                    backgroundColor: '#c6cbef',
                    width: 240,
                    }, 
                drawerActiveBackgroundColor : 'red',
                headerStyle: {
                    backgroundColor: 'blue'
                },
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