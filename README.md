![Publish Action Status](https://github.com/FleekHQ/space-client/workflows/Publish/badge.svg?branch=master)
![Tests Action Status](https://github.com/FleekHQ/space-client/workflows/Tests/badge.svg)

# Space Client

## Overview
Space Client it's a [grpc-web](https://www.npmjs.com/package/grpc-web) wrapper that allows you to connect with the [space daemon](https://github.com/FleekHQ/space-daemon) and interact with it.


#### Initialaze client
> Before initialize the client you need to have the [space-daemon](https://github.com/FleekHQ/space-daemon) up and running. You can find the daemon installation docs [here](https://github.com/FleekHQ/space-daemon#installation)


Please have in mind that [daemon](https://github.com/FleekHQ/space-daemon) only supports local connections for now, that means that you just can connect through your localhost. You can't connect through a dns or try to connect to a [daemon](https://github.com/FleekHQ/space-daemon) running on a different machine.

```js
  import { SpaceClient } from '@fleekhq/space-client';

  // default port exposed by the daemon for client connection is 9998
  const client = new SpaceClient({
    url: `http://0.0.0.0:9998`,
  });

  ...
```

If you are running the client on the server-side, you need to declare `XMLHttpRequest` module as global. (this is because client is based on [grpc-web](https://www.npmjs.com/package/grpc-web), which is supposed to be used on client-side).

install `XMLHttpRequest`

```bash
  yarn add xmlhttprequest
```

Or using npm

```bash
  npm install xmlhttprequest
```


then to initialize the client:

```js
  global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

  const { SpaceClient } = require('@fleekhq/space-client');

  // default port exposed by the daemon for client connection is 9998
  const client = new SpaceClient({
    url: `http://0.0.0.0:9998`,
  });

  ...
```

## API

#### class SpaceClient(opts)

Use this class to create space client instances able to interact with space-daemon

Options:

- `opts.url`: <em>**(string, required)**</em> space dameon url + port (`https://0.0.0.0:9998`)
- `opts.defaultBucket?`: <em>**(string, optional)**</em> change the default bucket. This value is used when you don't pass the bucket param on some of the methods below. if you don't pass this property, `personal` bucket is going to be used as default value (`personal` bucket is created by default when you run space-daemon for the first time).
- `opts.options?`: <em>**(object, optional)**</em> [grpc-web](https://github.com/grpc/grpc-web) client options.
- `opts.credentials?`: <em>**(object, optional)**</em> [grpc-web](https://github.com/grpc/grpc-web) client credentials.


```js
import { SpaceClient } from '@fleekhq/space-client';

const opts = {
  url: 'http://0.0.0.0:9998',
  defaultBucket: 'my-bucket',
};

const client = new SpaceClient(opts);
```

#### .listDirectory({ path: string, bucket?: string })

Returns the folder or files in the path directory.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.


```js
  client
    .listDirectory({ path: '/', bucket: 'my-bucket' })
    .then((res) => {
      const entries = res.getEntriesList();

      entries.forEach((entry) => {
        console.log(entry.getPath());
        console.log(entry.getName());
        console.log(entry.getIsdir());
        console.log(entry.getCreated());
        console.log(entry.getUpdated());
        console.log(entry.getIpfshash());
        console.log(entry.getSizeinbytes());
        console.log(entry.getFileextension());
        console.log(entry.getIslocallyavailable());
        console.log(entry.getBackupcount());
        console.log(entry.getMembersList());
      });
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.listDirectory({ path: '/', bucket: 'my-bucket' });
    const entries = res.getEntriesList();

    entries.forEach((entry) => {
      ...
    });
  };
```

#### .listDirectories({ bucket?: string })

Returns a Promise that resolves to an array of Directories representing all the folders and files inside the bucket.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

```js
  client
    .listDirectories({ bucket: 'my-bucket' })
    .then((res) => {
      const entries = res.getEntriesList();

      entries.forEach((entry) => {
        console.log(entry.getPath());
        console.log(entry.getName());
        console.log(entry.getIsdir());
        console.log(entry.getCreated());
        console.log(entry.getUpdated());
        console.log(entry.getIpfshash());
        console.log(entry.getSizeinbytes());
        console.log(entry.getFileextension());
        console.log(entry.getIslocallyavailable());
        console.log(entry.getBackupcount());
        console.log(entry.getMembersList());
      });
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.listDirectories({ bucket: 'my-bucket' });
    const entries = res.getEntriesList();

    entries.forEach((entry) => {
      ...
    });
  };
```

#### .txlSubscribe()

Returns a ReadableStream that notifies when something changed on the bucket (data stream returns the Bucket name).

```js
  const txlStream = client.txlSubscribe();

  txlStream.on('data', (res) => {
    const bucket = res.getBucket();
    console.log(bucket);
  });
```

#### .fileInfoSubscribe()

Returns a ReadableStream that notifies when a change related to the a file has occured such as the amount of members the file is shared with or whether the file is backup in Space.

```js
  const fileInfoStream = client.fileInfoSubscribe();

  fileInfoStream.on('data', (res) => {
    const file = res.getFile();
    console.log(file);
  });
```

#### .openFile({ path: string, bucket?: string. dbId?: string })

Copies the file referenced by the path arg to a temp folder and returns a Promise that resolves to the file location.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

`dbId` should be used to open shared files. (you can get the `dbId` from `getSharedWithMeFiles` method).

```js
const asyncFunc = async () => {
  const bucket = 'my-bucket';

  const dirRes = await client.listDirectories({
    bucket,
  });

  const entriesList = dirRes.getEntriesList();

  const openFileRes = await client.openFile({
    bucket,
    path: entriesList[0].getPath(),
  });

  const location = openFileRes.getLocation();
  console.log(location); // "/path/to/the/copied/file"
};
```

#### .createBucket({ slug: string })

Creates a new bucket. Returns a Promise that resolves to the new bucket

```js
  client
    .createBucket('myNewBucket')
    .then((res) => {
      const bucket = res.getBucket();

      console.log(bucket.getKey());
      console.log(bucket.getName());
      console.log(bucket.getPath());
      console.log(bucket.getCreatedat());
      console.log(bucket.getUpdatedat());
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.createBucket('myNewBucket');
    const bucket = res.getBucket();

    console.log(bucket.getName());
    ...
  };
```

#### .addItems({ bucket?: string, targetPath: string, sourcePaths: string[] })

Add new items. Returns a readable stream to resolves the new items.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

```js
  const stream = client.addItems({
    bucket: 'my-bucket',
    targetPath: '/',
    sourcePaths: ['/path-to-my-folder-or-file-to-upload']
  });
    
  stream.on('data', (data) => {
    console.log('data: ', data);
  });
  
  stream.on('error', (error) => {
    console.error('error: ', error);
  });

  stream.on('end', () => {
    console.log('end');
  });
```

#### .createFolder({ path: string, bucket?: string })

Creates a new empty folder. Returns a Promise that resolves to the new folder.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

```js
  client
    .createFolder({ path: '/', bucket: 'my-bucket' })
    .then(() => {
      console.log('folder created in path "/"');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.createFolder({ path: '/', bucket: 'my-bucket' });
  };
```

#### `[WIP]` <em>.toggleBucketBackup({ bucket: string, backup: boolean }) </em>

Toggles whether or not to back up the content of a bucket to Space.

```js
  client
    .toggleBucketBackup({ bucket: 'bucket-name', backup: true })
    .then(() => {
      console.log('bucket-name is backed up in Space!');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.toggleBucketBackup({ bucket: 'bucket-name', backup: true });
  };
```

#### .backupKeysByPassphrase({ uuid: string, passphrase: string })

Backup keys by a passphrase

```js
  client
    .backupKeysByPassphrase({
      uuid: 'user-uuid',
      passphrase: 'my-passphrase',
    })
    .then(() => {
      console.log('keys backup');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.backupKeysByPassphrase({
      uuid: 'user-uuid',
      passphrase: 'my-passphrase',
    });
  };
```

#### .recoverKeysByPassphrase({ uuid: string, passphrase: string })

Recovery keys by passphrase

```js
  client
    .recoverKeysByPassphrase({
      uuid: 'user-uuid',
      passphrase: 'my-passphrase',
    })
    .then(() => {
      console.log('recovery keys');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.recoverKeysByPassphrase({
      uuid: 'user-uuid',
      passphrase: 'my-passphrase',
    });
  };
```

#### .testKeysPassphrase({ uuid: string, passphrase: string })

Test keys with passphrase

```js
  client
    .testKeysPassphrase({
      uuid: 'user-uuid',
      passphrase: 'my-passphrase',
    })
    .then(() => {
      console.log('test success');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.testKeysPassphrase({
      uuid: 'user-uuid',
      passphrase: 'my-passphrase',
    });
  };
```

#### .generateKeyPairWithForce()

Generate key pair with force

```js
  client
    .generateKeyPairWithForce()
    .then(() => {
      console.log('keys generated');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.generateKeyPairWithForce();
  };
```

#### `[WIP]` <em>.toggleFuseDrive({ mountDrive: boolean })</em>
> this method is still not supported by [space-daemon](https://github.com/FleekHQ/space-daemon)

Toggle Fuse drive

```js
  client
    .toggleFuseDrive({
      mountDrive: true || false,
    })
    .then((res) => {
      console.log(res.getFusedrivemounted());
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.toggleFuseDrive({
      mountDrive: true || false,
    });
    
    console.log(res.getFusedrivemounted());
  };
```

#### `[WIP]` <em>.getFuseDriveStatus({})</em>
> this method is still not supported by [space-daemon](https://github.com/FleekHQ/space-daemon)

Get Fuse drive status

```js
  client
    .getFuseDriveStatus({})
    .then((res) => {
      console.log(res.getFusedrivemounted());
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.getFuseDriveStatus({});
    
    console.log(res.getFusedrivemounted());
  };
```

#### .subscribe()

Returns a ReadableStream that notifies when something changed on the bucket (data stream returns the event type + the entry affected).
Event type can be one of `[ENTRY_ADDED, ENTRY_DELETED, ENTRY_UPDATED]`

```js
  const subscribeStream = client.subscribe();

  subscribeStream.on('data', (res) => {
    const eventType = res.getType();
    const entry = res.getEntry();

    console.log('eventType', eventType.toString());
    console.log('path', entry.getPath());
    console.log('name', entry.getName());
    console.log('isDir', entry.getIsdir());
    console.log('created', entry.getCreated());
    console.log('updated', entry.getUpdated());
    console.log('ipfsHash', entry.getIpfshash());
    console.log('sizeInBytes', entry.getSizeinbytes());
    console.log('fileExtension', entry.getFileextension());
  });
```

#### `[WIP]` <em>.listBuckets()</em>

> this method is still not supported by [space-daemon](https://github.com/FleekHQ/space-daemon)

Returns all the buckets available

```js
  client
    .listBuckets()
    .then((res) => {
      const buckets = res.getBucketsList();
      
      buckets.forEach((bucket) => {
        console.log('key:', bucket.getKey());
        console.log('name:', bucket.getName());
        console.log('path:', bucket.getPath());
        console.log('createdAt:', bucket.getCreatedat());
        console.log('updatedAt:', bucket.getUpdatedat());
      });
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.listBuckets();
    const buckets = res.getBucketsList();

    ...
  };
```


#### .shareBucket({ bucket?: string })

Shares a bucket. Returns a promis that resolves to the threadInfo (required to join a bucket).
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

```js
  client
    .shareBucket({ bucket: 'my-bucket' })
    .then((res) => {
      const threadInfo = res.getThreadinfo();
      
      console.log('key:', threadInfo.getKey());
      console.log('addresses:', threadInfo.getAddressesList());
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.shareBucket({ bucket: 'my-bucket' });
    const threadInfo = res.getThreadinfo();

    ...
  };
```



#### .joinBucket({ bucket: string?, threadInfo: { key: string, addresses: [string] } })

Joins a shared bucket.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

```js
  client
    .joinBucket({
      bucket: 'my-bucket',
      threadInfo: {
        key: 'my-key',
        addresses: ['address1', 'address2', 'address3'],
      },
    })
    .then((res) => {
      console.log('result', res.getResult());
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.joinBucket({
      bucket: 'my-bucket',
      threadInfo: {
        key: 'my-key',
        addresses: ['address1', 'address2', 'address3'],
      },
    });

    console.log('result', res.getResult());

    ...
  };
```

#### .getPublicKey()

Get the current public key generated by the daemon and the hub auth token.

```js
  client
    .getPublicKey()
    .then((res) => {
      const publicKey = res.getPublickey();
      const hubAuthToken = res.getHubauthtoken();

      console.log('publicKey', publicKey);
      console.log('hubAuthToken', hubAuthToken);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.getPublicKey();

    console.log('publicKey', res.getPublickey());
    console.log('hubAuthToken', res.getHubauthtoken());

    ...
  };
```

#### .notificationSubscribe()
Returns a ReadableStream that notifies about new notifications.
Notifications are triggered upon another member's interaction with a shared file or bucket, for example if he attempts to add a new file to a shared bucket.

```js
  const notificationStream = client.notificationSubscribe();

  notificationStream.on('data', (res) => {
    const notification = res.getNotification();
    console.log(notification);
  });
```

#### .readNotification({ ID: string })

Mark a notification as read.

```js
  client
    .readNotifcation({ ID: '1234' })
    .then(() => {
      console.log('notifcation was marked as read');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.readNotification({ ID: '1234' });

    console.log('notifcation was marked as read');
    ...
  };
```

#### .getNotifications({ seek: string, limit: number })
Returns a list of notifications objects. Notifications objects represent just share file invitations for now.

```js
  client
    .getNotifications({ seek: 'some-value', limit: 20 })
    .then((res) => {
      const objectRes = {
        nextOffset: res.getNextoffset(),
        notifications: res.getNotificationsList().map((notification) => ({
          id: notification.getId(),
          body: notification.getBody(),
          type: notification.getType(),
          readAt: notification.getReadat(),
          subject: notification.getSubject(),
          createdAt: notification.getCreatedat(),
          relatedObject: notification.getRelatedobjectCase(),
        })),
      };

      console.log(objectRes);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.getNotifications({ seek: 'some-value', limit: 20 });

    console.log(res);
    ...
  };
```

#### .handleFilesInvitation({ invitationID: string, accept: boolean })

This method is for accepting or rejecting an invitation to a sharing request of a file.

```js
  client
    .handleFilesInvitation({ invitationID: '123-123-123', accept: true })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    
    await client.handleFilesInvitation({ invitationID: '123-123-123', accept: true });
    ...
  };
```

#### .setNotificationsLastSeenAt({ timestamp: number })
Updates the timestamp which is returned by the `getNotifications()` method through calling `getLastseenat()`.
This timestamp can be used to track which notification has not yet been seen by the user.

```js
  client
    .setNotificationsLastSeenAt({ timestamp: 1598889151456 })
    .then(() => {
      console.log('Updated the notifications timestamp');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.setNotificationsLastSeenAt({ timestamp: 1598889151456 });
    ...
  };
```

#### .deleteAccount()

Delete an account.

```js
  client.deleteAccount().then((res) => {
    console.log('account delted');
  })
  .catch((err) => {
    console.error(err);
  });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.deleteAccount();

    console.log('account delted');
  };
```

#### .deleteKeyPair()

Deletes the Key Pair

```js
  client
    .deleteKeyPair()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.deleteKeyPair();

    console.log(res);
    ...
  };
```

#### .getUsageInfo()

Fetches account storage usage info such as amount of space used locally and in Space, alongside bandwith quotas and limits. 

```js
  client
    .getUsageInfo()
    .then((usageInfoRes) => {
      const usageInfo = {
        localstorageused: usageInfoRes.getLocalstorageused(),
        localbandwidthused: usageInfoRes.getLocalbandwidthused(),
        spacestorageused: usageInfoRes.getSpacestorageused(),
        spacebandwidthused: usageInfoRes.getSpacebandwidthused(),
        usagequota: usageInfoRes.getUsagequota(),
      }

      console.log(usageInfo);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const usageInfoRes = await client.getUsageInfo();

    const usageInfo = {
      localstorageused: usageInfoRes.getLocalstorageused(),
      localbandwidthused: usageInfoRes.getLocalbandwidthused(),
      spacestorageused: usageInfoRes.getSpacestorageused(),
      spacebandwidthused: usageInfoRes.getSpacebandwidthused(),
      usagequota: usageInfoRes.getUsagequota(),
    }

    console.log(usageInfo);
    ...
  };
```

#### .getStoredMnemonic()

Get the stored mnemonic seed. 

```js
  client
    .getStoredMnemonic()
    .then((res) => {
      console.log(res.getMnemonic());
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.getMnemonic();

    console.log(res.getMnemonic());
    ...
  };
```

#### .restoreKeyPairViaMnemonic({ mnemonic: string })

Restore key pair via mnemonic

```js
  client
    .restoreKeyPairViaMnemonic({
      mnemonic: 'my-mnemonic',
    })
    .then(() => {
      console.log('restore keys');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.restoreKeyPairViaMnemonic({
      mnemonic: 'my-mnemonic',
    });
  };
```


#### .getSharedWithMeFiles({ seek: string, limit: number })

Returns the list of files shared with me

```js
  client
    .getSharedWithMeFiles({
      seek: "seek_value",
      limit: 30,
    })
    .then((res) => {
      const result = {
        nextOffset: result.getNextoffset(),
        items: result.getItemsList().map((item) => {
          const entry = item.getEntry();

          return {
            dbId: item.getDbid(),
            bucket: item.getBucket(),
            path: entry.getEntrygetPath(),
            isDir: entry.getIsdir(),
            name: entry.getName(),
            sizeInBytes: entry.getSizeinbytes(),
            created: entry.getCreated(),
            updated: entry.getUpdated(),
            fileExtension: entry.getFileextension(),
            ipfsHash: entry.getIpfshash(),
            isLocallyAvailable: entry.getIslocallyavailable(),
            backupCount: entry.getBackupcount(),
            members: entry.getMembersList().map((member) => ({
              publicKey: member.getPublickey(),
            })),
          };
        }),
      };

      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.getSharedWithMeFiles({
      seek: "seek_value",
      limit: 30,
    });

    console.log(res.getItemsList());
    ...
  };
```


#### .shareFilesViaPublicKey({ publicKeys: [string], paths: [{ dbId?: string, bucket?: string, path: string }] })

Share files with other users via their public keys

```js
  client
    .shareFilesViaPublicKey({
      publicKeys: ['pubKey1', 'pubKey2', 'pubKey3'],
      paths: [{
        path: 'path1/file.jpeg',
        dbId: 'db-id-1',
        bucket: 'my-bucket',
      }],
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.shareFilesViaPublicKey({
      publicKeys: ['pubKey1', 'pubKey2', 'pubKey3'],
      paths: [{
        path: 'path1/file.jpeg',
        dbId: 'db-id-1',
        bucket: 'my-bucket',
      }],
    });

    console.log(res);
    ...
  };
```

#### .getAPISessionTokens()

Get the current api session tokens.

```js
  client
    .getAPISessionTokens()
    .then((res) => {
      const hubToken = res.getHubtoken();
      const servicestoken = res.getServicestoken();

      console.log('hubToken', hubToken);
      console.log('servicestoken', servicestoken);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.getAPISessionTokens();

    console.log('hubToken', res.getHubtoken());
    console.log('servicestoken', res.getServicestoken());

    ...
  };
```


#### .getRecentlySharedWith()

Returns a list of the recently members that you shared with

```js
  client
    .getRecentlySharedWith()
    .then((res) => {
      const membersList = res.getMembersList();

      const members = membersList.map((member) => ({
        address: member.getAddress(),
        publicKey: member.getPublickey(),
      }));
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.getRecentlySharedWith();

    const membersList = res.getMembersList();
    ...
  };
```


#### .generatePublicFileLink({ bucket?: string, password: string, itemPaths: [string], dbId: string })

Generates a sharing public link for the files specified.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

```js
  client
    .generatePublicFileLink({
      dbId: 'db-id-string',
      bucket: 'my-bucket',
      password: '123asd',
      itemPaths: ['path/to/file1.txt', 'path/to/file2.txt'],
    })
    .then((res) => {
      const fileInfo = {
        link: res.getLink(),
        fileCid: res.getFilecid(),
      };

      console.log(fileInfo);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.generatePublicFileLink({
      bucket: 'my-bucket',
      password: '123asd',
      itemPaths: ['path/to/file1.txt', 'path/to/file2.txt'],
    });

    const fileInfo = {
      link: res.getLink(),
      fileCid: res.getFilecid(),
    };

    ...
  };
```

## Example
You can check the example included in the `example` folder.

To run the example you need to download and run the [daemon](https://github.com/FleekHQ/space-daemon#installation) first

Then you can run the example by

```bash
  npm run example
```

then on your web browser go to `localhost:3001`

## Proto File Reference

If you need more information about the available methods, you can check the [Proto File Schema](https://github.com/FleekHQ/space-client/blob/develop/src/definitions/space.proto).


## Daemon

You can find more information related to the daemon [here](https://github.com/FleekHQ/space-daemon)
