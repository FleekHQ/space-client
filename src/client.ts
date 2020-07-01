import grpcWeb from 'grpc-web';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { SpaceApiClient } from './definitions/SpaceServiceClientPb';
import { OpenFilePayload, CreateBucketPayload } from './types';
import {
  TextileEventResponse,
  ListDirectoriesRequest,
  ListDirectoriesResponse,
  OpenFileRequest,
  OpenFileResponse,
  CreateBucketRequest,
  CreateBucketResponse,
} from './definitions/space_pb';

export interface SpaceClientOpts {
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
    payload: OpenFilePayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<OpenFileResponse> {
    return new Promise((resolve, reject) => {
      const request = new OpenFileRequest();
      request.setPath(payload.path);

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
    payload: CreateBucketPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<CreateBucketResponse> {
    return new Promise((resolve, reject) => {
      const request = new CreateBucketRequest();
      request.setSlug(payload.slug);

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
