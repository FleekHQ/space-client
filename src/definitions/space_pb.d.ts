import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class ListDirectoriesRequest extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): ListDirectoriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDirectoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDirectoriesRequest): ListDirectoriesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDirectoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDirectoriesRequest;
  static deserializeBinaryFromReader(message: ListDirectoriesRequest, reader: jspb.BinaryReader): ListDirectoriesRequest;
}

export namespace ListDirectoriesRequest {
  export type AsObject = {
    bucket: string,
  }
}

export class ListDirectoryEntry extends jspb.Message {
  getPath(): string;
  setPath(value: string): ListDirectoryEntry;

  getIsdir(): boolean;
  setIsdir(value: boolean): ListDirectoryEntry;

  getName(): string;
  setName(value: string): ListDirectoryEntry;

  getSizeinbytes(): string;
  setSizeinbytes(value: string): ListDirectoryEntry;

  getCreated(): string;
  setCreated(value: string): ListDirectoryEntry;

  getUpdated(): string;
  setUpdated(value: string): ListDirectoryEntry;

  getFileextension(): string;
  setFileextension(value: string): ListDirectoryEntry;

  getIpfshash(): string;
  setIpfshash(value: string): ListDirectoryEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDirectoryEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ListDirectoryEntry): ListDirectoryEntry.AsObject;
  static serializeBinaryToWriter(message: ListDirectoryEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDirectoryEntry;
  static deserializeBinaryFromReader(message: ListDirectoryEntry, reader: jspb.BinaryReader): ListDirectoryEntry;
}

export namespace ListDirectoryEntry {
  export type AsObject = {
    path: string,
    isdir: boolean,
    name: string,
    sizeinbytes: string,
    created: string,
    updated: string,
    fileextension: string,
    ipfshash: string,
  }
}

export class ListDirectoriesResponse extends jspb.Message {
  getEntriesList(): Array<ListDirectoryEntry>;
  setEntriesList(value: Array<ListDirectoryEntry>): ListDirectoriesResponse;
  clearEntriesList(): ListDirectoriesResponse;
  addEntries(value?: ListDirectoryEntry, index?: number): ListDirectoryEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDirectoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDirectoriesResponse): ListDirectoriesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDirectoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDirectoriesResponse;
  static deserializeBinaryFromReader(message: ListDirectoriesResponse, reader: jspb.BinaryReader): ListDirectoriesResponse;
}

export namespace ListDirectoriesResponse {
  export type AsObject = {
    entriesList: Array<ListDirectoryEntry.AsObject>,
  }
}

export class ListDirectoryRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): ListDirectoryRequest;

  getBucket(): string;
  setBucket(value: string): ListDirectoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDirectoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDirectoryRequest): ListDirectoryRequest.AsObject;
  static serializeBinaryToWriter(message: ListDirectoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDirectoryRequest;
  static deserializeBinaryFromReader(message: ListDirectoryRequest, reader: jspb.BinaryReader): ListDirectoryRequest;
}

export namespace ListDirectoryRequest {
  export type AsObject = {
    path: string,
    bucket: string,
  }
}

export class ListDirectoryResponse extends jspb.Message {
  getEntriesList(): Array<ListDirectoryEntry>;
  setEntriesList(value: Array<ListDirectoryEntry>): ListDirectoryResponse;
  clearEntriesList(): ListDirectoryResponse;
  addEntries(value?: ListDirectoryEntry, index?: number): ListDirectoryEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDirectoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDirectoryResponse): ListDirectoryResponse.AsObject;
  static serializeBinaryToWriter(message: ListDirectoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDirectoryResponse;
  static deserializeBinaryFromReader(message: ListDirectoryResponse, reader: jspb.BinaryReader): ListDirectoryResponse;
}

export namespace ListDirectoryResponse {
  export type AsObject = {
    entriesList: Array<ListDirectoryEntry.AsObject>,
  }
}

export class ConfigInfoResponse extends jspb.Message {
  getPort(): string;
  setPort(value: string): ConfigInfoResponse;

  getApppath(): string;
  setApppath(value: string): ConfigInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigInfoResponse): ConfigInfoResponse.AsObject;
  static serializeBinaryToWriter(message: ConfigInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigInfoResponse;
  static deserializeBinaryFromReader(message: ConfigInfoResponse, reader: jspb.BinaryReader): ConfigInfoResponse;
}

export namespace ConfigInfoResponse {
  export type AsObject = {
    port: string,
    apppath: string,
  }
}

export class CreateBucketRequest extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): CreateBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBucketRequest): CreateBucketRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBucketRequest;
  static deserializeBinaryFromReader(message: CreateBucketRequest, reader: jspb.BinaryReader): CreateBucketRequest;
}

export namespace CreateBucketRequest {
  export type AsObject = {
    slug: string,
  }
}

export class Bucket extends jspb.Message {
  getKey(): string;
  setKey(value: string): Bucket;

  getName(): string;
  setName(value: string): Bucket;

  getPath(): string;
  setPath(value: string): Bucket;

  getCreatedat(): number;
  setCreatedat(value: number): Bucket;

  getUpdatedat(): number;
  setUpdatedat(value: number): Bucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bucket.AsObject;
  static toObject(includeInstance: boolean, msg: Bucket): Bucket.AsObject;
  static serializeBinaryToWriter(message: Bucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bucket;
  static deserializeBinaryFromReader(message: Bucket, reader: jspb.BinaryReader): Bucket;
}

export namespace Bucket {
  export type AsObject = {
    key: string,
    name: string,
    path: string,
    createdat: number,
    updatedat: number,
  }
}

export class CreateBucketResponse extends jspb.Message {
  getBucket(): Bucket | undefined;
  setBucket(value?: Bucket): CreateBucketResponse;
  hasBucket(): boolean;
  clearBucket(): CreateBucketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBucketResponse): CreateBucketResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBucketResponse;
  static deserializeBinaryFromReader(message: CreateBucketResponse, reader: jspb.BinaryReader): CreateBucketResponse;
}

export namespace CreateBucketResponse {
  export type AsObject = {
    bucket?: Bucket.AsObject,
  }
}

export class GenerateKeyPairRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateKeyPairRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateKeyPairRequest): GenerateKeyPairRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateKeyPairRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateKeyPairRequest;
  static deserializeBinaryFromReader(message: GenerateKeyPairRequest, reader: jspb.BinaryReader): GenerateKeyPairRequest;
}

export namespace GenerateKeyPairRequest {
  export type AsObject = {
  }
}

export class GenerateKeyPairResponse extends jspb.Message {
  getPublickey(): string;
  setPublickey(value: string): GenerateKeyPairResponse;

  getPrivatekey(): string;
  setPrivatekey(value: string): GenerateKeyPairResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateKeyPairResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateKeyPairResponse): GenerateKeyPairResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateKeyPairResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateKeyPairResponse;
  static deserializeBinaryFromReader(message: GenerateKeyPairResponse, reader: jspb.BinaryReader): GenerateKeyPairResponse;
}

export namespace GenerateKeyPairResponse {
  export type AsObject = {
    publickey: string,
    privatekey: string,
  }
}

export class FileEventResponse extends jspb.Message {
  getType(): EventType;
  setType(value: EventType): FileEventResponse;

  getEntry(): ListDirectoryEntry | undefined;
  setEntry(value?: ListDirectoryEntry): FileEventResponse;
  hasEntry(): boolean;
  clearEntry(): FileEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileEventResponse): FileEventResponse.AsObject;
  static serializeBinaryToWriter(message: FileEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileEventResponse;
  static deserializeBinaryFromReader(message: FileEventResponse, reader: jspb.BinaryReader): FileEventResponse;
}

export namespace FileEventResponse {
  export type AsObject = {
    type: EventType,
    entry?: ListDirectoryEntry.AsObject,
  }
}

export class TextileEventResponse extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): TextileEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextileEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TextileEventResponse): TextileEventResponse.AsObject;
  static serializeBinaryToWriter(message: TextileEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextileEventResponse;
  static deserializeBinaryFromReader(message: TextileEventResponse, reader: jspb.BinaryReader): TextileEventResponse;
}

export namespace TextileEventResponse {
  export type AsObject = {
    bucket: string,
  }
}

export class OpenFileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): OpenFileRequest;

  getBucket(): string;
  setBucket(value: string): OpenFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenFileRequest): OpenFileRequest.AsObject;
  static serializeBinaryToWriter(message: OpenFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenFileRequest;
  static deserializeBinaryFromReader(message: OpenFileRequest, reader: jspb.BinaryReader): OpenFileRequest;
}

export namespace OpenFileRequest {
  export type AsObject = {
    path: string,
    bucket: string,
  }
}

export class OpenFileResponse extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): OpenFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenFileResponse): OpenFileResponse.AsObject;
  static serializeBinaryToWriter(message: OpenFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenFileResponse;
  static deserializeBinaryFromReader(message: OpenFileResponse, reader: jspb.BinaryReader): OpenFileResponse;
}

export namespace OpenFileResponse {
  export type AsObject = {
    location: string,
  }
}

export class AddItemsRequest extends jspb.Message {
  getSourcepathsList(): Array<string>;
  setSourcepathsList(value: Array<string>): AddItemsRequest;
  clearSourcepathsList(): AddItemsRequest;
  addSourcepaths(value: string, index?: number): AddItemsRequest;

  getTargetpath(): string;
  setTargetpath(value: string): AddItemsRequest;

  getBucket(): string;
  setBucket(value: string): AddItemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddItemsRequest): AddItemsRequest.AsObject;
  static serializeBinaryToWriter(message: AddItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddItemsRequest;
  static deserializeBinaryFromReader(message: AddItemsRequest, reader: jspb.BinaryReader): AddItemsRequest;
}

export namespace AddItemsRequest {
  export type AsObject = {
    sourcepathsList: Array<string>,
    targetpath: string,
    bucket: string,
  }
}

export class AddItemResult extends jspb.Message {
  getSourcepath(): string;
  setSourcepath(value: string): AddItemResult;

  getBucketpath(): string;
  setBucketpath(value: string): AddItemResult;

  getError(): string;
  setError(value: string): AddItemResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddItemResult.AsObject;
  static toObject(includeInstance: boolean, msg: AddItemResult): AddItemResult.AsObject;
  static serializeBinaryToWriter(message: AddItemResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddItemResult;
  static deserializeBinaryFromReader(message: AddItemResult, reader: jspb.BinaryReader): AddItemResult;
}

export namespace AddItemResult {
  export type AsObject = {
    sourcepath: string,
    bucketpath: string,
    error: string,
  }
}

export class AddItemsResponse extends jspb.Message {
  getResult(): AddItemResult | undefined;
  setResult(value?: AddItemResult): AddItemsResponse;
  hasResult(): boolean;
  clearResult(): AddItemsResponse;

  getTotalfiles(): number;
  setTotalfiles(value: number): AddItemsResponse;

  getTotalbytes(): number;
  setTotalbytes(value: number): AddItemsResponse;

  getCompletedfiles(): number;
  setCompletedfiles(value: number): AddItemsResponse;

  getCompletedbytes(): number;
  setCompletedbytes(value: number): AddItemsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddItemsResponse): AddItemsResponse.AsObject;
  static serializeBinaryToWriter(message: AddItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddItemsResponse;
  static deserializeBinaryFromReader(message: AddItemsResponse, reader: jspb.BinaryReader): AddItemsResponse;
}

export namespace AddItemsResponse {
  export type AsObject = {
    result?: AddItemResult.AsObject,
    totalfiles: number,
    totalbytes: number,
    completedfiles: number,
    completedbytes: number,
  }
}

export class CreateFolderRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): CreateFolderRequest;

  getBucket(): string;
  setBucket(value: string): CreateFolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFolderRequest): CreateFolderRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFolderRequest;
  static deserializeBinaryFromReader(message: CreateFolderRequest, reader: jspb.BinaryReader): CreateFolderRequest;
}

export namespace CreateFolderRequest {
  export type AsObject = {
    path: string,
    bucket: string,
  }
}

export class CreateFolderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFolderResponse): CreateFolderResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFolderResponse;
  static deserializeBinaryFromReader(message: CreateFolderResponse, reader: jspb.BinaryReader): CreateFolderResponse;
}

export namespace CreateFolderResponse {
  export type AsObject = {
  }
}

export class GetIdentityByUsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): GetIdentityByUsernameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityByUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityByUsernameRequest): GetIdentityByUsernameRequest.AsObject;
  static serializeBinaryToWriter(message: GetIdentityByUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityByUsernameRequest;
  static deserializeBinaryFromReader(message: GetIdentityByUsernameRequest, reader: jspb.BinaryReader): GetIdentityByUsernameRequest;
}

export namespace GetIdentityByUsernameRequest {
  export type AsObject = {
    username: string,
  }
}

export class Identity extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): Identity;

  getPublickey(): string;
  setPublickey(value: string): Identity;

  getUsername(): string;
  setUsername(value: string): Identity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identity.AsObject;
  static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
  static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identity;
  static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
}

export namespace Identity {
  export type AsObject = {
    address: string,
    publickey: string,
    username: string,
  }
}

export class GetIdentityByUsernameResponse extends jspb.Message {
  getIdentity(): Identity | undefined;
  setIdentity(value?: Identity): GetIdentityByUsernameResponse;
  hasIdentity(): boolean;
  clearIdentity(): GetIdentityByUsernameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityByUsernameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityByUsernameResponse): GetIdentityByUsernameResponse.AsObject;
  static serializeBinaryToWriter(message: GetIdentityByUsernameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityByUsernameResponse;
  static deserializeBinaryFromReader(message: GetIdentityByUsernameResponse, reader: jspb.BinaryReader): GetIdentityByUsernameResponse;
}

export namespace GetIdentityByUsernameResponse {
  export type AsObject = {
    identity?: Identity.AsObject,
  }
}

export class CreateUsernameAndEmailRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): CreateUsernameAndEmailRequest;

  getEmail(): string;
  setEmail(value: string): CreateUsernameAndEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUsernameAndEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUsernameAndEmailRequest): CreateUsernameAndEmailRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUsernameAndEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUsernameAndEmailRequest;
  static deserializeBinaryFromReader(message: CreateUsernameAndEmailRequest, reader: jspb.BinaryReader): CreateUsernameAndEmailRequest;
}

export namespace CreateUsernameAndEmailRequest {
  export type AsObject = {
    username: string,
    email: string,
  }
}

export class CreateUsernameAndEmailResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUsernameAndEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUsernameAndEmailResponse): CreateUsernameAndEmailResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUsernameAndEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUsernameAndEmailResponse;
  static deserializeBinaryFromReader(message: CreateUsernameAndEmailResponse, reader: jspb.BinaryReader): CreateUsernameAndEmailResponse;
}

export namespace CreateUsernameAndEmailResponse {
  export type AsObject = {
  }
}

export class BackupKeysByPassphraseRequest extends jspb.Message {
  getPassphrase(): string;
  setPassphrase(value: string): BackupKeysByPassphraseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupKeysByPassphraseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BackupKeysByPassphraseRequest): BackupKeysByPassphraseRequest.AsObject;
  static serializeBinaryToWriter(message: BackupKeysByPassphraseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupKeysByPassphraseRequest;
  static deserializeBinaryFromReader(message: BackupKeysByPassphraseRequest, reader: jspb.BinaryReader): BackupKeysByPassphraseRequest;
}

export namespace BackupKeysByPassphraseRequest {
  export type AsObject = {
    passphrase: string,
  }
}

export class BackupKeysByPassphraseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupKeysByPassphraseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BackupKeysByPassphraseResponse): BackupKeysByPassphraseResponse.AsObject;
  static serializeBinaryToWriter(message: BackupKeysByPassphraseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupKeysByPassphraseResponse;
  static deserializeBinaryFromReader(message: BackupKeysByPassphraseResponse, reader: jspb.BinaryReader): BackupKeysByPassphraseResponse;
}

export namespace BackupKeysByPassphraseResponse {
  export type AsObject = {
  }
}

export class RecoverKeysByPassphraseRequest extends jspb.Message {
  getPassphrase(): string;
  setPassphrase(value: string): RecoverKeysByPassphraseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecoverKeysByPassphraseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecoverKeysByPassphraseRequest): RecoverKeysByPassphraseRequest.AsObject;
  static serializeBinaryToWriter(message: RecoverKeysByPassphraseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecoverKeysByPassphraseRequest;
  static deserializeBinaryFromReader(message: RecoverKeysByPassphraseRequest, reader: jspb.BinaryReader): RecoverKeysByPassphraseRequest;
}

export namespace RecoverKeysByPassphraseRequest {
  export type AsObject = {
    passphrase: string,
  }
}

export class RecoverKeysByPassphraseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecoverKeysByPassphraseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecoverKeysByPassphraseResponse): RecoverKeysByPassphraseResponse.AsObject;
  static serializeBinaryToWriter(message: RecoverKeysByPassphraseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecoverKeysByPassphraseResponse;
  static deserializeBinaryFromReader(message: RecoverKeysByPassphraseResponse, reader: jspb.BinaryReader): RecoverKeysByPassphraseResponse;
}

export namespace RecoverKeysByPassphraseResponse {
  export type AsObject = {
  }
}

export class ThreadInfo extends jspb.Message {
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): ThreadInfo;
  clearAddressesList(): ThreadInfo;
  addAddresses(value: string, index?: number): ThreadInfo;

  getKey(): string;
  setKey(value: string): ThreadInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreadInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ThreadInfo): ThreadInfo.AsObject;
  static serializeBinaryToWriter(message: ThreadInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreadInfo;
  static deserializeBinaryFromReader(message: ThreadInfo, reader: jspb.BinaryReader): ThreadInfo;
}

export namespace ThreadInfo {
  export type AsObject = {
    addressesList: Array<string>,
    key: string,
  }
}

export class ShareBucketRequest extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): ShareBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareBucketRequest): ShareBucketRequest.AsObject;
  static serializeBinaryToWriter(message: ShareBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareBucketRequest;
  static deserializeBinaryFromReader(message: ShareBucketRequest, reader: jspb.BinaryReader): ShareBucketRequest;
}

export namespace ShareBucketRequest {
  export type AsObject = {
    bucket: string,
  }
}

export class ShareBucketResponse extends jspb.Message {
  getThreadinfo(): ThreadInfo | undefined;
  setThreadinfo(value?: ThreadInfo): ShareBucketResponse;
  hasThreadinfo(): boolean;
  clearThreadinfo(): ShareBucketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShareBucketResponse): ShareBucketResponse.AsObject;
  static serializeBinaryToWriter(message: ShareBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareBucketResponse;
  static deserializeBinaryFromReader(message: ShareBucketResponse, reader: jspb.BinaryReader): ShareBucketResponse;
}

export namespace ShareBucketResponse {
  export type AsObject = {
    threadinfo?: ThreadInfo.AsObject,
  }
}

export class JoinBucketRequest extends jspb.Message {
  getThreadinfo(): ThreadInfo | undefined;
  setThreadinfo(value?: ThreadInfo): JoinBucketRequest;
  hasThreadinfo(): boolean;
  clearThreadinfo(): JoinBucketRequest;

  getBucket(): string;
  setBucket(value: string): JoinBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinBucketRequest): JoinBucketRequest.AsObject;
  static serializeBinaryToWriter(message: JoinBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinBucketRequest;
  static deserializeBinaryFromReader(message: JoinBucketRequest, reader: jspb.BinaryReader): JoinBucketRequest;
}

export namespace JoinBucketRequest {
  export type AsObject = {
    threadinfo?: ThreadInfo.AsObject,
    bucket: string,
  }
}

export class JoinBucketResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): JoinBucketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinBucketResponse): JoinBucketResponse.AsObject;
  static serializeBinaryToWriter(message: JoinBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinBucketResponse;
  static deserializeBinaryFromReader(message: JoinBucketResponse, reader: jspb.BinaryReader): JoinBucketResponse;
}

export namespace JoinBucketResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class ShareBucketViaEmailRequest extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): ShareBucketViaEmailRequest;

  getEmail(): string;
  setEmail(value: string): ShareBucketViaEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareBucketViaEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareBucketViaEmailRequest): ShareBucketViaEmailRequest.AsObject;
  static serializeBinaryToWriter(message: ShareBucketViaEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareBucketViaEmailRequest;
  static deserializeBinaryFromReader(message: ShareBucketViaEmailRequest, reader: jspb.BinaryReader): ShareBucketViaEmailRequest;
}

export namespace ShareBucketViaEmailRequest {
  export type AsObject = {
    bucket: string,
    email: string,
  }
}

export class ShareBucketViaEmailResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareBucketViaEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShareBucketViaEmailResponse): ShareBucketViaEmailResponse.AsObject;
  static serializeBinaryToWriter(message: ShareBucketViaEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareBucketViaEmailResponse;
  static deserializeBinaryFromReader(message: ShareBucketViaEmailResponse, reader: jspb.BinaryReader): ShareBucketViaEmailResponse;
}

export namespace ShareBucketViaEmailResponse {
  export type AsObject = {
  }
}

export class ShareBucketViaIdentityRequest extends jspb.Message {
  getIdentitytype(): IdentityType;
  setIdentitytype(value: IdentityType): ShareBucketViaIdentityRequest;

  getIdentityvalue(): string;
  setIdentityvalue(value: string): ShareBucketViaIdentityRequest;

  getBucket(): string;
  setBucket(value: string): ShareBucketViaIdentityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareBucketViaIdentityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareBucketViaIdentityRequest): ShareBucketViaIdentityRequest.AsObject;
  static serializeBinaryToWriter(message: ShareBucketViaIdentityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareBucketViaIdentityRequest;
  static deserializeBinaryFromReader(message: ShareBucketViaIdentityRequest, reader: jspb.BinaryReader): ShareBucketViaIdentityRequest;
}

export namespace ShareBucketViaIdentityRequest {
  export type AsObject = {
    identitytype: IdentityType,
    identityvalue: string,
    bucket: string,
  }
}

export class ShareBucketViaIdentityResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareBucketViaIdentityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShareBucketViaIdentityResponse): ShareBucketViaIdentityResponse.AsObject;
  static serializeBinaryToWriter(message: ShareBucketViaIdentityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareBucketViaIdentityResponse;
  static deserializeBinaryFromReader(message: ShareBucketViaIdentityResponse, reader: jspb.BinaryReader): ShareBucketViaIdentityResponse;
}

export namespace ShareBucketViaIdentityResponse {
  export type AsObject = {
  }
}

export class GenerateFileShareLinkRequest extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): GenerateFileShareLinkRequest;

  getFilepath(): string;
  setFilepath(value: string): GenerateFileShareLinkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateFileShareLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateFileShareLinkRequest): GenerateFileShareLinkRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateFileShareLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateFileShareLinkRequest;
  static deserializeBinaryFromReader(message: GenerateFileShareLinkRequest, reader: jspb.BinaryReader): GenerateFileShareLinkRequest;
}

export namespace GenerateFileShareLinkRequest {
  export type AsObject = {
    bucket: string,
    filepath: string,
  }
}

export class GenerateFileShareLinkResponse extends jspb.Message {
  getLink(): string;
  setLink(value: string): GenerateFileShareLinkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateFileShareLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateFileShareLinkResponse): GenerateFileShareLinkResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateFileShareLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateFileShareLinkResponse;
  static deserializeBinaryFromReader(message: GenerateFileShareLinkResponse, reader: jspb.BinaryReader): GenerateFileShareLinkResponse;
}

export namespace GenerateFileShareLinkResponse {
  export type AsObject = {
    link: string,
  }
}

export class ToggleFuseRequest extends jspb.Message {
  getMountdrive(): boolean;
  setMountdrive(value: boolean): ToggleFuseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleFuseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleFuseRequest): ToggleFuseRequest.AsObject;
  static serializeBinaryToWriter(message: ToggleFuseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleFuseRequest;
  static deserializeBinaryFromReader(message: ToggleFuseRequest, reader: jspb.BinaryReader): ToggleFuseRequest;
}

export namespace ToggleFuseRequest {
  export type AsObject = {
    mountdrive: boolean,
  }
}

export class FuseDriveResponse extends jspb.Message {
  getFusedrivemounted(): boolean;
  setFusedrivemounted(value: boolean): FuseDriveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FuseDriveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FuseDriveResponse): FuseDriveResponse.AsObject;
  static serializeBinaryToWriter(message: FuseDriveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FuseDriveResponse;
  static deserializeBinaryFromReader(message: FuseDriveResponse, reader: jspb.BinaryReader): FuseDriveResponse;
}

export namespace FuseDriveResponse {
  export type AsObject = {
    fusedrivemounted: boolean,
  }
}

export class ListBucketsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBucketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBucketsRequest): ListBucketsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBucketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBucketsRequest;
  static deserializeBinaryFromReader(message: ListBucketsRequest, reader: jspb.BinaryReader): ListBucketsRequest;
}

export namespace ListBucketsRequest {
  export type AsObject = {
  }
}

export class ListBucketsResponse extends jspb.Message {
  getBucketsList(): Array<Bucket>;
  setBucketsList(value: Array<Bucket>): ListBucketsResponse;
  clearBucketsList(): ListBucketsResponse;
  addBuckets(value?: Bucket, index?: number): Bucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBucketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBucketsResponse): ListBucketsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBucketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBucketsResponse;
  static deserializeBinaryFromReader(message: ListBucketsResponse, reader: jspb.BinaryReader): ListBucketsResponse;
}

export namespace ListBucketsResponse {
  export type AsObject = {
    bucketsList: Array<Bucket.AsObject>,
  }
}

export enum EventType { 
  ENTRY_ADDED = 0,
  ENTRY_DELETED = 1,
  ENTRY_UPDATED = 2,
}
export enum IdentityType { 
  USERNAME = 0,
  EMAIL = 1,
}
