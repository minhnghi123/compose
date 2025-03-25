class House {
  doors?: number;
  windows?: number;
  roof?: string;
  public show(): void {
    console.log(
      `This house has ${this.doors} doors, ${this.windows} windows and a ${this.roof} roof`
    );
  }
}

class HouseBuilder {
  private house: House;
  public constructor() {
    this.house = new House();
  }
  public setDoors(doors: number): HouseBuilder {
    this.house.doors = doors;
    return this;
  }
  public setWindows(windows: number): HouseBuilder {
    this.house.windows = windows;
    return this;
  }
  public setRoof(roof: string): HouseBuilder {
    this.house.roof = roof;
    return this;
  }
  public build(): House {
    return this.house;
  }
}
export default HouseBuilder;
