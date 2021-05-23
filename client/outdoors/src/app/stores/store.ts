import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import TrailStore from "./trailStore";

interface Store {
  trailStore: TrailStore;
  commonStore: CommonStore;
}

export const store: Store = {
  trailStore: new TrailStore(),
  commonStore: new CommonStore()
  
}

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
