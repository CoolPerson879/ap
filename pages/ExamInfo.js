import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ExamInfo() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable onPress={() => navigation.openDrawer()} style={styles.icon}>
          <Ionicons name="menu" size={24} color="black" />
        </Pressable>

        <Text style={styles.title}>
          AP World History: Modern Exam Information
        </Text>
        <Text style={styles.text}>
          The AP World History: Modern exam tests your understanding of world
          history from c. 1200 CE to the present. The exam is 3 hours and 15
          minutes long and includes both multiple-choice and free-response
          sections.
        </Text>
        <Text style={styles.subtitle}>Exam Structure</Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>
            Section I: Multiple Choice (55 questions, 55 minutes, 40% of score)
          </Text>
          {"\n"}• Questions are grouped in sets of 3–4 and based on
          primary/secondary sources, images, maps, or data.{"\n"}
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>
            Section I: Short Answer (3 questions, 40 minutes, 20% of score)
          </Text>
          {"\n"}• Analyze historical sources and develop brief written
          responses.{"\n"}
          {"\n"}• Questions 1 and 2 are required. Questions 3/4: only one of the
          two is required.{"\n"}
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>
            Section II: Free Response (100 minutes total)
          </Text>
          {"\n"} The second part of the exam does not have a set time limit for
          each part, and the time on the two sections can be divided in any way,
          but the recommended timings are listed.{"\n"}
          {"\n"}
          <Text style={{ fontWeight: "bold" }}>
            Document-Based Question (DBQ) (1 question, recommended 60 minutes,
            25% of score)
          </Text>
          {"\n"}• Analyze and synthesize historical documents to write an
          argumentative essay.{"\n"}
          {"\n"}• 7 total points{"\n"}
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>
            Long Essay Question (LEQ) (1 question, recommended 40 minutes, 15%
            of score)
          </Text>
          {"\n"}• Choose 1 of 3 prompts and develop a historical argument.
        </Text>
        <Text style={styles.subtitle}>Scoring</Text>
        <Text style={styles.text}>
          The exam is scored on a scale of 1–5. {"\n"} College Credit is awarded
          for a score of 3 ("qualified"), 4 ("well qualified"), or 5("extremely
          well qualified") {"\n"} No college credit is awarded for a score of 2
          or below. A score of 0 can be awarded if proctors find students
          cheating.
          {"\n"}Each section is weighted as described above. Free-response
          questions are scored using specific rubrics for thesis, evidence,
          analysis, and reasoning.
        </Text>
        <Text style={styles.subtitle}>Test-Taking Tips</Text>
        <Text style={styles.text}>
          • Practice analyzing primary and secondary sources.
          {"\n"}• Time yourself on practice questions to get used to the pacing.
          {"\n"}• Review the Course and Exam Description (CED) from College
          Board for key concepts and themes.
        </Text>
        <Pressable
          style={{
            backgroundColor: "#4F8EF7",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            alignSelf: "center",
            marginBottom: 16,
          }}
          onPress={() => {
            Linking.openURL(
              "https://apstudents.collegeboard.org/courses/ap-world-history-modern"
            );
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
              ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
            }}
          >
            Official AP World History Exam Info
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    alignItems: "center",
    paddingBottom: 32, // Add some bottom padding for scroll comfort
  },
  icon: {
    alignSelf: "flex-start",
    marginTop: 4,
    paddingLeft: 12,
  },
  title: {
    fontSize: 22,
    marginVertical: 16,
    fontWeight: "bold",
    textAlign: "center",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 6,
    textAlign: "center",
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  text: {
    textAlign: "center",
    marginBottom: 12,
    ...(Platform.OS === "ios" && { fontFamily: "Avenir" }),
  },
  image: {
    width: 150,
    height: 300,
    resizeMode: "contain",
    marginVertical: 12,
  },
});
