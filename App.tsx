import React, { useState } from "react";
import { Text, View, Button, FlatList } from "react-native";
import { fateChart, interpretFateRoll } from "./fateChart";

export default function App() {
  // State for how many dice to roll
  const [diceCount, setDiceCount] = useState<number>(1);

  // State for the results of the roll
  const [results, setResults] = useState<number[]>([]);

  // State for the chaos level
  const [chaosLevel, setChaosLevel] = useState<number>(5); // default chaos level
  const [fateResult, setFateResult] = useState<string | null>(null);

  // Roll function for D6
  const rollDice = () => {
    const newResults = Array.from(
      { length: diceCount },
      () => Math.floor(Math.random() * 6) + 1
    );
    setResults(newResults);
  };

  // Increase dice count
  const addDie = () => {
    setDiceCount((prev) => prev + 1);
  };

  // Decrease dice count
  const removeDie = () => {
    setDiceCount((prev) => {
      // Minimum allowable dice count is 1.
      return prev - 1 > 0 ? prev - 1 : 1;
    });
  };

  const rollFate = (odds: string) => {
    const roll = Math.floor(Math.random() * 100) + 1; // d100 roll
    const result = interpretFateRoll(roll, chaosLevel, odds);
    setFateResult(`Roll ${roll} vs ${odds} (Chaos ${chaosLevel}): ${result}`);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      {/* Dice Roller Section */}
      {/* Buttons to control dice */}
      <Button title="Add Die" onPress={addDie} />
      <Button title="Remove Die" onPress={removeDie} />
      <Text style={{ fontSize: 24, marginBottom: 20 }}>D6 Roller</Text>

      {/* Roll button */}
      <Button title="Roll Dice" onPress={rollDice} />

      {/* Display results */}
      <FlatList
        data={results}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <Text style={{ fontSize: 20 }}>{`Die ${index + 1}: ${item}`}</Text>
        )}
      />

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
      {Object.keys(fateChart).map((odds) => (
        <Button key={odds} title={odds} onPress={() => rollFate(odds)} />
      ))}

      {/* Fate Result */}
      {fateResult && (
        <Text style={{ fontSize: 20, marginTop: 20 }}>{fateResult}</Text>
      )}
    </View>
  );
}
