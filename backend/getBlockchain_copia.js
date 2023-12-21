// https://www.youtube.com/watch?v=dsWD2fR8O7I

const express = require("express");
const Client = require("bitcoin-core");
const app = express();
const fs =require("fs");
const port = 3000;

// Configure the client to connect to your Bitcoin node
const client = new Client({
  network: "testnet",
  username: "eduard", // Replace with your rpcuser
  password: "2001", // Replace with your rpcpassword
  port: 18332, // Default RPC port for testnet
});


//FUNCIONA BIEN
app.get("/", async (req, res) => {
  try {
    res.sendFile("/home/eduard/bitcoin/backend/index.html");
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("Error in the initial page");
  }
});





// Define a route to get the block count
// Es un endpoint:
//Un endpoint es una dirección de una API, o bien un backend que se encarga de dar respuesta
//a una petición, mientras que una REST, en una API, es una interfaz que sirve para la conexión
// de varios sistemas. Se basa en HTTP y sirve para obtener y enviar datos e información.
//FUNCIONA BIEN
app.get("/blockcount", async (req, res) => {
  try {
    const blockCount = await client.getBlockCount();
    res.send(`Current block count: ${blockCount}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }72854/node
});

//FUNCIONA BIEN
// Define a route to get the block count
app.get("/blockhash", async (req, res) => {
  try {
    const blockHash = await client.getBlockHash(1000);
    res.send(`BlockHash: ${blockHash}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
})

//UNDEFINED
// Define a route to get the block count
app.get("/bestblockhash", async (req, res) => {
  try {
    const bestblockhash = await client.getbestblockhash;
    res.send(`Best Block Hash: ${bestblockhash}`);
  } catch (e) {
    console.error("Error:", e);str
    res.status(500).send("An error occurred");
  }
});

// Define a route to get the block count
//medio bien
app.get("/blockchaininfo1", async (req, res) => {
  try {

    const blockchainInfo1 = await client.getblockchaininfo;

    for (const key in blockchainInfo1) {
      console.log(`${key}: ${blockchainInfo1[key]}`);
    }
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});



// Define a route to get the block count
//medio bien
app.get("/blockchaininfo", async (req, res) => {
  try {
 
    //Aquí tenim un objecte blockchaininfo
    const blockChainInfo = await client.getBlockchainInfo();
    console.log(blockChainInfo.chain);
    console.log(blockChainInfo.softforks.bip34.type);
    
// aqui pasem lobjecte blockchaininfo a string
    const blockchainInfoString = JSON.stringify(blockChainInfo);
    console.log(blockchainInfoString);
    
    //Fabriquem el html de resposta
    const response="<html><body><h1>"+blockChainInfo.chain+"</h1></body></html>";
    res.send(response);
  
    //const bestBlockHash = JSON.parse(blockChainInfo);

    //res.send(`Blockchain Information: Best block hash: ${bestBlockHash}`);

    //const chain = JSON.stringify(blockChainInfo.chain);
    //const blockChainInfo = await client.getBlockchainInformation();
    //const jsonString = JSON.stringify(blockChainInfo);
    //const chain = jsonString.match(/"chain": "(.*)"/)[1];
    //console.log("Chain:", chain);
    //const blockChainInfo = await client.getBlockchainInformation;

  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});



//UNDEFINED
app.get("/difficulty", async (req, res) => {
  try {
    //const blockHeader = await client.getBlockHeader(1);
    //const difficulty = blockHeader.difficulty;
    //res.send(`Difficulty: ${difficulty}`);

    const difficulty = await client.getdifficulty;
    const difficulty1 = JSON.stringify(difficulty);
    res.send(`Difficulty: ${difficulty1}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});

// Define a route to get the block count
app.get("/mempoolinfo", async (req, res) => {
  try {
    const mempoolinfo = await client.getmempoolinfo;
    res.send(`MempoolInfo:  ${mempoolinfo}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});


// Define a route to get the block count
app.get("/pruneblockchain", async (req, res) => {
  try {
    const pruneblockchain = await client.pruneblockchain(1000);
    res.send(`Prune Blockchain:  ${pruneblockchain}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});


// Define a route to get the block count
app.get("/blockheader", async (req, res) => {
  try {
    //const blockHeader2 = await client.getBlockHeader('00000000373403049c5fff2cd653590e8cbe6f7ac639db270e7d1a7503d698df');
    const blockHeader = await client.getBlockHeader("1000");
    res.send(`Block Header: ${blockHeader}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
