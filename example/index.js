/* eslint-disable */
const { SpaceClient } = require('../dist');

const client = new SpaceClient({
  url: `http://${window.location.hostname}:8080`,
});

const main = async () => {
  const res = await client.listDirectories();

  console.log(res.getMessage());
};

main();
