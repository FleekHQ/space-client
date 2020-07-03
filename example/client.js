const { SpaceClient } = require('../dist')

const client = new SpaceClient({
  url: `http://0.0.0.0:9998`,
});


const txlStream = client.txlSubscribe();

txlStream.on('data', (res) => {
  console.log(`something changed on ${res.getBucket()} bucket`);
});

const subscribe = client.subscribe();

subscribe.on('data', (res) => {
  console.log('subscribe data:');
  const eventType = res.getType();
  const entry = res.getEntry();

  console.log('eventType:', eventType.toString());
  console.log('path:', entry.getPath());
  console.log('name:', entry.getName());
  console.log('isDir:', entry.getIsdir());
  console.log('created:', entry.getCreated());
  console.log('updated:', entry.getUpdated());
  console.log('ipfsHash:', entry.getIpfshash());
  console.log('sizeInBytes:', entry.getSizeinbytes());
  console.log('fileExtension:', entry.getFileextension());
});



document.getElementById("add-file").onclick = async () => {
  const filepath = document.getElementById('add-file-input').value;

  try {
    console.log('uploading file....');

    const uploadRes = client.addItems({
      targetPath: '/',
      sourcePaths: [filepath],
    })

    uploadRes.on('data', (data) => {
      const addItemResult = data.getResult();

      console.log('upload data event:');
      console.log('sourcePath:', addItemResult.getSourcepath());
      console.log('bucketPath:', addItemResult.getBucketpath());
      console.log('error:', addItemResult.getError());
      console.log('totalFiles:', data.getTotalfiles());
      console.log('totalBytes:', data.getTotalbytes());
      console.log('completedFiles:', data.getCompletedfiles());
      console.log('completedBytes:', data.getCompletedbytes());
    });
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('list-entries').onclick = async () => {
  const bucket = document.getElementById('list-entries-bucket').value;

  try {
    console.log('getting entries...');
    const directoriesRes = await client.listDirectories({
      bucket,
    });

    const entriesList = directoriesRes.getEntriesList();

    entriesList.forEach((entry) => {
      console.log('-----------------------');
      console.log('path:', entry.getPath());
      console.log('name:', entry.getName());
      console.log('isDir:', entry.getIsdir());
      console.log('created:', entry.getCreated());
      console.log('updated:', entry.getUpdated());
      console.log('ipfsHash:', entry.getIpfshash());
      console.log('sizeInBytes:', entry.getSizeinbytes());
      console.log('fileExtension:', entry.getFileextension());
    });
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('create-bucket').onclick = async () => {
  const bucketname = document.getElementById('create-bucket-name').value;

  try {
    console.log('creating bucket...');
    const createBucketRes = await client.createBucket({ slug: bucketname });
    const bucket = createBucketRes.getBucket();

    console.log('key:', bucket.getKey());
    console.log('name:', bucket.getName());
    console.log('path:', bucket.getPath());
    console.log('createdAt:', bucket.getCreatedat());
    console.log('updatedAt:', bucket.getUpdatedat());
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('open-file').onclick = async () => {
  const pathfile = document.getElementById('open-file-input').value;

  try {
    const openFileRes = await client.openFile({ path: pathfile })
    console.log('temp file location:', openFileRes.getLocation());
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('share-email').onclick = async () => {
  const bucket = document.getElementById('share-email-bucket').value;
  const email = document.getElementById('share-email-input').value;

  try {
    const shareEmailRes = await client.shareBucketViaEmail({
      bucket,
      email,
    });
    console.log(shareEmailRes);
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('share-identity').onclick = async () => {
  const bucket = document.getElementById('share-identity-bucket').value;
  const identityType = document.getElementById('identity-type').value;
  const identityValue = document.getElementById('share-identity-value').value;

  try {
    const shareIdentityRes = await client.shareBucketViaIdentity({
      bucket,
      identityType,
      identityValue,
    });

    console.log(shareIdentityRes);
  } catch (error) {
    console.error(error);
  }
};



document.getElementById('share-link').onclick = async () => {
  const bucket = document.getElementById('share-link-bucket').value;
  const filePath = document.getElementById('share-link-filepath').value;

  try {
    const shareLinkRes = await client.generateFileShareLink({
      bucket,
      filePath,
    });

    console.log(shareLinkRes.getLink());
  } catch (error) {
    console.error(error);
  }
};

document.getElementById('list-buckets').onclick = async () => {
  try {
    const res = await client.listBuckets();
    const buckets = res.getBucketsList();

    buckets.forEach((bucket) => {
      console.log('---------------------');
      console.log('key:', bucket.getKey());
      console.log('name:', bucket.getName());
      console.log('path:', bucket.getPath());
      console.log('createdAt:', bucket.getCreatedat());
      console.log('updatedAt:', bucket.getUpdatedat());
    });
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('list-directory').onclick = async () => {
  const path = document.getElementById('list-directory-input').value;

  try {
    // const res = client.listDirectory();
  } catch (error) {
    console.error(error);
  }
};
