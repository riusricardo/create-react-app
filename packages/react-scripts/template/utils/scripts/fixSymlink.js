// Create symlink to build/contracts
'use strict';

const fs = require('fs');

try {
  fs.symlinkSync(
    '../../build/contracts',
    './client/src/contracts',
    'dir'
  );
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log('Cannot create symbolic link. It already exists.');
    console.log(
      '../../build/contracts',
      './client/src/contracts');
  } else {
    throw err;
  }
}
