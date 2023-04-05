import Config from "react-native-config";

// console.log(Config)

const baseLogin = `${Config.API_URL}user/login`
const baseUser = `${Config.API_URL}user/`
const baseRole = `${Config.API_URL}role/`
const baseProduct = `${Config.API_URL}product/`
const baseImage = `${Config.API_URL}img/`
const baseTransc = `${Config.API_URL}transaction/`

export {
    baseLogin,
    baseUser,
    baseRole,
    baseProduct,
    baseImage,
    baseTransc
}

