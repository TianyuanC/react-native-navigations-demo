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

    const customStackHistory = StackActions.reset({
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
                onWillFocus={() => console.log("will enter")}
                onDidFocus={() => console.log("did enter")}
                onWillBlur={payload => console.log("will leave", payload)}
                onDidBlur={() => console.log("did leave")}
            />
            <Button
                title="View Demo Stack"
                onPress={() => {
                    props.navigation.dispatch(customStackHistory);
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
