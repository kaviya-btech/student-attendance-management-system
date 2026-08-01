import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function QRScanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Camera permission is required
        </Text>

        <Button
          title="Grant Permission"
          onPress={requestPermission}
        />
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }: any) => {
    setScanned(true);

    Alert.alert(
      "QR Scanned",
      `Student ID : ${data}`
    );
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={
          scanned ? undefined : handleBarCodeScanned
        }
      />

      {scanned && (
        <Button
          title="Scan Again"
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },

  message: {
    textAlign: "center",
    marginTop: 100,
    marginBottom: 20,
    fontSize: 18,
  },
});