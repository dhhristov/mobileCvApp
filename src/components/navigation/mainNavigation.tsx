import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/main/home-screen";

const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                headerShown: false
            }
        }
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(MainNavigator);