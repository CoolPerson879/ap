import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Page2({ navigation }) {
  const drawer = useNavigation();

  const tabs = [
    { name: "DBQSet1", label: "DBQ Set 1" },
    { name: "DBQSet2", label: "DBQ Set 2" },
    { name: "LEQSet1", label: "LEQ Set 1" },
    { name: "LEQSet2", label: "LEQ Set 2" },
    { name: "LEQSet3", label: "LEQ Set 3" },
    { name: "LEQSet4", label: "LEQ Set 4" },
    { name: "LEQSet5", label: "LEQ Set 5" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => drawer.openDrawer()}>
        <Ionicons name="menu" size={28} />
      </TouchableOpacity>
      <Text style={styles.title}>Free Response Sets:</Text>
      <Text style={styles.subtitle}>
        Choose a set below to practice different types of free response
        questions.
      </Text>
      {tabs.map((tab, index) => (
        <Pressable key={index} onPress={() => navigation.navigate(tab.name)}>
          <Text style={styles.tab}>{tab.label}</Text>
        </Pressable>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    textAlign: "center",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 12,
    marginTop: -8,
    padding: 20,
    fontWeight: "100",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  tab: {
    fontSize: 18,
    marginVertical: 6,
    color: "#007AFF",
    textAlign: "center",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
});
