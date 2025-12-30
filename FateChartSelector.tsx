import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { fateCategories } from "./fateChart.js";

type FateChartSectionProps = {
  chaosLevel: number;
  setChaosLevel: (level: number) => void;
  rollFate: (odds: string) => void;
};

export default function FateChartSelector({
  chaosLevel,
  setChaosLevel,
  rollFate,
}: FateChartSectionProps) {
  return (
    <View style={styles.container}>
      {/* Fate Chart Section */}
      <Text style={styles.title}>Fate Chart</Text>

      {/* Chaos Selector */}
      <Text style={styles.chaosText}>Chaos Factor: {chaosLevel}</Text>
      <View style={styles.chaosSelector}>
        {[...Array(9)].map((_, i) => (
          <Button
            key={i}
            title={`${i + 1}`}
            onPress={() => setChaosLevel(i + 1)}
          />
        ))}
      </View>

      {/* Odds Button */}
      <View style={styles.oddsContainer}>
        {fateCategories.map((odds) => (
          <View key={odds} style={styles.oddsButtonWrapper}>
            <Button key={odds} title={odds} onPress={() => rollFate(odds)} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  chaosText: {
    fontSize: 18,
  },
  chaosSelector: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  oddsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  oddsButtonWrapper: {
    width: "45%",
    margin: 5,
  },
});
