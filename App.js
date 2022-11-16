import * as React from "react";
import connection from "./DB/connection";
import BottomTabNavigator from "./navigator/BottomTabNavigator";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <BottomTabNavigator />
        </Provider>
    );
}
