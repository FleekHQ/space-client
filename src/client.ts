import grpcWeb from 'grpc-web';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { SpaceApiClient } from './definitions/SpaceServiceClientPb';
import {
  TextileEventResponse,
  ListDirectoriesRequest,
  ListDirectoriesResponse,
  OpenFileRequest,
  OpenFileResponse,
  CreateBucketRequest,
  CreateBucketResponse,
} from './definitions/space_pb';

interface SpaceClientOpts {
  url: string;
  options?: SpaceApiClient['options_'];
  credentials?: SpaceApiClient['credentials_'];
}

class SpaceClient {
  instance: SpaceApiClient;

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

      this.instance.listDirectories(
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

  txlSubscribe(
    metadata: grpcWeb.Metadata = {},
  ): grpcWeb.ClientReadableStream<TextileEventResponse> {
    const request = new Empty();

    return this.instance.txlSubscribe(request, metadata);
  }

  openFile(
    path: string,
    metadata: grpcWeb.Metadata = {},
  ): Promise<OpenFileResponse> {
    return new Promise((resolve, reject) => {
      const request = new OpenFileRequest();
      request.setPath(path);

      this.instance.openFile(
        request,
        metadata,
        (err: grpcWeb.Error, res: OpenFileResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  createBucket(
    slug: string,
    metadata: grpcWeb.Metadata = {},
  ): Promise<CreateBucketResponse> {
    return new Promise((resolve, reject) => {
      const request = new CreateBucketRequest();
      request.setSlug(slug);

      this.instance.createBucket(
        request,
        metadata,
        (err: grpcWeb.Error, res: CreateBucketResponse) => {
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
