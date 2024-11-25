import { StyleSheet, SafeAreaView, Text, TouchableOpacity, Image, View } from 'react-native';


export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.cameraFeed, {flex: 1}]}></View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Home")}>
          <View style={styles.icon}></View>
          <Text style={styles.buttonText}>Flip Camera</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  cameraFeed: {
    width: '94%',
    height: 'auto',
    backgroundColor: "#000",
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
    color: "#000",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
    backgroundColor: "#000",
  }
});