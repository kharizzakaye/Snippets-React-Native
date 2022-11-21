import { View, Text } from 'react-native';

export default function Footer() {
  return (
    <View style={{ marginBottom: 10, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
