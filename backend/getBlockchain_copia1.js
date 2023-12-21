// https://www.youtube.com/watch?v=dsWD2fR8O7I

const express = require("express");
const Client = require("bitcoin-core");
const app = express();
const fs = require("fs");
const port = 3010;

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
//console.log(mempoolInfo.size);
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
  }
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
});


// Define a route to get the block count
//FUNCIONA BIEN
app.get("/blockchaininfo", async (req, res) => {
  try {
    //Aquí tenim un objecte blockchaininfo
    const blockChainInfo = await client.getBlockchainInfo();
    //console.log(blockChainInfo.chain);
    //console.log(blockChainInfo.softforks.bip34.type);
    // aqui pasem lobjecte blockchaininfo a string
    const blockchainInfoString = JSON.stringify(blockChainInfo);
    //console.log(blockchainInfoString);
    //Aqui pasem el string a un objecte JSON
    //const blockchainStringToJSON = JSON.parse(blockchainInfoString);
    //console.log(blockchainStringToJSON);

    //Fabriquem el html de resposta
    const response =
      "<html><body><table border=2><tr><td>Concept</td><td>Result</td></tr> <tr><td>Network: </td><td><h3>" +
      blockChainInfo.chain +
      "</h3> </td></tr><tr><td>Number of Blocks: </td><td><h3>" +
      blockChainInfo.blocks +
      "</h3></td></tr> <tr><td>Best Block Hash: </td><td><h3>" +
      blockChainInfo.bestblockhash +
      "</h3></td>    console.log(mempoolInfo1);</tr> <tr><td>Forks: </td><td>Fork number one (bip34) in block number:  </td><td><h3>" +
      blockChainInfo.softforks.bip34.height +
      "</h3></td></tr><tr><td></td><td>Fork number two (bip 66) in block number:  </td><td><h3>" +
      blockChainInfo.softforks.bip66.height +
      "</h3></td></tr><tr><td></td><td>Fork number three (bip 65) in block number:  </td><td><h3>" +
      blockChainInfo.softforks.bip65.height +
      "</h3></td></tr><tr><td></td><td>Fork number four (bip csv) in block number:  </td><td><h3>" +
      blockChainInfo.softforks.csv.height +
      "</h3></td></tr><tr><td></td><td>Fork number five (segwit) in block number:  </td><td><h3>" +
      blockChainInfo.softforks.segwit.height +
      "</h3></td></tr><tr><td></td><td>Fork number six (taproot) in block number:  </td><td><h3>" +
      blockChainInfo.softforks.taproot.height +
      "</h3></td></tr></table></body></html>";
    res.send(response);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});



// Define a route to get the block count
//FUNCIONA BIEN
app.get("/mempoolinfo", async (req, res) => {
  try {
    //Aquí tenim un objecte blockchaininfo
    console.log("0000000000000000");
    const mempoolInfo = await client.getMemoryPoolContent;
    const mempoolInfo1 = mempoolInfo().getmempoolinfo;
    console.log(mempoolInfo1);

    //console.log(typeof(mempoolInfo2));
    //console.log(JSON.parse(mempoolInfo2))    
    //console.log(mempoolInfo2);
    //console.log(blockChainInfo.softforks.bip34.type);
    // aqui pasem lobjecte blockchaininfo a string
    //const mempoolInfoString = await client.getmempoolinfo;
    //const mempoolInfoString = JSON.stringify(mempoolInfo);
    //console.log(mempoolInfo);
    console.log(11111111111);
    //console.log(mempoolInfoString);
    //Aqui pasem el string a un objecte JSON
    //const blockchainStringToJSON = JSON.parse(blockchainInfoString);
    //console.log(blockchainStringToJSON);

    //Fabriquem el html de resposta
    const response =
      "";
    res.send(response);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});



//UNDEFINED
// Define a route to get the block count
app.get("/bestblockhash", async (req, res) => {
  try {
    //     const blockChainInfo = await client.getBlockchainInfo();
    // const bestblockhash1 = await client.getbestblockhash;
    const bestblockhash1 = await client.getbestblockhash;
    console.log(bestblockhash1);

    res.send(`Best Block Hash: ${bestblockhash1}`);
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
app.get("/mempoolinfo1", async (req, res) => {
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
