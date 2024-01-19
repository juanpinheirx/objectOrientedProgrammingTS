class Television {
  // attributes
  private _brand: string;
  private _size: string;
  private _resolution: string;
  private _connections: string;
  private _connectedTo: string;
  constructor(b: string, s: string, r: string, c: string, cT: string) {
    console.log(`Creating tv from brand: ${b}`);
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
    this._connectedTo = cT;
  }
  // getters and setters
  getBrand() {
    return this._brand;
  };
  setBrand(name: string) {
    return this._brand = name;
  }
  getSize() {
    return this._size;
  };
  setSize(size: string) {
    return this._size = size;
  }
  getResolution() {
    return this._resolution;
  };
  setResolution(resol: string) {
    return this._resolution = resol;
  }
  getConnections() {
    return this._connections;
  }
  setConnections(conx: string) {
    return this._connections = conx;
  }
  getConnectedTo() {
    return this._connectedTo;
  }
  setConnectedTo(coTo: string) {
    return this._connectedTo = coTo;
  }
  turnOn() {
    console.log(`This tv belongs to the brand ${this._brand}. Its size is ${this._size}. Its resolution is ${this._resolution}. The available connections are: ${this._connections}. And this television is connected to ${this._connectedTo}.`);
  }
}

const tv = new Television('Samsung', '40"', '4k', 'HDMI', 'Brasil');

tv.turnOn();