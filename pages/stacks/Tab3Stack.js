import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const unit1Data = [
  {
    subunit: "Unit 3.1: European, East Asian and Gunpowder Empires Expand",
    events: [
      { subheading: "Europe" },
      { text: "Medieval period ends, early modern period begins", indent: 1 },
      {
        text: "**Gutenberg printing press** invented → literacy rates increase",
        indent: 1,
      },
      {
        text: "Monarchies formed: centralized power, controlled taxes, army, religion",
        indent: 1,
      },
      { text: "Bureaucracies increased", indent: 1 },
      { text: "Middle class grew", indent: 1 },

      { subheading: "Russia" },
      {
        text: "**Ivan IV (Ivan the Terrible)** expanded Russian borders east to Pacific",
        indent: 1,
      },
      {
        text: "Hired **Cossacks** (peasant warriors) to control Volga River",
        indent: 2,
      },

      { subheading: "East Asia" },
      {
        text: "Mongol-led **Yuan Dynasty** overthrown by **Ming Dynasty**",
        indent: 1,
      },
      { text: "Ming stabilized East Asia for 300 years", indent: 1 },
      {
        text: "17th century: Ming fracturing → **Manchu** create **Qing Dynasty**",
        indent: 1,
      },

      { text: "**Emperor Kangxi**", indent: 1 },
      { text: "Longest-reigning emperor", indent: 2 },
      { text: "Incorporated Taiwan, Mongolia, Central Asia", indent: 2 },
      { text: "Made Tibet a protectorate", indent: 2 },

      { text: "**Emperor Qianlong**", indent: 1 },
      { text: "Incorporated Xinjiang; caused mass killings", indent: 2 },
      {
        text: "Installed Dalai Lama in Tibet; forced local Nepalese submission",
        indent: 2,
      },
      {
        text: "Unsuccessful campaigns in Burma and Vietnam; led to debt",
        indent: 2,
      },
      { text: "Allowed limited European trade in Guangzhou", indent: 2 },
      { text: "Corrupt bureaucracy → high taxes", indent: 2 },
      {
        text: "White Lotus Rebellion: peasants opposing taxes and seeking Ming restoration",
        indent: 2,
      },

      { subheading: "Rise of Islamic Gunpowder Empires" },
      { text: "Ottoman, Safavid, Mughal Empires similar:", indent: 1 },
      {
        text: "Descended from Turkic nomads; spoke Turkic language",
        indent: 2,
      },
      { text: "Exploited Mongol power vacuums", indent: 2 },
      { text: "Relied on **gunpowder weapons**", indent: 2 },

      { text: "**Gunpowder Empires**", indent: 1 },
      { text: "Land-based, expanding geographically", indent: 2 },
      { text: "Expansion driven by adoption of gunpowder", indent: 2 },

      { subheading: "Ottoman Empire" },
      { text: "Conquered Constantinople, ended Byzantine Empire", indent: 1 },
      { text: "Expanded into southeast Europe", indent: 1 },
      { text: "Founded 1300s, lasted until 1918", indent: 1 },

      { subheading: "Safavid Empire" },
      { text: "Iran and Persia region", indent: 1 },
      {
        text: "Shia Muslim → conflict with Ottoman and Mughal (Sunni)",
        indent: 1,
      },
      { text: "Fought over trade routes", indent: 1 },

      { subheading: "Mughal India" },
      {
        text: "**Akbar**: masterful administrator → most prosperous empire",
        indent: 1,
      },
      { text: "Used gunpowder to expand", indent: 1 },

      { subheading: "Decline of Gunpowder Empires" },
      { text: "Western Europe grew stronger", indent: 1 },
      { text: "Gunpowder Empires failed to modernize", indent: 1 },
      { text: "Religious and territorial conflicts", indent: 1 },

      { text: "**Ottoman Decline:**", indent: 1 },
      { text: "Weak sultans, stronger European neighbors", indent: 2 },
      { text: "Harem politics: heirs promoted by wives", indent: 2 },
      { text: "World War I", indent: 2 },

      { text: "**Safavid Decline:**", indent: 1 },
      { text: "Lavish lifestyles, military spending", indent: 2 },
      { text: "Rebellions by Afghan forces", indent: 2 },
      { text: "Ottomans and Russians seized land", indent: 2 },

      { text: "**Mughal Decline:**", indent: 1 },
      { text: "Corruption", indent: 2 },
      {
        text: "Overexpansion and anti-Hindu policies drained treasury",
        indent: 2,
      },
      { text: "Rebellions", indent: 2 },
      { text: "British Empire influence", indent: 2 },
    ],
  },
  {
    subunit: "Unit 3.2: Administration of Land Based Empires",
    events: [
      {
        text: "**Legitimizing Power:** methods rulers use to justify their rule",
        indent: 0,
      },
      {
        text: "**Consolidating Power:** measures rulers use to claim power from others",
        indent: 0,
      },

      { subheading: "Centralizing Control in Europe" },
      { text: "**Divine Right of Kings**: rule given by God", indent: 1 },
      { text: "Used in England", indent: 2 },
      { text: "**Louis XIV**: absolutist", indent: 1 },
      { text: "Declared himself the state", indent: 2 },
      { text: "Controlled lawmaking and justice", indent: 2 },
      { text: "Weakened France → led to French Revolution", indent: 2 },

      { subheading: "Reigning in Control of Russian Empire" },
      { text: "**Boyars**: noble landowners", indent: 1 },
      { text: "**Serfs**: feudal peasants", indent: 1 },
      { text: "Tensions/conflicts between Ivan IV and Boyars", indent: 1 },
      { text: "**Peter the Great**", indent: 1 },

      { subheading: "Bureaucracies and Administration" },
      { text: "Large Imperial Bureaucracies", indent: 1 },
      {
        text: "**Devshirme System**: Ottoman system staffing bureaucracy with enslaved or Christian trained individuals",
        indent: 2,
      },
      { text: "Military Expansion: hired elite professionals", indent: 1 },

      {
        text: "**Religious ideas, art, monumental architecture** to legitimize power:",
        indent: 1,
      },
      {
        text: "Europe: Divine Right of Kings",
        indent: 2,
      },
      {
        text: "God given right to rule",
        indent: 4,
      },
      { text: "Qing Dynasty: Imperial Paintings", indent: 2 },
      { text: "Inca: Sun Temple and divine monarch status", indent: 2 },
      { text: "France: Palace of Versailles", indent: 2 },

      { text: "Innovations in tax collection", indent: 1 },
      {
        text: "**Zamindar System**: elite landowners taxed peasants (Mughal Empire)",
        indent: 2,
      },
      {
        text: "**Tax Farming**: Ottoman practice of selling tax rights to highest bidder",
        indent: 2,
      },
    ],
  },

  {
    subunit: "Unit 3.3: Belief Systems in Empires",
    events: [
      { subheading: "Catholic Church" },
      {
        text: "Church Corruption:",
        indent: 1,
      },
      {
        text: "**Sale of Indulgences** (pay to remove sins)",
        indent: 2,
      },
      {
        text: "**Simony** (act of buying into church positions)",
        indent: 2,
      },
      {
        text: "Corruption led to reform through the **Protestant Reformation** by Martin Luther, creating **Lutheranism**, a new branch of Christianity",
        indent: 1,
      },
      {
        text: "Catholics acted to fix corruption to stop the spread of Lutheranism",
        indent: 1,
      },

      { subheading: "Islam" },
      {
        text: "**Shah Ismail** declared Safavid Empire Shia, causing conflict with Sunni empires",
        indent: 1,
      },

      { subheading: "Ottoman, Safavid, Mughal Empires Religion" },
      {
        text: "**Ottoman:** mostly Sunni, some tolerance under Suleiman; less tolerance later",
        indent: 1,
      },
      {
        text: "**Safavid:** mostly Shia, no tolerance; Ismail I forced Sunni conversion",
        indent: 1,
      },
      {
        text: "**Mughal:** Akbar tolerant, blended Islam-Hinduism (syncretism), land grants to Hindus & Sikhs",
        indent: 1,
      },
    ],
  },
];

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

const Tab3Screen = () => {
  const navigation = useNavigation();
  const [selectedUnitIndex, setSelectedUnitIndex] = React.useState(0);

  const renderButtons = () => (
    <View style={styles.buttonRow}>
      {unit1Data.map((unit, index) => (
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

  const selectedUnit = unit1Data[selectedUnitIndex];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View style={styles.header}>
              <Text style={styles.title}>Unit 3: Land-Based Empires</Text>
              {renderButtons()}
            </View>
            <View style={styles.subunitContainer}>
              <Text style={styles.subunitTitle}>{selectedUnit.subunit}</Text>
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

export default function Tab3Stack() {
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
      <Stack.Screen name="Tab1Main" component={Tab3Screen} />
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
  indented: {
    paddingLeft: 16,
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
