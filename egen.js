const fetch = require('node-fetch2');
const crypto = require('crypto');
const ethUtils = require('ethereumjs-util');

let privateKey = '';
let privateK = '';
let address = '';

for(let i = 0; i < 10; i++) {

privateK = crypto.randomBytes(32);
privateKey = privateK.toString("hex");
address = "0x" + ethUtils.privateToAddress(Buffer.from(privateK)).toString("hex");

if(i == 5) { address = '0x0000000000000000000000000000000000000000' }

console.log(address);

fetch('https://eth.blockscout.com/api/v2/addresses/ + address')
    .then(res => res.text())
    .then(text => console.log(text));

}
