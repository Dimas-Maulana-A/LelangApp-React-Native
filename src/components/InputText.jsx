import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const InputText = ({
  Value,
  onChanged,
  iconPressed,
  cStyle,
  textStyle,
  Icons,
  Secure,
  placeHolder,
  Shadow = false,
}) => {
  return (
    <View style={[s.InputContainer, cStyle, Shadow ? s.shadowStyle : '']}>
      <TextInput
        secureTextEntry={Secure}
        value={Value}
        onChangeText={onChanged}
        style={[
          s.TextInput,
          textStyle,
          Icons ? {width: '90%'} : {width: '100%'},
        ]}
        placeholder={placeHolder}
      />
      {Icons ? (
        <TouchableOpacity onPress={iconPressed}>
          <Image source={Icons} resizeMode="contain" style={s.IconInput} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default InputText;

const s = StyleSheet.create({
  InputContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInput: {
    fontSize: 18,
  },
  IconInput: {
    height: 35,
    width: 35,
    tintColor: 'silver',
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
