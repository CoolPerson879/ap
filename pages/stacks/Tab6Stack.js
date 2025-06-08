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
    subunit: "Unit 6.1: Rationales for Imperialism",
    events: [
      { text: "**Nationalist Motives for Imperialism**", indent: 0 },
      {
        text: "Strong sense of identity and loyalty led world powers to assert authority over territories",
        indent: 1,
      },
      { text: "**European Nationalism**", indent: 1 },
      { text: "Britain lost American colonies, sought new lands", indent: 2 },
      { text: "Founded New South Wales in Australia", indent: 3 },
      {
        text: "Expanded influence in South Asia via East India Company",
        indent: 3,
      },
      {
        text: "France expanded overseas after Franco-Prussian War loss",
        indent: 2,
      },
      {
        text: "Occupied Algeria, New Caledonia, Senegal, Indochina",
        indent: 3,
      },
      {
        text: "Italy and Germany unified recently, started colonies in 1880s",
        indent: 2,
      },
      { text: "Spain's power diminished by 19th century", indent: 2 },
      { text: "**Japan in East Asia**", indent: 1 },
      { text: "Asserted nationalism by invading Korea", indent: 2 },
      { text: "Defeated China in Sino-Japanese War, annexed Korea", indent: 2 },
      { text: "Annexed Formosa (Taiwan)", indent: 2 },

      { text: "**Cultural and Religious Motives for Imperialism**", indent: 0 },
      { text: "Saw selves as civilizing protectors, not invaders", indent: 1 },
      { text: "**Racial Ideologies and Misuse of Science**", indent: 1 },
      {
        text: "Phrenologists: pseudoscience claiming Africans inferior due to skull size",
        indent: 2,
      },
      {
        text: "Social Darwinism: Europeans as fittest species ('White Man’s Burden')",
        indent: 2,
      },
      { text: "**Cultural Ideologies**", indent: 1 },
      { text: "Imposed own cultures, languages to unify colonies", indent: 2 },
      { text: "Influenced architecture", indent: 2 },
      { text: "**Religious Motives**", indent: 1 },
      {
        text: "Missionaries established schools teaching religion and other subjects",
        indent: 2,
      },
      { text: "Provided improved medicine and care", indent: 2 },
      { text: "Worked to end illegal slave trade", indent: 2 },

      { text: "**Economic Motives**", indent: 0 },
      { text: "Access to resources", indent: 1 },
      { text: "Exploitation of labor", indent: 1 },
      {
        text: "East India Company: Dutch and British trade monopolies",
        indent: 1,
      },
    ],
  },
  {
    subunit: "Unit 6.2: State Expansion",
    events: [
      { text: "**Private to State Control**", indent: 0 },
      { text: "States took colonies from companies", indent: 1 },
      {
        text: "**East India Companies** became part of British and Dutch Empires",
        indent: 2,
      },

      {
        text: "**Diplomacy and Warfare for Imperialism in Africa**",
        indent: 0,
      },
      { text: "**Diplomacy**", indent: 1 },
      {
        text: "**Berlin Conference** divided Africa among European countries (Scramble for Africa)",
        indent: 2,
      },
      { text: "**Warfare**", indent: 1 },
      { text: "French fought in Angola", indent: 2 },
      { text: "**South Africa and the Boer Wars**", indent: 2 },
      {
        text: "British replaced Dutch in Cape Colony, causing conflict with natives and Afrikaners",
        indent: 3,
      },
      {
        text: "British forced natives and Afrikaners into concentration camps",
        indent: 3,
      },

      {
        text: "**By 1900, only two independent African countries remained**",
        indent: 0,
      },
      { text: "**Liberia**", indent: 1 },
      {
        text: "Formed by freed US enslaved people, dependent on US",
        indent: 2,
      },
      { text: "**Ethiopia**", indent: 1 },
      { text: "Resisted Italian conquest", indent: 2 },

      { text: "**Settler Colonies**", indent: 0 },
      {
        text: "Colonies where imperial powers displaced indigenous populations",
        indent: 1,
      },
      { text: "Examples: Australia, New Zealand", indent: 2 },

      { text: "**States Conquering Neighboring Lands**", indent: 0 },
      { text: "**United States**", indent: 1 },
      {
        text: "Took land from Mexico, Spain, British Empire, Russia",
        indent: 2,
      },
      { text: "**Russia**", indent: 1 },
      { text: "Expanded into neighboring lands", indent: 2 },
      { text: "**Japan**", indent: 1 },
      { text: "Conquered Taiwan, Korea, Manchuria", indent: 2 },

      { text: "**Imperialism in East Asia**", indent: 0 },
      { text: "**China**", indent: 1 },
      {
        text: "European military superiority led to spheres of influence with exclusive trade and resource access",
        indent: 2,
      },
      { text: "Qing internal problems weakened China", indent: 2 },
      {
        text: "**Taiping Rebellion**: Christian peasant revolt; Qing won but weakened",
        indent: 3,
      },
      {
        text: "**Boxer Rebellion**: Anti-foreigner martial arts group attacked Christians and missionaries",
        indent: 3,
      },
      {
        text: "Empress Dowager Cixi supported Boxers; few foreigners killed; China further weakened",
        indent: 3,
      },

      { text: "**Japan**", indent: 1 },
      { text: "See Unit 5 and 6-1 for expansion details", indent: 2 },
    ],
  },
  {
    subunit: "Unit 6.3: Indigenous Responses to State Expansion",
    events: [
      { text: "**Causes**", indent: 0 },
      { text: "Increasing doubts about **political authority**", indent: 1 },
      { text: "Imperial powers introduced **Western education**", indent: 2 },
      {
        text: "Led to growing **nationalism** among colonized people",
        indent: 1,
      },

      { text: "**Direct Resistance**", indent: 0 },
      { text: "Often took the form of **violence**", indent: 1 },
      { text: "**Indian Rebellion of 1857**", indent: 1 },
      {
        text: "Caused by rifle cartridges greased with **cow and pig fat**",
        indent: 2,
      },
      { text: "Offensive to **Muslims and Hindus**", indent: 3 },
      {
        text: "Both sides believed British were trying to **convert Indians to Christianity**",
        indent: 3,
      },
      { text: "British **crushed** the rebellion", indent: 2 },
      { text: "Sparked **Indian nationalism**", indent: 2 },
      { text: "**Tupac Amaru II**", indent: 1 },
      { text: "Led rebellion against **Spanish rule** in Peru", indent: 2 },
      { text: "**Yaa Asantewaa War**", indent: 1 },
      { text: "British tried to **annex the Asante Empire**", indent: 2 },
      {
        text: "**Queen Yaa Asantewaa** led rebellion; lost and exiled",
        indent: 2,
      },
      { text: "Asante Empire became part of **British Empire**", indent: 2 },

      { text: "**Religious Rebellions**", indent: 0 },
      { text: "**Ghost Dance Movement**", indent: 1 },
      {
        text: "Native American ritual to bring back spirits to **drive out whites**",
        indent: 2,
      },
      { text: "**Xhosa Cattle Killing Movement**", indent: 1 },
      {
        text: "Belief that killing cattle would result in **better cattle and British leaving**",
        indent: 2,
      },
      { text: "Failed; led to **mass starvation**", indent: 2 },
    ],
  },
  {
    subunit: "Unit 6.4: Global Economic Development",
    events: [
      { text: "**Technological Developments**", indent: 0 },
      { text: "**Railroads**", indent: 1 },
      {
        text: "Previously relied on **water and roads**—inconvenient",
        indent: 2,
      },
      {
        text: "Railroads **lowered transport costs** for raw materials",
        indent: 2,
      },
      { text: "Opened **colonial markets** for manufactured goods", indent: 2 },
      { text: "Used to justify **imperialism** as beneficial", indent: 2 },
      { text: "**Cecil Rhodes**", indent: 2 },
      {
        text: "**British imperialist**, founder of De Beers Diamonds",
        indent: 3,
      },
      { text: "Proposed **Cape to Cairo** railroad project", indent: 3 },

      { text: "**Development of Export Economies**", indent: 0 },
      {
        text: "**Export Economies**: focused on exporting raw materials",
        indent: 1,
      },
      { text: "Pre-colonial: **subsistence farming** was common", indent: 2 },
      {
        text: "Colonial rule: forced shift to **cash crop agriculture**",
        indent: 2,
      },
      { text: "Harmed families relying on subsistence farming", indent: 3 },
      {
        text: "**Colonial economies were restructured** to serve imperial powers",
        indent: 1,
      },
      {
        text: "Focused on **resource extraction** and **industrial crop production**",
        indent: 2,
      },

      { text: "**Causes of Economic Development**", indent: 0 },
      { text: "**Raw materials** needed for factories", indent: 1 },
      {
        text: "**Food supply** needed for growing urban populations",
        indent: 1,
      },

      { text: "**Effects**", indent: 0 },
      { text: "Export profits used to buy **manufactured goods**", indent: 1 },
      {
        text: "**Colonial dependence** on imperial economies increased",
        indent: 1,
      },
    ],
  },
  {
    subunit: "Unit 6.5: Economic Imperialism",
    events: [
      { text: "**Economic Imperialism**", indent: 0 },
      {
        text: "Control extended **by economic means** rather than direct political rule",
        indent: 1,
      },

      { text: "**Economic Imperialism in Asia**", indent: 0 },
      { text: "**Opium Wars**", indent: 1 },
      {
        text: "**British and French attacked China** to open ports",
        indent: 2,
      },
      {
        text: "Conflict caused by **illegal British opium imports**",
        indent: 2,
      },
      { text: "**British victory** led to **Treaty of Nanking**", indent: 2 },
      {
        text: "Established **spheres of influence**—a form of economic imperialism",
        indent: 2,
      },

      { text: "**British East India Company**", indent: 1 },
      {
        text: "Started as spice trade org, came to **control much of India**",
        indent: 2,
      },
      { text: "Exported **fabrics and other goods**", indent: 2 },

      { text: "**Dutch East India Company**", indent: 1 },
      { text: "Had monopoly in **Dutch East Indies (Indonesia)**", indent: 2 },
      { text: "Dutch government later **revoked the charter**", indent: 2 },
      { text: "**Colonies became state-run**", indent: 3 },
      {
        text: "**Locals forced** into cash crop production or unpaid labor",
        indent: 3,
      },

      { text: "**Port of Buenos Aires**", indent: 0 },
      {
        text: "**Funded by British firms** and near British-owned factories",
        indent: 1,
      },
      {
        text: "**Exports to Britain increased**, creating economic dependence",
        indent: 1,
      },

      { text: "**Trade in Commodities**", indent: 0 },
      { text: "**Commodities**: goods sold on the market", indent: 1 },
      { text: "**Cotton**", indent: 1 },
      {
        text: "**India and Egypt** grew and exported to **Britain**",
        indent: 2,
      },
      { text: "**Dependent on external demand**", indent: 2 },
      { text: "**Palm Oil**", indent: 1 },
      { text: "Produced in **sub-Saharan Africa**", indent: 2 },
    ],
  },
  {
    subunit: "Unit 6.6: Causes of Migration",
    events: [
      { text: "**Demographic Change**", indent: 0 },
      {
        text: "**Population explosion** led to overcrowding and migration for opportunity",
        indent: 1,
      },

      { text: "**Famine**", indent: 0 },
      {
        text: "**Irish Potato Famine** caused mass Irish emigration",
        indent: 1,
      },

      { text: "**Technological Causes**", indent: 0 },
      {
        text: "**Railroads and Steamships** made migration easier and cheaper",
        indent: 1,
      },
      {
        text: "**Urbanization** increased, driving rural-to-urban migration",
        indent: 1,
      },
      { text: "Some migrants **returned home**, others did not", indent: 1 },

      { text: "**Economic Causes**", indent: 0 },
      { text: "**Voluntary Migration**", indent: 1 },
      { text: "**Irish, German, Italian** to **East Coast US**", indent: 2 },
      { text: "**Chinese** to **West Coast US and Hawaii**", indent: 2 },

      { text: "**Coerced and Semi-Coerced Labor**", indent: 1 },
      { text: "**Slave trade** continued in some regions", indent: 2 },
      {
        text: "**Convict labor** in **penal colonies** like **Australia**",
        indent: 2,
      },

      { text: "**Indentured Servitude**", indent: 1 },
      {
        text: "**British Indians** sent to **Caribbean, South Africa, East Africa, Fiji**",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 6.7: Effects of Migration",
    events: [
      { text: "**Gender Imbalance**", indent: 0 },
      {
        text: "**More men migrated**, women stayed and took on **masculine roles**",
        indent: 1,
      },
      { text: "**Family structures** changed", indent: 1 },

      { text: "**Ethnic Enclaves**", indent: 0 },
      {
        text: "**High concentration** of one ethnic group in a foreign area",
        indent: 1,
      },
      { text: "**Outposts** of home culture (e.g., **Chinatown**)", indent: 2 },
      { text: "**Cultural Diffusion** into host society", indent: 2 },
      {
        text: "**Indians in British colonies** (Trinidad, Fiji, Mauritius)",
        indent: 2,
      },

      { text: "**Nativism**", indent: 0 },
      {
        text: "**Preference for natives**, led to **prejudice** and restrictive policies",
        indent: 1,
      },
      {
        text: "**Chinese Exclusion Act** (US): banned Chinese laborers",
        indent: 2,
      },
      {
        text: "**White Australia Policy**: banned non-European immigrants",
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

const Tab6Screen = () => {
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
              <Text style={styles.title}>Unit 6: Consequences of</Text>
              <Text style={styles.title2}>Industrialization</Text>
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

export default function Tab6Stack() {
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
      <Stack.Screen name="Tab1Main" component={Tab6Screen} />
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
  title2: {
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
