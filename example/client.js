const { SpaceClient } = require('../dist')

const client = new SpaceClient({
  url: `http://0.0.0.0:9998`,
});


const notificationStream = client.notificationSubscribe();

notificationStream.on('data', (res) => {
  console.log(`new notification: ${res.getNotification()}`);
});

const txlStream = client.txlSubscribe();

txlStream.on('data', (res) => {
  console.log(`something changed on ${res.getBucket()} bucket`);
});

const fileInfoStream = client.fileInfoSubscribe();

fileInfoStream.on('data', (res) => {
  console.log(`A file  has changed: ${res.getFile()}`);
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
  const targetPath = document.getElementById('add-file-target').value;

  try {
    const payload = {
      bucket,
      targetPath,
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
          isLocallyAvailable: entry.getIslocallyavailable(),
          backupCount: entry.getBackupcount(),
          members: entry.getMembersList()
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
          isBackupEnabled: bucket.getIsbackupenabled(),
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
          isLocallyAvailable: entry.getIslocallyavailable(),
          backupCount: entry.getBackupcount(),
          members: entry.getMembersList()
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


document.getElementById('share-bucket').onclick = async () => {
  const bucket = document.getElementById('share-bucket-input').value;

  const payload = { bucket };

  console.log('getting sharing bucket info...');
  console.log('payload', payload);

  try {
    const res = await client.shareBucket(payload);

    const threadInfo = res.getThreadinfo();

    console.log({
      bucket,
      key: threadInfo.getKey(),
      addressesList: threadInfo.getAddressesList(),
      addresses: threadInfo.getAddressesList().join(', '),
    });
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('join-bucket').onclick = async () => {
  const bucket = document.getElementById('join-bucket-input').value;
  const key = document.getElementById('join-bucket-key').value;
  const addresses = document.getElementById('join-bucket-addresses').value;

  const addressList = addresses.replace(' ', '').split(',');

  const payload = {
    bucket,
    threadInfo: {
      key,
      addresses: addressList,
    },
  };

  console.log('joining bucket...');
  console.log('payload', payload);

  try {
    const res = await client.joinBucket(payload);
    console.log('result', res.getResult());
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('get-notifications').onclick = async () => {
  const seek = document.getElementById('get-notifications-seek').value;
  const limit = document.getElementById('get-notifications-limit').value;

  const payload = {
    seek,
    limit: parseInt(limit, 10),
  };

  try {
    console.log('Getting notifications...');
    console.log('payload', payload);

    const res = await client.getNotifications(payload);

    const objectRes = {
      nextOffset: res.getNextoffset(),
      notifications: res.getNotificationsList().map((notification) => ({
        id: notification.getId(),
        subject: notification.getSubject(),
        body: notification.getBody(),
        type: notification.getType(),
        createdAt: notification.getCreatedat(),
        readAt: notification.getReadat(),
        relatedObject: notification.getRelatedobjectCase(),
      })),
    };

    console.log(objectRes);
  } catch (error) {
    console.error(error);
  }
};

document.getElementById('read-notification').onclick = async () => {
  const ID = document.getElementById('read-notification-id').value;

  const payload = {
    ID,
  };

  try {
    console.log('Read notification...');
    console.log('payload', payload);

    await client.readNotification(payload);

    console.log('notification was read');
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('delete-keypair').onclick = async () => {
  console.log('deleting key pair...');

  try {
    const res = await client.deleteKeyPair();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};


document.getElementById('get-public-key').onclick = async () => {
  try {
    const res = await client.getPublicKey();

    console.log({
      publicKey: res.getPublickey(),
      hubAuthToken: res.getHubauthtoken(),
    });
  } catch (error) {
    console.error(error);
  }
};

document.getElementById('delete-account').onclick = async () => {
  try {
    await client.deleteAccount();

    console.log('account deleted');
  } catch (error) {
    console.error(error);
  }
};

document.getElementById('toggle-bucket-backup').onclick = async () => {
  const bucketName = document.getElementById('toggle-bucket-backup-input').value;

  console.log('payload', payload);

  try {
    console.log('listing buckets...');
    const res = await client.listBuckets();
    const buckets = res.getBucketsList();

    const bucketList = buckets.reduce((acc, bucket) => {
      return [
        ...acc,
        {
          name: bucket.getName(),
          isBackupEnabled: bucket.getIsbackupenabled(),
        },
      ];
    }, []);

    console.log(bucketList);

    const foundBucket = bucketList.find(bucket => bucket.name === bucketName);

    const bucket = foundBucket || bucketList[0];

    const payload = {
      bucket: bucket.name,
      backup: !bucket.isBackupEnabled,
    };

    const response = await client.toggleBucketBackup(payload);

    console.log('response:', response);

  } catch (error) {
    console.error(error);
  }
};

document.getElementById('get-usage-info').onclick = async () => {
  try {
    console.log('getting usage info...');

    const usageInfoRes = await client.getUsageInfo();
    console.log('usageinfio', usageInfoRes);
    const usageInfo = {
      localstorageused: usageInfoRes.getLocalstorageused(),
      localbandwidthused: usageInfoRes.getLocalbandwidthused(),
      spacestorageused: usageInfoRes.getSpacestorageused(),
      spacebandwidthused: usageInfoRes.getSpacebandwidthused(),
      usagequota: usageInfoRes.getUsagequota(),
    }

    console.log('getUsageInfo res:', usageInfo);
  } catch (error) {
    console.error(error);
  }
};
