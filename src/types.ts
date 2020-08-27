export interface ListDirectoryPayload {
  path: string;
  bucket?: string;
}

export interface OpenFilePayload {
  path: string;
  bucket?: string;
}

export interface CreateBucketPayload {
  slug: string;
}

export interface AddItemsPayload {
  bucket?: string;
  targetPath: string;
  sourcePaths: string[];
}

export interface CreateFolderPayload {
  path: string;
  bucket?: string;
}

export interface BackupKeysByPassphrasePayload {
  uuid: string;
  passphrase: string;
}

export interface RecoverKeysByPassphrasePayload {
  uuid: string;
  passphrase: string;
}

export interface ToggleFusePayload {
  mountDrive: boolean;
}

export interface GetFuseDriveStatusPayload {
}

export interface ListDirectoriesPayload {
  bucket?: string;
}

export interface ToggleBucketBackupPayload {
  bucket: string;
  backup: boolean;
}

export interface ShareBucketPayload {
  bucket?: string;
}

export interface JoinBucketPayload {
  threadInfo: {
    addresses: [string];
    key: string;
  };
  bucket?: string;
}

export interface ReadNotificationPayload {
  ID: string;
}

type InvitationType = {
  invitationType: 'INVITE_THROUGH_EMAIL' | 'INVITE_THROUGH_ADDRESS';
  invitationValue: string;
};

export interface GetNotificationsPayload {
  seek: string;
  limit: number;
}

export interface RestoreKeyPairViaMnemonicPayload {
  mnemonic: string;
}

export interface GetSharedWithMeFilesPayload {
  seek: string;
  limit: number;
}

export interface ShareFilesViaPublicKeyPayload {
  paths: [string];
  bucket?: string;
  publicKeys: [string];
}

export interface GeneratePublicFileLinkPayload {
  bucket?: string;
  password: string;
  itemPaths: [string],
}
