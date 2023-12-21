const express = require('express');
const Client = require('bitcoin-core');
const app = express();
//const bitcoin = require('bitcoin-core')
//const bitcoin = require('bitcoinjs-lib');

//import * as bitcoin from 'bitcoin-core';
const port=3008;

const client = new Client({
  network: 'testnet',
  username: 'eduard',  // Replace with your rpcuser
  password: '2001',  // Replace with your rpcpassword
  port: 18332                // Default RPC port for testnet
});

async function getLatestBlock() {
    try {
      const bestBlockHash = await client.getBestBlockHash();
      res.send(`Current <a href="http://localhost:3005/blockcount" target="_blank">Blockcount</a>block count: ${bestBlockHash}`);
      
      //const latestBlock = await client.getBlock(bestBlockHash);
      //return latestBlock;
    } catch (error) {
      console.error('Error fetching latest block:', error);
      throw error;
    }
  }
//getLatestBlock()
// Start the server
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// https://www.youtube.com/watch?v=dsWD2fR8O7I