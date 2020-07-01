/* eslint-disable */
const { SpaceClient } = require('../dist');

const client = new SpaceClient({
  url: `http://0.0.0.0:9998`,
});

const main = async () => {
  /**
   * List directories
   */
  const directoriesRes = await client.listDirectories();
  const entriesList = directoriesRes.getEntriesList();
  console.log(entriesList);

  /**
   * Create a new bucket
   */
  const createBucketRes = await client.createBucket({ slug: 'testBucket' });
  const bucket = createBucketRes.getBucket();
  console.log(bucket);

  /**
   * Subscribe to Textile Events
   */
  const txlStream = client.txlSubscribe();
  txlStream.on('data', (res) => {
    console.log(res.getBucket());
  });

  /**
   * Open a File
   */
  const openFileRes = await client.openFile({
    path: entriesList[0].getPath(),
  });
  console.log(openFileRes.getLocation());

  /**
   * Share bucket via email
   */
  const shareEmailRes = await client.shareBucketViaEmail({
    bucket: bucket.getKey(),
    email: 'test_email@gmail.com',
  });
  console.log(shareEmailRes);

  /**
   * Share buvket via identity
   */
  const shareIdentityRes = await client.shareBucketViaIdentity({
    bucket: bucket.getKey(),
    identityType: 'USERNAME',
    identityValue: 'user123',
  });
  console.log(shareIdentityRes);

  /**
   * Generate File Share link
   */
  const shareLinkRes = await client.generateFileShareLink({
    bucket: bucket.getKey(),
    filePath: 'path/to/file.js',
  });
  console.log(shareLinkRes.getLink());
};

main();
