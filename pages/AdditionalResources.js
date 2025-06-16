import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AdditionalResources() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable onPress={() => navigation.openDrawer()} style={styles.icon}>
          <Ionicons name="menu" size={24} color="black" />
        </Pressable>

        <Text style={styles.title}>Additional Resources</Text>
        <Text style={styles.text}>
          Find more resources, such as practice sets, flashcards and sample
          tests, aligned with the latest curriculum by clicking below.
        </Text>
        <Pressable
          style={{
            backgroundColor: "#000",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20, // More rounded corners
            alignSelf: "center",
            marginBottom: 16,
          }}
          onPress={() => {
            Linking.openURL("https://apworld.rajscape.com");
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
              ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
            }}
          >
            More Resources
          </Text>
        </Pressable>
        <Text style={styles.text}>
          Here are some other resources that could be useful and are recommended
          by AP
        </Text>
        <Text style={styles.subtitle}>Recommended Websites</Text>
        <Text style={styles.text}>
          • Khan Academy: Free AP World History videos and practice questions
          {"\n"}• Heimler's History: YouTube channel with concise and engaging
          AP history reviews{"\n"}• AP Classroom and AP World CED: Official
          course and exam info with all required content and more helpful
          resources
        </Text>

        <Text style={styles.subtitle}>Study Tools</Text>
        <Text style={styles.text}>
          • Quizlet: Flashcards for key terms and concepts{"\n"}• Fiveable: Live
          reviews and study guides{"\n"}• Albert.io: Practice questions and
          explanations
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

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
