import {
  auth,
  baseImage,
  baseLogin,
  baseProduct,
  baseRole,
  baseTransc,
  baseUser,
} from '~utils';

// Server Role
const serverGetRole = () => {
  const result = auth.get(baseRole);
  return result;
};

const serverGetRoleId = id => {
  const result = auth.get(`${baseRole}${id}`);
  return result;
};

const serverAddRole = data => {
  const result = auth.post(baseRole, data);
  return result;
};

const serverEditRole = (id, data) => {
  const result = auth.put(`${baseRole}${id}`, data);
  return result;
};

const serverDeleteRole = id => {
  const result = auth.delete(`${baseRole}${id}`);
  return result;
};

// Server User

const serverGetUser = () => {
  const result = auth.get(baseUser);
  return result;
};

const serverGetUserId = id => {
  const result = auth.get(`${baseUser}${id}`);
  return result;
};

const serverAddUser = data => {
  const result = auth.post(baseUser, data);
  return result;
};

const serverEditUser = (id, data) => {
  const result = auth.put(`${baseUser}${id}`, data);
  return result;
};

const serverDeleteUser = id => {
  const result = auth.delete(`${baseUser}${id}`);
  return result;
};

const serverLoginUser = data => {
  const result = auth.post(baseLogin, data);
  return result;
};

// Server Product

const serverGetProduct = () => {
  const result = auth.get(baseProduct);
  return result;
};

const serverGetProductId = id => {
  const result = auth.get(`${baseProduct}${id}`);
  return result;
};

const serverAddProduct = data => {
  const result = auth.post(baseProduct, data);
  return result;
};

const serverEditProduct = (id, data) => {
  const result = auth.put(`${baseProduct}${id}`, data);
  return result;
};

const serverDeleteProduct = id => {
  const result = auth.delete(`${baseProduct}${id}`);
  return result;
};

const serverGetImage = img => {
  const result = auth.get(`${baseImage}${img}`);
  return result;
};

// Server Transc

const serverGetTransc = () => {
  const result = auth.get(baseTransc);
  return result;
};

const serverGetTranscId = id => {
  const result = auth.get(`${baseTransc}${id}`);
  return result;
};

const serverAddTransc = data => {
  const result = auth.post(baseProduct, data);
  return result;
};

export {
  serverGetRole,
  serverGetRoleId,
  serverAddRole,
  serverEditRole,
  serverDeleteRole,
  serverGetUser,
  serverGetUserId,
  serverAddUser,
  serverEditUser,
  serverDeleteUser,
  serverGetProduct,
  serverGetProductId,
  serverAddProduct,
  serverEditProduct,
  serverDeleteProduct,
  serverGetTransc,
  serverGetTranscId,
  serverAddTransc,
  serverGetImage,
  serverLoginUser,
};
