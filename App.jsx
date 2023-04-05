import React from 'react';
import { createStore } from 'redux';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Navigations from '~navigation';
import axios from 'axios';

axios.defaults.withCredentials=true

const App = () => {
  return (
    <Provider store={reduxStore}>
    {/* <StatusBar backgroundColor="black" barStyle="light-content" /> */}
      <Navigations />
    </Provider>
  );
};

export default App;


// true = light
// false = dark
const initialState = {
  mainTheme: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.mainTheme) {
    case 'LIGHT':
      return {
        ...state,
        mainTheme: true,
      };
    case 'DARK':
      return {
        ...state,
        mainTheme: false,
      };
    default:
        return state
  }
};

const reduxStore = createStore(rootReducer);
console.log(reduxStore.getState())