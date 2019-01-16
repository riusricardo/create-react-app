'use strict'

const ganacheRPC = require('ganache-cli');
let provider;

module.exports = {
  compilers: {
    solc: {
      version: "0.5.2",
      optimizer: {
        enabled: false,
        runs: 200
      }
    }
  },
  networks: {
    ganache: {
      get provider () {
        if (!provider) {
          provider = ganacheRPC.provider({
            total_accounts: 10,
            network_id: 1335,
            gasLimit: 8000000,
            gasPrice: 1000000000
          });
        }
        return provider;
      },
      network_id: 1335,
      gas: 8000000,
      gasPrice: 1000000000
    },
    local_dev: {
      host: 'localhost',
      network_id: 1337,
      port: 9545,
      gas: 6283185, // geth --dev gas limit
      gasPrice: 1000000000
    }
  }
};