// https://www.youtube.com/watch?v=dsWD2fR8O7I

const express = require("express");
const cors = require('cors');
const Client = require("bitcoin-core");

const app = express();
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// Configurar middleware para servir archivos estáticos
app.use(express.static('/home/eduard/bitcoin/backend'));
const fs = require("fs");
const port = 3001;

// Configure the client to connect to your Bitcoin node
const client = new Client({
  network: "testnet",
  username: "eduard", // Replace with your rpcuser
  password: "2001", // Replace with your rpcpassword
  port: 18332, // Default RPC port for testnet
});


//FUNCIONA BIEN
//inicio del ultimo getblock
app.get("/getblock", async (req, res) => {
  try {
    const blockHash =
      "00000000000000128dda605ce393023a3812685c357b4d80a09b00352f13a871";
    const blockHashBuffer = Buffer.from(blockHash, "hex");
    // Convert the const express = require('express');
    const formattedBlockHash = blockHashBuffer.toString("hex");
    // Retrieve the block header from the Bitcoin node using the formatted block hash
    const blockHeader = await client.getBlockHeader(formattedBlockHash);
    // Convert the raw block header object to a JSON object
    const formattedBlockHeader = JSON.stringify(blockHeader);
    //res.send(`Block Header: ${blockHeader.hash}`);
    console.log(blockHeader);
    const response =
      "<html><head></head><body><table align='center' cellspacing='2' cellpadding='2' border =1 width=100%><tr>BLOCK DATA</tr><tr><td>Block Number:</td><td><b>" +
      blockHeader.height +
      "</b></td><td>Confirmations:</td><td><b>" +
      blockHeader.confirmations +
      "</b></td></tr><tr><td>Block Hash:</td><td><b>" +
      blockHeader.hash +
      "</b></td><td>Nonce:</td><td><b>" +
      blockHeader.nonce +
      "</b></td></tr><tr><td>Merkle Root: </td><td><b>" +
      blockHeader.merkleroot +
      "</b></td><td>Number of Transactions:</td><td><b>" +
      blockHeader.nTx +
      "</b></td></tr><tr><td>Next Block Hash:</td><td><b>" +
      blockHeader.nextblockhash +
      "</b></td><td>Nonce:</td><td><h4>" +
      blockHeader.nonce +
      "</h4></td></tr><tr><td>Difficulty:</td><td><b>" +
      blockHeader.difficulty +
      "</b></td><td>Time:</td><td><b>" +
      blockHeader.time +
      "</b></td></tr><tr><td>Previous Block Hash:</td><td><b>" +
      blockHeader.previousblockhash +
      "</b></td><td>Bits:</td><td><b>" +
      blockHeader.bits +
      "</b></td></tr></table></body></html>";

    res.send(response);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
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


//FUNCIONA BIEN
app.get("/index1", async (req, res) => {
  try {
    res.sendFile("/home/eduard/bitcoin/backend/index1.html");
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("Error in the initial page");
  }
});

//FUNCIONA BIEN
app.get("/index2", async (req, res) => {
  try {
    res.sendFile("/home/eduard/bitcoin/backend/index2.html");
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("Error in the initial page");
  }
});



//https://platzi.com/tutoriales/2485-backend-nodejs/22425-como-instalar-y-configurar-cors/
// FUNCIONA BIEN
app.get("/blockcount", cors(corsOptions),async (req, res) => {
  try {
    const blockCount = await client.getBlockCount();
    res.json({
      blockCount,
    });
 
    //res.send(`Current block count: ${blockCount}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});

//FUNCIONA BIEN
// Define a route to get the block count
app.get("/blockhash/:blockNumber", async (req, res) => {
  try {
    const blockNumber = req.params.blockNumber;
    const blockHash = await client.getBlockHash(blockNumber);
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
    const blockchainInfoString = JSON.stringify(blockChainInfo);

    const response =
      "<html><body><table border=2><tr><td>Concept</td><td>Result</td></tr> <tr><td>Network: </td><td><h3>" +
      blockChainInfo.chain +
      "</h3> </td></tr><tr><td>Number of Blockssssssss: </td><td><h3>" +
      blockChainInfo.blocks +
      "</h3></td></tr> <tr><td>Best Block Hash: </td><td><h3>" +
      blockChainInfo.bestblockhash +
      "</h3></td></tr> <tr><td>Forks: </td><td>Fork number one (bip34) in block number:  </td><td><h3>" +
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






app.get("/transactions", async (req, res) => {
  const blockHash =
    "00000000000000214b2caa48bdb01054d59edd42fb99b55afa118e783cab15d9";
  // 00000000000000214b2caa48bdb01054d59edd42fb99b55afa118e783cab15d9
  // https://blockstream.i// Configurar middleware para servir archivos estáticos
app.use(express.static('ruta_de_tus_archivos_estaticos'));

  const blockHashBuffer = Buffer.from(blockHash, "hex");
  const formattedBlockHash = blockHashBuffer.toString("hex");

  try {
    // Obtén el bloque completo (incluyendo las transacciones)
    const block = await client.getBlock(formattedBlockHash);
    // Accede a las transa// Configurar middleware para servir archivos estáticos

    const transactions = block.transaction;
    // Imprime la información sobre las transacciones
    transactions.forEach((transaction, index) => {
      console.log(`Transaction ${index + 1}: ${JSON.stringify(transaction)}`);
    });
    res.send(transactions); // Envia las transacciones como respuesta HTTP
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
});

app.get("/transactions2", async (req, es) => {
  const blockHash =
    "00000000000000214b2caa48bdb01054d59edd42fb99b55afa118e783cab15d9";
  const blockHashBuffer = Buffer.from(blockHash, "hex");
  const formattedBlockHash = blockHashBuffer.toString("hex");

  try {
    // Obtén el bloque completo (incluyendo las transacciones)
    const block = await client.getBlock(formattedBlockHash);
    // Accede a las transacciones del bloque
    const transactions = block.transactions;
    // Imprime la información sobre las transacciones
    transactions.forEach((transaction, index) => {
      console.log(`Transaction ${index + 1}: ${JSON.stringify(transaction)}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
});

app.get("/transactions1", async (req, es) => {
  try {
    const blockHash =
      "00000000000000214b2caa48bdb01054d59edd42fb99b55afa118e783cab15d9";
    const blockHashBuffer = Buffer.from(blockHash, "hex");
    const formattedBlockHash = blockHashBuffer.toString("hex");
    const blockHeader = await client.getBlockHeader(formattedBlockHash);
    const formattedBlockHeader = JSON.stringify(blockHeader);

    // const blockJson = getblock.toJSON();
    // const transactions = blockJson.transactions;

    const transactions1 = blockHeader.transactions;

    //console.log(formattedBlockHeader);
    //console.log(blockHeader);
    //console.log(typeof(blockHeader));
    console.log(typeof blockHeader);
    //console.log(typeof(blockHeader));
  } catch (e) {
    console.error("Error: ", e);
    res
      .status(500)
      .send(`An error occurred: $ypeof(mempoolInfo2));{e.message}`);
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
