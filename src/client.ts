import grpcWeb from 'grpc-web';
import { SpaceApiClient } from './definitions/SpaceServiceClientPb';
import {
  ListDirectoriesRequest,
  ListDirectoriesResponse,
} from './definitions/space_pb';

interface SpaceClientOpts {
  url: string;
  options?: SpaceApiClient['options_'];
  credentials?: SpaceApiClient['credentials_'];
}

class SpaceClient {
  instance: any;

  constructor(opts: SpaceClientOpts) {
    const {
      url,
      options,
      credentials,
    } = opts;

    this.instance = new SpaceApiClient(url, credentials, options);
  }

  listDirectories(metadata: grpcWeb.Metadata = {}): Promise<ListDirectoriesResponse> {
    return new Promise((resolve, reject) => {
      const request = new ListDirectoriesRequest();

      this.instance.ListDirectories(
        request,
        metadata,
        (err: grpcWeb.Error, res: ListDirectoriesResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }
}

export default SpaceClient;
