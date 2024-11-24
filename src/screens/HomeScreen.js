import { StyleSheet, SafeAreaView, Text } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
		<SafeAreaView style={styles.container}>
			<Text>This is the HomeScreen.</Text>
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