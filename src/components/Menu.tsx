import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import { View, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  body: {
    height: 1000,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default function MenuNav() {
  return (
    <View style={styles.body}>
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
    </View>
  );
}