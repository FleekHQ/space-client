var Client = /** @class */ (function () {
    function Client(options) {
        this.url = options.url;
    }
    Client.prototype.hello = function () {
        // eslint-disable-next-line no-console
        console.log("Hello there! Connection to " + this.url);
    };
    return Client;
}());
export default Client;
//# sourceMappingURL=index.js.map