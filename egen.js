const fetch = require('node-fetch2');
const fs = require('fs');
const crypto = require('crypto');
const ethUtils = require('ethereumjs-util');

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

  fs.appendFileSync('/root/zzethgood.txt', bal.coin_balance + ' - ' + address + ' - ' + privateKey);

}}}

doe();
