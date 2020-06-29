type ClientOptions = {
  url: string;
};

class Client {
  private url: string;

  constructor(options: ClientOptions) {
    this.url = options.url;
  }

  hello() {
    // eslint-disable-next-line no-console
    console.log(`Hello there! Connection to ${this.url}`);
  }
}

export default Client;
