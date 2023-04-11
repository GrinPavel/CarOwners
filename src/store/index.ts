import {createContext, useContext} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncTrunk} from 'mobx-sync';

import {UserStore} from './UserStore';

export class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore();
  }
}

export const rootStore = new RootStore();

export const trunk = new AsyncTrunk(rootStore, {
  storage: AsyncStorage,
});

export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
