import React, { useState } from "react";
import { Text, View, Button, FlatList } from "react-native";

export default function App() {
  // State for how many dice to roll
  const [diceCount, setDiceCount] = useState<number>(1);

  // State for the results of the roll
  const [results, setResults] = useState<number[]>([]);

  //const [roll, setRoll] = useState<number | null>(null);

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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      {/* Buttons to control dice */}
      <Button title="Add Die" onPress={addDie} />
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
    </View>
  );
}
