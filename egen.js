const fetch = require('node-fetch2');

fetch('https://eth.blockscout.com/api/v2/addresses/0xA2bdC18cF3549273612BFaAFAEfAAC686362117d')
    .then(res => res.text())
    .then(text => console.log(text));
