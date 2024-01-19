"use strict";
class Television {
    constructor(b, s, r, c, cT) {
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
    }
    ;
    setBrand(name) {
        return this._brand = name;
    }
    getSize() {
        return this._size;
    }
    ;
    setSize(size) {
        return this._size = size;
    }
    getResolution() {
        return this._resolution;
    }
    ;
    setResolution(resol) {
        return this._resolution = resol;
    }
    getConnections() {
        return this._connections;
    }
    setConnections(conx) {
        return this._connections = conx;
    }
    getConnectedTo() {
        return this._connectedTo;
    }
    setConnectedTo(coTo) {
        return this._connectedTo = coTo;
    }
    turnOn() {
        console.log(`This tv belongs to the brand ${this._brand}. Its size is ${this._size}. Its resolution is ${this._resolution}. The available connections are: ${this._connections}. And this television is connected to ${this._connectedTo}.`);
    }
}
const tv = new Television('Samsung', '40"', '4k', 'HDMI', 'Brasil');
tv.turnOn();
