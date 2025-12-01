import React, { useState } from "react";
import { Text, View, Button } from "react-native";

export default function App() {
  const [roll, setRoll] = useState<number | null>(null);

  const rollD6 = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setRoll(result);
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
      <Text style={{ fontSize: 24, marginBottom: 20 }}>D6 Roller</Text>

      <Button title="Roll D6" onPress={rollD6} />

      {roll !== null && (
        <Text style={{ fontSize: 32, marginTop: 20 }}>You Rolled: {roll}</Text>
      )}
    </View>
  );
}
