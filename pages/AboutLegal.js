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

export default function AboutLegal() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable onPress={() => navigation.openDrawer()} style={styles.icon}>
          <Ionicons name="menu" size={24} color="black" />
        </Pressable>

        <Text style={styles.title}>About This App</Text>
        <Text style={styles.text}>
          This educational app is designed to help students prepare for the AP
          World History: Modern exam. It provides review materials, practice
          questions, and helpful resources to support your learning journey.
          This app is aligned with the Fall 2023 AP World History: Modern Course
          and Exam Description.
        </Text>
        <Text style={styles.subtitle}>Copyright</Text>
        <Text style={styles.text}>
          © {new Date().getFullYear()} RajScape AP World History App. All rights
          reserved. Unauthorized reproduction or distribution of any part of
          this app is prohibited.
        </Text>
        <Text style={styles.subtitle}>Legal Notice</Text>
        <Text style={styles.text}>
          This app is an independent project and is not affiliated with,
          endorsed by, or sponsored by the College Board or any other official
          educational organization. AP® is a trademark registered by the College
          Board, which is not affiliated with, and does not endorse, this
          website.
        </Text>
        <Text style={styles.text}>
          The information provided in this app is for educational purposes only.
          While every effort has been made to ensure accuracy, the creators of
          this app are not responsible for any errors or omissions, or for any
          outcomes related to the use of this material.
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
            Linking.openURL("https://apworld.rajscape.com/privacy-policy");
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
            Privacy Policy
          </Text>
        </Pressable>
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
            Linking.openURL("https://apworld.rajscape.com/cookiej-policy");
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
            Cookie Policy
          </Text>
        </Pressable>
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
