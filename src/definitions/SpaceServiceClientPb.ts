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
import * as space_pb from './space_pb';


export class SpaceApiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListDirectories = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.ListDirectoriesResponse,
    (request: space_pb.ListDirectoriesRequest) => {
      return request.serializeBinary();
    },
    space_pb.ListDirectoriesResponse.deserializeBinary
  );

  listDirectories(
    request: space_pb.ListDirectoriesRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.ListDirectoriesResponse>;

  listDirectories(
    request: space_pb.ListDirectoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.ListDirectoriesResponse) => void): grpcWeb.ClientReadableStream<space_pb.ListDirectoriesResponse>;

  listDirectories(
    request: space_pb.ListDirectoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.ListDirectoriesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/ListDirectories',
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

  methodInfoListDirectory = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.ListDirectoryResponse,
    (request: space_pb.ListDirectoryRequest) => {
      return request.serializeBinary();
    },
    space_pb.ListDirectoryResponse.deserializeBinary
  );

  listDirectory(
    request: space_pb.ListDirectoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.ListDirectoryResponse>;

  listDirectory(
    request: space_pb.ListDirectoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.ListDirectoryResponse) => void): grpcWeb.ClientReadableStream<space_pb.ListDirectoryResponse>;

  listDirectory(
    request: space_pb.ListDirectoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.ListDirectoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/ListDirectory',
        request,
        metadata || {},
        this.methodInfoListDirectory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ListDirectory',
    request,
    metadata || {},
    this.methodInfoListDirectory);
  }

  methodInfoGenerateKeyPair = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GenerateKeyPairResponse,
    (request: space_pb.GenerateKeyPairRequest) => {
      return request.serializeBinary();
    },
    space_pb.GenerateKeyPairResponse.deserializeBinary
  );

  generateKeyPair(
    request: space_pb.GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GenerateKeyPairResponse>;

  generateKeyPair(
    request: space_pb.GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GenerateKeyPairResponse) => void): grpcWeb.ClientReadableStream<space_pb.GenerateKeyPairResponse>;

  generateKeyPair(
    request: space_pb.GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GenerateKeyPairResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GenerateKeyPair',
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

  methodInfoGetStoredMnemonic = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GetStoredMnemonicResponse,
    (request: space_pb.GetStoredMnemonicRequest) => {
      return request.serializeBinary();
    },
    space_pb.GetStoredMnemonicResponse.deserializeBinary
  );

  getStoredMnemonic(
    request: space_pb.GetStoredMnemonicRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GetStoredMnemonicResponse>;

  getStoredMnemonic(
    request: space_pb.GetStoredMnemonicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GetStoredMnemonicResponse) => void): grpcWeb.ClientReadableStream<space_pb.GetStoredMnemonicResponse>;

  getStoredMnemonic(
    request: space_pb.GetStoredMnemonicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GetStoredMnemonicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GetStoredMnemonic',
        request,
        metadata || {},
        this.methodInfoGetStoredMnemonic,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetStoredMnemonic',
    request,
    metadata || {},
    this.methodInfoGetStoredMnemonic);
  }

  methodInfoRestoreKeyPairViaMnemonic = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.RestoreKeyPairViaMnemonicResponse,
    (request: space_pb.RestoreKeyPairViaMnemonicRequest) => {
      return request.serializeBinary();
    },
    space_pb.RestoreKeyPairViaMnemonicResponse.deserializeBinary
  );

  restoreKeyPairViaMnemonic(
    request: space_pb.RestoreKeyPairViaMnemonicRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.RestoreKeyPairViaMnemonicResponse>;

  restoreKeyPairViaMnemonic(
    request: space_pb.RestoreKeyPairViaMnemonicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.RestoreKeyPairViaMnemonicResponse) => void): grpcWeb.ClientReadableStream<space_pb.RestoreKeyPairViaMnemonicResponse>;

  restoreKeyPairViaMnemonic(
    request: space_pb.RestoreKeyPairViaMnemonicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.RestoreKeyPairViaMnemonicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/RestoreKeyPairViaMnemonic',
        request,
        metadata || {},
        this.methodInfoRestoreKeyPairViaMnemonic,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/RestoreKeyPairViaMnemonic',
    request,
    metadata || {},
    this.methodInfoRestoreKeyPairViaMnemonic);
  }

  methodInfoDeleteKeyPair = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.DeleteKeyPairResponse,
    (request: space_pb.DeleteKeyPairRequest) => {
      return request.serializeBinary();
    },
    space_pb.DeleteKeyPairResponse.deserializeBinary
  );

  deleteKeyPair(
    request: space_pb.DeleteKeyPairRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.DeleteKeyPairResponse>;

  deleteKeyPair(
    request: space_pb.DeleteKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.DeleteKeyPairResponse) => void): grpcWeb.ClientReadableStream<space_pb.DeleteKeyPairResponse>;

  deleteKeyPair(
    request: space_pb.DeleteKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.DeleteKeyPairResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/DeleteKeyPair',
        request,
        metadata || {},
        this.methodInfoDeleteKeyPair,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/DeleteKeyPair',
    request,
    metadata || {},
    this.methodInfoDeleteKeyPair);
  }

  methodInfoGenerateKeyPairWithForce = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GenerateKeyPairResponse,
    (request: space_pb.GenerateKeyPairRequest) => {
      return request.serializeBinary();
    },
    space_pb.GenerateKeyPairResponse.deserializeBinary
  );

  generateKeyPairWithForce(
    request: space_pb.GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GenerateKeyPairResponse>;

  generateKeyPairWithForce(
    request: space_pb.GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GenerateKeyPairResponse) => void): grpcWeb.ClientReadableStream<space_pb.GenerateKeyPairResponse>;

  generateKeyPairWithForce(
    request: space_pb.GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GenerateKeyPairResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GenerateKeyPairWithForce',
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

  methodInfoGetPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GetPublicKeyResponse,
    (request: space_pb.GetPublicKeyRequest) => {
      return request.serializeBinary();
    },
    space_pb.GetPublicKeyResponse.deserializeBinary
  );

  getPublicKey(
    request: space_pb.GetPublicKeyRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GetPublicKeyResponse>;

  getPublicKey(
    request: space_pb.GetPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GetPublicKeyResponse) => void): grpcWeb.ClientReadableStream<space_pb.GetPublicKeyResponse>;

  getPublicKey(
    request: space_pb.GetPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GetPublicKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GetPublicKey',
        request,
        metadata || {},
        this.methodInfoGetPublicKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetPublicKey',
    request,
    metadata || {},
    this.methodInfoGetPublicKey);
  }

  methodInfoSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.FileEventResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    space_pb.FileEventResponse.deserializeBinary
  );

  subscribe(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/space.SpaceApi/Subscribe',
      request,
      metadata || {},
      this.methodInfoSubscribe);
  }

  methodInfoTxlSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.TextileEventResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    space_pb.TextileEventResponse.deserializeBinary
  );

  txlSubscribe(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/space.SpaceApi/TxlSubscribe',
      request,
      metadata || {},
      this.methodInfoTxlSubscribe);
  }

  methodInfoOpenFile = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.OpenFileResponse,
    (request: space_pb.OpenFileRequest) => {
      return request.serializeBinary();
    },
    space_pb.OpenFileResponse.deserializeBinary
  );

  openFile(
    request: space_pb.OpenFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.OpenFileResponse>;

  openFile(
    request: space_pb.OpenFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.OpenFileResponse) => void): grpcWeb.ClientReadableStream<space_pb.OpenFileResponse>;

  openFile(
    request: space_pb.OpenFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.OpenFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/OpenFile',
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

  methodInfoGeneratePublicFileLink = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GeneratePublicFileLinkResponse,
    (request: space_pb.GeneratePublicFileLinkRequest) => {
      return request.serializeBinary();
    },
    space_pb.GeneratePublicFileLinkResponse.deserializeBinary
  );

  generatePublicFileLink(
    request: space_pb.GeneratePublicFileLinkRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GeneratePublicFileLinkResponse>;

  generatePublicFileLink(
    request: space_pb.GeneratePublicFileLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GeneratePublicFileLinkResponse) => void): grpcWeb.ClientReadableStream<space_pb.GeneratePublicFileLinkResponse>;

  generatePublicFileLink(
    request: space_pb.GeneratePublicFileLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GeneratePublicFileLinkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GeneratePublicFileLink',
        request,
        metadata || {},
        this.methodInfoGeneratePublicFileLink,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GeneratePublicFileLink',
    request,
    metadata || {},
    this.methodInfoGeneratePublicFileLink);
  }

  methodInfoGetSharedWithMeFiles = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GetSharedWithMeFilesResponse,
    (request: space_pb.GetSharedWithMeFilesRequest) => {
      return request.serializeBinary();
    },
    space_pb.GetSharedWithMeFilesResponse.deserializeBinary
  );

  getSharedWithMeFiles(
    request: space_pb.GetSharedWithMeFilesRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GetSharedWithMeFilesResponse>;

  getSharedWithMeFiles(
    request: space_pb.GetSharedWithMeFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GetSharedWithMeFilesResponse) => void): grpcWeb.ClientReadableStream<space_pb.GetSharedWithMeFilesResponse>;

  getSharedWithMeFiles(
    request: space_pb.GetSharedWithMeFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GetSharedWithMeFilesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GetSharedWithMeFiles',
        request,
        metadata || {},
        this.methodInfoGetSharedWithMeFiles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetSharedWithMeFiles',
    request,
    metadata || {},
    this.methodInfoGetSharedWithMeFiles);
  }

  methodInfoGetSharedByMeFiles = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GetSharedByMeFilesResponse,
    (request: space_pb.GetSharedByMeFilesRequest) => {
      return request.serializeBinary();
    },
    space_pb.GetSharedByMeFilesResponse.deserializeBinary
  );

  getSharedByMeFiles(
    request: space_pb.GetSharedByMeFilesRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GetSharedByMeFilesResponse>;

  getSharedByMeFiles(
    request: space_pb.GetSharedByMeFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GetSharedByMeFilesResponse) => void): grpcWeb.ClientReadableStream<space_pb.GetSharedByMeFilesResponse>;

  getSharedByMeFiles(
    request: space_pb.GetSharedByMeFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GetSharedByMeFilesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GetSharedByMeFiles',
        request,
        metadata || {},
        this.methodInfoGetSharedByMeFiles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetSharedByMeFiles',
    request,
    metadata || {},
    this.methodInfoGetSharedByMeFiles);
  }

  methodInfoOpenPublicFile = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.OpenPublicFileResponse,
    (request: space_pb.OpenPublicFileRequest) => {
      return request.serializeBinary();
    },
    space_pb.OpenPublicFileResponse.deserializeBinary
  );

  openPublicFile(
    request: space_pb.OpenPublicFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.OpenPublicFileResponse>;

  openPublicFile(
    request: space_pb.OpenPublicFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.OpenPublicFileResponse) => void): grpcWeb.ClientReadableStream<space_pb.OpenPublicFileResponse>;

  openPublicFile(
    request: space_pb.OpenPublicFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.OpenPublicFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/OpenPublicFile',
        request,
        metadata || {},
        this.methodInfoOpenPublicFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/OpenPublicFile',
    request,
    metadata || {},
    this.methodInfoOpenPublicFile);
  }

  methodInfoAddItems = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.AddItemsResponse,
    (request: space_pb.AddItemsRequest) => {
      return request.serializeBinary();
    },
    space_pb.AddItemsResponse.deserializeBinary
  );

  addItems(
    request: space_pb.AddItemsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/space.SpaceApi/AddItems',
      request,
      metadata || {},
      this.methodInfoAddItems);
  }

  methodInfoCreateFolder = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.CreateFolderResponse,
    (request: space_pb.CreateFolderRequest) => {
      return request.serializeBinary();
    },
    space_pb.CreateFolderResponse.deserializeBinary
  );

  createFolder(
    request: space_pb.CreateFolderRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.CreateFolderResponse>;

  createFolder(
    request: space_pb.CreateFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.CreateFolderResponse) => void): grpcWeb.ClientReadableStream<space_pb.CreateFolderResponse>;

  createFolder(
    request: space_pb.CreateFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.CreateFolderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/CreateFolder',
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
    space_pb.FuseDriveResponse,
    (request: space_pb.ToggleFuseRequest) => {
      return request.serializeBinary();
    },
    space_pb.FuseDriveResponse.deserializeBinary
  );

  toggleFuseDrive(
    request: space_pb.ToggleFuseRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.FuseDriveResponse>;

  toggleFuseDrive(
    request: space_pb.ToggleFuseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.FuseDriveResponse) => void): grpcWeb.ClientReadableStream<space_pb.FuseDriveResponse>;

  toggleFuseDrive(
    request: space_pb.ToggleFuseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.FuseDriveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/ToggleFuseDrive',
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
    space_pb.FuseDriveResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    space_pb.FuseDriveResponse.deserializeBinary
  );

  getFuseDriveStatus(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.FuseDriveResponse>;

  getFuseDriveStatus(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.FuseDriveResponse) => void): grpcWeb.ClientReadableStream<space_pb.FuseDriveResponse>;

  getFuseDriveStatus(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.FuseDriveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GetFuseDriveStatus',
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
    space_pb.CreateBucketResponse,
    (request: space_pb.CreateBucketRequest) => {
      return request.serializeBinary();
    },
    space_pb.CreateBucketResponse.deserializeBinary
  );

  createBucket(
    request: space_pb.CreateBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.CreateBucketResponse>;

  createBucket(
    request: space_pb.CreateBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.CreateBucketResponse) => void): grpcWeb.ClientReadableStream<space_pb.CreateBucketResponse>;

  createBucket(
    request: space_pb.CreateBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.CreateBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/CreateBucket',
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

  methodInfoBackupKeysByPassphrase = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.BackupKeysByPassphraseResponse,
    (request: space_pb.BackupKeysByPassphraseRequest) => {
      return request.serializeBinary();
    },
    space_pb.BackupKeysByPassphraseResponse.deserializeBinary
  );

  backupKeysByPassphrase(
    request: space_pb.BackupKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.BackupKeysByPassphraseResponse>;

  backupKeysByPassphrase(
    request: space_pb.BackupKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.BackupKeysByPassphraseResponse) => void): grpcWeb.ClientReadableStream<space_pb.BackupKeysByPassphraseResponse>;

  backupKeysByPassphrase(
    request: space_pb.BackupKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.BackupKeysByPassphraseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/BackupKeysByPassphrase',
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
    space_pb.RecoverKeysByPassphraseResponse,
    (request: space_pb.RecoverKeysByPassphraseRequest) => {
      return request.serializeBinary();
    },
    space_pb.RecoverKeysByPassphraseResponse.deserializeBinary
  );

  recoverKeysByPassphrase(
    request: space_pb.RecoverKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.RecoverKeysByPassphraseResponse>;

  recoverKeysByPassphrase(
    request: space_pb.RecoverKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.RecoverKeysByPassphraseResponse) => void): grpcWeb.ClientReadableStream<space_pb.RecoverKeysByPassphraseResponse>;

  recoverKeysByPassphrase(
    request: space_pb.RecoverKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.RecoverKeysByPassphraseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/RecoverKeysByPassphrase',
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

  methodInfoTestKeysPassphrase = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.TestKeysPassphraseResponse,
    (request: space_pb.TestKeysPassphraseRequest) => {
      return request.serializeBinary();
    },
    space_pb.TestKeysPassphraseResponse.deserializeBinary
  );

  testKeysPassphrase(
    request: space_pb.TestKeysPassphraseRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.TestKeysPassphraseResponse>;

  testKeysPassphrase(
    request: space_pb.TestKeysPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.TestKeysPassphraseResponse) => void): grpcWeb.ClientReadableStream<space_pb.TestKeysPassphraseResponse>;

  testKeysPassphrase(
    request: space_pb.TestKeysPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.TestKeysPassphraseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/TestKeysPassphrase',
        request,
        metadata || {},
        this.methodInfoTestKeysPassphrase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/TestKeysPassphrase',
    request,
    metadata || {},
    this.methodInfoTestKeysPassphrase);
  }

  methodInfoCreateLocalKeysBackup = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.CreateLocalKeysBackupResponse,
    (request: space_pb.CreateLocalKeysBackupRequest) => {
      return request.serializeBinary();
    },
    space_pb.CreateLocalKeysBackupResponse.deserializeBinary
  );

  createLocalKeysBackup(
    request: space_pb.CreateLocalKeysBackupRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.CreateLocalKeysBackupResponse>;

  createLocalKeysBackup(
    request: space_pb.CreateLocalKeysBackupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.CreateLocalKeysBackupResponse) => void): grpcWeb.ClientReadableStream<space_pb.CreateLocalKeysBackupResponse>;

  createLocalKeysBackup(
    request: space_pb.CreateLocalKeysBackupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.CreateLocalKeysBackupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/CreateLocalKeysBackup',
        request,
        metadata || {},
        this.methodInfoCreateLocalKeysBackup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/CreateLocalKeysBackup',
    request,
    metadata || {},
    this.methodInfoCreateLocalKeysBackup);
  }

  methodInfoRecoverKeysByLocalBackup = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.RecoverKeysByLocalBackupResponse,
    (request: space_pb.RecoverKeysByLocalBackupRequest) => {
      return request.serializeBinary();
    },
    space_pb.RecoverKeysByLocalBackupResponse.deserializeBinary
  );

  recoverKeysByLocalBackup(
    request: space_pb.RecoverKeysByLocalBackupRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.RecoverKeysByLocalBackupResponse>;

  recoverKeysByLocalBackup(
    request: space_pb.RecoverKeysByLocalBackupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.RecoverKeysByLocalBackupResponse) => void): grpcWeb.ClientReadableStream<space_pb.RecoverKeysByLocalBackupResponse>;

  recoverKeysByLocalBackup(
    request: space_pb.RecoverKeysByLocalBackupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.RecoverKeysByLocalBackupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/RecoverKeysByLocalBackup',
        request,
        metadata || {},
        this.methodInfoRecoverKeysByLocalBackup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/RecoverKeysByLocalBackup',
    request,
    metadata || {},
    this.methodInfoRecoverKeysByLocalBackup);
  }

  methodInfoShareBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.ShareBucketResponse,
    (request: space_pb.ShareBucketRequest) => {
      return request.serializeBinary();
    },
    space_pb.ShareBucketResponse.deserializeBinary
  );

  shareBucket(
    request: space_pb.ShareBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.ShareBucketResponse>;

  shareBucket(
    request: space_pb.ShareBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.ShareBucketResponse) => void): grpcWeb.ClientReadableStream<space_pb.ShareBucketResponse>;

  shareBucket(
    request: space_pb.ShareBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.ShareBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/ShareBucket',
        request,
        metadata || {},
        this.methodInfoShareBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ShareBucket',
    request,
    metadata || {},
    this.methodInfoShareBucket);
  }

  methodInfoJoinBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.JoinBucketResponse,
    (request: space_pb.JoinBucketRequest) => {
      return request.serializeBinary();
    },
    space_pb.JoinBucketResponse.deserializeBinary
  );

  joinBucket(
    request: space_pb.JoinBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.JoinBucketResponse>;

  joinBucket(
    request: space_pb.JoinBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.JoinBucketResponse) => void): grpcWeb.ClientReadableStream<space_pb.JoinBucketResponse>;

  joinBucket(
    request: space_pb.JoinBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.JoinBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/JoinBucket',
        request,
        metadata || {},
        this.methodInfoJoinBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/JoinBucket',
    request,
    metadata || {},
    this.methodInfoJoinBucket);
  }

  methodInfoShareFilesViaPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.ShareFilesViaPublicKeyResponse,
    (request: space_pb.ShareFilesViaPublicKeyRequest) => {
      return request.serializeBinary();
    },
    space_pb.ShareFilesViaPublicKeyResponse.deserializeBinary
  );

  shareFilesViaPublicKey(
    request: space_pb.ShareFilesViaPublicKeyRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.ShareFilesViaPublicKeyResponse>;

  shareFilesViaPublicKey(
    request: space_pb.ShareFilesViaPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.ShareFilesViaPublicKeyResponse) => void): grpcWeb.ClientReadableStream<space_pb.ShareFilesViaPublicKeyResponse>;

  shareFilesViaPublicKey(
    request: space_pb.ShareFilesViaPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.ShareFilesViaPublicKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/ShareFilesViaPublicKey',
        request,
        metadata || {},
        this.methodInfoShareFilesViaPublicKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ShareFilesViaPublicKey',
    request,
    metadata || {},
    this.methodInfoShareFilesViaPublicKey);
  }

  methodInfoHandleFilesInvitation = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.HandleFilesInvitationResponse,
    (request: space_pb.HandleFilesInvitationRequest) => {
      return request.serializeBinary();
    },
    space_pb.HandleFilesInvitationResponse.deserializeBinary
  );

  handleFilesInvitation(
    request: space_pb.HandleFilesInvitationRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.HandleFilesInvitationResponse>;

  handleFilesInvitation(
    request: space_pb.HandleFilesInvitationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.HandleFilesInvitationResponse) => void): grpcWeb.ClientReadableStream<space_pb.HandleFilesInvitationResponse>;

  handleFilesInvitation(
    request: space_pb.HandleFilesInvitationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.HandleFilesInvitationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/HandleFilesInvitation',
        request,
        metadata || {},
        this.methodInfoHandleFilesInvitation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/HandleFilesInvitation',
    request,
    metadata || {},
    this.methodInfoHandleFilesInvitation);
  }

  methodInfoNotificationSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.NotificationEventResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    space_pb.NotificationEventResponse.deserializeBinary
  );

  notificationSubscribe(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/space.SpaceApi/NotificationSubscribe',
      request,
      metadata || {},
      this.methodInfoNotificationSubscribe);
  }

  methodInfoListBuckets = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.ListBucketsResponse,
    (request: space_pb.ListBucketsRequest) => {
      return request.serializeBinary();
    },
    space_pb.ListBucketsResponse.deserializeBinary
  );

  listBuckets(
    request: space_pb.ListBucketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.ListBucketsResponse>;

  listBuckets(
    request: space_pb.ListBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.ListBucketsResponse) => void): grpcWeb.ClientReadableStream<space_pb.ListBucketsResponse>;

  listBuckets(
    request: space_pb.ListBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.ListBucketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/ListBuckets',
        request,
        metadata || {},
        this.methodInfoListBuckets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ListBuckets',
    request,
    metadata || {},
    this.methodInfoListBuckets);
  }

  methodInfoGetNotifications = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GetNotificationsResponse,
    (request: space_pb.GetNotificationsRequest) => {
      return request.serializeBinary();
    },
    space_pb.GetNotificationsResponse.deserializeBinary
  );

  getNotifications(
    request: space_pb.GetNotificationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GetNotificationsResponse>;

  getNotifications(
    request: space_pb.GetNotificationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GetNotificationsResponse) => void): grpcWeb.ClientReadableStream<space_pb.GetNotificationsResponse>;

  getNotifications(
    request: space_pb.GetNotificationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GetNotificationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GetNotifications',
        request,
        metadata || {},
        this.methodInfoGetNotifications,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetNotifications',
    request,
    metadata || {},
    this.methodInfoGetNotifications);
  }

  methodInfoReadNotification = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.ReadNotificationResponse,
    (request: space_pb.ReadNotificationRequest) => {
      return request.serializeBinary();
    },
    space_pb.ReadNotificationResponse.deserializeBinary
  );

  readNotification(
    request: space_pb.ReadNotificationRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.ReadNotificationResponse>;

  readNotification(
    request: space_pb.ReadNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.ReadNotificationResponse) => void): grpcWeb.ClientReadableStream<space_pb.ReadNotificationResponse>;

  readNotification(
    request: space_pb.ReadNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.ReadNotificationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/ReadNotification',
        request,
        metadata || {},
        this.methodInfoReadNotification,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ReadNotification',
    request,
    metadata || {},
    this.methodInfoReadNotification);
  }

  methodInfoDeleteAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.DeleteAccountResponse,
    (request: space_pb.DeleteAccountRequest) => {
      return request.serializeBinary();
    },
    space_pb.DeleteAccountResponse.deserializeBinary
  );

  deleteAccount(
    request: space_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.DeleteAccountResponse>;

  deleteAccount(
    request: space_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.DeleteAccountResponse) => void): grpcWeb.ClientReadableStream<space_pb.DeleteAccountResponse>;

  deleteAccount(
    request: space_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.DeleteAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/DeleteAccount',
        request,
        metadata || {},
        this.methodInfoDeleteAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/DeleteAccount',
    request,
    metadata || {},
    this.methodInfoDeleteAccount);
  }

  methodInfoToggleBucketBackup = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.ToggleBucketBackupResponse,
    (request: space_pb.ToggleBucketBackupRequest) => {
      return request.serializeBinary();
    },
    space_pb.ToggleBucketBackupResponse.deserializeBinary
  );

  toggleBucketBackup(
    request: space_pb.ToggleBucketBackupRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.ToggleBucketBackupResponse>;

  toggleBucketBackup(
    request: space_pb.ToggleBucketBackupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.ToggleBucketBackupResponse) => void): grpcWeb.ClientReadableStream<space_pb.ToggleBucketBackupResponse>;

  toggleBucketBackup(
    request: space_pb.ToggleBucketBackupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.ToggleBucketBackupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/ToggleBucketBackup',
        request,
        metadata || {},
        this.methodInfoToggleBucketBackup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ToggleBucketBackup',
    request,
    metadata || {},
    this.methodInfoToggleBucketBackup);
  }

  methodInfoBucketBackupRestore = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.BucketBackupRestoreResponse,
    (request: space_pb.BucketBackupRestoreRequest) => {
      return request.serializeBinary();
    },
    space_pb.BucketBackupRestoreResponse.deserializeBinary
  );

  bucketBackupRestore(
    request: space_pb.BucketBackupRestoreRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.BucketBackupRestoreResponse>;

  bucketBackupRestore(
    request: space_pb.BucketBackupRestoreRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.BucketBackupRestoreResponse) => void): grpcWeb.ClientReadableStream<space_pb.BucketBackupRestoreResponse>;

  bucketBackupRestore(
    request: space_pb.BucketBackupRestoreRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.BucketBackupRestoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/BucketBackupRestore',
        request,
        metadata || {},
        this.methodInfoBucketBackupRestore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/BucketBackupRestore',
    request,
    metadata || {},
    this.methodInfoBucketBackupRestore);
  }

  methodInfoGetUsageInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GetUsageInfoResponse,
    (request: space_pb.GetUsageInfoRequest) => {
      return request.serializeBinary();
    },
    space_pb.GetUsageInfoResponse.deserializeBinary
  );

  getUsageInfo(
    request: space_pb.GetUsageInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GetUsageInfoResponse>;

  getUsageInfo(
    request: space_pb.GetUsageInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GetUsageInfoResponse) => void): grpcWeb.ClientReadableStream<space_pb.GetUsageInfoResponse>;

  getUsageInfo(
    request: space_pb.GetUsageInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GetUsageInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GetUsageInfo',
        request,
        metadata || {},
        this.methodInfoGetUsageInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetUsageInfo',
    request,
    metadata || {},
    this.methodInfoGetUsageInfo);
  }

  methodInfoGetAPISessionTokens = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GetAPISessionTokensResponse,
    (request: space_pb.GetAPISessionTokensRequest) => {
      return request.serializeBinary();
    },
    space_pb.GetAPISessionTokensResponse.deserializeBinary
  );

  getAPISessionTokens(
    request: space_pb.GetAPISessionTokensRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GetAPISessionTokensResponse>;

  getAPISessionTokens(
    request: space_pb.GetAPISessionTokensRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GetAPISessionTokensResponse) => void): grpcWeb.ClientReadableStream<space_pb.GetAPISessionTokensResponse>;

  getAPISessionTokens(
    request: space_pb.GetAPISessionTokensRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GetAPISessionTokensResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GetAPISessionTokens',
        request,
        metadata || {},
        this.methodInfoGetAPISessionTokens,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetAPISessionTokens',
    request,
    metadata || {},
    this.methodInfoGetAPISessionTokens);
  }

  methodInfoGetRecentlySharedWith = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GetRecentlySharedWithResponse,
    (request: space_pb.GetRecentlySharedWithRequest) => {
      return request.serializeBinary();
    },
    space_pb.GetRecentlySharedWithResponse.deserializeBinary
  );

  getRecentlySharedWith(
    request: space_pb.GetRecentlySharedWithRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GetRecentlySharedWithResponse>;

  getRecentlySharedWith(
    request: space_pb.GetRecentlySharedWithRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GetRecentlySharedWithResponse) => void): grpcWeb.ClientReadableStream<space_pb.GetRecentlySharedWithResponse>;

  getRecentlySharedWith(
    request: space_pb.GetRecentlySharedWithRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GetRecentlySharedWithResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GetRecentlySharedWith',
        request,
        metadata || {},
        this.methodInfoGetRecentlySharedWith,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetRecentlySharedWith',
    request,
    metadata || {},
    this.methodInfoGetRecentlySharedWith);
  }

  methodInfoSetNotificationsLastSeenAt = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.SetNotificationsLastSeenAtResponse,
    (request: space_pb.SetNotificationsLastSeenAtRequest) => {
      return request.serializeBinary();
    },
    space_pb.SetNotificationsLastSeenAtResponse.deserializeBinary
  );

  setNotificationsLastSeenAt(
    request: space_pb.SetNotificationsLastSeenAtRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.SetNotificationsLastSeenAtResponse>;

  setNotificationsLastSeenAt(
    request: space_pb.SetNotificationsLastSeenAtRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.SetNotificationsLastSeenAtResponse) => void): grpcWeb.ClientReadableStream<space_pb.SetNotificationsLastSeenAtResponse>;

  setNotificationsLastSeenAt(
    request: space_pb.SetNotificationsLastSeenAtRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.SetNotificationsLastSeenAtResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/SetNotificationsLastSeenAt',
        request,
        metadata || {},
        this.methodInfoSetNotificationsLastSeenAt,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/SetNotificationsLastSeenAt',
    request,
    metadata || {},
    this.methodInfoSetNotificationsLastSeenAt);
  }

  methodInfoSearchFiles = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.SearchFilesResponse,
    (request: space_pb.SearchFilesRequest) => {
      return request.serializeBinary();
    },
    space_pb.SearchFilesResponse.deserializeBinary
  );

  searchFiles(
    request: space_pb.SearchFilesRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.SearchFilesResponse>;

  searchFiles(
    request: space_pb.SearchFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.SearchFilesResponse) => void): grpcWeb.ClientReadableStream<space_pb.SearchFilesResponse>;

  searchFiles(
    request: space_pb.SearchFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.SearchFilesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/SearchFiles',
        request,
        metadata || {},
        this.methodInfoSearchFiles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/SearchFiles',
    request,
    metadata || {},
    this.methodInfoSearchFiles);
  }

  methodInfoInitializeMasterAppToken = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.InitializeMasterAppTokenResponse,
    (request: space_pb.InitializeMasterAppTokenRequest) => {
      return request.serializeBinary();
    },
    space_pb.InitializeMasterAppTokenResponse.deserializeBinary
  );

  initializeMasterAppToken(
    request: space_pb.InitializeMasterAppTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.InitializeMasterAppTokenResponse>;

  initializeMasterAppToken(
    request: space_pb.InitializeMasterAppTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.InitializeMasterAppTokenResponse) => void): grpcWeb.ClientReadableStream<space_pb.InitializeMasterAppTokenResponse>;

  initializeMasterAppToken(
    request: space_pb.InitializeMasterAppTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.InitializeMasterAppTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/InitializeMasterAppToken',
        request,
        metadata || {},
        this.methodInfoInitializeMasterAppToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/InitializeMasterAppToken',
    request,
    metadata || {},
    this.methodInfoInitializeMasterAppToken);
  }

  methodInfoGenerateAppToken = new grpcWeb.AbstractClientBase.MethodInfo(
    space_pb.GenerateAppTokenResponse,
    (request: space_pb.GenerateAppTokenRequest) => {
      return request.serializeBinary();
    },
    space_pb.GenerateAppTokenResponse.deserializeBinary
  );

  generateAppToken(
    request: space_pb.GenerateAppTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<space_pb.GenerateAppTokenResponse>;

  generateAppToken(
    request: space_pb.GenerateAppTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: space_pb.GenerateAppTokenResponse) => void): grpcWeb.ClientReadableStream<space_pb.GenerateAppTokenResponse>;

  generateAppToken(
    request: space_pb.GenerateAppTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: space_pb.GenerateAppTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/space.SpaceApi/GenerateAppToken',
        request,
        metadata || {},
        this.methodInfoGenerateAppToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GenerateAppToken',
    request,
    metadata || {},
    this.methodInfoGenerateAppToken);
  }

}

