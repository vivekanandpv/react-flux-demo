import authDispatcher from './Dispatcher';

export const login = (userModel) => {
  authDispatcher.dispatch({
    type: 'LOGIN',
    userModel,
  });
};

export const logout = () => {
  authDispatcher.dispatch({
    type: 'LOGOUT',
  });
};
