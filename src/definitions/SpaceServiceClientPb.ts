/**
 * @fileoverview gRPC-Web generated client stub for space
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  AddItemsRequest,
  AddItemsResponse,
  BackupKeysByPassphraseRequest,
  BackupKeysByPassphraseResponse,
  ConfigInfoResponse,
  CreateBucketRequest,
  CreateBucketResponse,
  CreateFolderRequest,
  CreateFolderResponse,
  CreateUsernameAndEmailRequest,
  CreateUsernameAndEmailResponse,
  FileEventResponse,
  FuseDriveResponse,
  GenerateFileShareLinkRequest,
  GenerateFileShareLinkResponse,
  GenerateKeyPairRequest,
  GenerateKeyPairResponse,
  GetIdentityByUsernameRequest,
  GetIdentityByUsernameResponse,
  ListDirectoriesRequest,
  ListDirectoriesResponse,
  OpenFileRequest,
  OpenFileResponse,
  RecoverKeysByPassphraseRequest,
  RecoverKeysByPassphraseResponse,
  ShareBucketViaEmailRequest,
  ShareBucketViaEmailResponse,
  ShareBucketViaIdentityRequest,
  ShareBucketViaIdentityResponse,
  TextileEventResponse,
  ToggleFuseRequest} from './space_pb';

export class SpaceApiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListDirectories = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDirectoriesResponse,
    (request: ListDirectoriesRequest) => {
      return request.serializeBinary();
    },
    ListDirectoriesResponse.deserializeBinary
  );

  listDirectories(
    request: ListDirectoriesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListDirectoriesResponse>;

  listDirectories(
    request: ListDirectoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDirectoriesResponse) => void): grpcWeb.ClientReadableStream<ListDirectoriesResponse>;

  listDirectories(
    request: ListDirectoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListDirectoriesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ListDirectories', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoListDirectories,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ListDirectories',
    request,
    metadata || {},
    this.methodInfoListDirectories);
  }

  methodInfoGetConfigInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    ConfigInfoResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ConfigInfoResponse.deserializeBinary
  );

  getConfigInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<ConfigInfoResponse>;

  getConfigInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ConfigInfoResponse) => void): grpcWeb.ClientReadableStream<ConfigInfoResponse>;

  getConfigInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ConfigInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GetConfigInfo', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetConfigInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetConfigInfo',
    request,
    metadata || {},
    this.methodInfoGetConfigInfo);
  }

  methodInfoGenerateKeyPair = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateKeyPairResponse,
    (request: GenerateKeyPairRequest) => {
      return request.serializeBinary();
    },
    GenerateKeyPairResponse.deserializeBinary
  );

  generateKeyPair(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null): Promise<GenerateKeyPairResponse>;

  generateKeyPair(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateKeyPairResponse) => void): grpcWeb.ClientReadableStream<GenerateKeyPairResponse>;

  generateKeyPair(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GenerateKeyPairResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GenerateKeyPair', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGenerateKeyPair,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GenerateKeyPair',
    request,
    metadata || {},
    this.methodInfoGenerateKeyPair);
  }

  methodInfoGenerateKeyPairWithForce = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateKeyPairResponse,
    (request: GenerateKeyPairRequest) => {
      return request.serializeBinary();
    },
    GenerateKeyPairResponse.deserializeBinary
  );

  generateKeyPairWithForce(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null): Promise<GenerateKeyPairResponse>;

  generateKeyPairWithForce(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateKeyPairResponse) => void): grpcWeb.ClientReadableStream<GenerateKeyPairResponse>;

  generateKeyPairWithForce(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GenerateKeyPairResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GenerateKeyPairWithForce', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGenerateKeyPairWithForce,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GenerateKeyPairWithForce',
    request,
    metadata || {},
    this.methodInfoGenerateKeyPairWithForce);
  }

  methodInfoSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    FileEventResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    FileEventResponse.deserializeBinary
  );

  subscribe(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/space.SpaceApi/Subscribe', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoSubscribe);
  }

  methodInfoTxlSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    TextileEventResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    TextileEventResponse.deserializeBinary
  );

  txlSubscribe(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/space.SpaceApi/TxlSubscribe', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoTxlSubscribe);
  }

  methodInfoOpenFile = new grpcWeb.AbstractClientBase.MethodInfo(
    OpenFileResponse,
    (request: OpenFileRequest) => {
      return request.serializeBinary();
    },
    OpenFileResponse.deserializeBinary
  );

  openFile(
    request: OpenFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<OpenFileResponse>;

  openFile(
    request: OpenFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: OpenFileResponse) => void): grpcWeb.ClientReadableStream<OpenFileResponse>;

  openFile(
    request: OpenFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: OpenFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/OpenFile', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoOpenFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/OpenFile',
    request,
    metadata || {},
    this.methodInfoOpenFile);
  }

  methodInfoAddItems = new grpcWeb.AbstractClientBase.MethodInfo(
    AddItemsResponse,
    (request: AddItemsRequest) => {
      return request.serializeBinary();
    },
    AddItemsResponse.deserializeBinary
  );

  addItems(
    request: AddItemsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/space.SpaceApi/AddItems', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoAddItems);
  }

  methodInfoCreateFolder = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateFolderResponse,
    (request: CreateFolderRequest) => {
      return request.serializeBinary();
    },
    CreateFolderResponse.deserializeBinary
  );

  createFolder(
    request: CreateFolderRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateFolderResponse>;

  createFolder(
    request: CreateFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateFolderResponse) => void): grpcWeb.ClientReadableStream<CreateFolderResponse>;

  createFolder(
    request: CreateFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateFolderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/CreateFolder', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCreateFolder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/CreateFolder',
    request,
    metadata || {},
    this.methodInfoCreateFolder);
  }

  methodInfoToggleFuseDrive = new grpcWeb.AbstractClientBase.MethodInfo(
    FuseDriveResponse,
    (request: ToggleFuseRequest) => {
      return request.serializeBinary();
    },
    FuseDriveResponse.deserializeBinary
  );

  toggleFuseDrive(
    request: ToggleFuseRequest,
    metadata: grpcWeb.Metadata | null): Promise<FuseDriveResponse>;

  toggleFuseDrive(
    request: ToggleFuseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FuseDriveResponse) => void): grpcWeb.ClientReadableStream<FuseDriveResponse>;

  toggleFuseDrive(
    request: ToggleFuseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: FuseDriveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ToggleFuseDrive', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoToggleFuseDrive,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ToggleFuseDrive',
    request,
    metadata || {},
    this.methodInfoToggleFuseDrive);
  }

  methodInfoGetFuseDriveStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    FuseDriveResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    FuseDriveResponse.deserializeBinary
  );

  getFuseDriveStatus(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<FuseDriveResponse>;

  getFuseDriveStatus(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FuseDriveResponse) => void): grpcWeb.ClientReadableStream<FuseDriveResponse>;

  getFuseDriveStatus(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: FuseDriveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GetFuseDriveStatus', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetFuseDriveStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetFuseDriveStatus',
    request,
    metadata || {},
    this.methodInfoGetFuseDriveStatus);
  }

  methodInfoCreateBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateBucketResponse,
    (request: CreateBucketRequest) => {
      return request.serializeBinary();
    },
    CreateBucketResponse.deserializeBinary
  );

  createBucket(
    request: CreateBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateBucketResponse>;

  createBucket(
    request: CreateBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateBucketResponse) => void): grpcWeb.ClientReadableStream<CreateBucketResponse>;

  createBucket(
    request: CreateBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/CreateBucket', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCreateBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/CreateBucket',
    request,
    metadata || {},
    this.methodInfoCreateBucket);
  }

  methodInfoGetIdentityByUsername = new grpcWeb.AbstractClientBase.MethodInfo(
    GetIdentityByUsernameResponse,
    (request: GetIdentityByUsernameRequest) => {
      return request.serializeBinary();
    },
    GetIdentityByUsernameResponse.deserializeBinary
  );

  getIdentityByUsername(
    request: GetIdentityByUsernameRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetIdentityByUsernameResponse>;

  getIdentityByUsername(
    request: GetIdentityByUsernameRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetIdentityByUsernameResponse) => void): grpcWeb.ClientReadableStream<GetIdentityByUsernameResponse>;

  getIdentityByUsername(
    request: GetIdentityByUsernameRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetIdentityByUsernameResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GetIdentityByUsername', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetIdentityByUsername,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetIdentityByUsername',
    request,
    metadata || {},
    this.methodInfoGetIdentityByUsername);
  }

  methodInfoCreateUsernameAndEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateUsernameAndEmailResponse,
    (request: CreateUsernameAndEmailRequest) => {
      return request.serializeBinary();
    },
    CreateUsernameAndEmailResponse.deserializeBinary
  );

  createUsernameAndEmail(
    request: CreateUsernameAndEmailRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateUsernameAndEmailResponse>;

  createUsernameAndEmail(
    request: CreateUsernameAndEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateUsernameAndEmailResponse) => void): grpcWeb.ClientReadableStream<CreateUsernameAndEmailResponse>;

  createUsernameAndEmail(
    request: CreateUsernameAndEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateUsernameAndEmailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/CreateUsernameAndEmail', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCreateUsernameAndEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/CreateUsernameAndEmail',
    request,
    metadata || {},
    this.methodInfoCreateUsernameAndEmail);
  }

  methodInfoBackupKeysByPassphrase = new grpcWeb.AbstractClientBase.MethodInfo(
    BackupKeysByPassphraseResponse,
    (request: BackupKeysByPassphraseRequest) => {
      return request.serializeBinary();
    },
    BackupKeysByPassphraseResponse.deserializeBinary
  );

  backupKeysByPassphrase(
    request: BackupKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null): Promise<BackupKeysByPassphraseResponse>;

  backupKeysByPassphrase(
    request: BackupKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BackupKeysByPassphraseResponse) => void): grpcWeb.ClientReadableStream<BackupKeysByPassphraseResponse>;

  backupKeysByPassphrase(
    request: BackupKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: BackupKeysByPassphraseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/BackupKeysByPassphrase', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoBackupKeysByPassphrase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/BackupKeysByPassphrase',
    request,
    metadata || {},
    this.methodInfoBackupKeysByPassphrase);
  }

  methodInfoRecoverKeysByPassphrase = new grpcWeb.AbstractClientBase.MethodInfo(
    RecoverKeysByPassphraseResponse,
    (request: RecoverKeysByPassphraseRequest) => {
      return request.serializeBinary();
    },
    RecoverKeysByPassphraseResponse.deserializeBinary
  );

  recoverKeysByPassphrase(
    request: RecoverKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null): Promise<RecoverKeysByPassphraseResponse>;

  recoverKeysByPassphrase(
    request: RecoverKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RecoverKeysByPassphraseResponse) => void): grpcWeb.ClientReadableStream<RecoverKeysByPassphraseResponse>;

  recoverKeysByPassphrase(
    request: RecoverKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: RecoverKeysByPassphraseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/RecoverKeysByPassphrase', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoRecoverKeysByPassphrase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/RecoverKeysByPassphrase',
    request,
    metadata || {},
    this.methodInfoRecoverKeysByPassphrase);
  }

  methodInfoShareBucketViaEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    ShareBucketViaEmailResponse,
    (request: ShareBucketViaEmailRequest) => {
      return request.serializeBinary();
    },
    ShareBucketViaEmailResponse.deserializeBinary
  );

  shareBucketViaEmail(
    request: ShareBucketViaEmailRequest,
    metadata: grpcWeb.Metadata | null): Promise<ShareBucketViaEmailResponse>;

  shareBucketViaEmail(
    request: ShareBucketViaEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ShareBucketViaEmailResponse) => void): grpcWeb.ClientReadableStream<ShareBucketViaEmailResponse>;

  shareBucketViaEmail(
    request: ShareBucketViaEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ShareBucketViaEmailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ShareBucketViaEmail', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoShareBucketViaEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ShareBucketViaEmail',
    request,
    metadata || {},
    this.methodInfoShareBucketViaEmail);
  }

  methodInfoShareBucketViaIdentity = new grpcWeb.AbstractClientBase.MethodInfo(
    ShareBucketViaIdentityResponse,
    (request: ShareBucketViaIdentityRequest) => {
      return request.serializeBinary();
    },
    ShareBucketViaIdentityResponse.deserializeBinary
  );

  shareBucketViaIdentity(
    request: ShareBucketViaIdentityRequest,
    metadata: grpcWeb.Metadata | null): Promise<ShareBucketViaIdentityResponse>;

  shareBucketViaIdentity(
    request: ShareBucketViaIdentityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ShareBucketViaIdentityResponse) => void): grpcWeb.ClientReadableStream<ShareBucketViaIdentityResponse>;

  shareBucketViaIdentity(
    request: ShareBucketViaIdentityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ShareBucketViaIdentityResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ShareBucketViaIdentity', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoShareBucketViaIdentity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ShareBucketViaIdentity',
    request,
    metadata || {},
    this.methodInfoShareBucketViaIdentity);
  }

  methodInfoGenerateFileShareLink = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateFileShareLinkResponse,
    (request: GenerateFileShareLinkRequest) => {
      return request.serializeBinary();
    },
    GenerateFileShareLinkResponse.deserializeBinary
  );

  generateFileShareLink(
    request: GenerateFileShareLinkRequest,
    metadata: grpcWeb.Metadata | null): Promise<GenerateFileShareLinkResponse>;

  generateFileShareLink(
    request: GenerateFileShareLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateFileShareLinkResponse) => void): grpcWeb.ClientReadableStream<GenerateFileShareLinkResponse>;

  generateFileShareLink(
    request: GenerateFileShareLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GenerateFileShareLinkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GenerateFileShareLink', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGenerateFileShareLink,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GenerateFileShareLink',
    request,
    metadata || {},
    this.methodInfoGenerateFileShareLink);
  }

}

