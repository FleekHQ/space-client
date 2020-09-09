import grpcWeb, { ClientReadableStream } from 'grpc-web';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { SpaceApiClient } from './definitions/SpaceServiceClientPb';

import {
  OpenFilePayload,
  CreateBucketPayload,
  AddItemsPayload,
  CreateFolderPayload,
  BackupKeysByPassphrasePayload,
  RecoverKeysByPassphrasePayload,
  ToggleFusePayload,
  GetFuseDriveStatusPayload,
  ListDirectoriesPayload,
  ListDirectoryPayload,
  ToggleBucketBackupPayload,
  ShareBucketPayload,
  JoinBucketPayload,
  ReadNotificationPayload,
  GetNotificationsPayload,
  RestoreKeyPairViaMnemonicPayload,
  GetSharedWithMeFilesPayload,
  ShareFilesViaPublicKeyPayload,
  GeneratePublicFileLinkPayload,
  TestKeysPassphrasePayload,
  SetNotificationsLastSeenAtPayload,
  HandleFilesInvitationPayload,
} from './types';

import {
  TextileEventResponse,
  ListDirectoriesRequest,
  ListDirectoriesResponse,
  ToggleBucketBackupResponse,
  ToggleBucketBackupRequest,
  OpenFileRequest,
  OpenFileResponse,
  CreateBucketRequest,
  CreateBucketResponse,
  AddItemsRequest,
  AddItemsResponse,
  CreateFolderRequest,
  CreateFolderResponse,
  BackupKeysByPassphraseRequest,
  BackupKeysByPassphraseResponse,
  RecoverKeysByPassphraseRequest,
  RecoverKeysByPassphraseResponse,
  ToggleFuseRequest,
  FuseDriveResponse,
  FileEventResponse,
  FileInfoEventResponse,
  ListBucketsRequest,
  ListBucketsResponse,
  ListDirectoryRequest,
  ListDirectoryResponse,
  ShareBucketRequest,
  ShareBucketResponse,
  JoinBucketRequest,
  JoinBucketResponse,
  ThreadInfo,
  GetPublicKeyRequest,
  GetPublicKeyResponse,
  NotificationEventResponse,
  ReadNotificationRequest,
  ReadNotificationResponse,
  GetNotificationsRequest,
  GetNotificationsResponse,
  HandleFilesInvitationResponse,
  HandleFilesInvitationRequest,
  DeleteKeyPairRequest,
  DeleteKeyPairResponse,
  DeleteAccountRequest,
  DeleteAccountResponse,
  GetUsageInfoRequest,
  GetUsageInfoResponse,
  GetStoredMnemonicRequest,
  GetStoredMnemonicResponse,
  RestoreKeyPairViaMnemonicRequest,
  RestoreKeyPairViaMnemonicResponse,
  GetSharedWithMeFilesRequest,
  GetSharedWithMeFilesResponse,
  ShareFilesViaPublicKeyRequest,
  ShareFilesViaPublicKeyResponse,
  GetAPISessionTokensRequest,
  GetAPISessionTokensResponse,
  GetRecentlySharedWithResponse,
  GetRecentlySharedWithRequest,
  GeneratePublicFileLinkRequest,
  GeneratePublicFileLinkResponse,
  TestKeysPassphraseRequest,
  TestKeysPassphraseResponse,
  SetNotificationsLastSeenAtRequest,
  SetNotificationsLastSeenAtResponse,
  GenerateKeyPairRequest,
  GenerateKeyPairResponse,
  FullPath,
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

  toggleBucketBackup(
    payload: ToggleBucketBackupPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ToggleBucketBackupResponse> {
    return new Promise((resolve, reject) => {
      const request = new ToggleBucketBackupRequest();
      const { backup, bucket } = payload;

      request.setBucket(bucket);
      request.setBackup(backup);

      this.instance.toggleBucketBackup(
        request,
        metadata,
        (err: grpcWeb.Error, res: ToggleBucketBackupResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  fileInfoSubscribe(
    metadata: grpcWeb.Metadata = {},
  ): grpcWeb.ClientReadableStream<FileInfoEventResponse> {
    const request = new Empty();

    return this.instance.fileInfoSubscribe(request, metadata);
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

      if (payload.dbId) {
        request.setDbid(payload.dbId);
      }

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

  backupKeysByPassphrase(
    payload: BackupKeysByPassphrasePayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<BackupKeysByPassphraseResponse> {
    return new Promise((resolve, reject) => {
      const request = new BackupKeysByPassphraseRequest();
      request.setUuid(payload.uuid);
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
      request.setUuid(payload.uuid);
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

  setNotificationsLastSeenAt(
    payload: SetNotificationsLastSeenAtPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<SetNotificationsLastSeenAtResponse> {
    return new Promise((resolve, reject) => {
      const request = new SetNotificationsLastSeenAtRequest();
      request.setTimestamp(payload.timestamp);

      this.instance.setNotificationsLastSeenAt(
        request,
        metadata,
        (err, res) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  getNotifications(
    payload: GetNotificationsPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<GetNotificationsResponse> {
    return new Promise((resolve, reject) => {
      const request = new GetNotificationsRequest();
      request.setSeek(payload.seek);
      request.setLimit(payload.limit);

      this.instance.getNotifications(
        request,
        metadata,
        (err, res) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  handleFilesInvitation(
    payload: HandleFilesInvitationPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<HandleFilesInvitationResponse> {
    return new Promise((resolve, reject) => {
      const request = new HandleFilesInvitationRequest();
      request.setInvitationid(payload.invitationID);
      request.setAccept(payload.accept);

      this.instance.handleFilesInvitation(
        request,
        metadata,
        (err, res) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  getPublicKey(
    metadata: grpcWeb.Metadata = {},
  ): Promise<GetPublicKeyResponse> {
    return new Promise((resolve, reject) => {
      const request = new GetPublicKeyRequest();

      this.instance.getPublicKey(
        request,
        metadata,
        (err: grpcWeb.Error, res: GetPublicKeyResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  notificationSubscribe(
    metadata: grpcWeb.Metadata = {},
  ): grpcWeb.ClientReadableStream<NotificationEventResponse> {
    const request = new Empty();

    return this.instance.notificationSubscribe(request, metadata);
  }

  readNotification(
    payload: ReadNotificationPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ReadNotificationResponse> {
    return new Promise((resolve, reject) => {
      const request = new ReadNotificationRequest();
      request.setId(payload.ID);

      this.instance.readNotification(
        request,
        metadata,
        (err: grpcWeb.Error, res: ReadNotificationResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  deleteAccount(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    payload = null,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ReadNotificationResponse> {
    return new Promise((resolve, reject) => {
      const request = new DeleteAccountRequest();

      this.instance.deleteAccount(
        request,
        metadata,
        (err: grpcWeb.Error, res: DeleteAccountResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  deleteKeyPair(metadata: grpcWeb.Metadata = {}): Promise<DeleteKeyPairResponse> {
    return new Promise((resolve, reject) => {
      const request = new DeleteKeyPairRequest();

      this.instance.deleteKeyPair(
        request,
        metadata,
        (err: grpcWeb.Error, res: DeleteKeyPairResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  getUsageInfo(
    metadata: grpcWeb.Metadata = {},
  ): Promise<GetUsageInfoResponse> {
    return new Promise((resolve, reject) => {
      const request = new GetUsageInfoRequest();

      this.instance.getUsageInfo(
        request,
        metadata,
        (err: grpcWeb.Error, res: GetUsageInfoResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  getStoredMnemonic(
    metadata: grpcWeb.Metadata = {},
  ): Promise<GetStoredMnemonicResponse> {
    return new Promise((resolve, reject) => {
      const request = new GetStoredMnemonicRequest();

      this.instance.getStoredMnemonic(
        request,
        metadata,
        (err: grpcWeb.Error, res: GetStoredMnemonicResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  restoreKeyPairViaMnemonic(
    payload: RestoreKeyPairViaMnemonicPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<RestoreKeyPairViaMnemonicResponse> {
    return new Promise((resolve, reject) => {
      const request = new RestoreKeyPairViaMnemonicRequest();
      request.setMnemonic(payload.mnemonic);

      this.instance.restoreKeyPairViaMnemonic(
        request,
        metadata,
        (err: grpcWeb.Error, res: RestoreKeyPairViaMnemonicResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  getSharedWithMeFiles(
    payload: GetSharedWithMeFilesPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<GetSharedWithMeFilesResponse> {
    return new Promise((resolve, reject) => {
      const request = new GetSharedWithMeFilesRequest();

      request.setSeek(payload.seek);
      request.setLimit(payload.limit);

      this.instance.getSharedWithMeFiles(
        request,
        metadata,
        (err: grpcWeb.Error, res: GetSharedWithMeFilesResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  shareFilesViaPublicKey(
    payload: ShareFilesViaPublicKeyPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<ShareFilesViaPublicKeyResponse> {
    return new Promise((resolve, reject) => {
      const request = new ShareFilesViaPublicKeyRequest();

      const paths = payload.paths.map((path) => {
        const fullPath = new FullPath();
        const bucket = path.bucket === '' ? null : path.bucket;

        fullPath.setBucket(bucket || this.defaultBucket);
        fullPath.setPath(path.path);

        if (path.dbId) {
          fullPath.setDbid(path.dbId);
        }

        return fullPath;
      });

      request.setPathsList(paths);
      request.setPublickeysList(payload.publicKeys);

      this.instance.shareFilesViaPublicKey(
        request,
        metadata,
        (err: grpcWeb.Error, res: ShareFilesViaPublicKeyResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  getAPISessionTokens(
    metadata: grpcWeb.Metadata = {},
  ): Promise<GetAPISessionTokensResponse> {
    return new Promise((resolve, reject) => {
      const request = new GetAPISessionTokensRequest();

      this.instance.getAPISessionTokens(
        request,
        metadata,
        (err: grpcWeb.Error, res: GetAPISessionTokensResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  getRecentlySharedWith(
    metadata: grpcWeb.Metadata = {},
  ): Promise<GetRecentlySharedWithResponse> {
    return new Promise((resolve, reject) => {
      const request = new GetRecentlySharedWithRequest();

      this.instance.getRecentlySharedWith(
        request,
        metadata,
        (err: grpcWeb.Error, res: GetRecentlySharedWithResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  generatePublicFileLink(
    payload: GeneratePublicFileLinkPayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<GeneratePublicFileLinkResponse> {
    return new Promise((resolve, reject) => {
      const request = new GeneratePublicFileLinkRequest();
      const bucket = payload.bucket === '' ? null : payload.bucket;

      const itemPaths = payload.itemPaths.map((path) => path.replace(/^\//, ''));

      request.setDbid(payload.dbId);
      request.setPassword(payload.password);
      request.setItempathsList(itemPaths);
      request.setBucket(bucket || this.defaultBucket);

      this.instance.generatePublicFileLink(
        request,
        metadata,
        (err: grpcWeb.Error, res: GeneratePublicFileLinkResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  testKeysPassphrase(
    payload: TestKeysPassphrasePayload,
    metadata: grpcWeb.Metadata = {},
  ): Promise<TestKeysPassphraseResponse> {
    return new Promise((resolve, reject) => {
      const request = new TestKeysPassphraseRequest();
      request.setUuid(payload.uuid);
      request.setPassphrase(payload.passphrase);

      this.instance.testKeysPassphrase(
        request,
        metadata,
        (err: grpcWeb.Error, res: TestKeysPassphraseResponse) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  generateKeyPairWithForce(
    metadata: grpcWeb.Metadata = {},
  ): Promise<GenerateKeyPairResponse> {
    return new Promise((resolve, reject) => {
      const request = new GenerateKeyPairRequest();

      this.instance.generateKeyPairWithForce(
        request,
        metadata,
        (err: grpcWeb.Error, res: GenerateKeyPairResponse) => {
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
