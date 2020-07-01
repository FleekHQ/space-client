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

[Proto File Reference](https://github.com/FleekHQ/space-client/blob/develop/src/definitions/space.proto#L8)



#### .txlSubscribe()

Returns a ReadableStream that notifies when something changed on the bucket (data stream returns the Bucket).

```js
  const txlStream = client.txlSubscribe();

  txlStream.on('data', (res) => {
    const bucket = res.getBucket();
    console.log(bucket);
  });
```

[Proto File Reference](https://github.com/FleekHQ/space-client/blob/develop/src/definitions/space.proto#L13)

[Readable Stream Reference](https://nodejs.org/dist/latest-v12.x/docs/api/stream.html#stream_class_stream_readable)


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

[Proto File Reference](https://github.com/FleekHQ/space-client/blob/develop/src/definitions/space.proto#L14)


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

[Proto File Reference](https://github.com/FleekHQ/space-client/blob/develop/src/definitions/space.proto#L19)
