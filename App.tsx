import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeReactNative from "./screens/WelcomeReactNative.tsx";
import Home from "./screens/Home.tsx";
import {Text} from "react-native";


const Stack = createNativeStackNavigator({
    screens: {
        WelcomeReactNative: WelcomeReactNative,
    },
})


function App(): React.JSX.Element {


    return (
        <WelcomeReactNative/>
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name={'Home'} component={WelcomeReactNative}/>
        //         {/*<Text>text</Text>*/}
        //         {/*<Stack.Screen name={'Home'} component={Home}/>*/}
        //     </Stack.Navigator>
        // </NavigationContainer>


    );
}


export default App;
