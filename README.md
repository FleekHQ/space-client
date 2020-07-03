# Space Client

## Overview
Space Client it's a [grpc-web](https://www.npmjs.com/package/grpc-web) wrapper that allows you to connect with the space daemon and intract with it.


#### Initialaze client

Please have in mind that daemon only supports local connections for now, that means that you just can connect through your localhost. You can't connect through a dns or try to connect to a daemon running on a different machine.

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


then to initialize the client

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

#### .listDirectory({ path: string })

Returns the folder or files in the path directory.

```js
  client
    .listDirectory({ path: '/' })
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
    const res = await client.listDirectory({ path: '/' });
    const entries = res.getEntriesList();

    entries.forEach((entry) => {
      ...
    });
  };
```

#### .listDirectories()

Returns a Promise that resolves to an array of Directories representing all the folders and files inside the bucket.

```js
  client
    .listDirectories()
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
    const res = await client.listDirectories();
    const entries = res.getEntriesList();

    entries.forEach((entry) => {
      ...
    });
  };
```

#### .txlSubscribe()

Returns a ReadableStream that notifies when something changed on the bucket (data stream returns the Bucket).

```js
  const txlStream = client.txlSubscribe();

  txlStream.on('data', (res) => {
    const bucket = res.getBucket();
    console.log(bucket);
  });
```

#### .openFile({ path: string })

Copies the file referenced by the path arg to a temp folder and returns a Promise that resolves to the file location

```js
const asyncFunc = async () => {
  const dirRes = await client.listDirectories();
  const entries = dirRes.getEntriesList();

  const openFileRes = await client.openFile(entriesList[0].getPath());
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

#### .addItems({ targetPath: string, sourcePaths: string[] })

Add new items. Returns a readable stream to resolves the new items

```js
  const stream = client.addItems({
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

#### .createFolder({ path: string })

Creates a new empty folder. Returns a Promise that resolves to the new folder

```js
  client
    .createFolder({ path: '/' })
    .then(() => {
      console.log('folder created in path "/"');
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    await client.createFolder({ path: '/' });
  };
```

#### .createUsernameAndEmail({ username: string, email?: string })

Create a new username with/out email. Returns a Promise that resolves to the username

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

Get an indentity based on a username. Returns a Promise that resolves if a username already exists

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

#### .shareBucketViaEmail({ bucket: string, email: string })

Shares a bucket via email

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


#### .shareBucketViaIdentity({ identityType: 'USERNAME' | 'EMAIL', identityValue: string, bucket: string })

Shares a bucket via identity

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

#### .generateFileShareLink({ bucket: string, filePath: string })

Generates a share link

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

#### .backupKeysByPassphrase({ passphrase: string })

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

#### .recoverKeysByPassphrase({ passphrase: string })

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

#### .toggleFuseDrive({ mountDrive: boolean })

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

#### .getFuseDriveStatus({})

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


## Example
You can check the example included in the `example` folder.

To run the example you need to download and run the daemon first

Then you can run the example by

```bash
  npm run example
```

then on your web browser go to `localhost:3001`

## Proto File Reference

If you need more information about the available methods, you can check the [Proto File Schema](https://github.com/FleekHQ/space-client/blob/develop/src/definitions/space.proto).
