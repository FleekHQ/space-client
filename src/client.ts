import grpcWeb, { ClientReadableStream } from 'grpc-web';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { SpaceApiClient } from './definitions/SpaceServiceClientPb';
import {
  OpenFilePayload,
  CreateBucketPayload,
  AddItemsPayload,
  CreateFolderPayload,
  GetIdentityByUsernamePayload,
  CreateUsernameAndEmailPayload,
} from './types';
import {
  TextileEventResponse,
  ListDirectoriesRequest,
  ListDirectoriesResponse,
  OpenFileRequest,
  OpenFileResponse,
  CreateBucketRequest,
  CreateBucketResponse,
  AddItemsRequest,
  AddItemsResponse,
  CreateFolderRequest,
  CreateFolderResponse,
  GetIdentityByUsernameRequest,
  GetIdentityByUsernameResponse,
  CreateUsernameAndEmailRequest,
  CreateUsernameAndEmailResponse,
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

  addItems(
    payload: AddItemsPayload,
    metadata: grpcWeb.Metadata = {},
  ): ClientReadableStream<AddItemsResponse> {
    const request = new AddItemsRequest();
    request.setTargetpath(payload.targetPath);
    request.setSourcepathsList(payload.sourcePaths);
    const stream = this.instance.addItems(request, metadata);

    return stream;
  }

  createFolder(
    payload: CreateFolderPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<CreateFolderResponse> {
    return new Promise((resolve, reject) => {
      const request = new CreateFolderRequest();
      request.setPath(payload.path);

      this.instance.createFolder(
        request,
        metadata,
        (err: grpcWeb.Error, res: CreateFolderResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  createUsernameAndEmail(
    payload: CreateUsernameAndEmailPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<CreateUsernameAndEmailResponse> {
    return new Promise((resolve, reject) => {
      const request = new CreateUsernameAndEmailRequest();
      request.setEmail(payload.email || '');
      request.setUsername(payload.username);

      this.instance.createUsernameAndEmail(
        request,
        metadata,
        (err: grpcWeb.Error, res: CreateUsernameAndEmailResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  getIdentityByUsername(
    payload: GetIdentityByUsernamePayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<GetIdentityByUsernameResponse> {
    return new Promise((resolve, reject) => {
      const request = new GetIdentityByUsernameRequest();
      request.setUsername(payload.username);

      this.instance.getIdentityByUsername(
        request,
        metadata,
        (err: grpcWeb.Error, res: GetIdentityByUsernameResponse) => {
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
