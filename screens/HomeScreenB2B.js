import { View, StyleSheet, Text } from "react-native";

function HomeScreenB2B() {
    return (
        <View style={styles.screenStyle}>
            <Text>I m all b2b</Text>
        </View>
      );
}
export default HomeScreenB2B;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    padding: 1,
    backgroundColor: 'pink'
  }
});
