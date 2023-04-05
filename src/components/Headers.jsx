import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Headers = ({title, textStyle, cStyle, Children}) => {
  return (
    <View style={[cStyle, s.Headers]}>
      {Children ? '' : <Text style={[textStyle, s.textHeader]}>{title}</Text>}
    </View>
  );
};

export default Headers;

const s = StyleSheet.create({
    Headers : {
        paddingVertical: 13,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    textHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
});
