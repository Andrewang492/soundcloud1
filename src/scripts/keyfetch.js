// Deprecated. Key is not useful i dont think.

const sckey = require("soundcloud-key-fetch");

const key = sckey.fetchKey().then((key) => {
  console.log(key);
  return key;
});

key
  .then((key) => sckey.testKey(key))
  .then((result) => {
    if (result) {
      console.log("key works");
    } else {
      console.log("key doesnt work");
    }
  });
