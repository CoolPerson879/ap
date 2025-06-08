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
    subunit: "Unit 5.1: Enlightenment",
    events: [
      {
        text: "**Enlightenment**: intellectual revolution emphasizing reason over tradition and individualism over community",
        indent: 0,
      },
      { text: "Ideals:", indent: 1 },
      {
        text: "**Individualism**, **freedom**, **self-determination**",
        indent: 2,
      },
      { text: "Challenges monarchs and church leaders", indent: 2 },
      {
        text: "Originated from the **Scientific Revolution** and **Renaissance**",
        indent: 1,
      },
      { text: "Role of God became less pervasive", indent: 1 },
      {
        text: "Developed political ideas: **Liberalism**, **Socialism**, **Conservatism**",
        indent: 1,
      },
      {
        text: "Clash of old and new systems led to revolutions achieving independence, constitutional governments, collapse of empires",
        indent: 1,
      },
      {
        text: "New empires based on **nationalism** threatened multi-ethnic empires",
        indent: 1,
      },

      { subheading: "New Ideas and Their Roots" },
      {
        text: "**Empiricism**: knowledge from sensory experience and experimentation",
        indent: 1,
      },

      { text: "**Hobbes and Locke**", indent: 1 },
      { text: "Life as a **social contract**", indent: 2 },
      {
        text: "Hobbes: absolute government for law and order by giving up rights",
        indent: 2,
      },
      {
        text: "Locke: right to revolt; natural rights to life, liberty, property; limited government",
        indent: 2,
      },

      { text: "**Voltaire**", indent: 1 },
      {
        text: "Admired England’s constitutional monarchy and civil rights",
        indent: 2,
      },
      {
        text: "Advocated **religious liberty** influencing US Constitution",
        indent: 2,
      },
      {
        text: "**Rousseau** expanded social contract theory, inspiring revolutionaries",
        indent: 2,
      },

      { text: "**Adam Smith**", indent: 1 },
      {
        text: "Criticized mercantilism, supported **laissez-faire** economics",
        indent: 2,
      },
      { text: "Invisible hand guides business and consumers", indent: 2 },
      {
        text: "Founder of **capitalism**: private ownership for profit",
        indent: 2,
      },

      { text: "**Deism**", indent: 1 },
      {
        text: "God set natural laws, does not interfere; laws understood via science",
        indent: 2,
      },

      { text: "**Utopian Socialism**", indent: 1 },
      {
        text: "Public ownership of means of production for equality",
        indent: 2,
      },
      { text: "Inspired **Karl Marx** and communism", indent: 2 },

      { text: "**Classical Liberalism**", indent: 1 },
      {
        text: "Belief in natural rights, constitutional governments, laissez-faire, reduced armies/church power",
        indent: 2,
      },

      { text: "**Feminism**", indent: 1 },
      { text: "Women’s rights based on Enlightenment ideas", indent: 2 },
      {
        text: "**Mary Wollstonecraft**: education equality, mother of Frankenstein author",
        indent: 2,
      },
      {
        text: "**Seneca Falls Convention**: Declaration of Sentiments",
        indent: 2,
      },

      { text: "**Abolitionism**", indent: 1 },
      {
        text: "Movement to end Atlantic slave trade and free enslaved people",
        indent: 2,
      },

      {
        text: "End of **serfdom** due to industrial economy replacing agrarian system",
        indent: 1,
      },

      { text: "**Zionism**", indent: 1 },
      {
        text: "Desire for Jews to reestablish independent homeland in Middle East",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 5.2: Nationalism and Revolutions",
    events: [
      { text: "**American Revolution**", indent: 0 },
      { text: "**Declaration of Independence**", indent: 1 },
      {
        text: "Expressed philosophy behind colonists' fight against British rule",
        indent: 2,
      },
      {
        text: "Thomas Jefferson influenced by John Locke’s social contract",
        indent: 2,
      },

      { text: "**New Zealand Wars**", indent: 0 },
      { text: "Wars between Maori and British", indent: 1 },
      { text: "Fostered native **nationalism**", indent: 2 },

      { text: "**French Revolution**", indent: 0 },
      { text: "**Liberty, equality, fraternity**", indent: 1 },
      {
        text: "Slogan of revolutionary philosophes, viewed as radical",
        indent: 2,
      },
      { text: "Economic inequality from war debts", indent: 1 },
      { text: "Commoners formed the **National Assembly**", indent: 2 },
      { text: "Riots throughout Paris; stormed the **Bastille**", indent: 2 },
      {
        text: "Abolished feudalism; adopted **Declaration of the Rights of Man**",
        indent: 2,
      },
      { text: "Louis XVI executed; Napoleon took power in 1804", indent: 2 },

      { text: "**Haitian Revolution**", indent: 0 },
      { text: "Enslaved Africans and maroons rebelled", indent: 1 },
      {
        text: "**Toussaint L’Overture** led rebellion against slavery and French rule",
        indent: 2,
      },
      { text: "First Latin American country to gain independence", indent: 2 },

      { text: "**Latin American Revolutions**", indent: 0 },
      { text: "Creoles desired independence from Spain", indent: 1 },
      {
        text: "Wealthy landowners opposing mercantilism and political exclusion",
        indent: 2,
      },
      { text: "Resented **peninsulares’** dominance", indent: 2 },
      {
        text: "**Simon Bolivar** helped liberate multiple Latin American countries",
        indent: 2,
      },

      { text: "**Nationalism in Europe**", indent: 0 },
      { text: "**Italy** unified under native House of Savoy", indent: 1 },
      {
        text: "**Germany** formed after Prussia defeated French forces, founding German Empire",
        indent: 1,
      },
    ],
  },
  {
    subunit: "Unit 5.3: Industrial Revolution Begins",
    events: [
      { text: "**Industrial Revolution**", indent: 0 },
      { text: "Transition from agrarian to industrial economies", indent: 1 },
      {
        text: "Changed global power balance; industrial nations became richer",
        indent: 1,
      },
      {
        text: "**Industrialization**: Increased mechanization of production",
        indent: 1,
      },
      { text: "Caused by:", indent: 2 },
      { text: "**Columbian Exchange**", indent: 3 },
      { text: "**Maritime trading empires**", indent: 3 },
      { text: "**Increased agricultural productivity**", indent: 3 },
      { text: "**Capital accumulation**", indent: 3 },
      { text: "Led to:", indent: 2 },
      { text: "**Demographic shifts**", indent: 3 },
      { text: "Population growth", indent: 3 },
      { text: "Expansion of production and consumption", indent: 3 },

      { subheading: "Agricultural Improvements" },
      { text: "Increased agricultural yield", indent: 1 },
      { text: "**Crop Rotation**", indent: 2 },
      { text: "Rotating different crops each year", indent: 3 },
      { text: "**Seed Drill**", indent: 2 },
      { text: "Placed seeds efficiently in soil", indent: 3 },
      { text: "**Potato**", indent: 2 },
      { text: "Nutrient-rich, supported population growth", indent: 3 },
      { text: "Improved medical care", indent: 2 },

      { subheading: "Preindustrial Societies" },
      {
        text: "British families worked rurally; grew food and made clothes",
        indent: 1,
      },

      { subheading: "Growth of Technology" },
      { text: "**Spinning jenny** and **water frame**", indent: 1 },
      { text: "Reduced yarn spinning and cloth weaving time", indent: 2 },
      { text: "Led to **factories** and **division of labor**", indent: 2 },
      {
        text: "Unskilled workers specialized in parts of production",
        indent: 2,
      },
      { text: "Inspired the **assembly line** in 20th century", indent: 2 },
      { text: "**Factory**: Mass production site using machines", indent: 2 },

      { subheading: "Britain’s Industrial Advantages" },
      { text: "Access to **coal** for iron and steam power", indent: 1 },
      { text: "Access to **colonial resources**", indent: 1 },
      { text: "**Capital accumulation** from transatlantic trade", indent: 1 },
      { text: "**Rivers** for raw material and product transport", indent: 1 },
      { text: "Strong **fleets** for trade and naval dominance", indent: 1 },
      { text: "**Improved agriculture** (see above)", indent: 1 },
      { text: "**Legal protection of private property**", indent: 1 },
      {
        text: "**Urbanization** and **growing population** enabled factory labor",
        indent: 1,
      },
    ],
  },
  {
    subunit: "Unit 5.4: Industrialization Spreads",
    events: [
      { subheading: "Effect of Steam Power" },
      { text: "**Steam Engine**", indent: 1 },
      {
        text: "Converted fossil fuel energy into mechanical energy",
        indent: 2,
      },
      { text: "Freed factories from needing to be near rivers", indent: 2 },
      {
        text: "Made machines portable; accelerated industrialization",
        indent: 2,
      },
      { text: "**Steamship**", indent: 1 },
      {
        text: "Coal-powered transport; faster and further trade of mass-produced goods",
        indent: 2,
      },

      { subheading: "Spread of Industrialization" },
      { text: "Industrialization depended on 7 key factors", indent: 1 },
      { text: "Countries with more factors industrialized faster", indent: 1 },
      {
        text: "Division between **industrialized** and **non-industrialized** countries",
        indent: 1,
      },
      {
        text: "**Industrialized**: Took wealth and manufacturing dominance",
        indent: 2,
      },
      {
        text: "**Non-industrialized**: Declined in production share",
        indent: 2,
      },
      { text: "**India and Egypt**", indent: 3 },
      {
        text: "Textile production harmed by British mass production",
        indent: 4,
      },
      { text: "**France and Germany**", indent: 2 },
      {
        text: "**Germany**: Fragmented at first; later unified and led in steel/coal",
        indent: 3,
      },
      {
        text: "**France**: Slower due to conflicts and lack of coal/iron",
        indent: 3,
      },

      { subheading: "Industrialization by Country" },
      { text: "**United States**", indent: 1 },
      {
        text: "Human capital (immigrant labor) drove industrialization",
        indent: 2,
      },
      { text: "**Russia**", indent: 1 },
      {
        text: "Adopted railroads and steam tech (e.g., **Trans-Siberian Railroad**)",
        indent: 2,
      },
      { text: "Traded with East Asia", indent: 3 },
      {
        text: "Top-down model caused poor conditions, leading to **Russian Revolution**",
        indent: 2,
      },
      { text: "**Japan**", indent: 1 },
      {
        text: "**Meiji Restoration**: Defensive industrialization to preserve independence",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 5.5: Technology in the Industrial Revolution",
    events: [
      { subheading: "First Industrial Revolution (1750–1830)" },
      { text: "**Great Britain**", indent: 1 },
      { text: "**Power Source: Coal**", indent: 2 },
      { text: "Main engine: **Steam engine**", indent: 3 },
      {
        text: "Freed factories from rivers; machines could be placed anywhere",
        indent: 4,
      },
      { text: "Used in **steamships** and **locomotives**", indent: 4 },

      { subheading: "Second Industrial Revolution (1870–1914)" },
      { text: "**Europe, US, Russia, Japan**", indent: 1 },
      { text: "**Power Source: Oil**", indent: 2 },
      { text: "Main engine: **Internal combustion engine**", indent: 3 },
      { text: "Smaller, more efficient than steam engine", indent: 4 },
      { text: "Led to development of the **automobile**", indent: 4 },

      { subheading: "New Technology" },
      { text: "**Steel**", indent: 1 },
      { text: "Stronger, more versatile, cheaper than iron", indent: 2 },
      { text: "Made using the **Bessemer Process**", indent: 2 },
      { text: "**Chemical Engineering**", indent: 1 },
      { text: "Created **synthetic dyes** for textiles", indent: 2 },
      { text: "Processed **rubber** to be harder and more durable", indent: 2 },
      { text: "**Electricity**", indent: 1 },
      { text: "**Light bulb** invented", indent: 2 },
      {
        text: "**Electric cars and subways** enabled mass transit in growing cities",
        indent: 2,
      },
      { text: "**Telephone** invented", indent: 2 },
      { text: "**Radio** developed", indent: 2 },
    ],
  },
  {
    subunit: "Unit 5.6: Industrialization: Government’s Role",
    events: [
      { subheading: "Ottoman Empire" },
      {
        text: '"Sick man of Europe" – suffered from overexpansion and lack of modernization',
        indent: 1,
      },
      {
        text: "**Tanzimat Reforms** – attempt to modernize economy",
        indent: 1,
      },
      { text: "Focused on **Egypt**:", indent: 2 },
      {
        text: "Built **textile factories** to compete with French/British",
        indent: 3,
      },
      { text: "Built **shipbuilding** and **armaments** factories", indent: 3 },
      { text: "Government **purchased crops** to sell globally", indent: 3 },
      { text: "Imposed **tariffs** to protect Egyptian economy", indent: 3 },
      {
        text: "Ultimately **failed** – British pressured Egypt to remove tariffs and flooded markets",
        indent: 2,
      },
      {
        text: "**First example of state-sponsored industrialization**",
        indent: 2,
      },

      { subheading: "Japan" },
      {
        text: "Pressured by **Western Powers** (e.g., spheres of influence in China)",
        indent: 1,
      },
      {
        text: "**Commodore Matthew Perry** forced Japan to open ports",
        indent: 1,
      },
      {
        text: "Led to **Meiji Restoration** – defensive industrialization",
        indent: 1,
      },
      {
        text: "**Goals**: Avoid foreign domination by adopting Western practices",
        indent: 2,
      },
      { text: "**Cultural & Political Changes**:", indent: 2 },
      { text: "Sent emissaries abroad to study Western systems", indent: 3 },
      { text: "Abolished **feudalism** and **cruel punishments**", indent: 3 },
      { text: "Established **legal equality**", indent: 3 },
      {
        text: "Created an **elected constitutional parliament** (inspired by Germany)",
        indent: 3,
      },
      { text: "**Infrastructure & Economy**:", indent: 2 },
      {
        text: "Built **railroads** and established **banking system**",
        indent: 3,
      },
      { text: "Developed **textile** and **munitions factories**", indent: 3 },
      {
        text: "**Private investment** also contributed to industrial growth",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 5.7: Economic Developments and Innovations",
    events: [
      { subheading: "The Slow Death of Mercantilism" },
      {
        text: "Mercantilism abandoned for **free market economics**",
        indent: 1,
      },
      { text: "Better suited to industrialization", indent: 2 },
      { text: "**Adam Smith** – **Wealth of Nations**", indent: 2 },
      {
        text: "Argued mercantilism benefited elites and was coercive",
        indent: 4,
      },
      {
        text: "**Laissez-faire economics** – supply/demand should guide markets",
        indent: 4,
      },
      {
        text: "Created **capitalism**",
        indent: 4,
      },
      {
        text: "Led to richer countries as governments deregulated trade",
        indent: 2,
      },
      { text: "Critics of capitalism:", indent: 1 },
      {
        text: "**Jeremy Bentham** – argued working-class suffering required government regulation",
        indent: 2,
      },
      {
        text: "**Friedrich List** – viewed global capitalism as a trick by the government",
        indent: 2,
      },
      {
        text: "Founded **Zollverein** – customs union for German states",
        indent: 3,
      },

      { subheading: "Trans-National Corporations" },
      {
        text: "**Corporations** – government-chartered businesses owned by stockholders",
        indent: 1,
      },
      {
        text: "**Limited liability** – stockholders not personally liable for company losses",
        indent: 2,
      },
      {
        text: "**Trans-National Corporations** – operated in multiple countries",
        indent: 1,
      },
      {
        text: "**HSBC** – British bank in Hong Kong for imperial trade (founded 1865)",
        indent: 2,
      },
      {
        text: "**Unilever** – British-Dutch company producing household goods",
        indent: 2,
      },

      { subheading: "Effects of Industrial Capitalism" },
      { text: "**Countries became far richer** between 1800–1900", indent: 1 },
      { text: "**Middle class** emerged", indent: 1 },
      {
        text: "**Higher standard of living** compared to previous eras",
        indent: 1,
      },
    ],
  },
  {
    subunit: "Unit 5.8: Reactions to the Industrial Economy",
    events: [
      { subheading: "Labor Unions" },
      {
        text: "Organizations of workers advocating for rights and improved conditions",
        indent: 1,
      },
      {
        text: "**Voting Rights** – unions pushed for political reform",
        indent: 2,
      },
      {
        text: "**Child labor** – activists banned labor under age 10 in Britain",
        indent: 2,
      },

      { subheading: "Calls for Reform" },
      {
        text: "**Political Reform** – conservatives/liberals in Britain and France adopted social reforms",
        indent: 1,
      },
      {
        text: "**Social Reform** – mutual aid societies for sickness/events",
        indent: 1,
      },
      {
        text: "**Educational Reform** – jobs required technical education",
        indent: 1,
      },
      {
        text: "**Urban Reform** – laws improved sanitation, waste management",
        indent: 1,
      },

      { subheading: "Resistance to Reform in Japan" },
      { text: "**Samurai** resisted Meiji Restoration", indent: 1 },
      { text: "Opposed loss of traditional dress and autonomy", indent: 2 },

      { subheading: "Ottoman Response to Industrialization" },
      {
        text: "**Defensive industrialization** through Tanzimat Reforms",
        indent: 1,
      },
      { text: "Removed government corruption", indent: 2 },
      { text: "State-sponsored education", indent: 2 },
      { text: "Codified and modernized laws", indent: 2 },
      { text: "Created legal equality for all men", indent: 2 },

      { subheading: "Reform Efforts in China" },
      {
        text: "**Trade issues** – Britain imported opium to counter trade deficit",
        indent: 1,
      },
      {
        text: "**Opium Wars** – China lost and entered unfair treaties",
        indent: 2,
      },
      {
        text: "**Self-Strengthening Movement** – aimed to modernize",
        indent: 1,
      },
      { text: "Failed due to landowning class resistance", indent: 2 },
      { text: "**Lost to Japan** in Sino-Japanese War", indent: 2 },

      { subheading: "Marxism" },
      {
        text: "**Karl Marx** critiqued capitalism's instability and inequality",
        indent: 1,
      },
      {
        text: "**Communist Manifesto** – co-authored with Friedrich Engels",
        indent: 2,
      },
      { text: "**Proletariat** – working class in factories/mines", indent: 2 },
      {
        text: "**Bourgeoisie** – middle class/investors owning production",
        indent: 2,
      },
      {
        text: "**Socialism** – state controls production for equality",
        indent: 2,
      },
      {
        text: "**Communism** – classless society through proletarian revolution",
        indent: 2,
      },
    ],
  },
  {
    subunit: "Unit 5.9: Society and the Industrial Age",
    events: [
      { subheading: "New Social Classes" },
      {
        text: "**Industrial Working Class** – factory workers from rural backgrounds",
        indent: 1,
      },
      { text: "Unskilled jobs, lived in tenements or urban slums", indent: 2 },
      {
        text: "Higher wages than rural life, but poor living conditions, disease, psychological stress",
        indent: 2,
      },
      {
        text: "**Middle Class** – white collar workers escaping poverty",
        indent: 1,
      },
      { text: "Benefited most, could afford factory goods", indent: 2 },
      { text: "Quality of life improved", indent: 2 },
      { text: "**Industrialists** – richest and most powerful", indent: 1 },

      { subheading: "Women and Industrialization" },
      {
        text: "**Working Class Women** – worked to sustain family income",
        indent: 1,
      },
      { text: "Children also worked due to low wages", indent: 2 },
      { text: "**Middle Class Women** – housewives", indent: 1 },
      { text: "Engaged in movements like **Women’s Suffrage**", indent: 2 },

      { subheading: "Challenges" },
      { text: "Rapid urbanization outpaced infrastructure", indent: 1 },
      {
        text: "Led to pollution, housing shortages, and increased crime",
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

const Tab5Screen = () => {
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
              <Text style={styles.title}>Unit 5: Revolutions</Text>
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

export default function Tab5Stack() {
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
      <Stack.Screen name="Tab1Main" component={Tab5Screen} />
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
