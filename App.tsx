import React, { useState } from "react";
import { Text, View, Button, FlatList, ScrollView } from "react-native";
import { interpretFateRoll } from "./fateChart";
import FateChartSelector from "./FateChartSelector";
import DiceRoller from "./DiceRoller";

export default function App() {
  // State for how many dice to roll
  //const [diceCount, setDiceCount] = useState<number>(1);

  // State for the results of the roll
  //const [results, setResults] = useState<number[]>([]);

  // State for the chaos level
  const [chaosLevel, setChaosLevel] = useState<number>(5); // default chaos level
  const [fateResult, setFateResult] = useState<string | null>(null);

  const rollFate = (odds: string) => {
    const roll = Math.floor(Math.random() * 100) + 1; // d100 roll
    const result = interpretFateRoll(roll, chaosLevel, odds);
    setFateResult(`Roll ${roll} vs ${odds} (Chaos ${chaosLevel}): ${result}`);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        padding: 16,
      }}
    >
      {/* // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     // alignItems: "center",
    //     padding: 16,
    //   }}
    // > */}
      <DiceRoller />
      <FateChartSelector
        chaosLevel={chaosLevel}
        setChaosLevel={setChaosLevel}
        rollFate={rollFate}
      ></FateChartSelector>

      {/* Fate Result */}
      {fateResult && (
        <Text style={{ fontSize: 20, marginTop: 20 }}>{fateResult}</Text>
      )}
      {/* </View> */}
    </ScrollView>
  );
}
