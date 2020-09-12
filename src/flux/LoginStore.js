import { EventEmitter } from 'events';
import { getPersistedAuth } from '../auth_utils/Auth';
import authDispatcher from './Dispatcher';

class AuthStore extends EventEmitter {
  constructor() {
    super();
    this.userAuth = getPersistedAuth();

    setTimeout(() => {
      this.emit('login');
    }, 250);
  }

  login(userModel) {
    this.userAuth = {
      username: userModel.username,
      displayName: userModel.displayName,
      token: userModel.token,
      roles: userModel.roles,
    };

    this.emit('login');
  }

  logout() {
    this.userAuth = null;
    this.emit('logout');
  }

  getAuthStatus() {
    return this.userAuth;
  }

  authStoreActionHandler(action) {
    if (action.type === 'LOGIN') {
      this.login(action.userModel);
    }

    if (action.type === 'LOGOUT') {
      this.logout();
    }
  }
}

const authStoreInstance = new AuthStore();

authDispatcher.register(
  authStoreInstance.authStoreActionHandler.bind(authStoreInstance)
);

export default authStoreInstance;
