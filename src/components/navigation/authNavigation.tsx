import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ForgotenPassword from "../screens/auth/forgotenPassword";
import Login from "../screens/auth/loginScreen";
import Register from "../screens/auth/registerScreen";

const AuthNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false
            }
        },
        RegisterScreen: {
            screen: Register,
            navigationOptions: {
                headerShown: false
            }
        },
        ResetPassword: {
            screen: ForgotenPassword,
            navigationOptions: {
                headerShown: false
            }
        }
    },
    {
        initialRouteName: "Login"
    }
);

export default createAppContainer(AuthNavigator);