import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';


export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>American Sign Language</Text>
      <Text style={styles.header}>Finger-spelling Translator</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Let’s go!</Text>
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
  title: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  header: {
    textAlign: "center",
    marginBottom: 32,
    fontSize: 24,
    fontWeight: "medium",
    color: "#000",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#d6d6d6',
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "semibold",
    color: "#000",
  },
});