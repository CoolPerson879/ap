import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import { tableDataA, tableDataB } from "./page4tables.js"
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Page4Screen = () => {
  const navigation = useNavigation();

  const [selectedTable, setSelectedTable] = useState("Themes");
  const isTableB = selectedTable === "Thinking Skills";
  const data = isTableB ? tableDataB : tableDataA;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start", // changed from "center" to "flex-start"
            justifyContent: "flex-start", // ensure left alignment
            marginTop: 0, // remove extra top margin
          }}
        >
          <Pressable
            onPress={() => {
              navigation.openDrawer();
            }}
            style={{
              padding: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
            accessibilityLabel="Open menu"
          >
            <Ionicons name="menu" size={28} />
          </Pressable>
        </View>
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
    marginTop: -12,
    marginBottom: 16,
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
    marginBottom: 24,
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  tableWrapper: {
    marginHorizontal: 20,
  },
  table: {
    borderWidth,
    borderColor: "#000",
    borderRadius: 8,
    overflow: "hidden",
  },
  fullRow: {
    borderBottomWidth: borderWidth,
    borderColor: "#000",
    backgroundColor: "#f6f6f6",
    padding: 14,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: borderWidth,
    borderColor: "#000",
  },
  leftCell: {
    flex: 3,
    borderRightWidth: borderWidth,
    borderColor: "#000",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  rightCell: {
    flex: 7,
    padding: 12,
    justifyContent: "center",
  },
  leftTop: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginVertical: 4,
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  leftBottom: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
    flexWrap: "wrap",
  },
  rightBullet: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
  },
  rightBulletText: {
    fontSize: 14,
    lineHeight: 20,
    flexShrink: 1,
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  inlineBadgeText: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
    flexWrap: "nowrap",
    flex: 1,
  },

  badge: {
    backgroundColor: "#007bff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    borderRadius: 3,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
});
