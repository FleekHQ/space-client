export interface OpenFilePayload {
  path: string;
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
