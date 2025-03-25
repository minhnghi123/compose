interface Cloneable {
  clone(): Cloneable;
}

class Car implements Cloneable {
  model: string;
  public constructor(model: string) {
    this.model = model;
  }
  public clone(): this {
    return Object.assign({}, this);
  }
}
export default Car;
