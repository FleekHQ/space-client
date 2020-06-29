"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(options) {
        this.url = options.url;
    }
    hello() {
        // eslint-disable-next-line no-console
        console.log(`Hello there! Connection to ${this.url}`);
    }
}
exports.default = Client;
//# sourceMappingURL=index.js.map