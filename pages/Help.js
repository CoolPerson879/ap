import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Help(){
    const navigation = useNavigation()
    return (
        
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Pressable onPress={() => navigation.openDrawer()} style={styles.icon}>
                    <Ionicons name="menu" size={24} color="black" />
                </Pressable>

                <Text style={styles.title}>Help & Navigation</Text>

                {/* Basic Navigation Section */}
                <Text style={styles.subtitle}>Basic Navigation</Text>
                <Text style={styles.text}>
                    The navigation drawer can be opened by pressing the menu icon (☰) at the
                    top left, or by swiping right from the edge of the screen.
                </Text>
                <Text style={styles.text}>
                    Tap on a unit on the main screen to view its lesson content and begin
                    learning.
                </Text>

                {/* Content Help Section */}
                <Text style={styles.subtitle}>Content Help</Text>
                <View style={{ overflow: 'hidden', borderRadius: 10, borderWidth: 5, borderColor: 'white' }}>
                    <Image
                        source={require("../images/lesson.jpeg")} // Replace with actual image path or URI
                        style={[styles.image, { marginTop: -10, marginBottom: -10 }]}
                    />
                </View>
                <Text style={styles.text}>
                    The badges under the lesson name titles represent required and suggested historical thinking skills (colored) and themes (black) for the lesson. Learn more about the themes and learning skills in the <Text style={{fontWeight: "bold"}}>Themes and Historical Thinking Skills</Text> page.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: "center",
    },
    icon: {
        alignSelf: "flex-start",
        marginTop: 4,
        paddingLeft: 12,
    },
    title: {
        fontSize: 22,
        marginVertical: 16,
        fontWeight: "bold",
        textAlign: "center",
        ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
    },
    subtitle: {
        fontSize: 20,
        marginVertical: 6,
        textAlign: "center",
        ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
    },
    text: {
        textAlign: "center",
        marginBottom: 12,
        ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
    },
    image: {
        width: 150,
        height: 300,
        resizeMode: "contain",
        marginVertical: 12,
    },
});
