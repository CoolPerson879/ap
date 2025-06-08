import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Platform,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const Page4Screen = () => {
  const route = useRoute();
  const initialTableFromParam = route.params?.initialTable ?? "Themes";
  const [selectedTable, setSelectedTable] = useState(initialTableFromParam);
  const isTableB = selectedTable === "Thinking Skills";

  const tableDataA = [
    {
      title: "Humans & The Environment",
      leftTop: "(ENV)",
      leftBottom: "'I' of SPICES",
      right: [
        "• Geography of regions of cities",
        "• Diseases, environmental factors for population change",
        "• How humans changed the environment",
      ],
    },
    {
      title: "Cultural Developments and Interactions",
      leftTop: "(CDI)",
      leftBottom: "'C' of SPICES\nalso (CUL)",
      right: [
        "• Cultures of societies",
        "• Religions",
        "• Diffusion of cultures, how cultures and religions interacted with each other",
      ],
    },
    {
      title: "Governance",
      leftTop: "(GOV)",
      leftBottom: "'P' of SPICES",
      right: [
        "• Political structures",
        "• Revolutions",
        "• Laws passed",
        "• How people reacted to policies and political structures",
      ],
    },
    {
      title: "Economic Systems",
      leftTop: "(ECN)",
      leftBottom: "'E' of SPICES",
      right: [
        "• Economic systems of a society",
        "• How money was generated and lost in a region",
        "• Trade networks",
        "• Labor systems",
      ],
    },
    {
      title: "Social Interactions and Organization",
      leftTop: "(SIO)",
      leftBottom: "'S' of SPICES",
      right: [
        "• How people interact with each other within and outside a society",
      ],
    },
    {
      title: "Technology and Innovation",
      leftTop: "(TEC)",
      leftBottom: "not in SPICES but is an AP theme",
      right: [
        "• How humans developed new technologies",
        "• How new technologies changed societies and economic systems",
      ],
    },
  ];

  const tableDataB = [
    {
      title: "Developments and Processes",
      leftTop: "1",
      color: "#d048a8",
      right: [
        { text: "Identify a development", badge: "1.A" },
        { text: "Explain a development", badge: "1.B" },
      ],
    },
    {
      title: "Sourcing and Situation",
      leftTop: "2",
      color: "#5172aa",
      right: [
        { text: "Identify HAPP", badge: "2.A" },
        { text: "Explain HAPP", badge: "2.B" },
        { text: "Significance of HAPP", badge: "2.C" },
      ],
    },
    {
      title: "Claims and Evidence in Sources",
      leftTop: "3",
      color: "#d57443",
      right: [
        { text: "Identify / Describe a claim", badge: "3.A" },
        {
          text: "Identify evidence used in a source used to support a claim",
          badge: "3.B",
        },
        { text: "Compare arguments from two sources", badge: "3.C" },
        {
          text: "Explain how claims and evidence support / refute an argument",
          badge: "3.D",
        },
      ],
    },
    {
      title: "Contextualization",
      leftTop: "4",
      color: "#fcb71c",
      right: [
        {
          text: "Identify and describe the historical context for a development",
          badge: "4.A",
        },
        {
          text: "Explain how a historical development affects a broader historical context",
          badge: "4.B",
        },
      ],
    },
    {
      title: "Making Connections",
      leftTop: "5",
      color: "#007780",
      right: [
        {
          text: "Identify patterns between historical developments",
          badge: "5.A",
        },
        {
          text: "Explain how two historical processes are related",
          badge: "5.B",
        },
      ],
    },
    {
      title: "Argumentation",
      leftTop: "6",
      color: "#e67b32",
      right: [
        { text: "Make a defensible claim", badge: "6.A" },
        {
          text: "Support an argument using specific and relevant evidence",
          badge: "6.B",
        },
        {
          text: "Use historical reasoning to explain relationships among pieces of historical evidence",
          badge: "6.C",
        },
        {
          text: "Justify or modify an argument using diverse and alternative evidence in order to develop a complex and nuanced argument",
          badge: "6.D",
        },
      ],
    },
  ];

  const data = isTableB ? tableDataB : tableDataA;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={28} />
        </TouchableOpacity>
        <Text style={styles.title}>{selectedTable}</Text>

        <View style={styles.switcherRow}>
          {["Themes", "Thinking Skills"].map((t) => (
            <Pressable
              key={t}
              onPress={() => setSelectedTable(t)}
              style={[
                styles.switcherButton,
                selectedTable === t && styles.switcherButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.switcherText,
                  selectedTable === t && styles.switcherTextActive,
                ]}
              >
                {t}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.tableWrapper}>
          <View style={styles.table}>
            {data.map((row, i) => (
              <View key={i}>
                <View style={styles.fullRow}>
                  <Text style={styles.sectionTitle}>{row.title}</Text>
                </View>
                <View
                  style={[
                    styles.tableRow,
                    i === data.length - 1 && { borderBottomWidth: 0 },
                  ]}
                >
                  <View
                    style={[
                      styles.leftCell,
                      { backgroundColor: row.color ?? "#fff" },
                    ]}
                  >
                    <Text
                      style={[styles.leftTop, isTableB && { color: "#fff" }]}
                    >
                      {row.leftTop}
                    </Text>
                    {row.leftBottom && (
                      <Text
                        style={[
                          styles.leftBottom,
                          isTableB && { color: "#fff" },
                        ]}
                      >
                        {row.leftBottom}
                      </Text>
                    )}
                  </View>
                  <View style={styles.rightCell}>
                    {row.right.map((item, idx) => (
                      <View
                        key={idx}
                        style={[
                          styles.bulletRow,
                          isTableB && { marginBottom: 10, paddingVertical: 6 },
                        ]}
                      >
                        <Text style={styles.rightBullet}></Text>
                        {isTableB ? (
                          <View style={styles.inlineBadgeText}>
                            <View
                              style={[
                                styles.badge,
                                { backgroundColor: row.color ?? "#000" },
                              ]}
                            >
                              <Text style={styles.badgeText}>{item.badge}</Text>
                            </View>
                            <Text style={styles.rightBulletText}>
                              {item.text}
                            </Text>
                          </View>
                        ) : (
                          <Text style={styles.rightBulletText}>{item}</Text>
                        )}
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page4Screen;

const borderWidth = 1.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  switcherRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  switcherButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 20,
  },
  switcherButtonActive: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  switcherText: {
    fontSize: 14,
    color: "#000",
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  switcherTextActive: {
    color: "#fff",
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  tableWrapper: {
    marginHorizontal: 20,
  },
  table: {
    borderWidth,
    borderColor: "#444",
    borderRadius: 6,
    overflow: "hidden",
  },
  fullRow: {
    backgroundColor: "#eee",
    borderBottomWidth: borderWidth,
    borderBottomColor: "#444",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: borderWidth,
    borderBottomColor: "#444",
  },
  leftCell: {
    width: 90,
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  leftTop: {
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 4,
    color: "#000",
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  leftBottom: {
    fontSize: 13,
    lineHeight: 18,
    color: "#444",
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  rightCell: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    justifyContent: "center",
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  rightBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#000",
    marginTop: 8,
    marginRight: 10,
  },
  rightBulletText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
    color: "#111",
  },
  inlineBadgeText: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  icon: {
    position: "absolute",
    left: 16,
    top: Platform.OS === "ios" ? 60 : 20,
    zIndex: 100,
  },
});
