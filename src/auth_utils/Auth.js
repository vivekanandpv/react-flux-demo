import axios from 'axios';

let userAuth = {};

const persistAuth = () => {
  sessionStorage.setItem('auth', JSON.stringify(userAuth));
};

export const getPersistedAuth = () => {
  return JSON.parse(sessionStorage.getItem('auth'));
};

const deletePersistedAuth = () => {
  sessionStorage.removeItem('auth');
};

export const getAuthHeaders = () => {
  return {
    'X-SCB-Username': getPersistedAuth().username,
    'X-SCB-Token': getPersistedAuth().token,
  };
};

export const transmitLogin = (username, password) => {
  return axios
    .post('http://localhost:8080/api/v1/auth/login', { username, password })
    .then((response) => {
      if (response.status === 200) {
        const roles = response.data.roles.split(';');
        userAuth = { ...response.data, roles };
        persistAuth();
        return getPersistedAuth();
      } else {
        return null;
      }
    });
};

export const transmitLogout = () => {
  return axios
    .post('http://localhost:8080/api/v1/auth/logout', null, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      deletePersistedAuth();
      return true;
    });
};

export const getAuthStatus = () => {
  const auth = getPersistedAuth();
  return auth && auth.username && auth.token;
};

export const isInRole = (role) => {
  const auth = getPersistedAuth();
  return auth && auth.roles.indexOf(role) !== -1;
};
