import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";

export default function DiceRoller() {
  const [diceCount, setDiceCount] = useState<number>(1);
  const [results, setResults] = useState<number[]>([]);

  function addDie() {
    setDiceCount((prev) => prev + 1);
  }

  function removeDie() {
    setDiceCount((prev) => (prev - 1 > 0 ? prev - 1 : 1));
  }

  function rollDice() {
    const newResults = Array.from(
      { length: diceCount },
      () => Math.floor(Math.random() * 6) + 1
    );
    setResults(newResults);
  }

  return (
    <View style={{ alignItems: "center", marginBottom: 32 }}>
      <Button title="Add Die" onPress={addDie} />
      <Button title="Remove Die" onPress={removeDie} />

      <Text style={{ fontSize: 24, marginVertical: 20 }}>D6 Roller</Text>

      <Button title="Roll Dice" onPress={rollDice} />

      <View style={{ width: "100%" }}>
        <FlatList
          data={results}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <Text style={{ fontSize: 20 }}>{`Die ${index + 1}: ${item}`}</Text>
          )}
          scrollEnabled={false}
          nestedScrollEnabled={true}
        />
      </View>
    </View>
  );
}
