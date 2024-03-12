import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MenuNav from 'components/Menu';

export default function App() {
  return (
      <NavigationContainer>
      <MenuNav/>
      </NavigationContainer>
  );
}