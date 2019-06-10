import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function LinksScreen() {
    useEffect(() => {
        console.log("LinksScreen mounted");
        return () => {
            console.log("LinksScreen unmounted");
        };
    });
    return (
        <ScrollView style={styles.container}>
            {/**
             * Go ahead and delete ExpoLinksView and replace it with your content;
             * we just wanted to provide you with some helpful links.
             */}
            <ExpoLinksView />
        </ScrollView>
    );
}

LinksScreen.navigationOptions = {
    title: "Links"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: "#fff"
    }
});
