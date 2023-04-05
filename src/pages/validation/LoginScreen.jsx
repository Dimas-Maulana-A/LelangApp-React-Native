import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Buttons, InputText, Template, Space, Rows} from '~components';
import {Hide, Show} from '~assets';
import {serverGetUserId, serverLoginUser} from '~server';
import {useNavigation} from '@react-navigation/native';
import {addLocalItem} from '~utils';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [secure, setSecure] = useState(true);
  const navigation = useNavigation();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const result = await serverLoginUser({
        username: username,
        password: password,
      });
      addLocalItem('@storageToken', result.data.token);
      addLocalItem('@storageId', result.data.__id);
      serverGetUserId(result.data.__id)
        .then(results => {
          let r = results.data ? results.data.data : '';
          navigation.navigate(
            r.role === 3 ? 'Client' : r.role === 2 ? 'Admin' : 'Developer',
          );
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
        setTimeout(() => setMessage(''), 3000);
      }
    }
  };

  return (
    <Template cStyle={s.Templates} Validate={false}>
      <View style={s.Container}>
        <Text style={s.TextHeader}>Login</Text>
        <Text style={s.TextErrorMessage}>{message}</Text>
        <Space Height={15} />
        <InputText
          Value={username}
          onChanged={text => setUsername(text)}
          placeHolder="username"
          Shadow={true}
        />
        <Space Height={20} />
        <InputText
          Secure={secure}
          Value={password}
          onChanged={text => setPassword(text)}
          placeHolder="password"
          Icons={secure ? Hide : Show}
          iconPressed={() => setSecure(!secure)}
          Shadow={true}
        />
        <Space Height={20} />
        <Buttons
          title="Log In"
          titleStyle={s.TitleButtons}
          onPressed={handleLogin}
          Shadow={true}
        />
        <Space />
        <Rows>
          <Text
            style={{
              color: 'black',
            }}>
            dont have account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={s.buttonRegister}> Register</Text>
          </TouchableOpacity>
        </Rows>
      </View>
    </Template>
  );
};

export default LoginScreen;

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
    fontSize: 18,
    textAlign: 'center',
  },

  TitleButtons: {
    color: 'white',
  },

  InputStyle: {},
  buttonRegister: {
    color: 'blue',
  },
});
