import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import { SBMCs } from "./SBMCs";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function SMBCPractice() {
  const drawer = useNavigation();
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null); // "correct" or "wrong"

  useEffect(() => {
    // Shuffle the questions on component mount
    const questions = shuffleArray(SBMCs);
    setShuffledQuestions(questions);
  }, []);

  useEffect(() => {
    if (shuffledQuestions.length > 0) {
      // Reset selection for each new question
      setSelectedOption(null);
      setAnswerStatus(null);

      const currentQuestion = shuffledQuestions[currentQuestionIndex];
      // Gather all options, filter out empty, then shuffle
      const options = [
        currentQuestion.answer,
        currentQuestion.optionB,
        currentQuestion.optionC,
        currentQuestion.optionD,
      ].filter(Boolean);
      setShuffledOptions(shuffleArray(options));
    }
  }, [shuffledQuestions, currentQuestionIndex]);

  const handleOptionPress = (option) => {
    // If already answered correctly, do nothing.
    if (answerStatus === "correct") return;

    if (option === shuffledQuestions[currentQuestionIndex].answer) {
      setSelectedOption(option);
      setAnswerStatus("correct");
    } else {
      setSelectedOption(option);
      setAnswerStatus("wrong");
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Optionally restart the quiz or handle completion.
      // Here we simply reset to the first question.
      setCurrentQuestionIndex(0);
    }
  };

  if (shuffledQuestions.length === 0) return null;

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.screenWrapper}>
          <View style={styles.menuRow}>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => drawer.openDrawer()}
            >
              <Ionicons name="menu" size={28} />
            </TouchableOpacity>
          </View>
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>Stimulus-Based Practice MCs</Text>
            <Text style={styles.subtitle}>
              Test your recall skills with these AP style questions! {"\n"} For
              more practice go to the Content Review page
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.contentWrapper}>
              {currentQuestion.stimulus && (
                <Text style={styles.stimulusText}>
                  {currentQuestion.stimulus}
                </Text>
              )}
              <Text style={[styles.stimulusText, styles.boldQuestion]}>
                {currentQuestion.question}
              </Text>
              {shuffledOptions.map((option, index) => {
                const isSelected = option === selectedOption;
                let borderColor = "#ccc";
                if (isSelected) {
                  borderColor =
                    option === currentQuestion.answer ? "#0f0" : "#f00";
                }
                return (
                  <TouchableOpacity
                    key={option}
                    style={[styles.optionButton, { borderColor }]}
                    onPress={() => handleOptionPress(option)}
                  >
                    <View style={styles.optionContent}>
                      <Text style={styles.optionTextCentered}>{option}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View style={styles.nextButtonWrapper}>
                {/* Move next button inside content for better control */}
                {answerStatus === "correct" && (
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={goToNextQuestion}
                  >
                    <Text style={styles.nextButtonText}>Next Question</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screenWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40, // for status bar spacing
  },
  titlesWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 2,
    marginTop: -28, // move higher up
    marginBottom: 28,
    position: "relative",
    top: -8,
  },
  title: {
    fontSize: 20, // smaller
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 2,
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
    color: "#222",
  },
  subtitle: {
    fontSize: 13, // smaller
    color: "#666",
    textAlign: "center",
    marginBottom: 2, // less space
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  container: {
    flex: 1,
    paddingVertical: 0, // remove extra vertical padding
    paddingHorizontal: 10, // less horizontal padding
    justifyContent: "flex-start",
    alignItems: "center",
  },
  menuRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 0,
    paddingHorizontal: 10,
  },
  menuButton: {
    padding: 8,
  },
  questionText: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  optionButton: {
    backgroundColor: "#fff",
    paddingVertical: 8, // smaller
    paddingHorizontal: 12, // smaller
    marginVertical: 6, // slightly smaller
    borderRadius: 8,
    borderWidth: 2,
    alignSelf: "stretch",
  },
  optionContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  optionTextCentered: {
    fontSize: 14, // smaller
    textAlign: "center",
    width: "100%",
    fontWeight: "400",
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  iconWrapper: {
    width: 28, // Fixed width for icon area
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  contentWrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 0, // move content up
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  nextButtonWrapper: {
    minHeight: 60,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    marginBottom: 0,
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: "#4caf50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "stretch",
  },
  nextButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  stimulusText: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: Platform.OS === "ios" ? "Avenir" : undefined,
  },
  boldQuestion: {
    fontWeight: "bold",
  },
});
