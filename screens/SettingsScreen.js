import React, { useEffect } from "react";

import { View, Button } from "react-native";
import {
    NavigationEvents,
    StackActions,
    NavigationActions
} from "react-navigation";

export default function SettingsScreen(props) {
    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */
    useEffect(() => {
        console.log("SettingsScreen mounted");
        return () => {
            console.log("SettingsScreen unmounted");
        };
    });

    const customActions = StackActions.reset({
        index: 3,
        actions: [
            NavigationActions.navigate({ routeName: "Settings" }),
            NavigationActions.navigate({ routeName: "Demo" }),
            NavigationActions.navigate({ routeName: "Demo" }),
            NavigationActions.navigate({ routeName: "Demo" })
        ]
    });

    return (
        <View>
            <NavigationEvents
                onWillFocus={payload => console.log("will focus")}
                onDidFocus={payload => console.log("did focus")}
                onWillBlur={payload => console.log("will blur", payload)}
                onDidBlur={payload => console.log("did blur")}
            />
            <Button
                title="View Demo"
                onPress={() => {
                    props.navigation.dispatch(customActions);
                }}
            />
            <Button
                title="Update Titles"
                onPress={() => {
                    props.navigation.setParams({
                        customTitle: "Updated... Settings"
                    });
                }}
            />
        </View>
    );
}

SettingsScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("customTitle", "Custom Settings")
});
