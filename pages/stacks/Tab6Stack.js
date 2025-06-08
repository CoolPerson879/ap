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

import { unit6Data } from "../unitdata";

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

const getBadgeColor = (text) => {
  const prefix = text.slice(0, 2);
  switch (prefix) {
    case "1.":
      return "#d048a8";
    case "2.":
      return "#5172aa";
    case "3.":
      return "#d57443";
    case "4.":
      return "#fcb71c";
    case "5.":
      return "#007780";
    case "6.":
      return "#e67b32";
    case "12":
      return "#af52de";
    case "14":
      return "#28a745";
    case "17":
      return "#ff3b30";
    case "19":
      return "#ffc107";
    default:
      return "#000";
  }
};

const Tab1Screen = () => {
  const navigation = useNavigation();
  const [selectedUnitIndex, setSelectedUnitIndex] = React.useState(0);

  const renderButtons = () => (
    <View style={styles.buttonRow}>
      {unit6Data.map((unit, index) => (
        <Pressable
          key={index}
          onPress={() => setSelectedUnitIndex(index)}
          style={[
            styles.unitButton,
            selectedUnitIndex === index && styles.unitButtonActive,
          ]}
        >
          <Text
            style={[
              styles.unitButtonText,
              selectedUnitIndex === index && styles.unitButtonTextActive,
            ]}
          >
            {unit.subunit.split(":")[0]}
          </Text>
        </Pressable>
      ))}
    </View>
  );

  const selectedUnit = unit6Data[selectedUnitIndex];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View style={styles.header}>
              <Text style={styles.title}>
                Unit 6: Consequences of {"\n"} Industrialization
              </Text>
              {renderButtons()}
            </View>
            <View style={styles.subunitContainer}>
              <Text style={styles.subunitTitle}>{selectedUnit.subunit}</Text>
              <View style={styles.badgeContainer}>
                {selectedUnit.badges?.map((badge, index) =>
                  // Pressable only if second char is "."
                  badge[1] === "." ? (
                    <Pressable
                      key={index}
                      onPress={() =>
                        navigation.getParent()?.navigate("Drawer", {
                          screen: "Themes and Historical Thinking Skills",
                        })
                      }
                      style={[
                        styles.badge,
                        { backgroundColor: getBadgeColor(badge) },
                      ]}
                    >
                      <Text style={styles.badgeText}>{badge}</Text>
                    </Pressable>
                  ) : (
                    <View
                      key={index}
                      style={[
                        styles.badge,
                        { backgroundColor: getBadgeColor(badge) },
                      ]}
                    >
                      <Text style={styles.badgeText}>{badge}</Text>
                    </View>
                  )
                )}
              </View>

              {selectedUnit.events.map((event, idx) =>
                event.subheading ? (
                  <Text key={idx} style={styles.subheading}>
                    {event.subheading}
                  </Text>
                ) : (
                  <Text
                    key={idx}
                    style={[
                      styles.eventItem,
                      { paddingLeft: event.indent ? event.indent * 16 : 0 },
                    ]}
                  >
                    - {formatText(event.text)}
                  </Text>
                )
              )}
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
      <Stack.Screen name="Tab1Main" component={Tab1Screen} />
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
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 10,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    marginRight: 4,
    marginBottom: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#2a2a2a",
    marginBottom: 8,
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  subheading: {
    fontSize: 16,
    color: "#000",
    marginTop: 10,
    marginBottom: 4,
    fontWeight: "600",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  eventItem: {
    fontSize: 16,
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
