declare type ClientOptions = {
    url: string;
};
declare class Client {
    private url;
    constructor(options: ClientOptions);
    hello(): void;
}
export default Client;
