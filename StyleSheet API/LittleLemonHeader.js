import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.headerBackground}>
      <Text
        style={headerStyles.headerText}>
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  headerBackground: {
    backgroundColor: '#EE9972'
  }
});