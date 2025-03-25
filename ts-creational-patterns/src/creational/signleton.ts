class SingleTon {
  private static instance: SingleTon; // make the static property to hold it through all the class and don't need get new instance every time =>guarantee that only one instance is created.
  private constructor() {}
  static getInstance(): SingleTon {
    if (!SingleTon.instance) {
      SingleTon.instance = new SingleTon();
      console.log("New instance created");
    }
    return SingleTon.instance;
  }
  public sayHello(): void {
    console.log("Hello");
  }
}
export default SingleTon;
