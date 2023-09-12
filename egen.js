const request = require('request');
const fs = require('fs');
const crypto = require('crypto');
const ethUtils = require('ethereumjs-util');

let privateKey = '';
let privateK = '';
let address = '';

async function doe() {
for(let i = 0; i < 77; i++) {

privateK = crypto.randomBytes(32);
privateKey = privateK.toString("hex");
address = "0x" + ethUtils.privateToAddress(Buffer.from(privateK)).toString("hex");

if(i == 5) { address = '0x0000000000000000000000000000000000000000' }

console.log(address);

await request('https://eth.blockscout.com/api/v2/addresses/' + address, { json: true }, (err, res, body) => { if (err) { return console.log(err); } 
let bal = body.coin_balance; 
console.log(bal + " - " + address + " - " + privateKey);
if(bal != undefined) { fs.appendFileSync("zzethgood.txt", bal + " - " + address + " - " + privateKey);
console.log(bal + " - " + address + " - " + privateKey);
}});
}
}

doe();
