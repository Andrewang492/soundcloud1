// const sckey = require("soundcloud-key-fetch");
import * as sckey from "soundcloud-key-fetch";

function test() {
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

  key
    .then((clientid) => {
      return fetch(
        `https://api-v2.soundcloud.com/search?client_id=${clientid}&q=the%20buzz&limit=1`
      );
    })
    .then((jsonres) => jsonres.json())
    .then((obj) => console.log(obj));
}

/**
 * Returns a promise (giving a json body).
 */

export function search_soundcloud(query) {
  return sckey
    .fetchKey()
    .then((clientid) => {
      return fetch(
        `https://api-v2.soundcloud.com/search?client_id=${clientid}&q=${query}&limit=1`
      );
    })
    .then((jsonres) => jsonres.json());
}

function test2() {
  search_soundcloud("the buzz").then((obj) => console.log(obj));
}

// Main

// test2();
