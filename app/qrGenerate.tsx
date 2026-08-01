import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import QRCode from "react-native-qrcode-svg";

export default function QRGenerate() {

  const [studentId, setStudentId] = useState("");
  const [showQR, setShowQR] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Generate QR Code</Text>

      <TextInput
        placeholder="Enter Student ID"
        value={studentId}
        onChangeText={setStudentId}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowQR(true)}
      >
        <Text style={styles.buttonText}>Generate QR</Text>
      </TouchableOpacity>

      {showQR && studentId !== "" && (
        <View style={{ marginTop: 30 }}>
          <QRCode
            value={studentId}
            size={220}
          />
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#2E86C1",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2E86C1",
    padding: 15,
    borderRadius: 8,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});