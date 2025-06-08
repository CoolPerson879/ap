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

const unit1Data = [
  {
    subunit: "Unit 1.1: Developments in East Asia",
    badges: ["1.1", "2.2", "5.5", "1500-present"],
    events: [
      { text: "**Confucianism**", indent: 0 },
      {
        text: "Taught that human society is **hierarchical** by nature",
        indent: 1,
      },
      {
        text: "Revived in the **Tang/Song Dynasties** as **Neo-Confucianism**",
        indent: 1,
      },

      { subheading: "Government Developments in Song China" },
      {
        text: "Song Dynasty replaced the Tang in **960 CE**, ruled much of China",
        indent: 1,
      },
      {
        text: "**Imperial Bureaucracy**: system of officials enforcing imperial policy",
        indent: 1,
      },
      {
        text: "Officials selected through **civil service exam** based on Confucian texts",
        indent: 2,
      },
      {
        text: "**Meritocracy** allowed upward mobility for lower classes",
        indent: 2,
      },
      {
        text: "Bureaucracy became too large and contributed to decline",
        indent: 2,
      },

      { subheading: "Economic Developments" },
      {
        text: "**Grand Canal**: improved internal trade and made China a major trading region",
        indent: 1,
      },
      { text: "First to use **gunpowder** in weapons", indent: 1 },
      {
        text: "**Champa Rice** from Vietnam boosted agriculture and led to population growth",
        indent: 1,
      },
      {
        text: "Engaged in **proto-industrialization**: artisan surplus production",
        indent: 1,
      },
      {
        text: "Switched public projects to **paid labor**, promoting economic activity",
        indent: 1,
      },
      {
        text: "**Tribute system**: other states sent gifts to the emperor",
        indent: 1,
      },
      { text: "Reinforced China's view as the **Middle Kingdom**", indent: 2 },

      { subheading: "Social Structures" },
      {
        text: "**Foot binding**: symbol of status, limited mobility",
        indent: 1,
      },
      {
        text: "**Filial piety**: Confucian respect for elders and ancestors",
        indent: 1,
      },

      { subheading: "Religious Diversity" },
      { text: "**Buddhism** from India", indent: 1 },
      {
        text: "Core beliefs: **Four Noble Truths** and **Eightfold Path**",
        indent: 2,
      },
      { text: "Forms:", indent: 2 },
      {
        text: "**Theravada** - focus on meditation, Southeast Asia",
        indent: 3,
      },
      {
        text: "**Mahayana** - spiritual growth for all, China and Korea",
        indent: 3,
      },
      { text: "**Tibetan** - focus on chanting, Tibet", indent: 3 },
      { text: "**Daoism**: harmony with nature, also influential", indent: 1 },
    ],
  },
  {
    subunit: "Unit 1.2: Developments in Dar-al-Islam",
    events: [
      { text: "**Dar-al-Islam**", indent: 0 },
      {
        text: "Means the house of Islam, refers to the regions where Islam is prevalent",
        indent: 1,
      },
      { subheading: "Shifts in Global Power" },
      { text: "**Abbasid Caliphate**", indent: 1 },
      { text: "Ethnically Arab Empire", indent: 2 },
      { text: "In power during the golden age of Islam (900-1200)", indent: 2 },
      { text: "Invaded by:", indent: 2 },
      { text: "**Mamluk Sultanate**", indent: 3 },
      {
        text: "Enslaved Turkic warriors from Central Asia, relocated to Egypt",
        indent: 4,
      },
      { text: "Overthrew the Egyptians to create a new state", indent: 4 },
      { text: "**Seljuk Turks**", indent: 3 },
      { text: "Central Asian Turkic Muslims", indent: 4 },
      { text: "Started conquering parts of the Middle East", indent: 4 },
      {
        text: "Seljuk leader was a sultan (turkic), not a caliph (arab)",
        indent: 4,
      },
      { text: "**Crusaders**", indent: 3 },
      {
        text: "European Christians who attacked to get access to holy land",
        indent: 4,
      },
      { text: "**Mongols**", indent: 3 },
      {
        text: "Conquered the remaining Abbasid Empire, making it fall",
        indent: 4,
      },
      {
        text: "From the time of Muhammad to the fall of the Abbasid Caliphate, Islamic empires were mostly Arab",
        indent: 2,
      },
      {
        text: "However, Turkic Muslims took power in this time period",
        indent: 2,
      },
      { subheading: "Turkic Empires" },
      { text: "Seljuk Empire", indent: 1 },
      { text: "Mamluk Empire", indent: 1 },
      { text: "Delhi Sultanate", indent: 1 },
      { subheading: "Innovation and Cultural/Social Life" },
      { text: "Continuity in Muslim Empires", indent: 1 },
      { text: "Military in charge of administration", indent: 2 },
      { text: "Implemented Sharia law", indent: 2 },
      { text: "Translated Greek literature into Arabic", indent: 2 },
      {
        text: "Studies mathematics from India and transferred the knowledge to Europeans",
        indent: 2,
      },
      { text: "Adopted papermaking from China", indent: 2 },
      { subheading: "Innovations" },
      { text: "Mathematics", indent: 1 },
      { text: "Trigonometry was created", indent: 2 },
      { text: "Medical advancements", indent: 1 },
      { text: "Astronomy advancements", indent: 1 },
      { text: "House of Wisdom", indent: 1 },
      {
        text: "Library in Baghdad that facilitated the transfer of knowledge",
        indent: 2,
      },
      { text: "Led to the Renaissance in Europe", indent: 2 },
      { subheading: "How Islam Spread" },
      { text: "Military Expansion", indent: 1 },
      { text: "Delhi Sultanate", indent: 2 },
      { text: "Merchant Activity", indent: 1 },
      { text: "States in Trans-Saharan Trade", indent: 2 },
      { text: "Muslim Missionaries", indent: 1 },
      { text: "Sufis", indent: 2 },
      { text: "Emphasized mysticism", indent: 3 },
      { text: "Tended to adopt to local cultures and traditions", indent: 3 },
      { subheading: "Slavery" },
      {
        text: "Prohibited trade on Christians/Muslims/Zoroastrians",
        indent: 1,
      },
      { subheading: "Role of Women" },
      { text: "Had more freedom than other religions", indent: 1 },
      {
        text: "Were able to inherit property and retain ownership after marriage",
        indent: 1,
      },
      { text: "Could remarry", indent: 1 },
      { subheading: "Spain" },
      {
        text: "Was controlled by the **Umayyad Caliphate** at this time",
        indent: 1,
      },
      { text: "Center of learning", indent: 1 },
      { text: "Religious tolerance", indent: 1 },
    ],
  },
  {
    subunit: "Unit 1.3: Developments in South and Southeast Asia",
    events: [
      { text: "**Belief Systems**", indent: 0 },
      { text: "**Hinduism**", indent: 1 },
      { text: "Polytheistic belief system", indent: 2 },
      { text: "Ultimate goal: reunite soul with **Brahman**", indent: 2 },
      { text: "Achieved through **reincarnation**", indent: 3 },
      { text: "Unified Indian culture via **caste system**", indent: 2 },
      { text: "**Buddhism**", indent: 1 },
      { text: "Shares ideas with Hinduism", indent: 2 },
      { text: "**Universalizing religion**", indent: 2 },
      { text: "Losing influence in India", indent: 2 },
      { text: "**Islam**", indent: 1 },
      { text: "Turkic invaders formed **Delhi Sultanate**", indent: 2 },
      { text: "Second most practiced religion in India", indent: 2 },
      { text: "Religion of the elite in Northern India", indent: 2 },

      { subheading: "Changes in Religion" },
      { text: "**Hinduism: Bhakti Movement**", indent: 1 },
      { text: "Focused on devotion to one Hindu god", indent: 2 },
      { text: "Rejected caste system", indent: 2 },
      { text: "Spiritual experiences open to all", indent: 2 },
      { text: "**Islam: Sufism**", indent: 1 },
      {
        text: "A more mystical and spiritual form of Islam that often blended with traditional beliefs to increase conversion",
        indent: 2,
      },
      { text: "**Buddhism**", indent: 1 },
      { text: "Enlightenment became more exclusive", indent: 2 },

      { subheading: "State Building in South Asia" },
      { text: "**Northern India**", indent: 1 },
      { text: "Post-Gupta: **Rajput Kingdoms** formed", indent: 2 },
      {
        text: "**Delhi Sultanate** established by Islamic invaders",
        indent: 2,
      },
      { text: "**Southern India**", indent: 1 },
      { text: "More stable than north", indent: 2 },
      { text: "**Vijayanagara Empire**", indent: 2 },
      { text: "Started by two Delhi Sultanate converts", indent: 3 },
      {
        text: "Moved south, reconverted to Hinduism, founded empire",
        indent: 3,
      },

      { subheading: "Social Structures in South Asia" },
      { text: "**Caste system** remained strong", indent: 1 },
      { text: "Low-caste Hindus converted to Islam to gain status", indent: 2 },
      { text: "Little success due to lack of education", indent: 3 },
      { text: "Islam sought converts, largely unsuccessful", indent: 2 },

      { subheading: "Southeast Asia" },
      { text: "**Sea-Based Kingdoms**", indent: 1 },
      { text: "Gained power through trade", indent: 2 },
      { text: "**Srivijaya Empire**", indent: 2 },
      { text: "Hindu kingdom in Sumatra", indent: 3 },
      { text: "Wealth from taxing ships between India and China", indent: 3 },
      { text: "Major trading post", indent: 3 },
      { text: "**Majapahit Kingdom**", indent: 2 },
      { text: "**Buddhist** kingdom", indent: 3 },
      { text: "Used **tributary system** like China", indent: 3 },
      { text: "Trade-based empire like Srivijaya", indent: 3 },
      { text: "**Land-Based Kingdoms**", indent: 1 },
      { text: "**Sinhala Dynasties**", indent: 2 },
      { text: "In present-day Sri Lanka", indent: 3 },
      { text: "Controlled power through land", indent: 3 },
      { text: "Influenced by Indian merchants", indent: 3 },
      { text: "Became center for Buddhist study", indent: 3 },
      { text: "Known for simple, monastic lifestyle", indent: 3 },
      { text: "**Khmer Empire**", indent: 2 },
      { text: "Located on the **Mekong River**", indent: 3 },
      { text: "Advanced **irrigation and drainage systems**", indent: 3 },
      { text: "Strong Indian cultural influence", indent: 3 },
      { text: "Converted from Hinduism to Buddhism", indent: 3 },
      { text: "**Angkor Wat** is an example of **syncretism**", indent: 4 },
      { text: "Hindu temple with added Buddhist statues", indent: 5 },
    ],
  },
  {
    subunit: "Unit 1.4: Developments in the Americas",
    events: [
      { subheading: "Mississippian Culture", indent: 0 },
      { text: "Located in present-day Illinois", indent: 1 },
      { text: "Fertile land supported agriculture", indent: 1 },
      { text: "Led by powerful chiefs called the **Great Sun**", indent: 1 },
      { text: "Hierarchical and **matrilineal** society", indent: 1 },
      { text: "Known for **mound building** projects", indent: 1 },

      { subheading: "Chaco & Mesa Verde", indent: 0 },
      { text: "Southwestern U.S., dry climate", indent: 1 },
      { text: "Chaco used stone and clay for houses", indent: 1 },
      { text: "Mesa Verde built cliff-side homes with sandstone", indent: 1 },

      { subheading: "Maya City-States", indent: 0 },
      { text: "Decentralized, often at war", indent: 1 },
      { text: "Ruled by kings of individual **city-states**", indent: 1 },
      { text: "Kings believed they descended from gods", indent: 2 },
      { text: "Fought to expand network of **tributary states**", indent: 1 },
      { text: "Practiced **human sacrifice** for religion", indent: 1 },
      { text: "Tribute often paid in people for sacrifice", indent: 2 },
      { text: "Religion and **astronomy** were connected", indent: 1 },
      { text: "Built observatories like at **Chichen Itza**", indent: 2 },
      { text: "Created a written **calendar**", indent: 1 },
      { text: "Developed concept of **zero** and writing system", indent: 1 },
      { text: "Invented **rubber**", indent: 1 },

      { subheading: "Aztecs (Mexicas)", indent: 0 },
      { text: "Gained power through **strategic marriages**", indent: 1 },
      { text: "Semi-nomadic; formed alliances to grow empire", indent: 1 },
      { text: "Used **tributary system**, like Mayans", indent: 1 },
      { text: "Expanded for more human tribute", indent: 1 },
      { text: "Claimed ancestry from older Mesoamerican cultures", indent: 1 },
      { text: "Used **chinampas** (floating gardens)", indent: 1 },
      { text: "Built **complex irrigation** systems", indent: 1 },

      { text: "Incas", indent: 0 },
      { text: "Centered in the **Andes Mountains**", indent: 1 },
      { text: "Highly **centralized** with bureaucracy", indent: 1 },
      { text: "Used **Mit’a System**: required yearly labor", indent: 1 },
      { text: "Used **quipu**: knotted string system for counting", indent: 1 },
      { text: "Believed in **animism** (spiritual nature)", indent: 1 },
    ],
  },
  {
    subunit: "Unit 1.5: Developments in Africa",
    events: [
      { subheading: "State Building in Sub-Saharan Africa", indent: 0 },
      { text: "Swahili Civilization", indent: 1 },
      {
        text: "Independent **city-states** on southeastern African coast",
        indent: 2,
      },
      { text: "Grew from **Indian Ocean Trade**", indent: 2 },
      { text: "**Islam** was dominant religion", indent: 2 },
      {
        text: "Merchants traded **gold**, **ivory**, **timber**, and **slaves**",
        indent: 2,
      },
      { text: "Great Zimbabwe", indent: 1 },
      { text: "Traded along coast, but located inland", indent: 2 },
      { text: "Similar to Swahili city-states in trade role", indent: 2 },

      { subheading: "State Building in East/West Africa", indent: 0 },
      { text: "Hausa Kingdoms", indent: 1 },
      { text: "Politically independent **city-states**", indent: 2 },
      { text: "Located in modern-day **Nigeria**", indent: 2 },
      {
        text: "Connected via **kin-based networks** (family-governed)",
        indent: 2,
      },
      { text: "Benefited from **Trans-Saharan Trade**", indent: 2 },

      { subheading: "Islam in Africa", indent: 0 },
      {
        text: "Adopted to help organize societies and connect to **Dar al-Islam**",
        indent: 1,
      },

      { text: "Exception: Ethiopia", indent: 1 },
      { text: "**Christian** kingdom", indent: 2 },
      {
        text: "Grew wealthy through Mediterranean and Indian Ocean trade",
        indent: 2,
      },
      { text: "**Salt** was a major traded commodity", indent: 2 },
      {
        text: "Had **centralized power** with a king and class hierarchy",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 1.6: Developments in Europe",
    events: [
      { text: "**Feudalism**", indent: 0 },
      {
        text: "Decentralized political system based on mutual allegiances",
        indent: 1,
      },
      {
        text: "Monarchs and greater lords exchanged **land** for loyalty from knights and lesser lords",
        indent: 1,
      },

      { text: "**Manorialism**", indent: 0 },
      {
        text: "Economic system where **serfs** worked land for protection",
        indent: 1,
      },
      { text: "Centered around **manors** (large estates)", indent: 1 },
      { text: "Self-sufficient; limited trade or outside contact", indent: 1 },

      {
        text: "Europe was largely **decentralized** during this time",
        indent: 0,
      },
      { text: "No major empires; not a global power", indent: 1 },
      { text: "Some **monarchs** began to centralize power", indent: 1 },
      { text: "Built **large militaries** and **bureaucracies**", indent: 2 },
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
      return "#007bff";
  }
};

const Tab1Screen = () => {
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
              <Text style={styles.title}>Unit 1: The Global Tapestry</Text>
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
    fontSize: 15,
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
