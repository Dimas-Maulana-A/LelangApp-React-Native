import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Buttons = ({cStyle, onPressed, title = 'button', titleStyle, Shadow = false}) => {
  return (
    <TouchableOpacity
      style={[s.defaultButton, cStyle, Shadow ? s.shadowStyle : '']}
      onPress={onPressed}>
      <Text style={[s.defaultText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const s = StyleSheet.create({
  defaultButton: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
  },
  defaultText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  shadowStyle: {
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 2,
    elevation: 5,
  },
});
