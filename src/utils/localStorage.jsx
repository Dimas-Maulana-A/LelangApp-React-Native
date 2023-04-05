import AsyncStorage from '@react-native-async-storage/async-storage';

const getLocalItem = async key => {
  try {
    const local = await AsyncStorage.getItem(key);
    return local;
  } catch (error) {
    console.log(error);
  }
};

const addLocalItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('setItem', value);
  } catch (error) {
    console.log(error);
  }
};

const removeLocalItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('remove item', key);
  } catch (error) {
    console.log(error);
  }
};

const clearLocalItem = async () => {
  try {
    await AsyncStorage.clear();
    console.log('clear item');
  } catch (error) {
    console.log(error);
  }
};

export {getLocalItem, addLocalItem, removeLocalItem, clearLocalItem};
