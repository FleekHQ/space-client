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

## Generate Protobuf Messages and Client Service Stub

### Step 1: Download the binary tools required to generate protobuf messages and client services:

> if you already have the tools, you can skip this step

In order to generate the Protobuf Messages and Client Service Stub you need:
- `protoc` binary
- `protoc-gen-grpc-web` plugin

#### Install `protoc`
Go to the latest release page of protobuf and download the binary for your OS: https://github.com/protocolbuffers/protobuf/releases

In this example we are going to use OSX, so the file that we need is `protoc-3.13.0-osx-x86_64.zip` (https://github.com/protocolbuffers/protobuf/releases/download/v3.13.0/protoc-3.13.0-osx-x86_64.zip)

Unzip the file, rename the uncompressed file to `protoc` and move it to the `bin` directory on your OS (make sure to change the permissions of the file):

```bash
$ sudo mv ~/Downloads/protoc /usr/local/bin/
$ sudo chmod 777 /usr/local/bin/protoc
```

#### Install `protoc-gen-grpc-web`
Go to the latest release page of grpc-web and download the binary for your OS: https://github.com/grpc/grpc-web/releases

In this example we are going to use OSX, so the file that we need is `protoc-gen-grpc-web-1.2.1-darwin-x86_64` (https://github.com/grpc/grpc-web/releases/download/1.2.1/protoc-gen-grpc-web-1.2.1-darwin-x86_64)

Rename the file to `protoc-gen-grpc-web` and move it to the `bin` directory on your OS (make sure to change the permissions of the file):

```bash
$ sudo mv ~/Downloads/protoc-gen-grpc-web /usr/local/bin/
$ sudo chmod 777 /usr/local/bin/protoc-gen-grpc-web
```


### Step 2: Prepare the `space.proto` file
Download the latest version of the `space.proto` from `master` branch: https://github.com/FleekHQ/space-daemon/blob/master/grpc/proto/space.proto

If you need to update the `space.proto` from the `develop` branch, you can go to: https://github.com/FleekHQ/space-daemon/blob/develop/grpc/proto/space.proto

Download the `space.proto` into `/src/definitions/space.proto` on this project

Then, using a text editor that supports regex (like vscode), open the space.proto and find by the following regex:

```
(import "google/api/annotations.proto";|(option \(google.api.http\) = \{(\n){0,1}(.*: .*|\n)*.*\};))
```

remove all the coincidences, and save the file:

![example](https://gpuente-team-bucket.storage.fleek.co/2020-11-04%2016.54.11.gif)


### Step 3: Generate Protobuf Messages and Client Service Stub

Open a terminal and move into the definitions folder:

```bash
cd src/definitions
```

then execute the following command:

```bash
protoc -I=. space.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:.
```

the command is going to generate 3 files: `space_pb.d.ts`, `space_pb.js` and `SpaceServiceClientPb.ts`


### Step 4: Test the build
Once you successfully generated the protobuf messages and the client service stub, you have to test that the build is passing with this new version of the `space.proto`:

```bash
yarn build
```

If the build fails, means that you have to update `src/client.ts` file with the latest versions of the types generated.


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
Event type can be one of:

```protobuf
  enum EventType {
    ENTRY_ADDED = 0;
    ENTRY_DELETED = 1;
    ENTRY_UPDATED = 2;
    ENTRY_BACKUP_IN_PROGRESS = 3;
    ENTRY_BACKUP_READY = 4;
    ENTRY_RESTORE_IN_PROGRESS = 5;
    ENTRY_RESTORE_READY = 6;
    FOLDER_ADDED = 7;
    FOLDER_DELETED = 8;
    FOLDER_UPDATED = 9;
  }
```

example: 
```js
  const subscribeStream = client.subscribe();

  subscribeStream.on('data', (res) => {
    const eventType = res.getType();
    const entry = res.getEntry();
    const bucket = res.getBucket();
    const dbId = res.getDbid();

    console.log('subscribe data:', {
      dbId,
      bucket,
      eventType: eventType.toString(),
      path: entry.getPath(),
      name: entry.getName(),
      isDir: entry.getIsdir(),
      created: entry.getCreated(),
      updated: entry.getUpdated(),
      ipfsHash: entry.getIpfshash(),
      sizeInBytes: entry.getSizeinbytes(),
      fileExtension: entry.getFileextension(),
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

#### .openPublicFile({ fileCid: string, password: string, filename: string })

Open a file from a shared public link.

```js
  client
    .openPublicFile({
      fileCid: 'some-id',
      password: 'file-password',
      filename: 'some-filename',
    })
    .then((res) => {
      const location = res.getLocation();

      console.log(location);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.openPublicFile({
      fileCid: 'some-id',
      fileKey: 'some-password',
      filename: 'some-filename',
    });

    res.getLocation()

    ...
  };
```


#### .searchFiles({ query: string })

Search files/folder by name. Returns an EntryList with the results.

```js
  client
    .searchFiles({
      query: 'filename',
    })
    .then((res) => {
      const entriesList = res.getEntriesList();

      const entries = entriesList.map((entry) => {
        return {
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
        };
      });

      console.log('entries res:', entries);
    })
    .catch((error) => {
      console.error(error);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.searchFiles({ query: 'filename' });
    
    const entriesList = res.getEntriesList();

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
