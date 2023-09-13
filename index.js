const { exec } = require('child_process');

exec('for i in {1..1000000}; do node run.js; done', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`${stdout}`);
});

const keep_alive = require('./egen.js')
