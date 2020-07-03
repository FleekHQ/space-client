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
  ShareBucketViaEmailPayload,
  ShareBucketViaIdentityPayload,
  GenerateFileShareLinkPayload,
  BackupKeysByPassphrasePayload,
  RecoverKeysByPassphrasePayload,
  ToggleFusePayload,
  GetFuseDriveStatusPayload,
  ListDirectoriesPayload,
  ListDirectoryPayload,
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
  ShareBucketViaEmailRequest,
  ShareBucketViaEmailResponse,
  ShareBucketViaIdentityRequest,
  ShareBucketViaIdentityResponse,
  GenerateFileShareLinkRequest,
  GenerateFileShareLinkResponse,
  BackupKeysByPassphraseRequest,
  BackupKeysByPassphraseResponse,
  RecoverKeysByPassphraseRequest,
  RecoverKeysByPassphraseResponse,
  ToggleFuseRequest,
  FuseDriveResponse,
  FileEventResponse,
  IdentityType,
  ListBucketsRequest,
  ListBucketsResponse,
  ListDirectoryRequest,
  ListDirectoryResponse,
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

  listDirectory(
    payload: ListDirectoryPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ListDirectoryResponse> {
    return new Promise((resolve, reject) => {
      const request = new ListDirectoryRequest();
      request.setPath(payload.path);
      request.setBucket(payload.bucket);

      this.instance.listDirectories(
        request,
        metadata,
        (err: grpcWeb.Error, res: ListDirectoryResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  listDirectories(
    payload: ListDirectoriesPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ListDirectoriesResponse> {
    return new Promise((resolve, reject) => {
      const request = new ListDirectoriesRequest();
      request.setBucket(payload.bucket);

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
      request.setBucket(payload.bucket);

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
    request.setBucket(payload.bucket);
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
      request.setBucket(payload.bucket);

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

  shareBucketViaEmail(
    payload: ShareBucketViaEmailPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ShareBucketViaEmailResponse> {
    return new Promise((resolve, reject) => {
      const request = new ShareBucketViaEmailRequest();
      request.setEmail(payload.email);
      request.setBucket(payload.bucket);

      this.instance.shareBucketViaEmail(
        request,
        metadata,
        (err: grpcWeb.Error, res: ShareBucketViaEmailResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  shareBucketViaIdentity(
    payload: ShareBucketViaIdentityPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ShareBucketViaIdentityResponse> {
    return new Promise((resolve, reject) => {
      const request = new ShareBucketViaIdentityRequest();
      request.setIdentitytype(IdentityType[payload.identityType]);
      request.setIdentityvalue(payload.identityValue);
      request.setBucket(payload.bucket);

      this.instance.shareBucketViaIdentity(
        request,
        metadata,
        (err: grpcWeb.Error, res: ShareBucketViaIdentityResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  generateFileShareLink(
    payload: GenerateFileShareLinkPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<GenerateFileShareLinkResponse> {
    return new Promise((resolve, reject) => {
      const request = new GenerateFileShareLinkRequest();
      request.setBucket(payload.bucket);
      request.setFilepath(payload.filePath);

      this.instance.generateFileShareLink(
        request,
        metadata,
        (err: grpcWeb.Error, res: GenerateFileShareLinkResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  backupKeysByPassphrase(
    payload: BackupKeysByPassphrasePayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<BackupKeysByPassphraseResponse> {
    return new Promise((resolve, reject) => {
      const request = new BackupKeysByPassphraseRequest();
      request.setPassphrase(payload.passphrase);

      this.instance.backupKeysByPassphrase(
        request,
        metadata,
        (err: grpcWeb.Error, res: BackupKeysByPassphraseResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  recoverKeysByPassphrase(
    payload: RecoverKeysByPassphrasePayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<RecoverKeysByPassphraseResponse> {
    return new Promise((resolve, reject) => {
      const request = new RecoverKeysByPassphraseRequest();
      request.setPassphrase(payload.passphrase);

      this.instance.recoverKeysByPassphrase(
        request,
        metadata,
        (err: grpcWeb.Error, res: RecoverKeysByPassphraseResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  toggleFuseDrive(
    payload: ToggleFusePayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<FuseDriveResponse> {
    return new Promise((resolve, reject) => {
      const request = new ToggleFuseRequest();
      request.setMountdrive(payload.mountDrive);

      this.instance.toggleFuseDrive(
        request,
        metadata,
        (err: grpcWeb.Error, res: FuseDriveResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  getFuseDriveStatus(
    payload: GetFuseDriveStatusPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<FuseDriveResponse> {
    return new Promise((resolve, reject) => {
      const request = new Empty();

      this.instance.getFuseDriveStatus(
        request,
        metadata,
        (err: grpcWeb.Error, res: FuseDriveResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  subscribe(
    metadata: grpcWeb.Metadata = {},
  ): grpcWeb.ClientReadableStream<FileEventResponse> {
    const request = new Empty();

    return this.instance.subscribe(request, metadata);
  }

  listBuckets(
    metadata: grpcWeb.Metadata = {},
  ): Promise<ListBucketsResponse> {
    return new Promise((resolve, reject) => {
      const request = new ListBucketsRequest();

      this.instance.listBuckets(
        request,
        metadata,
        (err: grpcWeb.Error, res: ListBucketsResponse) => {
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
