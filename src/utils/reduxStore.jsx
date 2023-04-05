import { createStore } from 'redux';

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

export {reduxStore}