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
    return Array.from(this.trailRegistry.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  loadTrails = async () => {
    this.loadingInitial = true;
    try {
      const trails = await agent.Trails.list();
      trails.forEach((trail) => {
        this.setTrail(trail);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadTrail = async (id: number) => {
    let trail = this.getTrail(id);
    this.loadingInitial = true;
    try {
      trail = await agent.Trails.details(id);
      this.setTrail(trail);
      this.selectedTrail = trail ?? undefined;
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  private getTrail = (id: number) => {
    return this.trailRegistry.get(id);
  };

  private setTrail = (trail: Trail) => {
    this.trailRegistry.set(trail.id, trail);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
