import { StyleSheet, SafeAreaView, Text } from 'react-native';


export default function WelcomeScreen({ navigation }) {
    return (
		<SafeAreaView style={styles.container}>
			<Text>This is the WelcomeScreen.</Text>
            <Button
				title="Go to Home Screen"
				onPress={() => navigation.navigate("Home")}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });