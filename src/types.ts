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

export interface GetIdentityByUsernamePayload {
  username: string;
}

export interface CreateUsernameAndEmailPayload {
  email?: string;
  username: string;
}

export interface ShareBucketViaEmailPayload {
  bucket?: string;
  email: string;
}

export interface ShareBucketViaIdentityPayload {
  identityType: 'EMAIL' | 'USERNAME';
  identityValue: string;
  bucket?: string;
}

export interface GenerateFileShareLinkPayload {
  bucket?: string;
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
  bucket?: string;
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

type InvitationType = {
  invitationType: 'INVITE_THROUGH_EMAIL' | 'INVITE_THROUGH_ADDRESS';
  invitationValue: string;
};

export interface ShareItemsToSelectGroupPayload {
  bucket: string;
  itemPaths: [string];
  invitations: [InvitationType];
  customMessage?: string;
}

export interface ListBucketsPayload {
}
