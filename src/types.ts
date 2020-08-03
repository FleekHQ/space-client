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
