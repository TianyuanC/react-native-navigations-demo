import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

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
        <View style={styles.container}>
            <Text>Demo {Math.floor(Math.random() * Math.floor(10))}</Text>
        </View>
    );
}

DemoScreen.navigationOptions = {
    title: "Demo View"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
