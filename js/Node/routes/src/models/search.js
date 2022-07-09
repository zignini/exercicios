import fetch from 'node-fetch';
import http from "http";

/* To-do: 
- convert queries automatically
- Get MD5 automatically
*/

const baseUrl = "https://gateway.marvel.com/v1/public/";
var endpoint = "characters";
var query = "?nameStartsWith=miss";
const apikey = "&apikey=049e71812553769e2b7db9afb5e6ad7a";
// const privKey = "e9c14b098669cfe06e2d00e970bd6a428b1f9ac0";
const ts = "&ts=1656971833953"
const hash = "&hash=7f85356b8317c3410cc330fcfac90292"

var url = `${baseUrl}${endpoint}${query}${ts}${apikey}${hash}`;

var response = await fetch(url);

console.log(response);