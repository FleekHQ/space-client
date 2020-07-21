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
  ShareBucketPayload,
  JoinBucketPayload,
  ShareItemsToSelectGroupPayload,
  ListBucketsPayload,
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
  ShareBucketRequest,
  ShareBucketResponse,
  JoinBucketRequest,
  JoinBucketResponse,
  ThreadInfo,
  ShareItemsToSelectGroupRequest,
  ShareItemsToSelectGroupResponse,
  Invitation,
  InvitationType,
} from './definitions/space_pb';

export interface SpaceClientOpts {
  url: string;
  defaultBucket?: string;
  options?: SpaceApiClient['options_'];
  credentials?: SpaceApiClient['credentials_'];
}

const DEFAULT_BUCKET = 'personal';

class SpaceClient {
  defaultBucket: string;

  instance: SpaceApiClient;

  constructor(opts: SpaceClientOpts) {
    const {
      url,
      options,
      credentials,
      defaultBucket = DEFAULT_BUCKET,
    } = opts;

    this.defaultBucket = defaultBucket;
    this.instance = new SpaceApiClient(url, credentials, options);
  }

  listDirectory(
    payload: ListDirectoryPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ListDirectoryResponse> {
    return new Promise((resolve, reject) => {
      const request = new ListDirectoryRequest();
      const path = payload.path.replace(/^\//, '');

      const bucket = payload.bucket === '' ? null : payload.bucket;

      request.setPath(path);
      request.setBucket(bucket || this.defaultBucket);

      this.instance.listDirectory(
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
      const bucket = payload.bucket === '' ? null : payload.bucket;

      request.setBucket(bucket || this.defaultBucket);

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
      const path = payload.path.replace(/^\//, '');

      const bucket = payload.bucket === '' ? null : payload.bucket;

      request.setPath(path);
      request.setBucket(bucket || this.defaultBucket);

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
    const targetPath = payload.targetPath.replace(/^\//, '');

    const bucket = payload.bucket === '' ? null : payload.bucket;

    request.setTargetpath(targetPath);
    request.setSourcepathsList(payload.sourcePaths);
    request.setBucket(bucket || this.defaultBucket);

    const stream = this.instance.addItems(request, metadata);

    return stream;
  }

  createFolder(
    payload: CreateFolderPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<CreateFolderResponse> {
    return new Promise((resolve, reject) => {
      const request = new CreateFolderRequest();
      const path = payload.path.replace(/^\//, '');

      const bucket = payload.bucket === '' ? null : payload.bucket;

      request.setPath(path);
      request.setBucket(bucket || this.defaultBucket);

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

  /**
   * [WIP] shareBucketViaEmail
   *
   * Not supported by space daemon
   */
  shareBucketViaEmail(
    payload: ShareBucketViaEmailPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ShareBucketViaEmailResponse> {
    return new Promise((resolve, reject) => {
      const request = new ShareBucketViaEmailRequest();
      const bucket = payload.bucket === '' ? null : payload.bucket;

      request.setEmail(payload.email);
      request.setBucket(bucket || this.defaultBucket);

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
      const bucket = payload.bucket === '' ? null : payload.bucket;

      request.setIdentitytype(IdentityType[payload.identityType]);
      request.setIdentityvalue(payload.identityValue);
      request.setBucket(bucket || this.defaultBucket);

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

  /**
   * [WIP] generateFileShareLink
   *
   * Not supported by space daemon
   */
  generateFileShareLink(
    payload: GenerateFileShareLinkPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<GenerateFileShareLinkResponse> {
    return new Promise((resolve, reject) => {
      const request = new GenerateFileShareLinkRequest();
      const bucket = payload.bucket === '' ? null : payload.bucket;

      request.setFilepath(payload.filePath.replace(/^\//, ''));
      request.setBucket(bucket || this.defaultBucket);

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

  /**
   * [WIP] backupKeysByPassphrase
   *
   * Not supported by space daemon
   */
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

  /**
   * [WIP] recoverKeysByPassphrase
   *
   * Not supported by space daemon
   */
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

  /**
   * [WIP] toggleFuseDrive
   *
   * Not supported by space daemon
   */
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

  /**
   * [WIP] getFuseDriveStatus
   *
   * Not supported by space daemon
   */
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

  /**
   * [WIP] listBuckets
   *
   * Not supported by space daemon
   */
  listBuckets(
    payload: ListBucketsPayload,
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

  shareBucket(
    payload: ShareBucketPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ShareBucketResponse> {
    return new Promise((resolve, reject) => {
      const request = new ShareBucketRequest();
      const bucket = payload.bucket === '' ? null : payload.bucket;

      request.setBucket(bucket || this.defaultBucket);

      this.instance.shareBucket(
        request,
        metadata,
        (err: grpcWeb.Error, res: ShareBucketResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  joinBucket(
    payload: JoinBucketPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<JoinBucketResponse> {
    return new Promise((resolve, reject) => {
      const threadInfo = new ThreadInfo();
      threadInfo.setKey(payload.threadInfo.key);
      threadInfo.setAddressesList(payload.threadInfo.addresses);

      const request = new JoinBucketRequest();
      const bucket = payload.bucket === '' ? null : payload.bucket;

      request.setThreadinfo(threadInfo);
      request.setBucket(bucket || this.defaultBucket);

      this.instance.joinBucket(
        request,
        metadata,
        (err: grpcWeb.Error, res: JoinBucketResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  shareItemsToSelectGroup(
    payload: ShareItemsToSelectGroupPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ShareItemsToSelectGroupResponse> {
    return new Promise((resolve, reject) => {
      const bucket = payload.bucket === '' ? null : payload.bucket;
      const itemPaths = payload.itemPaths.map((path) => path.replace(/^\//, ''));

      const invitations = payload.invitations.map((inv) => {
        const invitation = new Invitation();

        invitation.setInvitationvalue(inv.invitationValue);
        invitation.setInvitationtype(InvitationType[inv.invitationType]);

        return invitation;
      });

      const request = new ShareItemsToSelectGroupRequest();

      request.setBucket(bucket || this.defaultBucket);
      request.setItempathsList(itemPaths);
      request.setInvitationsList(invitations);
      request.setCustommessage(payload.customMessage || '');

      this.instance.shareItemsToSelectGroup(
        request,
        metadata,
        (err: grpcWeb.Error, res: ShareItemsToSelectGroupResponse) => {
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
