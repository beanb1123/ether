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
console.log(address);

fetch('https://eth.blockscout.com/api/v2/addresses/0xA2bdC18cF3549273612BFaAFAEfAAC686362117d')
    .then(res => res.text())
    .then(text => console.log(text));

}
