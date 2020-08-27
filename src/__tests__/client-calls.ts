// We disable the type checking because it interferes with jest's mocking function
// and we only want to test that the client performs the correct grpc calls
// @ts-nocheck
import { SpaceClient } from '../index';

const client = new SpaceClient({ url: 'url' });

client.instance = {
  listDirectory: jest.fn(),
  listDirectories: jest.fn(),
  toggleBucketBackup: jest.fn(),
  addItems: jest.fn(),
  fileInfoSubscribe: jest.fn(),
  txlSubscribe: jest.fn(),
  openFile: jest.fn(),
  createBucket: jest.fn(),
  createFolder: jest.fn(),
  createUsernameAndEmail: jest.fn(),
  getIdentityByUsername: jest.fn(),
  shareBucketViaEmail: jest.fn(),
  shareBucketViaIdentity: jest.fn(),
  generateFileShareLink: jest.fn(),
  backupKeysByPassphrase: jest.fn(),
  recoverKeysByPassphrase: jest.fn(),
  toggleFuseDrive: jest.fn(),
  getFuseDriveStatus: jest.fn(),
  subscribe: jest.fn(),
  listBuckets: jest.fn(),
  shareBucket: jest.fn(),
  joinBucket: jest.fn(),
  shareItemsToSelectGroup: jest.fn(),
  notificationSubscribe: jest.fn(),
  getPublicKey: jest.fn(),
  readNotification: jest.fn(),
  getNotifications: jest.fn(),
  deleteKeyPair: jest.fn(),
  deleteAccount: jest.fn(),
  getUsageInfo: jest.fn(),
  getStoredMnemonic: jest.fn(),
  getSharedWithMeFiles: jest.fn(),
  shareFilesViaPublicKey: jest.fn(),
  getAPISessionTokens: jest.fn(),
};

it('listDirectory makes the right requests', async () => {
  client.listDirectory({
    bucket: 'my-bucket',
    path: '/',
  });

  expect(client.instance.listDirectory).toHaveBeenCalledTimes(1);
});

it('listDirectories makes the right requests', async () => {
  client.listDirectories({
    bucket: 'my-bucket',
  });

  expect(client.instance.listDirectories).toHaveBeenCalledTimes(1);
});

it('txlSubscribe makes the right requests', async () => {
  client.txlSubscribe({});

  expect(client.instance.txlSubscribe).toHaveBeenCalledTimes(1);
});

it('fileInfoSubscribe makes the right requests', async () => {
  client.fileInfoSubscribe({});

  expect(client.instance.fileInfoSubscribe).toHaveBeenCalledTimes(1);
});

it('openFile makes the right requests', async () => {
  client.openFile({
    bucket: 'my-bucket',
    path: '/',
  });

  expect(client.instance.openFile).toHaveBeenCalledTimes(1);
});

it('createBucket makes the right requests', async () => {
  client.createBucket({
    slug: 'my-bucket',
  });

  expect(client.instance.createBucket).toHaveBeenCalledTimes(1);
});

it('toggleBucketBackup makes the right requests', async () => {
  client.toggleBucketBackup({
    bucket: 'my-bucket',
    backup: true,
  });

  expect(client.instance.toggleBucketBackup).toHaveBeenCalledTimes(1);
});

it('addItems makes the right requests', async () => {
  client.addItems({
    bucket: 'my-bucket',
    targetPath: '/',
    sourcePaths: ['/a', '/b'],
  });

  expect(client.instance.addItems).toHaveBeenCalledTimes(1);
});

it('createFolder makes the right requests', async () => {
  client.createFolder({
    bucket: 'my-bucket',
    path: '/',
  });

  expect(client.instance.createFolder).toHaveBeenCalledTimes(1);
});

it('backupKeysByPassphrase makes the right requests', async () => {
  client.backupKeysByPassphrase({
    uuid: '123',
    passphrase: '123',
  });

  expect(client.instance.backupKeysByPassphrase).toHaveBeenCalledTimes(1);
});

it('recoverKeysByPassphrase makes the right requests', async () => {
  client.recoverKeysByPassphrase({
    passphrase: '123',
  });

  expect(client.instance.recoverKeysByPassphrase).toHaveBeenCalledTimes(1);
});

it('toggleFuseDrive makes the right requests', async () => {
  client.toggleFuseDrive({
    mountDrive: true,
  });

  expect(client.instance.toggleFuseDrive).toHaveBeenCalledTimes(1);
});

it('getFuseDriveStatus makes the right requests', async () => {
  client.getFuseDriveStatus({});

  expect(client.instance.getFuseDriveStatus).toHaveBeenCalledTimes(1);
});

it('subscribe makes the right requests', async () => {
  client.subscribe();

  expect(client.instance.subscribe).toHaveBeenCalledTimes(1);
});

it('listBuckets makes the right requests', async () => {
  client.listBuckets();

  expect(client.instance.listBuckets).toHaveBeenCalledTimes(1);
});

it('shareBucket makes the right requests', async () => {
  client.shareBucket({
    bucket: 'my-bucket',
  });

  expect(client.instance.shareBucket).toHaveBeenCalledTimes(1);
});

it('joinBucket makes the right requests', async () => {
  client.joinBucket({
    bucket: 'my-bucket',
    threadInfo: {
      key: '123',
      address: '123',
    },
  });

  expect(client.instance.joinBucket).toHaveBeenCalledTimes(1);
});

it('notificationSubscribe makes the right requests', async () => {
  client.notificationSubscribe({});

  expect(client.instance.notificationSubscribe).toHaveBeenCalledTimes(1);
});

it('getPublicKey makes the right requests', async () => {
  client.getPublicKey({});

  expect(client.instance.getPublicKey).toHaveBeenCalledTimes(1);
});

it('readNotification makes the right requests', async () => {
  client.readNotification({
    ID: '1234',
  });

  expect(client.instance.readNotification).toHaveBeenCalledTimes(1);
});

it('should call getNotifications', async () => {
  client.getNotifications({ seek: 'value', limit: 10 });

  expect(client.instance.getNotifications).toHaveBeenCalledTimes(1);
});

it('should call deleteKeyPair', async () => {
  client.deleteKeyPair();

  expect(client.instance.deleteKeyPair).toHaveBeenCalledTimes(1);
});

it('should call deleteAccount', async () => {
  client.deleteAccount();

  expect(client.instance.deleteAccount).toHaveBeenCalledTimes(1);
});

it('getUsageInfo makes the right request', async () => {
  client.getUsageInfo({});

  expect(client.instance.getUsageInfo).toHaveBeenCalledTimes(1);
});

it('getStoredMnemonic makes the right request', async () => {
  client.getStoredMnemonic();

  expect(client.instance.getStoredMnemonic).toHaveBeenCalledTimes(1);
});

it('getSharedWithMeFiles makes the right request', async () => {
  client.getSharedWithMeFiles({
    limit: 10,
    seek: 'seek',
  });

  expect(client.instance.getSharedWithMeFiles).toHaveBeenCalledTimes(1);
});

it('shareFilesViaPublicKey makes the right request', async () => {
  client.shareFilesViaPublicKey({
    bucket: 'my-bucket',
    paths: ['path1/file.jpeg', 'path2/file.txt'],
    publicKeys: ['pubkey1', 'pubkey2', 'pubkey3'],
  });

  expect(client.instance.shareFilesViaPublicKey).toHaveBeenCalledTimes(1);
});

it('getAPISessionTooken makes the right request', async () => {
  client.getAPISessionTokens();

  expect(client.instance.getAPISessionTokens).toHaveBeenCalledTimes(1);
});
