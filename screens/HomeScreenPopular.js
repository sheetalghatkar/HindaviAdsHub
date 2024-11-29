import { View, StyleSheet, Text } from "react-native";

function HomeScreenPopular() {
    return (
        <View style={styles.screenStyle}>
            <Text>I m inside Polpolar</Text>
        </View>
      );
}
export default HomeScreenPopular;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    padding: 1,
    backgroundColor: 'yellow'
  }
});
