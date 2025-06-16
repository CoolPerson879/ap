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

import { DBQ1 } from "../DBQData";

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

const DBQSet1Screen = () => {
  const navigation = useNavigation();
  const [selectedDocIndex, setSelectedDocIndex] = React.useState(0);

  const renderButtons = () => (
    <View style={styles.buttonRow}>
      {DBQ1.map((doc, index) => (
        <Pressable
          key={index}
          onPress={() => setSelectedDocIndex(index)}
          style={[
            styles.unitButton,
            selectedDocIndex === index && styles.unitButtonActive,
          ]}
        >
          <Text
            style={[
              styles.unitButtonText,
              selectedDocIndex === index && styles.unitButtonTextActive,
            ]}
          >
            Document {doc.id}
          </Text>
        </Pressable>
      ))}
    </View>
  );

  const selectedDoc = DBQ1[selectedDocIndex];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View style={styles.header}>
              <Text style={styles.title}>DBQ Set 1 (AP 2006)</Text>
              <Text style={styles.subtitle}>
                Evaluate the extent to which the silver trade affected Chinese
                societies in the period circa 1500-1750
              </Text>
              {renderButtons()}
            </View>
            <View style={styles.subunitContainer}>
              <Text style={styles.subunitTitle}>{selectedDoc.source}</Text>
              <Text style={styles.eventItem}>
                {formatText(selectedDoc.content)}
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
      <Stack.Screen name="DBQSet1Main" component={DBQSet1Screen} />
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
    paddingLeft: 20,
    paddingRight: 20,
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
    backgroundColor: "#b062b3",
    borderColor: "#b062b3",
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
