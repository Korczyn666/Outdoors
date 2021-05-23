import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import TrailStore from "./trailStore";
import UserStore from "./userStore";

interface Store {
  trailStore: TrailStore;
  commonStore: CommonStore;
  userStore: UserStore;
  modalStore: ModalStore;
}

export const store: Store = {
  trailStore: new TrailStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
