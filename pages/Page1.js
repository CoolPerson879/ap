import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Data for AP World History Modern units and events
const units = [
  {
    unit: "Unit 1: The Global Tapestry",
    dates: "1200-1450",
    style: 1,
    percentage: "8-10", // Add percentage value here
    events: [
      "Developments in Song China and Dar-al-Islam",
      "Kingdoms in South and Southeast Asia",
      "Developments in states in the Americas",
      "Developments in state-building in Africa",
      "Feudalism and developments in Europe and Japan",
    ],
  },
  {
    unit: "Unit 2: Networks of Exchange",
    dates: "1200-1450",
    style: 1,
    percentage: "8-10", // Add percentage value here
    events: [
      "Trade along networks of exchange",
      "The Silk Roads and the Mongol Empire",
      "Indian Ocean Trade Network",
      "Trans-Saharan Trade Network",
      "Cultures around the world changed with connection",
      "The spread of disease and migration of crops through networks of exchange",
    ],
  },
  {
    unit: "Unit 3: Land-Based Empires",
    dates: "1450-1750",
    style: 2,
    percentage: "12-15", // Add percentage value here
    events: [
      "Gunpowder Empires: Ottoman, Safavid, Mughal Empires - expanded with gunpowder weapons",
      "The consolidation and legitimization of power of Gunpowder Empires",
      "Changes in religion, Protestant Reformation, syncretic beliefs",
    ],
  },
  {
    unit: "Unit 4: Maritime Empires",
    dates: "1450-1750",
    style: 2,
    percentage: "12-15", // Add percentage value here
    events: [
      "Technological innovations allowed for maritime expansion",
      "The Columbian Exchange",
      "The effects of the Columbian Exchange, Atlantic System, Trans-Atlantic trade, Slave Trade",
      "New economic policies used by states",
    ],
  },
  {
    unit: "Unit 5: Revolutions",
    dates: "1750-1900",
    style: 3,
    percentage: "12-15", // Add percentage value here
    events: [
      "Enlightenment ideals challenged traditional values",
      "Nationalism led to independence movements",
      "American, Latin American, French and Haitian Revolutions",
      "The Industrial Revolution, causes and changes to hierarchies",
    ],
  },
  {
    unit: "Unit 6: Consequences of Industrialization",
    dates: "1750-1900",
    style: 3,
    percentage: "12-15", // Add percentage value here
    events: [
      "Rationales for imperialism",
      "State expansion and responses to expansion",
      "Economic development and economic imperialism",
      "Causes and effects of migration",
    ],
  },
  {
    unit: "Unit 7: Global Conflict",
    dates: "1900-present",
    style: 4,
    percentage: "8-10", // Add percentage value here
    events: [
      "Shifting of power",
      "Causes and effects of World War I",
      "Great Depression and the Interwar Period",
      "Causes and effects of World War II",
      "Mass atrocities committed",
    ],
  },
  {
    unit: "Unit 8: Cold War and Decolonization",
    dates: "1900-present",
    style: 4,
    percentage: "8-10", // Add percentage value here
    events: [
      "Causes and effects of the Cold War",
      "Spread and containment of communism",
      "Decolonization and state-building",
    ],
  },
  {
    unit: "Unit 9: Globalization",
    dates: "1900-present",
    style: 4,
    percentage: "8-10", // Add percentage value here
    events: [
      "Advancements in technology, Green Revolution",
      "Spread of disease in the globalized world",
      "Environmental effects of globalization",
      "Reform, resistance, and cultural effects of globalization",
      "World Bank, IMF",
      "The United Nations",
    ],
  },
];

export default function Page1() {
  const navigation = useNavigation();

  // Function to get the date badge style based on the unit's style value
  const getDateBadgeStyle = (style) => {
    switch (style) {
      case 1:
        return styles.dateBadge1;
      case 2:
        return styles.dateBadge2;
      case 3:
        return styles.dateBadge3;
      case 4:
        return styles.dateBadge4;
      default:
        return styles.dateBadge1; // Default to style 1
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={units}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => navigation.openDrawer()}
            >
              <Ionicons name="menu" size={28} />
            </TouchableOpacity>

            <Text style={styles.text}>Big Events by Unit</Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.unitContainer}>
            <Text style={styles.unitTitle}>{item.unit}</Text>
            <View style={styles.badgeContainer}>
              {/* Dynamically assign date badge style */}
              <View style={getDateBadgeStyle(item.style)}>
                <Text style={styles.dateText}>{item.dates}</Text>
              </View>

              {/* New percentage badge next to the date badge */}
              <View style={styles.percentageBadge}>
                <Text style={styles.percentageText}>{item.percentage}%</Text>
              </View>
            </View>
            {item.events.map((event, idx) => (
              <Text key={idx} style={styles.eventItem}>
                - {event}
              </Text>
            ))}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.scrollViewContent}
      />
    </SafeAreaView>
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
  text: {
    marginTop: 20, // Adjusted top margin to give space
    fontSize: 20, // Decreased font size of the title
    textAlign: "center",
    fontWeight: "bold",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  unitContainer: {
    marginBottom: 20,
    padding: 16, // Increased padding to ensure no content touches the screen edges
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginHorizontal: 8, // Added horizontal margin to prevent containers from touching edges
  },
  unitTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2a2a2a",
    marginBottom: 8, // Add space between title and date badge
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  badgeContainer: {
    flexDirection: "row", // Align date badge and percentage badge horizontally
    marginBottom: 10, // Space between badges and events
  },
  dateBadge1: {
    backgroundColor: "#af52de", // Bootstrap primary color
    borderRadius: 20, // Rounded corners for pill shape
    paddingVertical: 3, // Reduced padding to make it smaller
    paddingHorizontal: 8, // Reduced horizontal padding
    marginRight: 8, // Space between date badge and percentage badge
  },
  dateBadge2: {
    backgroundColor: "#28a745", // Bootstrap primary color
    borderRadius: 20, // Rounded corners for pill shape
    paddingVertical: 3, // Reduced padding to make it smaller
    paddingHorizontal: 8, // Reduced horizontal padding
    marginRight: 8, // Space between date badge and percentage badge
  },
  dateBadge3: {
    backgroundColor: "#ff3b30", // Bootstrap success color
    borderRadius: 20, // Rounded corners for pill shape
    paddingVertical: 3, // Reduced padding to make it smaller
    paddingHorizontal: 8, // Reduced horizontal padding
    marginRight: 8, // Space between date badge and percentage badge
  },
  dateBadge4: {
    backgroundColor: "#ffc107", // Bootstrap warning color
    borderRadius: 20, // Rounded corners for pill shape
    paddingVertical: 3, // Reduced padding to make it smaller
    paddingHorizontal: 8, // Reduced horizontal padding
    marginRight: 8, // Space between date badge and percentage badge
  },
  dateText: {
    color: "#fff", // White text color for contrast
    fontSize: 12, // Smaller font size for the date
    fontWeight: "bold",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  percentageBadge: {
    backgroundColor: "#007bff", // Primary blue color
    borderRadius: 20, // Rounded corners for pill shape
    paddingVertical: 3, // Padding inside the badge
    paddingHorizontal: 8, // Padding inside the badge
  },
  percentageText: {
    color: "#fff", // White text color for contrast
    fontSize: 12, // Smaller font size for the percentage
    fontWeight: "bold",
  },
  eventItem: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  scrollViewContent: {
    paddingBottom: 20, // Added padding at the bottom to avoid content sticking to the bottom
  },
});
