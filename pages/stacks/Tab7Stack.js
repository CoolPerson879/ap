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
    subunit: "Unit 7.1: Shifting Power",
    events: [
      { text: "**Ottoman Empire**", indent: 0 },
      {
        text: "**Young Ottomans** wanted westernized reform and to limit the **sultan's power**",
        indent: 1,
      },
      { text: "**Young Turks** pushed for:", indent: 1 },
      {
        text: "**Secular schools/laws**, **elections**, and **Turkish language**",
        indent: 2,
      },
      {
        text: "**Policies alienated minorities**, fracturing the empire",
        indent: 2,
      },

      { text: "**Russian Revolution**", indent: 0 },
      {
        text: "**WWI** and **industrialization issues** caused revolutions in **1905 and 1917**",
        indent: 1,
      },
      {
        text: "**Lenin and Marxists** took over, leading to the **Soviet Union**",
        indent: 1,
      },

      { text: "**Collapse of Qing China**", indent: 0 },
      {
        text: "**Taiping Rebellion**: weakened Qing despite victory",
        indent: 1,
      },
      {
        text: "**Losses in Opium and Sino-Japanese Wars** led to **spheres of influence** and land loss",
        indent: 1,
      },
      {
        text: "**Sun Yat-Sen** overthrew Qing, paving way for **Communist China under Mao**",
        indent: 1,
      },

      { text: "**Mexican Revolution**", indent: 0 },
      {
        text: "**Ended dictatorship**, created a **republic**, expanded **civil rights**",
        indent: 1,
      },
    ],
  },
  {
    subunit: "Unit 7.2: Causes of World War I",
    events: [
      { text: "**Long-Term Causes (M.A.I.N.)**", indent: 0 },

      {
        text: "**Militarism** – aggressive military buildup to prove strength",
        indent: 1,
      },
      {
        text: "**Alliances** – secret pacts (e.g., **Triple Entente vs. Triple Alliance**) escalated conflict",
        indent: 1,
      },
      {
        text: "**Imperialism** – **Germany's expansionist goals** threatened other empires",
        indent: 1,
      },
      {
        text: "**Nationalism** – pride and desire for **self-determination** increased tensions",
        indent: 1,
      },

      { text: "**Immediate Cause**", indent: 0 },
      { text: "**Assassination of Archduke Franz Ferdinand**", indent: 1 },
      {
        text: "Set off war between **Serbia and Austria-Hungary**, triggering alliances, leading to war.",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 7.3: How WWI was Fought",
    events: [
      {
        text: "**WWI was a Total War** – involved entire populations and economies",
        indent: 0,
      },
      {
        text: "**Governments used propaganda** to gain public support and fuel nationalism",
        indent: 1,
      },

      { text: "**Total War Strategies**", indent: 0 },
      {
        text: "**New tech**: machine guns, chemical gas, tanks – made WWI extremely deadly",
        indent: 1,
      },
      { text: "**Trench warfare** – caused long stalemates", indent: 1 },
      {
        text: "**Colonial troops** were used, making it a **global conflict**",
        indent: 1,
      },

      { text: "**End of the War**", indent: 0 },
      {
        text: "**U.S. entry shifted the balance**, leading to Germany’s defeat",
        indent: 1,
      },
    ],
  },
  {
    subunit: "Unit 7.4: The Global Economy Between the World Wars",
    events: [
      { text: "**German Hyperinflation**", indent: 0 },
      { text: "Caused by **Treaty of Versailles reparations**", indent: 1 },
      {
        text: "**Printed money** to pay debts → **hyperinflation**",
        indent: 1,
      },
      {
        text: "Germany’s inability to pay caused a **global financial crisis**",
        indent: 1,
      },
      { text: "Recovered with **American financing**", indent: 1 },

      { text: "**Soviet Economics**", indent: 0 },
      {
        text: "**New Economic Policy (1923)** – some **free market**, but major industries **state-run**",
        indent: 1,
      },
      {
        text: "**Stalin's Five-Year Plans** – goal: increase industry **5×** in 5 years",
        indent: 1,
      },
      {
        text: "**Collectivization** – private farms merged into **state-run** farms",
        indent: 1,
      },
      {
        text: "**Ukrainian famine** – caused by forced grain exports",
        indent: 2,
      },

      { text: "**The Great Depression**", indent: 0 },
      {
        text: "**US stock market crash → global economic collapse**",
        indent: 1,
      },
      {
        text: "**New Deal**: public works + **Social Security** to reduce unemployment and poverty",
        indent: 1,
      },
    ],
  },
  {
    subunit: "Unit 7.5: Unresolved Tensions After World War I",
    events: [
      { text: "**The Mandate System**", indent: 0 },
      {
        text: "**British and French kept and expanded colonies** despite Wilson’s call for self-rule",
        indent: 1,
      },
      {
        text: "**Mandates** were League of Nations-administered colonies",
        indent: 1,
      },
      {
        text: "**Class A**: most developed (Middle East), **Class B**: less developed (German Africa), **Class C**: least developed (Pacific islands)",
        indent: 2,
      },
      {
        text: "**Most mandates operated like colonies** despite classifications",
        indent: 1,
      },

      { text: "**Japan Expands**", indent: 0 },
      {
        text: "Took **Manchuria and East Asia**, **League of Nations did nothing**",
        indent: 1,
      },

      { text: "**Anti-Colonial Resistance Movements**", indent: 0 },
      {
        text: "**Indian National Congress** – sought **greater self-rule** from Britain",
        indent: 1,
      },
      {
        text: "**African National Congress** – in South Africa, inspired **Pan-Africanism**",
        indent: 1,
      },
      {
        text: "**Pan-Africanism**: unity and solidarity among all people of African descent",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 7.6: Causes of WWII",
    events: [
      { text: "**Unsustainable Peace**", indent: 0 },
      { text: "Italy bitter for not getting promised land", indent: 1 },
      {
        text: "Germany forced to pay **reparations** and demilitarize",
        indent: 1,
      },
      { text: "**War guilt clause** blamed Germany for WWI", indent: 1 },

      { text: "**Continued Imperialism**", indent: 0 },
      { text: "Japan takes Asia Pacific", indent: 1 },
      { text: "Italy takes Ethiopia and East Africa", indent: 1 },
      { text: "Germany reclaims territory:", indent: 1 },
      { text: "Rhineland (buffer zone)", indent: 2 },
      {
        text: "Czechoslovakia and Austria for **Lebensraum** (living space)",
        indent: 2,
      },
      {
        text: "**Appeasement** policy allowed Germany's expansion to avoid war",
        indent: 1,
      },

      { text: "**Economic Crisis**", indent: 0 },
      { text: "The Great Depression", indent: 1 },

      { text: "**Fascism / Totalitarianism**", indent: 0 },
      { text: "Soviet Union: Stalin wanted communism to spread", indent: 1 },
      { text: "Italy under **Mussolini** practiced **Fascism**:", indent: 1 },
      { text: "Extreme nationalism, authoritarianism, militarism", indent: 2 },
      {
        text: "Lowered living standards but introduced social security and public services",
        indent: 2,
      },
      { text: "Germany under **Nazis** and **Hitler**:", indent: 1 },
      {
        text: "Hitler blamed socialists, communists, and Jews for Germany's problems",
        indent: 2,
      },
      { text: "Hitler's policies:", indent: 2 },
      {
        text: "Cancel reparations, remilitarize Germany, territorial expansion (Lebensraum), eliminate impure races",
        indent: 3,
      },
    ],
  },
  {
    subunit: "Unit 7.7: How WWII Was Fought",
    events: [
      { text: "**WWII was a total war**, similar to WWI", indent: 0 },
      { text: "Hitler’s invasion of Poland triggered the war", indent: 0 },
      {
        text: "Due to Nazi ideology of increasing **Lebensraum** (living space)",
        indent: 1,
      },
      {
        text: "**Appeasement** stopped, countries declared war on Hitler",
        indent: 1,
      },

      { text: "**Axis Powers**", indent: 0 },
      { text: "Germany, Italy, Japan", indent: 1 },

      { text: "**Allied Powers**", indent: 0 },
      { text: "UK, France", indent: 1 },
      { text: "USA joined after Pearl Harbor bombing", indent: 1 },
      {
        text: "USSR initially signed nonaggression pact with Germany, joined Allies after invasion",
        indent: 1,
      },

      { text: "**Mobilization**", indent: 0 },
      { text: "**Continuity with WWI**", indent: 1 },
      { text: "**WWII Propaganda**:", indent: 2 },
      {
        text: "Provoked nationalism, demonized enemies, sowed fear",
        indent: 3,
      },
      { text: "Led to massive armies and civilian support", indent: 3 },

      { text: "**Ideologies of WWII**", indent: 2 },
      { text: "**Fascism**: glorification of state, militarism", indent: 3 },
      {
        text: "**Communism**: Soviet economy, rapid industrialization via five year plans, brutal demands",
        indent: 3,
      },
      {
        text: "**Democracy**: propaganda, promised welfare expansion",
        indent: 3,
      },

      { text: "**Strategies and Technology**", indent: 1 },
      {
        text: "**Blitzkrieg** (flash war): shock and awe, fast elimination of enemy",
        indent: 2,
      },
      {
        text: "**Firebombs**: used in Dresden, Tokyo; caused massive population damage",
        indent: 2,
      },
      {
        text: "**Atomic Bombs**: killed millions in Hiroshima and Nagasaki",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 7.8: Mass Atrocities Committed After 1900",
    events: [
      { text: "**Causes**", indent: 0 },
      { text: "2 World Wars caused 120 million deaths", indent: 1 },
      { text: "50% of deaths were civilians", indent: 1 },
      { text: "**New technologies**", indent: 1 },
      { text: "Aerial warfare: firebombing, atomic bomb", indent: 2 },

      { text: "**Armenian Genocide**", indent: 0 },
      { text: "By Turkey/Ottoman Empire during WWI", indent: 1 },
      { text: "1.2 million Armenians killed", indent: 1 },

      { text: "**Holocaust**", indent: 0 },
      { text: "Nazi Germany aimed for pure Aryan race", indent: 1 },
      {
        text: "**Final Solution**: targeted Jews, Roma, Homosexuals, Disabled, Political enemies, Socialists",
        indent: 1,
      },
      {
        text: "Nuremberg Laws stripped Jews' rights, forced into ghettos",
        indent: 1,
      },
      { text: "6 million Jews killed in concentration camps", indent: 1 },

      { text: "**Cambodian Genocide**", indent: 0 },
      { text: "Led by Khmer Rouge under Pol Pot", indent: 1 },
      { text: "Supported by China", indent: 1 },
      { text: "Forced labor camps", indent: 1 },
      { text: "¼ of Cambodian population died", indent: 1 },
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
              <Text style={styles.title}>Unit 7: Global Conflict</Text>
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
