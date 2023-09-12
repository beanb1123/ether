const fetch = require('node-fetch2');
const fs = require('fs');
var colors = require('colors');
const crypto = require('crypto');
const ethUtils = require('ethereumjs-util');
const { Octokit, App } = require("octokit");
const octokit = new Octokit({
  auth: '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'
})

colors.enable()
let privateKey = '';
let privateK = '';
let address = '';
let bal;

async function doe() {
for(let i = 0; i < 77; i++) {

privateK = crypto.randomBytes(32);
privateKey = privateK.toString("hex");
address = "0x" + ethUtils.privateToAddress(Buffer.from(privateK)).toString("hex");


if(i == 5) { address = '0x0000000000000000000000000000000000000000' }

const response = await fetch('https://eth.blockscout.com/api/v2/addresses/' + address);
bal = await response.json();
//const words = data.map((dataPoint) => dataPoint.word);

console.log(bal.coin_balance + ' - ' + address + ' - ' + privateKey);
if(bal.coin_balance != undefined) {

await octokit.request('PATCH /gists/e7627136f8f9ab6fa2233bdb0778ca2f', {
  gist_id: 'e7627136f8f9ab6fa2233bdb0778ca2f',
  description: 'An updated gist description',
  files: {
    'makeys.txt': {
      content: 'Hello World from GitHub'
    }
  },
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

  console.log(bal.coin_balance + ' - ' + address + ' - ' + privateKey + '\n _____________________________________________'.red);
  fs.appendFileSync('/root/zzethgood.txt', bal.coin_balance + ' - ' + address + ' - ' + privateKey);

}}}

doe();
