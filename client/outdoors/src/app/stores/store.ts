import { createContext, useContext } from "react";
import TrailStore from "./trailStore";

interface Store {
    trailStore: TrailStore
}

export const store: Store = {
    trailStore: new TrailStore()
}

export const StoreContext = createContext(store);


export function useStore() {
    return useContext(StoreContext);
}