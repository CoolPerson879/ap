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
    subunit: "Unit 4.1: Technological Innovations",
    events: [
      { text: "**Developments of Transoceanic Travel and Trade**", indent: 0 },

      { subheading: "Adopted Maritime Technologies" },
      {
        text: "**Magnetic Compass** — developed in China; helped navigate seas",
        indent: 1,
      },
      {
        text: "**Astrolabe** — determined latitude and longitude using stars",
        indent: 1,
      },
      {
        text: "**Lateen Sail** — triangular sail enabling faster transport",
        indent: 1,
      },
      {
        text: "**Astronomical Charts and Cartography** — improved navigation",
        indent: 1,
      },

      { subheading: "European Innovations in Shipbuilding" },
      {
        text: "**Caravel (Portuguese)** — small, nimble, highly navigable",
        indent: 1,
      },
      {
        text: "**Carrack (Portuguese)** — large, trade-focused, could carry cannons",
        indent: 1,
      },
      {
        text: "**Fluyt (Dutch)** — designed for trade, large cargo, small crews",
        indent: 1,
      },

      { subheading: "Long-Term Results" },
      { text: "**Strengthened navies**", indent: 1 },
      { text: "**Spread of Islam**", indent: 1 },
      { text: "**Rise of sea piracy**", indent: 1 },
      { text: "**Expansion of exploration and trade**", indent: 1 },
      { text: "**Helped Russia observe other nations**", indent: 1 },
    ],
  },
  {
    subunit: "Unit 4.2: Causes and Events of Exploration",
    events: [
      { text: "**Role of States in Maritime Exploration**", indent: 0 },

      { subheading: "Motivations" },
      { text: "**God**: spread Christianity", indent: 1 },
      { text: "**Gold**: increase revenue from taxes and trade", indent: 1 },
      { text: "**Glory**: gain territory and outcompete rivals", indent: 1 },
      {
        text: "**Spices**: especially pepper, highly sought after",
        indent: 1,
      },
      {
        text: "**Mercantilism**: export more than import; wealth = power",
        indent: 1,
      },
      {
        text: "Required **state-sponsored** exploration due to high costs",
        indent: 1,
      },

      { subheading: "State Action" },
      {
        text: "**European monarchs** built militaries using gunpowder and improved tax systems",
        indent: 1,
      },

      { subheading: "Portuguese Motivations" },
      { text: "**Technology**: caravel, carrack", indent: 1 },
      { text: "**Economics**: wanted trans-Saharan gold", indent: 1 },
      { text: "**Religion**: spread Christianity", indent: 1 },
      {
        text: "**Trading posts**: self-sufficient posts to facilitate commerce",
        indent: 1,
      },

      { subheading: "Expansion of European Maritime Exploration" },

      { text: "**Portuguese**", indent: 1 },
      {
        text: "**Prince Henry the Navigator**: sponsored early voyages",
        indent: 2,
      },
      {
        text: "**Bartholomew Diaz**: rounded southern tip of Africa",
        indent: 2,
      },
      {
        text: "**Vasco da Gama**: reached India, claimed land for Portugal",
        indent: 2,
      },
      { text: "Established a **factory in Malacca**", indent: 2 },

      { text: "**Spain**", indent: 1 },
      {
        text: "**Christopher Columbus**: sponsored by Spain, reached the Americas",
        indent: 2,
      },
      {
        text: "**Magellan**: reached the Philippines, circumnavigated the world",
        indent: 2,
      },
      { text: "**Manila** became a major Spanish trading city", indent: 2 },

      {
        text: "Spanish/Portuguese success led **France, the Dutch, and England** to join global trade",
        indent: 1,
      },
    ],
  },
  {
    subunit: "Unit 4.3: Columbian Exchange",
    events: [
      { text: "**Columbian Exchange**", indent: 0 },
      {
        text: "Routes of exchange between the **New World** and **Old World** involving goods, slaves, animals, and diseases",
        indent: 1,
      },

      { subheading: "Diseases and Population Catastrophes" },
      { text: "**Smallpox** brought by Spanish conquistadors", indent: 1 },
      {
        text: "**Afro-Eurasians** were immune due to long-term exposure",
        indent: 2,
      },
      {
        text: "**Indigenous Americans** lacked immunity, causing major death tolls",
        indent: 2,
      },
      { text: "Native population declined by over 50%", indent: 2 },

      { subheading: "Animals and Foods" },
      {
        text: "Europeans brought **horses, pork, beef, and cheese**",
        indent: 1,
      },
      {
        text: "**Horses** transformed Native hunting (e.g. buffalo) and warfare",
        indent: 2,
      },
      {
        text: "Competition for food led to intertribal conflicts",
        indent: 2,
      },
      {
        text: "Europeans took back **maize, cacao, potatoes, tomatoes, beans, peppers**",
        indent: 1,
      },
      {
        text: "Caused **population growth** in Europe in the 16th-17th centuries",
        indent: 2,
      },

      { subheading: "Cash Crops and Forced Labor" },
      { text: "**Africans enslaved** and brought to the Americas", indent: 1 },
      { text: "Brought cultural foods like **okra** and **rice**", indent: 2 },
      {
        text: "**Sugarcane** cultivated in the Americas' ideal climate",
        indent: 1,
      },
      {
        text: "**Transatlantic Slave Trade** — forced movement of Africans across the Atlantic",
        indent: 1,
      },
      {
        text: "Spanish/Portuguese profited from **cash crops** like tobacco and sugar",
        indent: 1,
      },
      { text: "**Sugar** generated more wealth than silver", indent: 2 },
    ],
  },
  {
    subunit: "Unit 4.4: Maritime Empires Link Regions",
    events: [
      { subheading: "State-Building and Empire Expansion" },
      { text: "**Trading Posts in Africa and Asia**", indent: 1 },
      { text: "African States", indent: 2 },
      {
        text: "Some states like **Benin** viewed Europeans as intruders, harming their state",
        indent: 3,
      },
      {
        text: "**Portuguese** took Mombasa and other Indian Ocean trading city-states, causing decline",
        indent: 3,
      },
      { text: "Other states grew from trading posts", indent: 3 },
      {
        text: "**Asante Empire** and **Kongo** expanded via trade on the **Trans-Atlantic slave trade**",
        indent: 3,
      },
      { text: "Japan", indent: 2 },
      { text: "Initially allowed Portuguese and Dutch", indent: 3 },
      {
        text: "Missionaries converted many, destroyed Buddhist shrines",
        indent: 3,
      },
      {
        text: "Led to Japan closing trade except with some Dutch merchants, remained isolated for the until the 19th century",
        indent: 3,
      },
      { text: "China", indent: 2 },
      {
        text: "After Zheng He, Ming restricted foreign trade and influence",
        indent: 3,
      },
      {
        text: "Later reversed restrictions from losing to the British in the Opium Wars",
        indent: 3,
      },

      { subheading: "European Rivalries on Five Continents" },
      { text: "Trading posts and trade companies spread globally", indent: 1 },
      { text: "Europeans in the Americas", indent: 1 },
      {
        text: "Diseases and military caused Native population decline",
        indent: 2,
      },
      {
        text: "**Spain** overthrew the Aztec and Inca, forming New Spain",
        indent: 2,
      },
      {
        text: "Spain and Portugal divided the Americas via the Treaty of Tordesillas",
        indent: 2,
      },
      {
        text: "France and Britain fought for North American dominance",
        indent: 2,
      },
      {
        text: "**French and Indian War:** Britain defeated France and Iroquois, expelled France from India and Canada",
        indent: 3,
      },

      { subheading: "Continuity and Change in Economic Systems" },
      {
        text: "Despite Portuguese attempts to end Indian Ocean Trade, merchants continued",
        indent: 1,
      },
      {
        text: "Spanish used a form of Incan **mit'a** system for coerced labor to extract silver",
        indent: 1,
      },

      { subheading: "Continuity and Change in Labor Systems" },
      {
        text: "Spanish **encomienda system**: brutal coerced native labor",
        indent: 1,
      },
      {
        text: "**Hacienda system**: large private agricultural estates",
        indent: 1,
      },

      { subheading: "Demographic, Social, Cultural Changes" },
      { text: "For Africans:", indent: 1 },
      { text: "Disrupted societies; families separated", indent: 2 },
      {
        text: "More men than women taken, increasing **polygamy**",
        indent: 2,
      },
      { text: "In Americas:", indent: 1 },
      { text: "African cultures influenced local cultures", indent: 2 },
      {
        text: "Ethnic mixing created multiracial groups: **mestizos** and **mulattoes**",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 4.5: Maritime Empires Develop",
    events: [
      { text: "**Economic Strategies**", indent: 0 },
      {
        text: "Entrepreneurs accumulated more **capital** through long-distance trade",
        indent: 1,
      },
      {
        text: "**Commercial Revolution**: shift to trade-based economy using gold/silver",
        indent: 1,
      },
      { text: "Caused by:", indent: 2 },
      { text: "Development of **European overseas colonies**", indent: 3 },
      { text: "Opening of **new trade routes**", indent: 3 },
      { text: "**Population growth**", indent: 3 },
      { text: "**Inflation** due to:", indent: 3 },
      { text: "Increased population pressure", indent: 4 },
      { text: "High **interest rates**", indent: 4 },
      {
        text: "Influx of **gold and silver** from the Western Hemisphere",
        indent: 4,
      },
      {
        text: "**Price Revolution**: 16th-17th century high inflation period",
        indent: 3,
      },

      { subheading: "Joint-Stock Companies" },
      { text: "Owned by **investors** who bought stock/shares", indent: 1 },
      { text: "Shared **profits and losses**", indent: 1 },
      { text: "**Limited liability** made investing safer", indent: 1 },
      { text: "Examples:", indent: 2 },
      { text: "**British East India Company**", indent: 3 },
      { text: "**Dutch East India Company**", indent: 3 },
      {
        text: "Spain and Portugal: **government** funded most exploration",
        indent: 1,
      },
      {
        text: "**Joint-stock companies** helped drive empire development",
        indent: 1,
      },

      { subheading: "Triangular Trade and Labor" },
      {
        text: "**Need for labor** and slave trade on African coasts led to **Triangular Trade**",
        indent: 1,
      },
      {
        text: "**Columbian Exchange**: goods, slaves, and diseases traded",
        indent: 2,
      },
      {
        text: "**Triangular Trade**: movement of those goods across Atlantic routes",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 4.6: Internal and External Challenges to State Power",
    events: [
      { text: "**Portugal**", indent: 0 },
      {
        text: "**External**: Dutch and English pushed Portugal out of South Asia",
        indent: 1,
      },
      {
        text: "**External**: **Ana Nzinga’s rebellion in Ndongo**, allied with Dutch",
        indent: 1,
      },

      { text: "**France**", indent: 0 },
      {
        text: "**Internal**: Fronde - civil disturbances against royal power",
        indent: 1,
      },

      { text: "**Russia**", indent: 0 },
      { text: "**Internal**: Cossack rebellion", indent: 1 },
      { text: "**Internal**: Pugachev rebellion", indent: 1 },

      { text: "**South Asia**", indent: 0 },
      { text: "**Internal**: Hindu Marathas ended Mughal rule", indent: 1 },

      { text: "**Spanish Empire**", indent: 0 },
      {
        text: "**Internal to colonies**: Pueblo and Apache rebellions in present-day New Mexico",
        indent: 1,
      },

      { text: "**British Empire**", indent: 0 },
      { text: "**Internal to colonies**: Maroon wars", indent: 1 },
      {
        text: "**Internal to colonies**: Gloucester County Rebellion",
        indent: 1,
      },
      { text: "**Internal to colonies**: Metacom’s War", indent: 1 },
      { text: "**Internal**: **Glorious Revolution**", indent: 1 },
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
              <Text style={styles.title}>
                Unit 4: Transoceanic Interconnections
              </Text>
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
