import React from "react";
import { View, Text, Button } from "react-native";
import { fateCategories } from "./fateChart.js";

type FateChartSectionProps = {
  chaosLevel: number;
  setChaosLevel: (level: number) => void;
  rollFate: (odds: string) => void;
};

export default function FateChartSectionProps({
  chaosLevel,
  setChaosLevel,
  rollFate,
}: FateChartSectionProps) {
  return (
    <View>
      {/* Fate Chart Section */}
      <Text style={{ fontSize: 24, marginVertical: 20 }}>Fate Chart</Text>

      {/* Chaos Selector */}
      <Text style={{ fontSize: 18 }}>Chaos Factor: {chaosLevel}</Text>
      <View
        style={{ flexDirection: "row", flexWrap: "wrap", marginVertical: 10 }}
      >
        {[...Array(9)].map((_, i) => (
          <Button
            key={i}
            title={`${i + 1}`}
            onPress={() => setChaosLevel(i + 1)}
          />
        ))}
      </View>

      {/* Odds Button */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {fateCategories.map((odds) => (
          <View key={odds} style={{ width: "45%", margin: 5 }}>
            <Button key={odds} title={odds} onPress={() => rollFate(odds)} />
          </View>
        ))}
      </View>
    </View>
  );
}
