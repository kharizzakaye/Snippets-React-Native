import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          paddingTop: 20,
          paddingBottom: 5,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Little Lemons
      </Text>
    </View>
  );
}
