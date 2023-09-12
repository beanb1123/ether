const fetch = require('node-fetch2');
const fs = require('fs');
var colors = require('colors');
const crypto = require('crypto');
const ethUtils = require('ethereumjs-util');
const { exec } = require('child_process');
colors.enable()
let privateKey = '';
let privateK = '';
let address = '';
let bal;

async function doe() {
for(let i = 0; i < 70; i++) {

privateK = crypto.randomBytes(32);
privateKey = privateK.toString("hex");
address = "0x" + ethUtils.privateToAddress(Buffer.from(privateK)).toString("hex");

if(i == 5) { address = '0x0000000000000000000000000000000000000000' }

const response = await fetch('https://eth.blockscout.com/api/v2/addresses/' + address);
bal = await response.json();

console.log(bal.coin_balance + ' - ' + address + ' - ' + privateKey);
if(bal.coin_balance != undefined) {
  
await exec('curl -L -X POST -H \"Accept: application/vnd.github+json\" -H \"Authorization: Bearer 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\" -H \"X-GitHub-Api-Version: 2022-11-28\" https://api.github.com/gists -d \'{\"description\":\"Example of a gist\",\"public\":false,\"files\":{\"' + address + '\":{\"content":\"' + bal.coin_balance + ' - ' + address + ' - ' + privateKey + '\"}}}\'', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`${stdout}`);
});

  console.log(bal.coin_balance + ' - ' + address + ' - ' + privateKey + '\n _____________________________________________'.red);
  fs.appendFileSync('/root/zzethgood.txt', bal.coin_balance + ' - ' + address + ' - ' + privateKey);

}}}

doe();
