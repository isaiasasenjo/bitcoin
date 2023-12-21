const bitcoin = require('bitcoinjs-lib');
const ElectrumClient = require('bitcoinjs-lib').ElectrumClient;
const bitcoinNetwork = bitcoin.networks.testnet; // Usar la red Testnet
const bitcoinClient = new ElectrumClient('localhost', 18333);

console.log("Hola");
