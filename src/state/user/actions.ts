import {Context} from '../index';
import {AuthMMKV} from '@mmkv';
import {AuthApi} from '@apis';
import {UserState} from './state';

const ogUserState: UserState = {
  loggedIn: false,
}

//TODO Dev delete this test function
export const testSignEvent = ({state}: Context, status: 'in' | 'out') => {
  state.user.loggedIn = status === 'in';
}

export const signIn = async ({state}: Context, {username, password}: {username: string; password: string}) => {
  const user = await AuthApi.signIn(username, password);
  //TODO check this conditional working for err and success
  if (user) {
    //TODO set user state and local storage variables here
    return true;
  }
  //TODO set login errors here
  return false;
}

export const tryAutoLogin = async ({state}: Context) => {
  //TODO set global state after success login
  try {
    const refresh_token = await AuthMMKV.getStringAsync('refresh_token');
    if (!refresh_token) return false;
    //success
    const res = await AuthApi.refreshToken(refresh_token);
    if (res) {
      state.user.loggedIn = true;
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

export const logout = async ({state}: Context) => {
  try {
    const didRemoveAuthStorage = await AuthMMKV.clearStore();
    if (didRemoveAuthStorage) {
      state.user = ogUserState;
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export const resetAuthState = ({state}: Context) => {
  state.user = ogUserState;
}