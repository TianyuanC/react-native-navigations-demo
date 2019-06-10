import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function DemoScreen() {
    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */
    useEffect(() => {
        console.log("DemoScreen mounted");
        return () => {
            console.log("DemoScreen unmounted");
        };
    });
    return (
        <View>
            <Text>Demo</Text>
        </View>
    );
}

DemoScreen.navigationOptions = {
    title: "Demo View"
};
