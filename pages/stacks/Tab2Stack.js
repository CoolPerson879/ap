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
    subunit: "Unit 2.1: The Silk Roads",
    events: [
      {
        text: "**Silk Roads**: network of trade routes across Eurasia (pre-1200 to 1450)",
        indent: 0,
      },
      { text: "Mainly traded **luxury goods** like Chinese silk", indent: 1 },

      { subheading: "Causes for Expansion" },
      { text: "**Commercial innovations**:", indent: 1 },
      { text: "Money economy: **paper money**, credit", indent: 2 },
      {
        text: "**Flying money**, bill of exchange (early credit/check system)",
        indent: 2,
      },
      { text: "Rise of **banks** to support long-distance trade", indent: 2 },

      { text: "**Transportation innovations**:", indent: 1 },
      {
        text: "**Caravanserai**: roadside inns for rest and cultural exchange",
        indent: 2,
      },
      { text: "**Saddles** increased weight animals could carry", indent: 2 },
      { text: "Earlier Chinese innovations:", indent: 2 },
      {
        text: "**Compass**, **rudder**, and **junk ships** aided maritime trade",
        indent: 3,
      },

      {
        text: "**Mongol control** improved road safety and stability",
        indent: 1,
      },
      {
        text: "Reduced crime, punished theft, and improved infrastructure",
        indent: 2,
      },

      { subheading: "Effects of Growth" },
      { text: "**New trade cities/oases** emerged:", indent: 1 },
      {
        text: "**Kashgar**: western China, crossroads, fertile valley, diverse artisans and religions",
        indent: 2,
      },
      {
        text: "**Samarkand**: in present-day Uzbekistan, center for trade and culture",
        indent: 2,
      },

      {
        text: "**Increased demand** for luxury goods from China, Persia, India",
        indent: 1,
      },
      { text: "**Expanded iron/steel manufacturing** in China", indent: 2 },
      { text: "Promoted **proto-industrialization**", indent: 2 },
    ],
  },
  {
    subunit: "Unit 2.2: The Mongol Empire",
    events: [
      { subheading: "Rise of the Mongol Empire" },
      { text: "**Mongols**: pastoral nomads from the Gobi Desert", indent: 0 },
      {
        text: "**Temujin (Genghis Khan)**: built tribal alliances, elected khan in 1206",
        indent: 1,
      },
      { text: "Ruthless leader, unified Mongol tribes", indent: 2 },
      {
        text: "Conquered **Jin Empire** in 1210; by 1227 ruled from North China Sea to Persia",
        indent: 1,
      },
      {
        text: "Army: **skilled horsemen**, short bows, discipline, effective command",
        indent: 1,
      },
      {
        text: "**Pax Mongolica**: period of peace in 13th–14th c., organized and safe trade routes",
        indent: 1,
      },
      {
        text: "Built bridges, repaired roads, promoted communication",
        indent: 2,
      },
      { text: "**Religious tolerance** under Mongol rule", indent: 1 },
      {
        text: "**Yuan Dynasty** in China established by Kublai Khan (used Confucianism to legitimize rule)",
        indent: 1,
      },

      { subheading: "Technological and Cultural Transfers" },
      { text: "Valued **intellectuals and artisans**", indent: 1 },
      {
        text: "**Skilled individuals relocated** across empire to spread knowledge",
        indent: 2,
      },
      { text: "Transfers included:", indent: 1 },
      {
        text: "**Medical knowledge** (Greek/Islamic) to Western Europe",
        indent: 2,
      },
      { text: "Adoption of **Uyghur script**", indent: 2 },
      {
        text: "Facilitated **cultural diffusion** throughout Eurasia",
        indent: 1,
      },

      { subheading: "Long-Term Impact" },
      { text: "Largest **land empire** in history", indent: 1 },
      {
        text: "**Revived Silk Road** trade and connected Afro-Eurasia",
        indent: 1,
      },
      { text: "**Cultural exchange**:", indent: 1 },
      { text: "Islamic science to China, Chinese paper to Europe", indent: 2 },
      { text: "Islamic medicine and **Arabic numerals** to Europe", indent: 2 },
      {
        text: "Spread of **bubonic plague**, devastating global population",
        indent: 1,
      },
      {
        text: "Centralized power structures influenced future empires",
        indent: 1,
      },
      {
        text: "**Military innovations** ended knights and walled cities in Europe",
        indent: 1,
      },
      {
        text: "**Cannon** combined Chinese gunpowder, Muslim flamethrowers, European metalwork",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 2.3: Exchange in the Indian Ocean",
    events: [
      { subheading: "Indian Ocean Trade" },
      {
        text: "Sea-based trade network connecting Afro-Eurasian coastal states",
      },

      { subheading: "Causes of Expansion" },
      {
        text: "**Spread of Islam**: unified large regions through Dar al-Islam trade",
      },
      { text: "Increased demand for specialized goods:", indent: 1 },
      { text: "India: **fabrics**", indent: 2 },
      { text: "Malaysia/Indonesia: **spices** (Spice Islands)", indent: 2 },
      { text: "Swahili Coast: **slaves, ivory, gold**", indent: 2 },
      { text: "China: **silk, porcelain, tea**", indent: 2 },
      { text: "SW Asia: **horses, figs, dates**", indent: 2 },
      {
        text: "**Collapse of Mongol Empire** made Silk Roads less safe, boosting sea trade",
      },
      {
        text: "Commercial innovations: **money economy, credit systems**",
        indent: 1,
      },
      { text: "Transportation technologies:", indent: 1 },
      {
        text: "**Magnetic compass**, **astrolabe**, **lateen sail**, **monsoon wind knowledge**",
        indent: 2,
      },
      { text: "Improved ships (e.g., **Chinese junk**)", indent: 2 },

      { subheading: "Effects of Expansion" },
      {
        text: "**Diasporic communities** formed across trade routes",
        indent: 0,
      },
      { text: "**Growth of trade cities** and states:", indent: 0 },
      {
        text: "Swahili city-states, **Malacca**, **Gujarat**, **Great Zimbabwe**",
        indent: 1,
      },

      { subheading: "Cultural and Technological Transfers" },
      {
        text: "**Increased exchange** of knowledge, commerce, technology, and religion",
      },
      { text: "**Zheng He**: Chinese explorer in Indian Ocean", indent: 1 },
      { text: "Opened new markets, brought exotic goods to China", indent: 2 },
      {
        text: "**Controversial** to Confucians who viewed it as wasteful",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 2.4: Trans-Saharan Trade Routes",
    events: [
      { subheading: "Overview" },
      {
        text: "Trade network that connected North Africa and the Mediterranean to Sub-Saharan Africa",
      },

      { subheading: "Causes of Expansion" },
      {
        text: "Use of **saddles**: Enabled long-distance travel and heavier loads",
      },
      { text: "**Caravanserai**: Provided shelter and safety" },
      { text: "Improved transportation made the network larger by 1200" },

      { subheading: "Comparison of Pack Animals" },
      {
        text: "**Camel** (North/Sub-Saharan Africa): Long-distance, desert-capable, carries 600 lbs; drawbacks: salt-dependence, aggressive, hard to manage",
      },
      {
        text: "**Ox** (Eurasia, Americas): Strong, reliable, climate-tolerant; drawbacks: slow, high resource needs",
      },
      {
        text: "**Horse** (Worldwide): Fast, battle-useful; drawbacks: high maintenance, heat-sensitive, easily spooked/stolen",
      },
      {
        text: "**Llama** (Americas): Good in mountains, low water needs; drawbacks: low load capacity, heat-intolerant",
      },

      { subheading: "Major Goods Traded" },
      { text: "1. Gold" },
      { text: "2. Kola nuts (stimulant, addictive with coffee)" },
      { text: "3. Horses" },
      { text: "4. Salt" },
      { text: "Regional specialization created demand and drove expansion" },

      { subheading: "Growth of West African Empires" },
      {
        text: "**Mali Empire**: Converted to Islam (~1200), wealth from gold and Islamic trade connections",
      },
      {
        text: "**Mansa Musa**: 14th century Mali ruler, richest person in history, destabilized Egyptian gold economy during Mecca pilgrimage",
      },
    ],
  },
  {
    subunit: "Unit 2.5: Cultural Consequences of Connectivity",
    events: [
      { subheading: "Religious, Cultural & Technological Effects" },
      {
        text: "**Neo-Confucianism**: Combined Confucianism with Buddhist and Daoist ideas",
      },
      { text: "Buddhism explained to Chinese via Daoist terms" },
      {
        text: "Spread of **Hinduism**, **Buddhism**, and **Islam** through trade",
      },
      {
        text: "Tech innovations: Lateen sail, stern rudder, astrolabe, magnetic compass",
      },

      { subheading: "Transfers of Knowledge" },
      {
        text: "**Literary/Artistic**: House of Wisdom → inspired European Renaissance",
      },
      {
        text: "**Scientific/Tech**: Papermaking, movable type (increased literacy), gunpowder",
      },

      { subheading: "Trade Cities" },
      { text: "**Growing cities**: Due to wealth from trade" },
      {
        text: "**Hangzhou**: Urbanized, on Grand Canal, diasporic communities",
      },
      { text: "**Samarkand** & **Kashgar**: Cultural/trade centers" },
      { text: "**Declining cities**:" },
      { text: "**Constantinople**: Crusades, fell to Ottomans (1453)" },
      { text: "**Kashgar**: Invaded by nomads" },
      { text: "**Baghdad**: Attacked by Mongols and neighbors" },

      { subheading: "Factors in City Growth vs. Decline" },
      {
        text: "**Growth**: Political stability, safe transport, commerce, labor, farming",
      },
      { text: "**Decline**: Instability, invasions, plague, agri decline" },

      { subheading: "Travellers" },
      {
        text: "**Marco Polo**: Venetian, visited Kublai Khan's court, wrote about China & Indian Ocean",
      },
      {
        text: "**Ibn Battuta**: Moroccan Muslim scholar, traveled 30 yrs in Dar al-Islam, shared detailed accounts",
      },
      {
        text: "**Margery Kempe**: Christian mystic, dictated autobiography, pilgrimaged across Europe/Middle East",
      },
    ],
  },
  {
    subunit: "Unit 2.6: Environmental Consequences of Connectivity",
    events: [
      { subheading: "Agricultural Effects of Exchange Networks" },
      { text: "**Migration of Crops**", indent: 1 },
      { text: "**Champa Rice**", indent: 2 },
      { text: "Tribute from Hindu Champa Kingdom to China", indent: 3 },
      { text: "Drought- and flood-resistant; 2 crops/year", indent: 3 },
      { text: "Helped Chinese population growth", indent: 3 },

      { text: "**Bananas**", indent: 2 },
      { text: "From SE Asia to Sub-Saharan Africa", indent: 3 },
      { text: "Nutritionally rich → population spike", indent: 3 },

      { text: "**Cotton, Sugar, Citrus Crops**", indent: 2 },
      { text: "Spread by Arabs beyond Arabian Peninsula", indent: 3 },

      { subheading: "Environmental Degradation" },
      { text: "**Overgrazing**", indent: 1 },
      {
        text: "Example: outside Great Zimbabwe → city abandonment due to decreased crop yield",
        indent: 2,
      },

      { text: "**Deforestation**", indent: 1 },
      { text: "Example: feudal Europe", indent: 2 },
      { text: "Leads to soil erosion due to unanchored roots", indent: 2 },
      { text: "Reduces agricultural productivity and nutrients", indent: 3 },

      { subheading: "Diffusion of Diseases" },
      { text: "**Bubonic Plague**", indent: 1 },
      { text: "Spread by fleas via trade routes and caravanserai", indent: 2 },
      {
        text: "Killed 1/3 of European population, 25 million in Asia",
        indent: 2,
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

const Tab2Screen = () => {
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
              <Text style={styles.title}>Unit 2: Networks of Exchange</Text>
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

export default function Tab2Stack() {
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
      <Stack.Screen name="Tab1Main" component={Tab2Screen} />
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
