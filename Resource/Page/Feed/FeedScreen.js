import React from "react";
import { SafeAreaView, Text,View } from "react-native";
import {styles} from "./FeedTabStyle"

function FeedScreen(proops) {
    return (
        <SafeAreaView style={styles.container}>
           <View>
                <Text style={[styles.headingText]}>Feeds</Text>
            </View>

            <View>
                <Text style={[styles.txt]}>
                    Coming Soon 
                </Text>
            </View>
        </SafeAreaView>

    )
}

export default FeedScreen