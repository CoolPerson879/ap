import React from "react"; 
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
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

// Dummy data for practice
const practiceItems = [
{
    title: "Sample Category 1",
    subtitle: "Demo Content",
    content: "DemoStack1",
    style: 1,
    percentage: "15-20",
    items: [
        "First practice item example",
        "Second practice item example", 
        "Third practice item example",
    ],
},
{
    title: "Sample Category 2", 
    subtitle: "Test Material",
    content: "DemoStack2",
    style: 2,
    percentage: "10-15",
    items: [
        "Another practice example",
        "More sample content here",
        "Additional test material",
    ],
},
{
    title: "Sample Category 3",
    subtitle: "Practice Data", 
    content: "DemoStack3",
    style: 3,
    percentage: "20-25",
    items: [
        "Example practice content",
        "Sample learning material",
        "Demo educational content",
    ],
},
];

export default function Practice({navigation}) {
const drawer = useNavigation();

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
            return styles.dateBadge1;
    }
};

return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={practiceItems}
            ListHeaderComponent={() => (
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => drawer.openDrawer()}
                    >
                        <Ionicons name="menu" size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ position: "absolute", right: 12, top: 4 }}
                        onPress={() => {
                            navigation.navigate("Help");
                        }}
                        accessibilityLabel="Help"
                    >
                        <Ionicons name="help-circle-outline" size={28} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.text}>Practice Page</Text>
                </View>
            )}
            renderItem={({ item, index }) => (
                <Pressable onPress={() => navigation.navigate(item.content)}>
                    <View key={index} style={styles.unitContainer}>
                        <Text style={styles.unitTitle}>{item.title}</Text>
                        <View style={styles.badgeContainer}>
                            <View style={getDateBadgeStyle(item.style)}>
                                <Text style={styles.dateText}>{item.subtitle}</Text>
                            </View>
                            <View style={styles.percentageBadge}>
                                <Text style={styles.percentageText}>{item.percentage}%</Text>
                            </View>
                        </View>
                        {item.items.map((listItem, idx) => (
                            <Text key={idx} style={styles.eventItem}>
                                - {listItem}
                            </Text>
                        ))}
                        <View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
                                <Text style={styles.link}>Category {index + 1} Content </Text>
                                <Ionicons name="chevron-forward" size={20} color="#007bff" />
                            </View>
                        </View>
                    </View>
                </Pressable>
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
link:{
    color: "#007bff",
    paddingTop: 10, 
    marginRight: -7,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
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
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
},
unitContainer: {
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
unitTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2a2a2a",
    marginBottom: 8,
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
},
badgeContainer: {
    flexDirection: "row",
    marginBottom: 10,
},
dateBadge1: {
    backgroundColor: "#af52de",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 8,
},
dateBadge2: {
    backgroundColor: "#28a745",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 8,
},
dateBadge3: {
    backgroundColor: "#ff3b30",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 8,
},
dateBadge4: {
    backgroundColor: "#ffc107",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 8,
},
dateText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
},
percentageBadge: {
    backgroundColor: "#007bff",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 8,
},
percentageText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
},
eventItem: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
},
scrollViewContent: {
    paddingBottom: 20,
},
});