import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { LEQ3 } from "../DBQData";

const formatText = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <Text key={index} style={styles.bold}>
        {part.slice(2, -2)}
      </Text>
    ) : (
      <Text key={index}>{part}</Text>
    )
  );
};

const LEQSet3Screen = () => {
  const navigation = useNavigation();
  const [selectedLEQ, setSelectedLEQ] = React.useState("leq1");

  const renderButtons = () => (
    <View style={styles.buttonRow}>
      {["leq1", "leq2", "leq3"].map((key) => (
        <Pressable
          key={key}
          onPress={() => setSelectedLEQ(key)}
          style={[
            styles.unitButton,
            selectedLEQ === key && styles.unitButtonActive,
          ]}
        >
          <Text
            style={[
              styles.unitButtonText,
              selectedLEQ === key && styles.unitButtonTextActive,
            ]}
          >
            {key.toUpperCase()}
          </Text>
        </Pressable>
      ))}
    </View>
  );

  const leqData = LEQ3[0];
  const questionText = leqData[selectedLEQ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View style={styles.header}>
              <Text style={styles.title}>LEQ Set 3</Text>
              <Text style={styles.subtitle}>
                Choose a Long Essay Question (LEQ) prompt to practice.
              </Text>
              {renderButtons()}
            </View>
            <View style={styles.subunitContainer}>
              <Text style={[styles.eventItem, styles.bold]}>
                {formatText(questionText)}
              </Text>
              <Text style={styles.instructions}>
                In your response you should do the following:{"\n"} • Respond to
                the prompt with a historically defensible thesis or claim that
                establishes a line of reasoning.{"\n"} • Describe a broader
                historical context relevant to the prompt.{"\n"} • Support an
                argument in response to the prompt using at least two pieces of
                specific and relevant evidence.{"\n"} • Use historical reasoning
                (e.g., comparison, causation, continuity or change over time) to
                frame or structure an argument that addresses the prompt.{"\n"}{" "}
                • Demonstrate a complex understanding of a historical
                development related to the{"\n"} • prompt through sophisticated
                argumentation and/or effective use of evidence.
              </Text>
            </View>
          </>
        )}
        data={[]}
        renderItem={null}
        contentContainerStyle={styles.scrollViewContent}
      />
    </SafeAreaView>
  );
};

export default function Tab1Stack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} />
          </Pressable>
        ),
        headerTitle: "",
        tabBarStyle: { display: "none" },
      }}
    >
      <Stack.Screen name="LEQSet3Main" component={LEQSet3Screen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    alignSelf: "flex-start",
    marginTop: 4,
    paddingLeft: 12,
  },
  title: {
    marginTop: 20,
    fontSize: 16, // smaller
    textAlign: "center",
    color: "#666",
    fontWeight: "400", // unbold
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  subtitle: {
    fontSize: 18, // bigger
    color: "#000",
    textAlign: "center",
    marginBottom: 16, // increased margin
    marginTop: 8, // increased margin
    fontWeight: "bold", // bold
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  subunitContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginHorizontal: 8,
  },
  subunitTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2a2a2a",
    marginBottom: 8,
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  eventItem: {
    fontSize: 15,
    color: "#555",
    marginBottom: 5,
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  bold: {
    fontWeight: "bold",
  },
  instructions: {
    fontSize: 15,
    color: "#444",
    marginTop: 10,
    marginBottom: 8,
    textAlign: "left",
    fontWeight: "400",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  backButton: {
    paddingHorizontal: 10,
  },
  unitButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
  },
  unitButtonActive: {
    backgroundColor: "#2a2a2a",
    borderColor: "#2a2a2a",
  },
  unitButtonText: {
    color: "#2a2a2a",
    fontSize: 14,
  },
  unitButtonTextActive: {
    color: "#fff",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginVertical: 10,
  },
});
