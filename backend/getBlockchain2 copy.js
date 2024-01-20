// https://www.youtube.com/watch?v=dsWD2fR8O7I

const express = require("express");
const cors = require('cors');
const Client = require("bitcoin-core");

//app.use(cors());

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
app.get("/getblock", cors(corsOptions), async (req, res) => {
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


//FUNCIONA BIEN
// Define a route to get the block count
app.get("/blockhashnumber/:blockNumber", cors(corsOptions),async (req, res) => {
  try {
    const blockNumber = req.params.blockNumber;
    const blockHash = await client.getBlockHash(blockNumber);
    res.json({ blockHash }); // Devolver como JSON
  } catch (e) {

    console.error("Error:", e);
    //res.status(500).send(`An error occurred: ${e.message}`);
    res.status(500).json({ error: `An error occurred: ${e.message}` });


  }
});

//FUNCIONA BIEN
// Define a route to get the block count
app.get("/blockhash", async (req, res) => {
  try {
    const blockHash = await client.getBlockHash(2500000);
    res.send(`BlockHash: ${blockHash}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


/*******
 *     console.error("Error:", e);
    res.status(500).json({ error: "An error occurred" }); // Devolver error como JSON
 */