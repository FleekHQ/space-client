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
  const bucket = document.getElementById('add-file-bucket').value;
  const filepath = document.getElementById('add-file-input').value;

  try {
    const payload = {
      bucket,
      targetPath: '/',
      sourcePaths: [filepath],
    };

    console.log('payload', payload);
    console.log('uploading file...');

    const uploadRes = client.addItems(payload)

    uploadRes.on('data', (data) => {
      const addItemResult = data.getResult();

      const resultObj = {
        sourcePath: addItemResult.getSourcepath(),
        bucketPath: addItemResult.getBucketpath(),
        error: addItemResult.getError(),
        totalFiles: data.getTotalfiles(),
        totalBytes: data.getTotalbytes(),
        completedFiles: data.getCompletedfiles(),
        completedBytes: data.getCompletedbytes(),
      };

      console.log(resultObj);
    });
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('list-entries').onclick = async () => {
  const bucket = document.getElementById('list-entries-bucket').value;

  const payload = {
    bucket,
  };

  console.log('payload', payload);

  try {
    console.log('getting entries...');

    const directoriesRes = await client.listDirectories(payload);

    const entriesList = directoriesRes.getEntriesList();

    const entries = entriesList.reduce((acc, entry) => {
      return [
        ...acc,
        {
          path: entry.getPath(),
          name: entry.getName(),
          isDir: entry.getIsdir(),
          created: entry.getCreated(),
          updated: entry.getUpdated(),
          ipfsHash: entry.getIpfshash(),
          sizeInBytes: entry.getSizeinbytes(),
          fileExtension: entry.getFileextension(),
        },
      ];
    }, []);

    console.log('listDirectories res:', entries);
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('create-bucket').onclick = async () => {
  const bucketname = document.getElementById('create-bucket-name').value;

  try {
    const payload = { slug: bucketname };

    console.log('payload', payload);
    console.log('creating bucket...');

    const createBucketRes = await client.createBucket(payload);
    const bucket = createBucketRes.getBucket();

    const bucketObj = {
      key: bucket.getKey(),
      name: bucket.getName(),
      path: bucket.getPath(),
      createdAt: bucket.getCreatedat(),
      updatedAt: bucket.getUpdatedat(),
    };

    console.log(bucketObj);
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('open-file').onclick = async () => {
  const pathfile = document.getElementById('open-file-input').value;
  const bucket = document.getElementById('open-file-bucket').value;

  const payload = { path: pathfile, bucket };

  console.log('payload', payload);

  console.log('opening file...');
  try {
    const openFileRes = await client.openFile(payload)
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
    console.log('listing buckets...');
    const res = await client.listBuckets();
    const buckets = res.getBucketsList();

    const bucketList = buckets.reduce((acc, bucket) => {
      return [
        ...acc,
        {
          key: bucket.getKey(),
          name: bucket.getName(),
          path: bucket.getPath(),
          createdAt: bucket.getCreatedat(),
          updatedAt: bucket.getUpdatedat(),
        },
      ];
    }, []);

    console.log(bucketList);
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('list-directory').onclick = async () => {
  const path = document.getElementById('list-directory-input').value;
  const bucket = document.getElementById('list-directory-bucket').value;

  try {
    const payload = { path, bucket };

    console.log('payload:', payload);

    console.log('fetching directory...');
    const res = await client.listDirectory(payload);

    const entriesList = res.getEntriesList();

    const entries = entriesList.reduce((acc, entry) => {
      return [
        ...acc,
        {
          path: entry.getPath(),
          name: entry.getName(),
          isDir: entry.getIsdir(),
          created: entry.getCreated(),
          updated: entry.getUpdated(),
          ipfsHash: entry.getIpfshash(),
          sizeInBytes: entry.getSizeinbytes(),
          fileExtension: entry.getFileextension(),
        },
      ];
    }, []);

    console.log('listDirectory res:', entries);
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('create-folder').onclick = async () => {
  const path = document.getElementById('create-folder-path').value;
  const bucket = document.getElementById('create-folder-bucket').value;

  const payload = {
    path,
    bucket,
  };

  console.log('payload', payload);
  console.log('creating folder...');

  try {
    const res = await client.createFolder(payload);

    console.log(res);
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('toggle-fuse-drive').onclick = async () => {
  const mountDrive = document.getElementById('toggle-fuse-drive-input').checked;

  const payload = { mountDrive };
  console.log('payload', payload);

  try {
    const res = await client.toggleFuseDrive(payload);
    console.log('driveFuseMounted:', res.getFusedrivemounted());
  } catch (error) {
    console.error(error);
  }
};

document.getElementById('get-fuse-drive-status').onclick = async () => {
  try {
    const res = await client.getFuseDriveStatus();
    console.log('driveFuseMounted:', res.getFusedrivemounted());
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('get-identity').onclick = async () => {
  const username = document.getElementById('get-identity-username').value;
  const payload = { username };
  console.log('payload', payload);

  try {
    const res = await client.getIdentityByUsername(payload);
    const identity = res.getIdentity();

    console.log('identity:', {
      address: identity.getAddress(),
      publicKey: identity.getPublickey(),
      username: identity.getUsername(),
    });
  } catch (error) {
    console.error(error);
  }
};



document.getElementById('create-user').onclick = async () => {
  const email = document.getElementById('create-user-email').value;
  const username = document.getElementById('create-user-username').value;

  const payload = { email, username };

  console.log('payload', payload);

  try {
    const res = await client.createUsernameAndEmail(payload);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
