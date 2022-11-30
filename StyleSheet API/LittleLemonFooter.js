import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={footerStyles.footerView}>
      <Text
        style={footerStyles.footerText}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  footerText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  footerView: {
    backgroundColor: '#EE9972',
    marginBottom: 10,
  }
});