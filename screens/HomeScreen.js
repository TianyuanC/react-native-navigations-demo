import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
    useEffect(() => {
        console.log("HomeScreen mounted");
        return () => {
            console.log("HomeScreen unmounted");
        };
    });
    return (
        <View style={styles.container}>
            <Text>Home View</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
