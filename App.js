import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/Home/HomeScreen';
import CustomDrawerContent from './Routes/CustomDrawerContent';
import LoginScreen from './components/Login/LoginScreen';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: "#e20030",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#e20030",
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: '#e20030',
            borderBottomColor: "#e20030"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Drawer.Screen name="Login" component={LoginScreen} options={{
          headerStyle: {
            backgroundColor: '#e20030',
            borderBottomColor: "#e20030"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}