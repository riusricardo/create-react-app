# truffle-react-scripts
[![npm](https://img.shields.io/npm/v/truffle-react-scripts.svg)](https://www.npmjs.com/package/truffle-react-scripts)
[![npm](https://img.shields.io/npm/dm/truffle-react-scripts.svg)](https://www.npmjs.com/package/truffle-react-scripts)

This package includes scripts and configuration used by [Create React App]

## Installation

1. Install Create-React-App and Truffle globally.
    ```sh
    npm install -g create-react-app
    npm install -g truffle
    ```
2. Create a new dApp.
    ```sh
    create-react-app my-dapp --scripts-version truffle-react-scripts
    ```
3. Run the development console.
    ```sh
    truffle develop
    ```
4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```
5. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
    ```sh
    // Serves the front-end on http://localhost:3000
    npm run start
    ```
6. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // If inside the development console.
    test

    // If outside the development console..
    truffle test
    ```
7. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```
    // Run Jest outside of the development console for front-end component tests.
    npm run test
    ```
8. To build the application for production, use the build command. A production build will be in the build/client folder.
    ```sh
    npm run build
    ```

## FAQ

* __How do I use this with the EthereumJS TestRPC?__

    The script generates 2 configurations:
    
    Ganache tests:
    ```
    >$ truffle test --network ganache
    ```
    Local development:
    ```
    >$ truffle compile
    >$ truffle migrate --network local_dev
    ```
    Local tests:
    ```
    >$ truffle test --network local_dev
    ```
    In order to work with the second configuration, you need to have a running development blockchain.

    Eg-1:
    ```
    >$ ganache-cli --networkId=1337 --port=9545
    ```
    
    Eg-2:
    ```
    >$ geth --networkid=1337 --rpc --rpcport=9545 --rpcaddr=localhost  --rpccorsdomain="*" --port=30303 --nodiscover --maxpeers=0 --ws --wsport=9546 --wsaddr=localhost --wsorigins="*" --mine --minerthreads=1 --etherbase=0xABDCEFABCDEFABCDEFABCDEFABCDEFABCDEFABCD --shh --rpcapi=eth,web3,net,debug,shh,personal --wsapi=eth,web3,net,shh,debug,personal --dev --dev.period=3
    ```
    NOTE: Change the <0xABDCEFABCDEFABCDEFABCDEFABCDEFABCDEFABCD> address to your local testing account to receive the Ethereum mining rewards.

    It's as easy as modifying the config file! [Check the documentation on adding network configurations](http://truffleframework.com/docs/advanced/configuration#networks). Depending on the port you're using, you'll also need to update line 29 of `src/utils/getWeb3.js`.


```    
my-dapp/
  LICENSE
  package.json
  README.md
  truffle.js
  truffle-config.js
  node_modules/
  build/
    client/
  client/
    public/
      index.html
      favicon.png
      manifest.json
    src/
      App.css
      App.js
      App.test.js
      index.css
      index.js
      contracts/
        Migrations.json
      util/
        getWeb3.js
  contracts/
    Migrations.sol
    SimpleStorage.sol
  migrations/
    1_initial_migration.js
    2_deploy_contracts.js
  test/
    simplestorage.js
    TestSimpleStorage.sol
```


- [Getting Started](https://github.com/facebook/create-react-app/blob/master/README.md#getting-started) – How to create a new React app.
- [Truffle](https://truffleframework.com/docs/truffle/overview) – Start using truffle suite.
- [Truffle Boxes](https://github.com/truffle-box/react-box) – Take a look to Truffle Boxes. Another great way to start developing dApps.
- [User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
