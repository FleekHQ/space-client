// We disable the type checking because it interferes with jest's mocking function
// and we only want to test that the client performs the correct grpc calls
// @ts-nocheck
import { SpaceClient } from '../index';

const client = new SpaceClient({ url: 'url' });

client.instance = {
  listDirectory: jest.fn(),
  listDirectories: jest.fn(),
  addItems: jest.fn(),
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

it('createUsernameAndEmail makes the right requests', async () => {
  client.createUsernameAndEmail({
    email: 'hi@fleek.co',
    username: 'fleek',
  });

  expect(client.instance.createUsernameAndEmail).toHaveBeenCalledTimes(1);
});

it('getIdentityByUsername makes the right requests', async () => {
  client.getIdentityByUsername({
    username: 'fleek',
  });

  expect(client.instance.getIdentityByUsername).toHaveBeenCalledTimes(1);
});

it('shareBucketViaEmail makes the right requests', async () => {
  client.shareBucketViaEmail({
    email: 'hi@fleek.co',
    bucket: 'my-bucket',
  });

  expect(client.instance.shareBucketViaEmail).toHaveBeenCalledTimes(1);
});

it('shareBucketViaIdentity makes the right requests', async () => {
  client.shareBucketViaIdentity({
    identityType: 0,
    identityValue: 'fleek',
    bucket: 'my-bucket',
  });

  expect(client.instance.shareBucketViaIdentity).toHaveBeenCalledTimes(1);
});

it('generateFileShareLink makes the right requests', async () => {
  client.generateFileShareLink({
    filepath: '/',
    bucket: 'my-bucket',
  });

  expect(client.instance.generateFileShareLink).toHaveBeenCalledTimes(1);
});

it('backupKeysByPassphrase makes the right requests', async () => {
  client.backupKeysByPassphrase({
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

it('should call shareItemsToSelectGroup', async () => {
  const payload = {
    bucket: 'test',
    itemPaths: ['path/1/file.txt', 'path/2/key.txt'],
    invitations: [
      {
        invitationType: 'INVITE_THROUGH_ADDRESS',
        invitationValue: 'test@email.com',
      },
    ],
  };

  client.shareItemsToSelectGroup(payload);

  expect(client.instance.shareItemsToSelectGroup).toHaveBeenCalledTimes(1);
});

it('notificationSubscribe makes the right requests', async () => {
  client.notificationSubscribe({});

  expect(client.instance.notificationSubscribe).toHaveBeenCalledTimes(1);
});
