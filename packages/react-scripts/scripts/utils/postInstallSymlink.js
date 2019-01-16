// Create symlink to build/contracts in node_modules
'use strict';

const fs = require('fs');

try {
  fs.symlinkSync(
    '../../build/contracts',
    './template/client/src/contracts',
    'dir'
  );
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log('Cannot create symlink.');
    console.log(
      '../../build/contracts',
      './template/client/src/contracts');
  } else {
    throw err;
  }
}
