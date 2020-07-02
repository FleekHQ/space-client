# Space Client

## API

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

#### .openFile(path: string)

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

#### .createBucket(slug: string)

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
    console.log(data);
  });
  
  stream.on('error', error) => {
    console.error(error)
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

## [Proto File Reference](https://github.com/FleekHQ/space-client/blob/develop/src/definitions/space.proto)
