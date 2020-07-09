// We disable the type checking because it interferes with jest's mocking function
// and we only want to test that the client performs the correct grpc calls
// @ts-nocheck
import { SpaceClient } from '../index';

const client = new SpaceClient({ url: 'url' });

client.instance = {
  listDirectory: jest.fn(),
  addItems: jest.fn(),
};

// The function call counter is reset after each test in the jest config
it('listDirectory makes the right requests', async () => {
  await client.listDirectory({
    bucket: 'my-bucket',
    path: '/',
  });

  expect(client.instance.listDirectory).toHaveBeenCalledTimes(1);
});

it('addItems makes the right requests', async () => {
  await client.addItems({
    bucket: 'my-bucket',
    targetPath: '/',
    sourcePaths: '/file',
  });

  expect(client.instance.addItems).toHaveBeenCalledTimes(1);
});
