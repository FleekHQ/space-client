/* eslint-disable */
const { SpaceClient } = require('../dist');

const client = new SpaceClient({
  url: `http://${window.location.hostname}:8080`,
});

const main = async () => {
  const res = await client.sayHello('MySuperTest');

  console.log(res.getMessage());

  const stream = client.sayRepeatHello('Test', 10);

  stream.on('data', (res) => {
    console.log(res.getMessage());
  });
};

main();
