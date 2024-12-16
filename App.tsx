
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeReactNative from "./screens/WelcomeReactNative.tsx";
import Home from "./screens/Home.tsx";


const Stack = createNativeStackNavigator()



function App(): React.JSX.Element {


  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Home}/>
            <Stack.Screen name={'WelcomeReactNative'} component={WelcomeReactNative}/>

          </Stack.Navigator>
      </NavigationContainer>

  );
}



export default App;
