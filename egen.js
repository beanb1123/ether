const fetch = require('node-fetch2');

fetch('https://google.com')
    .then(res => res.text())
    .then(text => console.log(text));
