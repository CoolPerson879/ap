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
    { name: "Tab1Stack", label: "Tab 1" },
    { name: "Tab2Stack", label: "Tab 2" },
    { name: "Tab3Stack", label: "Tab 3" },
    { name: "Tab4Stack", label: "Tab 4" },
    { name: "Tab5Stack", label: "Tab 5" },
    { name: "Tab6Stack", label: "Tab 6" },
    { name: "Tab7Stack", label: "Tab 7" },
    { name: "Tab8Stack", label: "Tab 8" },
    { name: "Tab9Stack", label: "Tab 9" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => drawer.openDrawer()}>
        <Ionicons name="menu" size={28} />
      </TouchableOpacity>
      <Text style={styles.title}>Units:</Text>
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
  },
  tab: {
    fontSize: 18,
    marginVertical: 6,
    color: "#007AFF",
    textAlign: "center",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
});
