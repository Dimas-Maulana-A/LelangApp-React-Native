import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Buttons, InputText, Template, Space, Rows} from '~components';
import {Hide, Show} from '~assets';
import {serverAddUser} from '~server';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const navigation = useNavigation();

  const handleRegister = async e => {
    e.preventDefault();
    if (!name) {
      alert('input name');
    } else if (!username) {
      alert('input username');
    } else if (!password) {
      alert('input password');
    } else {
      try {
        const register = await serverAddUser({
          name: name,
          username: username,
          password: password,
          role: 3,
        });
        navigation.navigate('Login');
        console.log(register);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Template Validate={false} cStyle={s.Templates}>
      <View style={s.Container}>
        <Text style={s.TextHeader}>Register</Text>
        {/* <Space /> */}
        <Space Height={25} />
        <InputText
          Value={name}
          onChanged={text => setName(text)}
          placeHolder="name"
          Shadow={true}
        />
        <Space Height={15} />
        <InputText
          Value={username}
          onChanged={text => setUsername(text)}
          placeHolder="username"
          Shadow={true}
        />
        <Space Height={15} />
        <InputText
          Secure={secure}
          Value={password}
          onChanged={text => setPassword(text)}
          placeHolder="password"
          Icons={secure ? Hide : Show}
          iconPressed={() => setSecure(!secure)}
          Shadow={true}
        />
        <Space Height={15} />
        <Buttons
          title="Register"
          titleStyle={s.TitleButtons}
          onPressed={handleRegister}
          Shadow={true}
        />
        <Space />
        <Rows>
          <Text
            style={{
              color: 'black',
            }}>
            have account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={s.buttonLogin}> Login</Text>
          </TouchableOpacity>
        </Rows>
      </View>
    </Template>
  );
};

export default RegisterScreen;

const s = StyleSheet.create({
  Templates: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  Container: {},
  TextHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
  },

  TextErrorMessage: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },

  TitleButtons: {
    color: 'white',
  },

  InputStyle: {},
  buttonLogin: {
    color: 'blue',
  },
});
