import grpcWeb from 'grpc-web';
import { GreeterClient } from './definitions/HelloworldServiceClientPb';
import {
  HelloReply,
  HelloRequest,
  RepeatHelloRequest,
} from './definitions/helloworld_pb';

interface SpaceClientOpts {
  url: string;
  options?: GreeterClient['options_'];
  credentials?: GreeterClient['credentials_'];
}

class SpaceClient {
  instance: any;

  constructor(opts: SpaceClientOpts) {
    const {
      url,
      options,
      credentials,
    } = opts;

    this.instance = new GreeterClient(url, credentials, options);
  }

  sayHello(
    name: string,
    metadata: grpcWeb.Metadata = {},
  ): Promise<HelloReply> {
    return new Promise((resolve, reject) => {
      const request = new HelloRequest();
      request.setName(name);

      this.instance.sayHello(request, metadata, (err: grpcWeb.Error, res: HelloReply) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(res);
      });
    });
  }

  sayRepeatHello(
    name: string,
    count: number = 5,
    metadata: grpcWeb.Metadata = {},
  ): grpcWeb.ClientReadableStream<HelloReply> {
    const streamRequest = new RepeatHelloRequest();
    streamRequest.setName(name);
    streamRequest.setCount(count);

    return this.instance.sayRepeatHello(streamRequest, metadata);
  }
}

export default SpaceClient;
