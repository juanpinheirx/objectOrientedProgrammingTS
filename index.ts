class Television {
  // attributes
  brand: string;
  size: string;
  resolution: string;
  connections: string;
  connectedTo: string;
  constructor(b: string, s: string, r: string, c: string, cT: string) {
    console.log(`Creating tv from brand: ${b}`);
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
    this.connectedTo = cT;
  }
  // methods
  turnOn() {
    console.log(`This tv belongs to the brand ${this.brand}. Its size is ${this.size}. Its resolution is ${this.resolution}. The available connections are: ${this.connections}. And this television is connected to ${this.connectedTo}.`);
  }
}

const tv = new Television('Samsung', '40"', '4k', 'HDMI', 'Brasil');

tv.turnOn();