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
    subunit: "Unit 8.1: Setting the Stage for the Cold War and Decolonization",
    events: [
      { subheading: "Two Superpowers Arise" },
      { text: "**Cold War**", indent: 1 },
      {
        text: "A state of hostility between two states based on **ideological struggles** rather than open warfare",
        indent: 2,
      },
      {
        text: "**USA** and **USSR** emerged as the only superpowers after **WWII**",
        indent: 2,
      },

      { subheading: "Economic Advantages" },
      { text: "**US** had minimal damage to **infrastructure**", indent: 1 },
      { text: "**US** helped pay for **European rebuilding**", indent: 1 },
      {
        text: "This shifted the **balance of power** towards the US",
        indent: 1,
      },
      { text: "**Soviet Economy**", indent: 1 },
      { text: "**Natural Resources**", indent: 2 },
      { text: "Benefited from a **large territory**", indent: 3 },
      { text: "**Large Population** supported economic strength", indent: 2 },
      { text: "**Investment Before WWII**", indent: 2 },
      { text: "**Infrastructure** already in place before war", indent: 3 },

      { subheading: "Technological Advantages" },
      { text: "**US built the Atomic Bomb**", indent: 1 },
      { text: "Led to an **arms race** between US and USSR", indent: 1 },
      { text: "Both raced to make the most **powerful bomb**", indent: 2 },

      { subheading: "Decolonization" },
      {
        text: "**Colonial troops** fought for imperial powers during WWII",
        indent: 1,
      },
      { text: "No clear intention of granting **independence**", indent: 2 },
      { text: "Caused massive **independence movements**", indent: 2 },
      {
        text: "Imperial nations had no **resources** to suppress movements",
        indent: 1,
      },
    ],
  },
  {
    subunit: "Unit 8.2: Causes of the Cold War",
    events: [
      { subheading: "Conflicting Ideologies" },
      { text: "**Democratic capitalism** of the **United States**", indent: 1 },
      {
        text: "Emphasized **free market economics** and **political participation** from citizens",
        indent: 2,
      },
      {
        text: "**Authoritarian communism** of the **Soviet Union**",
        indent: 1,
      },
      {
        text: "Emphasized strict **government control of the economy**",
        indent: 2,
      },
      {
        text: "Promoted **redistribution of wealth** equally to all citizens",
        indent: 2,
      },
      { text: "Citizens had **no voice** in government", indent: 2 },
      {
        text: "Both ideologies were **universalizing**—wanted to spread globally",
        indent: 1,
      },

      { subheading: "Mutual Mistrust" },
      { text: "Mistrust began **before WWII**", indent: 1 },
      { text: "Resulted in the **division of Germany**", indent: 1 },
      {
        text: "**Soviet-controlled buffer zones** in Eastern Europe",
        indent: 1,
      },

      { subheading: "Effects of the Cold War" },
      { text: "**Decolonization and new states** emerged", indent: 1 },
      {
        text: "US and USSR **raced to influence** these states ideologically",
        indent: 2,
      },
      {
        text: "**Non-Aligned Movement** was created to support developing nations",
        indent: 2,
      },
      {
        text: "Countries could **pretend to support a side** to get resources",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 8.3: Effects of the Cold War",
    events: [
      { subheading: "New Military Alliances" },
      { text: "**NATO** (North Atlantic Treaty Organization)", indent: 1 },
      {
        text: "Formed to **fight Soviet influence** and **contain communism**",
        indent: 2,
      },
      { text: "**Communist Bloc** and **Warsaw Pact**", indent: 1 },
      {
        text: "Formed to **spread communism** and **counter US influence**",
        indent: 2,
      },

      { subheading: "Nuclear Proliferation" },
      { text: "**US**", indent: 1 },
      { text: "Developed **atomic bomb** in **1945**", indent: 2 },
      { text: "Developed **hydrogen bomb** in **1953**", indent: 2 },
      { text: "**USSR**", indent: 1 },
      { text: "Developed **atomic bomb** in **1949**", indent: 2 },
      { text: "Developed **hydrogen bomb** in **1953**", indent: 2 },
      { text: "**Cuban Missile Crisis**", indent: 1 },
      { text: "**US naval blockade** on Cuba", indent: 2 },
      { text: "**1958** - **Nuclear Non-Proliferation Treaty**", indent: 1 },

      { subheading: "Proxy Wars" },
      {
        text: "**Small, local, indirect wars** supported by superpowers",
        indent: 1,
      },
      { text: "**Korean War**", indent: 2 },
      { text: "**Angolan Civil War**", indent: 2 },
      { text: "**Contra War** (**Nicaragua**)", indent: 2 },
    ],
  },
  {
    subunit: "Unit 8.4: Spread of Communism after 1900",
    events: [
      { subheading: "China" },
      { text: "**Chinese Civil War**", indent: 1 },
      {
        text: "**Chinese Nationalist Party** vs **Communist Party**",
        indent: 2,
      },
      { text: "**Communists won**, Mao Zedong took control", indent: 2 },
      { text: "Led to **collectivization of land and wealth**", indent: 2 },
      { text: "**Great Leap Forward**", indent: 2 },
      {
        text: "Economic plan to rapidly **industrialize China** through **heavy industry**",
        indent: 3,
      },
      { text: "Tensions later developed with the **USSR**", indent: 2 },
      { text: "**Mao** believed **Soviet communism was corrupt**", indent: 3 },
      {
        text: "China focused on **small-scale rural industrialization** over large factory building",
        indent: 3,
      },

      { subheading: "Other Movements" },
      { text: "**Egypt**", indent: 1 },
      { text: "**Suez Canal**", indent: 2 },
      {
        text: "**Nationalization** of the Suez Canal by **Nasser**",
        indent: 3,
      },
      { text: "Egypt seized the canal from **Britain**", indent: 4 },
      { text: "**European powers threatened to attack**", indent: 4 },
      { text: "**USSR threatened to bomb** Europeans if they did", indent: 4 },
      { text: "**US stopped Europeans** to avoid another war", indent: 4 },

      { text: "**Vietnam**", indent: 1 },
      { text: "**Communist North Vietnam**", indent: 2 },
      { text: "Started **land redistribution**", indent: 3 },
      {
        text: "**Wealthy landowners** lost land, given to **peasants**",
        indent: 3,
      },

      { text: "**Cuba**", indent: 1 },
      { text: "**US tried to reduce Cuban dependence**", indent: 2 },
      {
        text: "**Land redistribution** and **wage increases** launched",
        indent: 2,
      },
      {
        text: "**15% of Cuban wealth** transferred from rich to poor",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 8.5: Decolonization after 1900",
    events: [
      { subheading: "Negotiated Independence" },
      { text: "**India**", indent: 1 },
      { text: "**Britain’s most prosperous colony**", indent: 2 },
      {
        text: "Fought in **WWI** in hopes of freedom but did not receive it",
        indent: 2,
      },
      {
        text: "After **WWII**, Britain was weak and **conceded independence**",
        indent: 2,
      },
      {
        text: "**Independence was peaceful**, but **establishment was violent**",
        indent: 2,
      },
      { text: "**Africa**", indent: 1 },
      { text: "**Gold Coast**", indent: 2 },
      { text: "**Similar to Indian Independence**", indent: 3 },
      { text: "**Ghana** was created through this process", indent: 3 },

      { subheading: "Armed Conflict" },
      { text: "**Armed vs Peaceful**", indent: 1 },
      {
        text: "Conflict was more likely to be **armed** if there was a **large white population**",
        indent: 2,
      },
      { text: "**Algeria**", indent: 1 },
      {
        text: "Had a **large white population** from French migration",
        indent: 2,
      },
      {
        text: "**National Liberation Front** used armed struggle for independence",
        indent: 2,
      },
      { text: "**Angola**", indent: 1 },
      {
        text: "**Three rival tribes** resisted **Portuguese oppression**",
        indent: 2,
      },
      { text: "Fighting led to a **stalemate**", indent: 2 },
      {
        text: "**Portugal had a coup**, Angolans negotiated independence",
        indent: 2,
      },
      { text: "**Ethnic divisions** led to conflict", indent: 2 },
      {
        text: "Resulted in a **proxy war** with **US** and **USSR** supporting different groups",
        indent: 3,
      },

      { subheading: "Problems of Colonial Boundaries" },
      { text: "**Colonial borders ignored ethnic divisions**", indent: 1 },
      {
        text: "**Rival groups** were brought together or **split apart**",
        indent: 2,
      },
      { text: "**Nigeria**", indent: 1 },
      {
        text: "**Igbo Christians** in the south wanted to secede from the Muslim north",
        indent: 2,
      },
      { text: "Led to the **Nigerian Civil War**", indent: 2 },
    ],
  },
  {
    subunit: "Unit 8.7: Global Resistance to Established Order",
    events: [
      { subheading: "Government Involvement in Economies" },
      { text: "**Gamal Abdel Nasser (Egypt)**", indent: 1 },
      {
        text: "**Nationalized the Suez Canal** to bring it under Egyptian control",
        indent: 2,
      },
      {
        text: "**Western powers invaded**, but Nasser gained **Soviet support**",
        indent: 3,
      },
      { text: "**Aswan High Dam** built on the Nile River", indent: 2 },
      {
        text: "Provided **electricity** and **irrigation** for Egypt",
        indent: 3,
      },
      { text: "Introduced **free schooling** and **healthcare**", indent: 2 },

      { text: "**Indira Gandhi (India)**", indent: 1 },
      { text: "Introduced **five-year socialist economic plans**", indent: 2 },
      {
        text: "Allowed government more **economic control**, reduced reliance on foreign aid",
        indent: 3,
      },
      {
        text: "Adopted the **Green Revolution** to improve agricultural output",
        indent: 3,
      },
      {
        text: "**Nationalized banks**, raised **taxes on the wealthy**, and introduced a **20-point economic plan**",
        indent: 2,
      },
      {
        text: "Resulted in **reduced inflation** and **increased production**",
        indent: 3,
      },

      { subheading: "Migrations to Metropoles" },
      {
        text: "**Metropoles**: Territory of the imperial country, distinct from its colonies",
        indent: 1,
      },
      {
        text: "Ex: **Great Britain** is the metropole of **India**",
        indent: 2,
      },
      {
        text: "Colonialism created **cultural and economic ties** between imperial powers and colonies",
        indent: 2,
      },
      {
        text: "Despite **imperial oppression**, colonial subjects became familiar with **imperial culture**",
        indent: 2,
      },
      { text: "Many migrated to metropoles:", indent: 2 },
      { text: "**South Asians** to the **United Kingdom**", indent: 3 },
      { text: "**Filipinos** to the **United States**", indent: 3 },
      { text: "**Algerians** to **France**", indent: 3 },
    ],
  },
  {
    subunit: "Unit 8.7: Resistance to Power Structures After 1900",
    events: [
      { subheading: "Nonviolent Resistance" },
      { text: "**Mohandas Gandhi**", indent: 1 },
      {
        text: "Promoted **nonviolence** and **civil disobedience**",
        indent: 2,
      },
      { text: "Became leader of the **Indian National Congress**", indent: 2 },
      { text: "**Homespun Movement**", indent: 2 },
      {
        text: "Protest against British economic dominance of cotton",
        indent: 3,
      },
      {
        text: "Encouraged Indians to boycott British textiles and make their own clothes",
        indent: 3,
      },
      { text: "**Salt March**", indent: 2 },
      { text: "Protested British **salt monopoly**", indent: 3 },
      { text: "British banned salt extraction", indent: 3 },
      { text: "Gandhi led a march to the sea to gather salt", indent: 3 },
      { text: "Arrested after making salt in defiance", indent: 3 },
      {
        text: "After WWII, Britain lacked resources and support to resist Indian independence",
        indent: 3,
      },

      { text: "**Martin Luther King Jr.**", indent: 1 },
      { text: "**Black Baptist minister** in the US", indent: 2 },
      { text: "Inspired by Gandhi’s methods", indent: 2 },
      { text: "Fought **racial segregation** in the US", indent: 2 },
      { text: "**Civil Rights Movement**", indent: 2 },
      { text: "Secured equal rights for **Black Americans**", indent: 3 },
      {
        text: "Led to Supreme Court ending school segregation in 1950s",
        indent: 3,
      },
      { text: "Congress passed civil rights laws in 1960s", indent: 3 },
      { text: "**Montgomery Bus Boycott**", indent: 2 },
      { text: "Boycotted buses to protest segregation", indent: 3 },
      { text: "Caused **economic stress** and led to change", indent: 3 },
      { text: "Arrested like Gandhi", indent: 3 },

      { text: "**Nelson Mandela**", indent: 1 },
      {
        text: "South Africa under **apartheid**: legalized racial segregation",
        indent: 2,
      },
      {
        text: "Started as nonviolent, became violent after **Sharpeville massacre**",
        indent: 2,
      },
      { text: "Imprisoned for over **two decades**", indent: 2 },
      {
        text: "Released and later became **President of South Africa**",
        indent: 2,
      },

      { subheading: "Violent Resistance" },
      { text: "**Augusto Pinochet**", indent: 1 },
      {
        text: "Led coup in **Chile** to overthrow Marxist president **Salvador Allende**",
        indent: 2,
      },
      { text: "Assisted by the **United States**", indent: 2 },
      {
        text: "Ruled as a **dictator**, violently suppressed opposition",
        indent: 2,
      },

      { text: "**Idi Amin**", indent: 1 },
      {
        text: "Dictator of **Uganda**, known as 'The Butcher of Uganda'",
        indent: 2,
      },
      {
        text: "Used violence against **ethnic groups**, **political enemies**, and random individuals",
        indent: 2,
      },

      { text: "**Military-Industrial Complex**", indent: 1 },
      {
        text: "Idea that national security requires continuous **military buildup**",
        indent: 2,
      },
      { text: "Prevalent in **US** and **USSR** during Cold War", indent: 2 },
      { text: "Tied to **nuclear proliferation**", indent: 2 },

      { subheading: "Violence Against Civilians" },
      {
        text: "**Terrorism**: Use of violence against civilians to achieve goals",
        indent: 1,
      },
      { text: "**Al-Qaeda**", indent: 1 },
      { text: "Led by **Osama Bin Laden**, Arab billionaire", indent: 2 },
      {
        text: "Angry at **US involvement** in Middle Eastern politics",
        indent: 2,
      },
      { text: "Responsible for **9/11** and other attacks", indent: 2 },
    ],
  },
  {
    subunit: "Unit 8.8: The End of the Cold War",
    events: [
      { subheading: "Advancements in the United States" },
      { text: "**Nuclear Proliferation**", indent: 1 },
      {
        text: "Neither side launched missiles due to **Mutually Assured Destruction** (MAD)",
        indent: 2,
      },
      {
        text: "**Nixon** and **Brezhnev** signed a treaty for **détente**",
        indent: 2,
      },
      { text: "Détente: non-proliferation and non-aggression pact", indent: 3 },
      {
        text: "**Reagan** ended détente and increased military defense spending",
        indent: 2,
      },
      { text: "**Strategic Defense Initiative (SDI)**", indent: 3 },
      {
        text: "Proposed space-based missile defense system (nicknamed '**Star Wars**')",
        indent: 4,
      },
      { text: "Never built, but frightened Soviet leadership", indent: 4 },
      {
        text: "Reagan hoped USSR would try to compete, worsening its economic issues",
        indent: 3,
      },

      { subheading: "Troubles in Afghanistan" },
      {
        text: "In **1979**, USSR invaded **Afghanistan** to preserve communist control",
        indent: 1,
      },
      {
        text: "**Afghan rebels** (Mujahideen) supported by **Saudi Arabia**, **US**, and **Pakistan**",
        indent: 2,
      },
      { text: "USSR struggled against **guerrilla tactics**", indent: 2 },
      {
        text: "War placed heavy strain on Soviet economy and morale",
        indent: 2,
      },

      { subheading: "Gorbachev’s Policies" },
      { text: "**Soviet Economic Crisis**", indent: 1 },
      {
        text: "Limited **foreign trade** and inefficient **government control of agriculture**",
        indent: 2,
      },
      { text: "Farmers lacked autonomy, food production declined", indent: 3 },
      { text: "Discontent grew in **Soviet bloc countries**", indent: 2 },
      { text: "**Prague Spring**", indent: 3 },
      {
        text: "Pro-democracy movement crushed by Soviets in **Czechoslovakia** (1968)",
        indent: 4,
      },

      { text: "**Gorbachev’s Reforms**", indent: 1 },
      { text: "**Perestroika** ('restructuring')", indent: 2 },
      {
        text: "Reduced central economic planning to improve efficiency",
        indent: 3,
      },
      { text: "**Glasnost** ('openness')", indent: 2 },
      {
        text: "Allowed public criticism of the government and more press freedom",
        indent: 3,
      },
      {
        text: "Ended Soviet **military intervention** in bloc countries",
        indent: 2,
      },

      {
        text: "**Democratic reform movements** spread across Eastern Europe",
        indent: 1,
      },
      {
        text: "Countries like **Lithuania** and **Georgia** declared independence",
        indent: 2,
      },
      { text: "**Berlin Wall** torn down in 1989", indent: 2 },
      {
        text: "**Soviet Union dissolved** in 1991, ending the Cold War",
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
              <Text style={styles.title}>Unit 8: The Cold War and</Text>
              <Text style={styles.title2}>Decolonization</Text>
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
