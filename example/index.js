/* eslint-disable */
const { SpaceClient } = require('../dist');

const client = new SpaceClient({
  url: `http://${window.location.hostname}:8080`,
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
  const createBucketRes = await client.createBucket('testBucket');
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
  const openFileRes = await client.openFile(entriesList[0].getPath());
  console.log(openFileRes.getLocation());
};

main();
