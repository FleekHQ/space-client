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

#### .openFile({ path: string, bucket?: string })

Copies the file referenced by the path arg to a temp folder and returns a Promise that resolves to the file location.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

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
      console.log(bucket.getMembersList());
      console.log(bucket.getIsselectgroupbucket());
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

#### .createUsernameAndEmail({ username: string, email?: string })

Create a new username with/out email. Returns a Promise that resolves to the username.

```js
  client
    .createUsernameAndEmail({ username: 'myusername' })
    .then(() => {
      console.log('username created');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.createUsernameAndEmail({ username: 'myusername', email: 'my-email@mydomain.com' });
  };
```

#### .getIdentityByUsername({ username: string, email?: string })

Get an indentity based on a username. Returns a Promise that resolves if a username already exists.

```js
  client
    .getIdentityByUsername({ username: 'myusername' })
    .then((res) => {
      console.log(res.getIdentity());
    })
    .catch(() => {
      console.log('Username doesnt exists.');
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.getIdentityByUsername({ username: 'myusername' });
    
    console.log(res.getIdentity());
  };
```

#### `[WIP]` <em>.shareBucketViaEmail({ bucket?: string, email: string })</em>

> this method is still not supported by [space-daemon](https://github.com/FleekHQ/space-daemon)

Shares a bucket via email.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

```js
  client
    .shareBucketViaEmail({ bucket: 'my-bucket-slug', email: 'email@gmail.com' })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Asyn/Await */

  const asyncFunc = async () => {
    const res = await client.shareBucketViaEmail({
      bucket: 'my-bucket-slug',
      email: 'email@gmail.com',
    });
    
    console.log(res);
  };
```


#### .shareBucketViaIdentity({ identityType: 'USERNAME' | 'EMAIL', identityValue: string, bucket?: string })

Shares a bucket via identity.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

```js
  client
    .shareBucketViaIdentity({
      bucket: 'my-bucket-slug',
      identityType: 'USERNAME',
      identityValue: 'user123',
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.shareBucketViaIdentity({
      bucket: 'my-bucket-slug',
      identityType: 'USERNAME',
      identityValue: 'user123',
    });
    
    console.log(res);
  };
```

#### `[WIP]` <em>.generateFileShareLink({ bucket?: string, filePath: string })</em>

> this method is still not supported by [space-daemon](https://github.com/FleekHQ/space-daemon)

Generates a share link.
If you don't specify the `bucket` property, `client.defaultBucket` value is going to be used instead.

```js
  client
    .generateFileShareLink({
      bucket: 'my-bucket-slug',
      filePath: 'path/to/file.js',
    })
    .then((res) => {
      console.log(res.getLink());
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.generateFileShareLink({
      bucket: 'my-bucket-slug',
      filePath: 'path/to/file.js',
    });
    
    console.log(res.getLink());
  };
```

#### `[WIP]` <em>.backupKeysByPassphrase({ passphrase: string })</em>

> this method is still not supported by [space-daemon](https://github.com/FleekHQ/space-daemon)

Backup keys by passphrase

```js
  client
    .backupKeysByPassphrase({
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
      passphrase: 'my-passphrase',
    });
  };
```

#### `[WIP]` <em>.recoverKeysByPassphrase({ passphrase: string })</em>

> this method is still not supported by [space-daemon](https://github.com/FleekHQ/space-daemon)

Recovery keys by passphrase

```js
  client
    .recoverKeysByPassphrase({
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
      passphrase: 'my-passphrase',
    });
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

#### `[WIP]` <em>.listBuckets({})</em>

> this method is still not supported by [space-daemon](https://github.com/FleekHQ/space-daemon)

Returns all the buckets available

```js
  client
    .listBuckets({})
    .then((res) => {
      const buckets = res.getBucketsList();
      
      buckets.forEach((bucket) => {
        console.log('key:', bucket.getKey());
        console.log('name:', bucket.getName());
        console.log('path:', bucket.getPath());
        console.log('createdAt:', bucket.getCreatedat());
        console.log('updatedAt:', bucket.getUpdatedat());
        console.log('membersList:', bucket.getMembersList());
        console.log('isSelectGroupBucket:', bucket.getIsselectgroupbucket());
      });
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.listBuckets({});
    const buckets = res.getBucketsList();

    ...
  };
```


#### .shareBucket({ bucket?: string })

Shares a bucket. Returns a promise that resolves to the threadInfo (required to join a bucket).
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


#### .shareItemsToSelectGroup(payload)

Share files through email or space address.

payload (object):

- `bucket`: <em>**(string, optional)**</em> bucket name where are located the files that you want to share.
- `itemPaths`: <em>**([string], required)**</em> list of the files paths that you want to share (bucket file paths).
- `customMessage`: <em>**(string, optional)**</em> custom message to be attached to the email invitation.
- `invitationType`: <em>**([InvitationType], required)**</em> list of invitations types (see details below)

InvitationType (object):

- `invitationType`: <em>**(enum('INVITE_THROUGH_EMAIL' | 'INVITE_THROUGH_ADDRESS'), required)**</em> defines the type of invitation: `INVITE_THROUGH_EMAIL` for email invitation, `INVITE_THROUGH_ADDRESS` for space address invitation.
- `invitationValue`: <em>**(string, required)**</em> invitation value according to the `invitationType` selected. If the `invitationType` selected is `INVITE_THROUGH_EMAIL`, `invitationValue` should be an email address, otherwise, if the `invitationType` selected is `INVITE_THROUGH_ADDRESS`, `invitationType` value should be the user space address with whom you want to share the file/s.


```js
  client
    .shareItemsToSelectGroup({
      bucket: 'my-bucket',
      itemPaths: ['subfolder/docs/file.txt', 'subfolder/docs/image.jpg'],
      customMessage: 'Hello world!',
      invitations: [
        {
          invitationType: 'INVITE_THROUGH_EMAIL',
          invitationValue: 'some_email@test.com',
        },
      ],
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {ch 
    const res = await client.shareItemsToSelectGroup({
      bucket: 'my-bucket',
      itemPaths: ['subfolder/docs/file.txt', 'subfolder/docs/image.jpg'],
      customMessage: 'Hello world!',
      invitations: [
        {
          invitationType: 'INVITE_THROUGH_EMAIL',
          invitationValue: 'some_email@test.com',
        },
      ],
    });

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
