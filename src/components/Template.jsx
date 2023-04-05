import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {getLocalItem} from '~utils';

const Template = ({children, cStyle, Validate = true}) => {
  const focused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    Validate ? MainCheck() : '';
  }, [focused]);

  const MainCheck = async () => {
    const local = await getLocalItem('@storage_data');
    switch (local) {
      case null:
        navigation.navigate('Login');

      default:
        console.log(local);
    }
  };

  return <View style={[s.Container, cStyle]}>{children}</View>;
};

export default Template;

const s = StyleSheet.create({
  Container: {
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
});
