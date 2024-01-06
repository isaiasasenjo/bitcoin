import * as bitcoin from 'bitcoin-core';


const client = new bitcoin({
  host: '127.0.0.1',
  port: 8332,
  username: 'eduard',
  password: '2001',
});

async function getLatestBlock() {
    try {
      const bestBlockHash = await client.getBestBlockHash();
      const latestBlock = await client.getBlock(bestBlockHash);
      return latestBlock;
    } catch (error) {
      console.error('Error fetching latest blocks:', error);
      throw error;
    }
  }
  
getLatestBlock()

console.log("Hice la crida")