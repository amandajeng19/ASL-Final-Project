import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function WelcomeScreen({ navigation }) {
  const [facing, setFacing] = useState('front');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <SafeAreaView />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera!</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Camera Permission</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
    console.log("Camera facing:", facing);
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView style={[styles.cameraFeed, {flex: 1}]} facing={facing}></CameraView>
      <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Ionicons name="camera-reverse" size={40} color="black" />
          <Text style={styles.buttonText}>Flip Camera</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  message: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "medium",
    color: "#000",
  },
  cameraFeed: {
    width: '94%',
    height: 'auto',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#d6d6d6',
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "semibold",
    marginLeft: 16,
    color: "#000",
  },
});