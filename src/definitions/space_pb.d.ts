import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class SetNotificationsLastSeenAtRequest extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): SetNotificationsLastSeenAtRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNotificationsLastSeenAtRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNotificationsLastSeenAtRequest): SetNotificationsLastSeenAtRequest.AsObject;
  static serializeBinaryToWriter(message: SetNotificationsLastSeenAtRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNotificationsLastSeenAtRequest;
  static deserializeBinaryFromReader(message: SetNotificationsLastSeenAtRequest, reader: jspb.BinaryReader): SetNotificationsLastSeenAtRequest;
}

export namespace SetNotificationsLastSeenAtRequest {
  export type AsObject = {
    timestamp: number,
  }
}

export class SetNotificationsLastSeenAtResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNotificationsLastSeenAtResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetNotificationsLastSeenAtResponse): SetNotificationsLastSeenAtResponse.AsObject;
  static serializeBinaryToWriter(message: SetNotificationsLastSeenAtResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNotificationsLastSeenAtResponse;
  static deserializeBinaryFromReader(message: SetNotificationsLastSeenAtResponse, reader: jspb.BinaryReader): SetNotificationsLastSeenAtResponse;
}

export namespace SetNotificationsLastSeenAtResponse {
  export type AsObject = {
  }
}

export class GetSharedWithMeFilesRequest extends jspb.Message {
  getSeek(): string;
  setSeek(value: string): GetSharedWithMeFilesRequest;

  getLimit(): number;
  setLimit(value: number): GetSharedWithMeFilesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSharedWithMeFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSharedWithMeFilesRequest): GetSharedWithMeFilesRequest.AsObject;
  static serializeBinaryToWriter(message: GetSharedWithMeFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSharedWithMeFilesRequest;
  static deserializeBinaryFromReader(message: GetSharedWithMeFilesRequest, reader: jspb.BinaryReader): GetSharedWithMeFilesRequest;
}

export namespace GetSharedWithMeFilesRequest {
  export type AsObject = {
    seek: string,
    limit: number,
  }
}

export class GetSharedWithMeFilesResponse extends jspb.Message {
  getItemsList(): Array<SharedListDirectoryEntry>;
  setItemsList(value: Array<SharedListDirectoryEntry>): GetSharedWithMeFilesResponse;
  clearItemsList(): GetSharedWithMeFilesResponse;
  addItems(value?: SharedListDirectoryEntry, index?: number): SharedListDirectoryEntry;

  getNextoffset(): string;
  setNextoffset(value: string): GetSharedWithMeFilesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSharedWithMeFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSharedWithMeFilesResponse): GetSharedWithMeFilesResponse.AsObject;
  static serializeBinaryToWriter(message: GetSharedWithMeFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSharedWithMeFilesResponse;
  static deserializeBinaryFromReader(message: GetSharedWithMeFilesResponse, reader: jspb.BinaryReader): GetSharedWithMeFilesResponse;
}

export namespace GetSharedWithMeFilesResponse {
  export type AsObject = {
    itemsList: Array<SharedListDirectoryEntry.AsObject>,
    nextoffset: string,
  }
}

export class GetUsageInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsageInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsageInfoRequest): GetUsageInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetUsageInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsageInfoRequest;
  static deserializeBinaryFromReader(message: GetUsageInfoRequest, reader: jspb.BinaryReader): GetUsageInfoRequest;
}

export namespace GetUsageInfoRequest {
  export type AsObject = {
  }
}

export class GetUsageInfoResponse extends jspb.Message {
  getLocalstarogeused(): number;
  setLocalstarogeused(value: number): GetUsageInfoResponse;

  getLocalbandwidthused(): number;
  setLocalbandwidthused(value: number): GetUsageInfoResponse;

  getSpacestorageused(): number;
  setSpacestorageused(value: number): GetUsageInfoResponse;

  getSpacebandwidthused(): number;
  setSpacebandwidthused(value: number): GetUsageInfoResponse;

  getUsagequota(): number;
  setUsagequota(value: number): GetUsageInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsageInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsageInfoResponse): GetUsageInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetUsageInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsageInfoResponse;
  static deserializeBinaryFromReader(message: GetUsageInfoResponse, reader: jspb.BinaryReader): GetUsageInfoResponse;
}

export namespace GetUsageInfoResponse {
  export type AsObject = {
    localstarogeused: number,
    localbandwidthused: number,
    spacestorageused: number,
    spacebandwidthused: number,
    usagequota: number,
  }
}

export class ToggleBucketBackupRequest extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): ToggleBucketBackupRequest;

  getBackup(): boolean;
  setBackup(value: boolean): ToggleBucketBackupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleBucketBackupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleBucketBackupRequest): ToggleBucketBackupRequest.AsObject;
  static serializeBinaryToWriter(message: ToggleBucketBackupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleBucketBackupRequest;
  static deserializeBinaryFromReader(message: ToggleBucketBackupRequest, reader: jspb.BinaryReader): ToggleBucketBackupRequest;
}

export namespace ToggleBucketBackupRequest {
  export type AsObject = {
    bucket: string,
    backup: boolean,
  }
}

export class ToggleBucketBackupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleBucketBackupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleBucketBackupResponse): ToggleBucketBackupResponse.AsObject;
  static serializeBinaryToWriter(message: ToggleBucketBackupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleBucketBackupResponse;
  static deserializeBinaryFromReader(message: ToggleBucketBackupResponse, reader: jspb.BinaryReader): ToggleBucketBackupResponse;
}

export namespace ToggleBucketBackupResponse {
  export type AsObject = {
  }
}

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

export class FileMember extends jspb.Message {
  getPublickey(): string;
  setPublickey(value: string): FileMember;

  getAddress(): string;
  setAddress(value: string): FileMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileMember.AsObject;
  static toObject(includeInstance: boolean, msg: FileMember): FileMember.AsObject;
  static serializeBinaryToWriter(message: FileMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileMember;
  static deserializeBinaryFromReader(message: FileMember, reader: jspb.BinaryReader): FileMember;
}

export namespace FileMember {
  export type AsObject = {
    publickey: string,
    address: string,
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

  getIslocallyavailable(): boolean;
  setIslocallyavailable(value: boolean): ListDirectoryEntry;

  getBackupcount(): number;
  setBackupcount(value: number): ListDirectoryEntry;

  getMembersList(): Array<FileMember>;
  setMembersList(value: Array<FileMember>): ListDirectoryEntry;
  clearMembersList(): ListDirectoryEntry;
  addMembers(value?: FileMember, index?: number): FileMember;

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
    islocallyavailable: boolean,
    backupcount: number,
    membersList: Array<FileMember.AsObject>,
  }
}

export class SharedListDirectoryEntry extends jspb.Message {
  getEntry(): ListDirectoryEntry | undefined;
  setEntry(value?: ListDirectoryEntry): SharedListDirectoryEntry;
  hasEntry(): boolean;
  clearEntry(): SharedListDirectoryEntry;

  getDbid(): string;
  setDbid(value: string): SharedListDirectoryEntry;

  getBucket(): string;
  setBucket(value: string): SharedListDirectoryEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedListDirectoryEntry.AsObject;
  static toObject(includeInstance: boolean, msg: SharedListDirectoryEntry): SharedListDirectoryEntry.AsObject;
  static serializeBinaryToWriter(message: SharedListDirectoryEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedListDirectoryEntry;
  static deserializeBinaryFromReader(message: SharedListDirectoryEntry, reader: jspb.BinaryReader): SharedListDirectoryEntry;
}

export namespace SharedListDirectoryEntry {
  export type AsObject = {
    entry?: ListDirectoryEntry.AsObject,
    dbid: string,
    bucket: string,
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

export class BucketMember extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): BucketMember;

  getPublickey(): string;
  setPublickey(value: string): BucketMember;

  getIsowner(): boolean;
  setIsowner(value: boolean): BucketMember;

  getHasjoined(): boolean;
  setHasjoined(value: boolean): BucketMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketMember.AsObject;
  static toObject(includeInstance: boolean, msg: BucketMember): BucketMember.AsObject;
  static serializeBinaryToWriter(message: BucketMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketMember;
  static deserializeBinaryFromReader(message: BucketMember, reader: jspb.BinaryReader): BucketMember;
}

export namespace BucketMember {
  export type AsObject = {
    address: string,
    publickey: string,
    isowner: boolean,
    hasjoined: boolean,
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

  getMembersList(): Array<BucketMember>;
  setMembersList(value: Array<BucketMember>): Bucket;
  clearMembersList(): Bucket;
  addMembers(value?: BucketMember, index?: number): BucketMember;

  getIspersonalbucket(): boolean;
  setIspersonalbucket(value: boolean): Bucket;

  getIsbackupenabled(): boolean;
  setIsbackupenabled(value: boolean): Bucket;

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
    membersList: Array<BucketMember.AsObject>,
    ispersonalbucket: boolean,
    isbackupenabled: boolean,
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
  getMnemonic(): string;
  setMnemonic(value: string): GenerateKeyPairResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateKeyPairResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateKeyPairResponse): GenerateKeyPairResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateKeyPairResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateKeyPairResponse;
  static deserializeBinaryFromReader(message: GenerateKeyPairResponse, reader: jspb.BinaryReader): GenerateKeyPairResponse;
}

export namespace GenerateKeyPairResponse {
  export type AsObject = {
    mnemonic: string,
  }
}

export class GetStoredMnemonicRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStoredMnemonicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStoredMnemonicRequest): GetStoredMnemonicRequest.AsObject;
  static serializeBinaryToWriter(message: GetStoredMnemonicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStoredMnemonicRequest;
  static deserializeBinaryFromReader(message: GetStoredMnemonicRequest, reader: jspb.BinaryReader): GetStoredMnemonicRequest;
}

export namespace GetStoredMnemonicRequest {
  export type AsObject = {
  }
}

export class GetStoredMnemonicResponse extends jspb.Message {
  getMnemonic(): string;
  setMnemonic(value: string): GetStoredMnemonicResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStoredMnemonicResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStoredMnemonicResponse): GetStoredMnemonicResponse.AsObject;
  static serializeBinaryToWriter(message: GetStoredMnemonicResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStoredMnemonicResponse;
  static deserializeBinaryFromReader(message: GetStoredMnemonicResponse, reader: jspb.BinaryReader): GetStoredMnemonicResponse;
}

export namespace GetStoredMnemonicResponse {
  export type AsObject = {
    mnemonic: string,
  }
}

export class RestoreKeyPairViaMnemonicRequest extends jspb.Message {
  getMnemonic(): string;
  setMnemonic(value: string): RestoreKeyPairViaMnemonicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreKeyPairViaMnemonicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreKeyPairViaMnemonicRequest): RestoreKeyPairViaMnemonicRequest.AsObject;
  static serializeBinaryToWriter(message: RestoreKeyPairViaMnemonicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreKeyPairViaMnemonicRequest;
  static deserializeBinaryFromReader(message: RestoreKeyPairViaMnemonicRequest, reader: jspb.BinaryReader): RestoreKeyPairViaMnemonicRequest;
}

export namespace RestoreKeyPairViaMnemonicRequest {
  export type AsObject = {
    mnemonic: string,
  }
}

export class RestoreKeyPairViaMnemonicResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreKeyPairViaMnemonicResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreKeyPairViaMnemonicResponse): RestoreKeyPairViaMnemonicResponse.AsObject;
  static serializeBinaryToWriter(message: RestoreKeyPairViaMnemonicResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreKeyPairViaMnemonicResponse;
  static deserializeBinaryFromReader(message: RestoreKeyPairViaMnemonicResponse, reader: jspb.BinaryReader): RestoreKeyPairViaMnemonicResponse;
}

export namespace RestoreKeyPairViaMnemonicResponse {
  export type AsObject = {
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

export class FileInfoEventResponse extends jspb.Message {
  getFile(): ListDirectoryEntry | undefined;
  setFile(value?: ListDirectoryEntry): FileInfoEventResponse;
  hasFile(): boolean;
  clearFile(): FileInfoEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfoEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfoEventResponse): FileInfoEventResponse.AsObject;
  static serializeBinaryToWriter(message: FileInfoEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfoEventResponse;
  static deserializeBinaryFromReader(message: FileInfoEventResponse, reader: jspb.BinaryReader): FileInfoEventResponse;
}

export namespace FileInfoEventResponse {
  export type AsObject = {
    file?: ListDirectoryEntry.AsObject,
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

  getDbid(): string;
  setDbid(value: string): OpenFileRequest;

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
    dbid: string,
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

export class OpenPublicFileRequest extends jspb.Message {
  getFilecid(): string;
  setFilecid(value: string): OpenPublicFileRequest;

  getFilekey(): string;
  setFilekey(value: string): OpenPublicFileRequest;

  getFilename(): string;
  setFilename(value: string): OpenPublicFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenPublicFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenPublicFileRequest): OpenPublicFileRequest.AsObject;
  static serializeBinaryToWriter(message: OpenPublicFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenPublicFileRequest;
  static deserializeBinaryFromReader(message: OpenPublicFileRequest, reader: jspb.BinaryReader): OpenPublicFileRequest;
}

export namespace OpenPublicFileRequest {
  export type AsObject = {
    filecid: string,
    filekey: string,
    filename: string,
  }
}

export class OpenPublicFileResponse extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): OpenPublicFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenPublicFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenPublicFileResponse): OpenPublicFileResponse.AsObject;
  static serializeBinaryToWriter(message: OpenPublicFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenPublicFileResponse;
  static deserializeBinaryFromReader(message: OpenPublicFileResponse, reader: jspb.BinaryReader): OpenPublicFileResponse;
}

export namespace OpenPublicFileResponse {
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

export class BackupKeysByPassphraseRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): BackupKeysByPassphraseRequest;

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
    uuid: string,
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
  getUuid(): string;
  setUuid(value: string): RecoverKeysByPassphraseRequest;

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
    uuid: string,
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

export class TestKeysPassphraseRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): TestKeysPassphraseRequest;

  getPassphrase(): string;
  setPassphrase(value: string): TestKeysPassphraseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestKeysPassphraseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestKeysPassphraseRequest): TestKeysPassphraseRequest.AsObject;
  static serializeBinaryToWriter(message: TestKeysPassphraseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestKeysPassphraseRequest;
  static deserializeBinaryFromReader(message: TestKeysPassphraseRequest, reader: jspb.BinaryReader): TestKeysPassphraseRequest;
}

export namespace TestKeysPassphraseRequest {
  export type AsObject = {
    uuid: string,
    passphrase: string,
  }
}

export class TestKeysPassphraseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestKeysPassphraseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestKeysPassphraseResponse): TestKeysPassphraseResponse.AsObject;
  static serializeBinaryToWriter(message: TestKeysPassphraseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestKeysPassphraseResponse;
  static deserializeBinaryFromReader(message: TestKeysPassphraseResponse, reader: jspb.BinaryReader): TestKeysPassphraseResponse;
}

export namespace TestKeysPassphraseResponse {
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

export class ShareFilesViaPublicKeyRequest extends jspb.Message {
  getPublickeysList(): Array<string>;
  setPublickeysList(value: Array<string>): ShareFilesViaPublicKeyRequest;
  clearPublickeysList(): ShareFilesViaPublicKeyRequest;
  addPublickeys(value: string, index?: number): ShareFilesViaPublicKeyRequest;

  getPathsList(): Array<FullPath>;
  setPathsList(value: Array<FullPath>): ShareFilesViaPublicKeyRequest;
  clearPathsList(): ShareFilesViaPublicKeyRequest;
  addPaths(value?: FullPath, index?: number): FullPath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareFilesViaPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareFilesViaPublicKeyRequest): ShareFilesViaPublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: ShareFilesViaPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareFilesViaPublicKeyRequest;
  static deserializeBinaryFromReader(message: ShareFilesViaPublicKeyRequest, reader: jspb.BinaryReader): ShareFilesViaPublicKeyRequest;
}

export namespace ShareFilesViaPublicKeyRequest {
  export type AsObject = {
    publickeysList: Array<string>,
    pathsList: Array<FullPath.AsObject>,
  }
}

export class FullPath extends jspb.Message {
  getDbid(): string;
  setDbid(value: string): FullPath;

  getBucket(): string;
  setBucket(value: string): FullPath;

  getPath(): string;
  setPath(value: string): FullPath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullPath.AsObject;
  static toObject(includeInstance: boolean, msg: FullPath): FullPath.AsObject;
  static serializeBinaryToWriter(message: FullPath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullPath;
  static deserializeBinaryFromReader(message: FullPath, reader: jspb.BinaryReader): FullPath;
}

export namespace FullPath {
  export type AsObject = {
    dbid: string,
    bucket: string,
    path: string,
  }
}

export class ShareFilesViaPublicKeyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareFilesViaPublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShareFilesViaPublicKeyResponse): ShareFilesViaPublicKeyResponse.AsObject;
  static serializeBinaryToWriter(message: ShareFilesViaPublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareFilesViaPublicKeyResponse;
  static deserializeBinaryFromReader(message: ShareFilesViaPublicKeyResponse, reader: jspb.BinaryReader): ShareFilesViaPublicKeyResponse;
}

export namespace ShareFilesViaPublicKeyResponse {
  export type AsObject = {
  }
}

export class GeneratePublicFileLinkRequest extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): GeneratePublicFileLinkRequest;

  getItempathsList(): Array<string>;
  setItempathsList(value: Array<string>): GeneratePublicFileLinkRequest;
  clearItempathsList(): GeneratePublicFileLinkRequest;
  addItempaths(value: string, index?: number): GeneratePublicFileLinkRequest;

  getPassword(): string;
  setPassword(value: string): GeneratePublicFileLinkRequest;

  getDbid(): string;
  setDbid(value: string): GeneratePublicFileLinkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePublicFileLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePublicFileLinkRequest): GeneratePublicFileLinkRequest.AsObject;
  static serializeBinaryToWriter(message: GeneratePublicFileLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePublicFileLinkRequest;
  static deserializeBinaryFromReader(message: GeneratePublicFileLinkRequest, reader: jspb.BinaryReader): GeneratePublicFileLinkRequest;
}

export namespace GeneratePublicFileLinkRequest {
  export type AsObject = {
    bucket: string,
    itempathsList: Array<string>,
    password: string,
    dbid: string,
  }
}

export class GeneratePublicFileLinkResponse extends jspb.Message {
  getLink(): string;
  setLink(value: string): GeneratePublicFileLinkResponse;

  getFilecid(): string;
  setFilecid(value: string): GeneratePublicFileLinkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePublicFileLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePublicFileLinkResponse): GeneratePublicFileLinkResponse.AsObject;
  static serializeBinaryToWriter(message: GeneratePublicFileLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePublicFileLinkResponse;
  static deserializeBinaryFromReader(message: GeneratePublicFileLinkResponse, reader: jspb.BinaryReader): GeneratePublicFileLinkResponse;
}

export namespace GeneratePublicFileLinkResponse {
  export type AsObject = {
    link: string,
    filecid: string,
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

export class Invitation extends jspb.Message {
  getInviterpublickey(): string;
  setInviterpublickey(value: string): Invitation;

  getInvitationid(): string;
  setInvitationid(value: string): Invitation;

  getStatus(): InvitationStatus;
  setStatus(value: InvitationStatus): Invitation;

  getItempathsList(): Array<FullPath>;
  setItempathsList(value: Array<FullPath>): Invitation;
  clearItempathsList(): Invitation;
  addItempaths(value?: FullPath, index?: number): FullPath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invitation.AsObject;
  static toObject(includeInstance: boolean, msg: Invitation): Invitation.AsObject;
  static serializeBinaryToWriter(message: Invitation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invitation;
  static deserializeBinaryFromReader(message: Invitation, reader: jspb.BinaryReader): Invitation;
}

export namespace Invitation {
  export type AsObject = {
    inviterpublickey: string,
    invitationid: string,
    status: InvitationStatus,
    itempathsList: Array<FullPath.AsObject>,
  }
}

export class UsageAlert extends jspb.Message {
  getUsed(): number;
  setUsed(value: number): UsageAlert;

  getLimit(): number;
  setLimit(value: number): UsageAlert;

  getMessage(): string;
  setMessage(value: string): UsageAlert;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageAlert.AsObject;
  static toObject(includeInstance: boolean, msg: UsageAlert): UsageAlert.AsObject;
  static serializeBinaryToWriter(message: UsageAlert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageAlert;
  static deserializeBinaryFromReader(message: UsageAlert, reader: jspb.BinaryReader): UsageAlert;
}

export namespace UsageAlert {
  export type AsObject = {
    used: number,
    limit: number,
    message: string,
  }
}

export class InvitationAccept extends jspb.Message {
  getInvitationid(): string;
  setInvitationid(value: string): InvitationAccept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationAccept.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationAccept): InvitationAccept.AsObject;
  static serializeBinaryToWriter(message: InvitationAccept, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationAccept;
  static deserializeBinaryFromReader(message: InvitationAccept, reader: jspb.BinaryReader): InvitationAccept;
}

export namespace InvitationAccept {
  export type AsObject = {
    invitationid: string,
  }
}

export class Notification extends jspb.Message {
  getId(): string;
  setId(value: string): Notification;

  getSubject(): string;
  setSubject(value: string): Notification;

  getBody(): string;
  setBody(value: string): Notification;

  getInvitationvalue(): Invitation | undefined;
  setInvitationvalue(value?: Invitation): Notification;
  hasInvitationvalue(): boolean;
  clearInvitationvalue(): Notification;

  getUsagealert(): UsageAlert | undefined;
  setUsagealert(value?: UsageAlert): Notification;
  hasUsagealert(): boolean;
  clearUsagealert(): Notification;

  getInvitationaccept(): InvitationAccept | undefined;
  setInvitationaccept(value?: InvitationAccept): Notification;
  hasInvitationaccept(): boolean;
  clearInvitationaccept(): Notification;

  getType(): NotificationType;
  setType(value: NotificationType): Notification;

  getCreatedat(): number;
  setCreatedat(value: number): Notification;

  getReadat(): number;
  setReadat(value: number): Notification;

  getRelatedobjectCase(): Notification.RelatedobjectCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    id: string,
    subject: string,
    body: string,
    invitationvalue?: Invitation.AsObject,
    usagealert?: UsageAlert.AsObject,
    invitationaccept?: InvitationAccept.AsObject,
    type: NotificationType,
    createdat: number,
    readat: number,
  }

  export enum RelatedobjectCase { 
    RELATEDOBJECT_NOT_SET = 0,
    INVITATIONVALUE = 4,
    USAGEALERT = 5,
    INVITATIONACCEPT = 6,
  }
}

export class HandleFilesInvitationRequest extends jspb.Message {
  getInvitationid(): string;
  setInvitationid(value: string): HandleFilesInvitationRequest;

  getAccept(): boolean;
  setAccept(value: boolean): HandleFilesInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleFilesInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleFilesInvitationRequest): HandleFilesInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: HandleFilesInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleFilesInvitationRequest;
  static deserializeBinaryFromReader(message: HandleFilesInvitationRequest, reader: jspb.BinaryReader): HandleFilesInvitationRequest;
}

export namespace HandleFilesInvitationRequest {
  export type AsObject = {
    invitationid: string,
    accept: boolean,
  }
}

export class HandleFilesInvitationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleFilesInvitationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HandleFilesInvitationResponse): HandleFilesInvitationResponse.AsObject;
  static serializeBinaryToWriter(message: HandleFilesInvitationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleFilesInvitationResponse;
  static deserializeBinaryFromReader(message: HandleFilesInvitationResponse, reader: jspb.BinaryReader): HandleFilesInvitationResponse;
}

export namespace HandleFilesInvitationResponse {
  export type AsObject = {
  }
}

export class NotificationEventResponse extends jspb.Message {
  getNotification(): Notification | undefined;
  setNotification(value?: Notification): NotificationEventResponse;
  hasNotification(): boolean;
  clearNotification(): NotificationEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationEventResponse): NotificationEventResponse.AsObject;
  static serializeBinaryToWriter(message: NotificationEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationEventResponse;
  static deserializeBinaryFromReader(message: NotificationEventResponse, reader: jspb.BinaryReader): NotificationEventResponse;
}

export namespace NotificationEventResponse {
  export type AsObject = {
    notification?: Notification.AsObject,
  }
}

export class GetNotificationsRequest extends jspb.Message {
  getSeek(): string;
  setSeek(value: string): GetNotificationsRequest;

  getLimit(): number;
  setLimit(value: number): GetNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationsRequest): GetNotificationsRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationsRequest;
  static deserializeBinaryFromReader(message: GetNotificationsRequest, reader: jspb.BinaryReader): GetNotificationsRequest;
}

export namespace GetNotificationsRequest {
  export type AsObject = {
    seek: string,
    limit: number,
  }
}

export class GetNotificationsResponse extends jspb.Message {
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): GetNotificationsResponse;
  clearNotificationsList(): GetNotificationsResponse;
  addNotifications(value?: Notification, index?: number): Notification;

  getNextoffset(): string;
  setNextoffset(value: string): GetNotificationsResponse;

  getLastseenat(): number;
  setLastseenat(value: number): GetNotificationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationsResponse): GetNotificationsResponse.AsObject;
  static serializeBinaryToWriter(message: GetNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationsResponse;
  static deserializeBinaryFromReader(message: GetNotificationsResponse, reader: jspb.BinaryReader): GetNotificationsResponse;
}

export namespace GetNotificationsResponse {
  export type AsObject = {
    notificationsList: Array<Notification.AsObject>,
    nextoffset: string,
    lastseenat: number,
  }
}

export class ReadNotificationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ReadNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadNotificationRequest): ReadNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: ReadNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadNotificationRequest;
  static deserializeBinaryFromReader(message: ReadNotificationRequest, reader: jspb.BinaryReader): ReadNotificationRequest;
}

export namespace ReadNotificationRequest {
  export type AsObject = {
    id: string,
  }
}

export class ReadNotificationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadNotificationResponse): ReadNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: ReadNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadNotificationResponse;
  static deserializeBinaryFromReader(message: ReadNotificationResponse, reader: jspb.BinaryReader): ReadNotificationResponse;
}

export namespace ReadNotificationResponse {
  export type AsObject = {
  }
}

export class GetPublicKeyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicKeyRequest): GetPublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicKeyRequest;
  static deserializeBinaryFromReader(message: GetPublicKeyRequest, reader: jspb.BinaryReader): GetPublicKeyRequest;
}

export namespace GetPublicKeyRequest {
  export type AsObject = {
  }
}

export class GetPublicKeyResponse extends jspb.Message {
  getPublickey(): string;
  setPublickey(value: string): GetPublicKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicKeyResponse): GetPublicKeyResponse.AsObject;
  static serializeBinaryToWriter(message: GetPublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicKeyResponse;
  static deserializeBinaryFromReader(message: GetPublicKeyResponse, reader: jspb.BinaryReader): GetPublicKeyResponse;
}

export namespace GetPublicKeyResponse {
  export type AsObject = {
    publickey: string,
  }
}

export class RecoverKeysByLocalBackupRequest extends jspb.Message {
  getPathtokeybackup(): string;
  setPathtokeybackup(value: string): RecoverKeysByLocalBackupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecoverKeysByLocalBackupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecoverKeysByLocalBackupRequest): RecoverKeysByLocalBackupRequest.AsObject;
  static serializeBinaryToWriter(message: RecoverKeysByLocalBackupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecoverKeysByLocalBackupRequest;
  static deserializeBinaryFromReader(message: RecoverKeysByLocalBackupRequest, reader: jspb.BinaryReader): RecoverKeysByLocalBackupRequest;
}

export namespace RecoverKeysByLocalBackupRequest {
  export type AsObject = {
    pathtokeybackup: string,
  }
}

export class RecoverKeysByLocalBackupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecoverKeysByLocalBackupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecoverKeysByLocalBackupResponse): RecoverKeysByLocalBackupResponse.AsObject;
  static serializeBinaryToWriter(message: RecoverKeysByLocalBackupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecoverKeysByLocalBackupResponse;
  static deserializeBinaryFromReader(message: RecoverKeysByLocalBackupResponse, reader: jspb.BinaryReader): RecoverKeysByLocalBackupResponse;
}

export namespace RecoverKeysByLocalBackupResponse {
  export type AsObject = {
  }
}

export class CreateLocalKeysBackupRequest extends jspb.Message {
  getPathtokeybackup(): string;
  setPathtokeybackup(value: string): CreateLocalKeysBackupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocalKeysBackupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocalKeysBackupRequest): CreateLocalKeysBackupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLocalKeysBackupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocalKeysBackupRequest;
  static deserializeBinaryFromReader(message: CreateLocalKeysBackupRequest, reader: jspb.BinaryReader): CreateLocalKeysBackupRequest;
}

export namespace CreateLocalKeysBackupRequest {
  export type AsObject = {
    pathtokeybackup: string,
  }
}

export class CreateLocalKeysBackupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocalKeysBackupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocalKeysBackupResponse): CreateLocalKeysBackupResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLocalKeysBackupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocalKeysBackupResponse;
  static deserializeBinaryFromReader(message: CreateLocalKeysBackupResponse, reader: jspb.BinaryReader): CreateLocalKeysBackupResponse;
}

export namespace CreateLocalKeysBackupResponse {
  export type AsObject = {
  }
}

export class DeleteAccountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountRequest): DeleteAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountRequest;
  static deserializeBinaryFromReader(message: DeleteAccountRequest, reader: jspb.BinaryReader): DeleteAccountRequest;
}

export namespace DeleteAccountRequest {
  export type AsObject = {
  }
}

export class DeleteAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountResponse): DeleteAccountResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountResponse;
  static deserializeBinaryFromReader(message: DeleteAccountResponse, reader: jspb.BinaryReader): DeleteAccountResponse;
}

export namespace DeleteAccountResponse {
  export type AsObject = {
  }
}

export class DeleteKeyPairRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKeyPairRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKeyPairRequest): DeleteKeyPairRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteKeyPairRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKeyPairRequest;
  static deserializeBinaryFromReader(message: DeleteKeyPairRequest, reader: jspb.BinaryReader): DeleteKeyPairRequest;
}

export namespace DeleteKeyPairRequest {
  export type AsObject = {
  }
}

export class DeleteKeyPairResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKeyPairResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKeyPairResponse): DeleteKeyPairResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteKeyPairResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKeyPairResponse;
  static deserializeBinaryFromReader(message: DeleteKeyPairResponse, reader: jspb.BinaryReader): DeleteKeyPairResponse;
}

export namespace DeleteKeyPairResponse {
  export type AsObject = {
  }
}

export class GetAPISessionTokensRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAPISessionTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAPISessionTokensRequest): GetAPISessionTokensRequest.AsObject;
  static serializeBinaryToWriter(message: GetAPISessionTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAPISessionTokensRequest;
  static deserializeBinaryFromReader(message: GetAPISessionTokensRequest, reader: jspb.BinaryReader): GetAPISessionTokensRequest;
}

export namespace GetAPISessionTokensRequest {
  export type AsObject = {
  }
}

export class GetAPISessionTokensResponse extends jspb.Message {
  getHubtoken(): string;
  setHubtoken(value: string): GetAPISessionTokensResponse;

  getServicestoken(): string;
  setServicestoken(value: string): GetAPISessionTokensResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAPISessionTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAPISessionTokensResponse): GetAPISessionTokensResponse.AsObject;
  static serializeBinaryToWriter(message: GetAPISessionTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAPISessionTokensResponse;
  static deserializeBinaryFromReader(message: GetAPISessionTokensResponse, reader: jspb.BinaryReader): GetAPISessionTokensResponse;
}

export namespace GetAPISessionTokensResponse {
  export type AsObject = {
    hubtoken: string,
    servicestoken: string,
  }
}

export class GetRecentlySharedWithRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecentlySharedWithRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecentlySharedWithRequest): GetRecentlySharedWithRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecentlySharedWithRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecentlySharedWithRequest;
  static deserializeBinaryFromReader(message: GetRecentlySharedWithRequest, reader: jspb.BinaryReader): GetRecentlySharedWithRequest;
}

export namespace GetRecentlySharedWithRequest {
  export type AsObject = {
  }
}

export class GetRecentlySharedWithResponse extends jspb.Message {
  getMembersList(): Array<FileMember>;
  setMembersList(value: Array<FileMember>): GetRecentlySharedWithResponse;
  clearMembersList(): GetRecentlySharedWithResponse;
  addMembers(value?: FileMember, index?: number): FileMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecentlySharedWithResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecentlySharedWithResponse): GetRecentlySharedWithResponse.AsObject;
  static serializeBinaryToWriter(message: GetRecentlySharedWithResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecentlySharedWithResponse;
  static deserializeBinaryFromReader(message: GetRecentlySharedWithResponse, reader: jspb.BinaryReader): GetRecentlySharedWithResponse;
}

export namespace GetRecentlySharedWithResponse {
  export type AsObject = {
    membersList: Array<FileMember.AsObject>,
  }
}

export enum EventType { 
  ENTRY_ADDED = 0,
  ENTRY_DELETED = 1,
  ENTRY_UPDATED = 2,
}
export enum NotificationType { 
  UNKNOWN = 0,
  INVITATION = 1,
  USAGEALERT = 2,
  INVITATION_REPLY = 3,
}
export enum InvitationStatus { 
  PENDING = 0,
  ACCEPTED = 1,
  REJECTED = 2,
}
