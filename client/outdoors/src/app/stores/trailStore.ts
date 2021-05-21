import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Trail } from "../models/trail";

export default class TrailStore {
  trails: Trail[] = [];
  trailRegistry = new Map<number, Trail>();
  selectedTrail: Trail | undefined = undefined;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get trailByName() {
    return Array.from(this.trailRegistry.values()).sort((a, b) =>a.name.localeCompare(b.name));
  }


  loadTrails = async () => {
    try {
      const trails = await agent.Trails.list();
      trails.forEach((trail) => {
        this.trailRegistry.set(trail.id,trail);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };


  selectTrail = (id: number) => {
      this.selectedTrail = this.trailRegistry.get(id);
  }
  cancelSelectedTrail = () => { 
    this.selectedTrail = undefined;
  }
}
