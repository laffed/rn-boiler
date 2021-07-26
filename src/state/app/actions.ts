import {Context} from '@state';
import {AuthMMKV} from '@mmkv';

export const checkAppVersion = async ({state, actions}: Context) => {
  //TODO delete all MMKV storage if saved version !== current version
}

export const setShowOnboarding = async ({state}: Context, bool: boolean) => {
  await AuthMMKV.setBool("showOnboarding", bool);
  state.app.showOnboarding = bool;
}

export const checkShowOnboarding = async ({state}: Context) => {
  const shouldShow = await AuthMMKV.getBool("showOnboarding");
  if (shouldShow !== undefined && shouldShow !== null) {
    state.app.showOnboarding = shouldShow;
  }
}

export const setShowSplash = ({state}: Context, bool: boolean) => {
  state.app.showSplash = bool;
}