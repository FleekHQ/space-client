export interface ListDirectoryPayload {
  path: string;
}

export interface OpenFilePayload {
  path: string;
  bucket: string;
}

export interface CreateBucketPayload {
  slug: string;
}

export interface AddItemsPayload {
  targetPath: string;
  sourcePaths: string[];
}

export interface CreateFolderPayload {
  path: string;
}

export interface GetIdentityByUsernamePayload {
  username: string;
}

export interface CreateUsernameAndEmailPayload {
  email?: string;
  username: string;
}

export interface ShareBucketViaEmailPayload {
  bucket: string;
  email: string;
}

export interface ShareBucketViaIdentityPayload {
  identityType: 'EMAIL' | 'USERNAME';
  identityValue: string;
  bucket: string;
}

export interface GenerateFileShareLinkPayload {
  bucket: string;
  filePath: string;
}

export interface BackupKeysByPassphrasePayload {
  passphrase: string;
}

export interface RecoverKeysByPassphrasePayload {
  passphrase: string;
}

export interface ToggleFusePayload {
  mountDrive: boolean;
}

export interface GetFuseDriveStatusPayload {
}

export interface ListDirectoriesPayload {
  bucket: string;
}
