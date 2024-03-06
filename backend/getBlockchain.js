// https://www.youtube.com/watch?v=dsWD2fR8O7I

const express = require("express");
const cors = require("cors");
const Client = require("bitcoin-core");

//app.use(cors());

const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Configurar middleware para servir archivos estáticos
app.use(express.static("/home/eduard/bitcoin/backend"));
const fs = require("fs");
const port = 3001;

// Configure the client to connect to your Bitcoin node
const client = new Client({
  network: "testnet",
  username: "eduard", // Replace with your rpcuser
  password: "2001", // Replace with your rpcpassword
  port: 18332, // Default RPC port for testnet
});

// Inicio de los EndPoints
//  getblock  "hash del block"    retorna el número del bloque del hash correspondiente
//  getblockhash   2500000      retorna el hash del bloque 2500000
/* Block 2579820 */
/*0000000000000009dcd8ee8f641154453722d6c099f4b4458dfb36dc2d7c2635*/


app.get("/transactions/:blockHash", cors(corsOptions), async (req, res) => {
  try {
    // Nos aseguramos que estamos usando el hash correcto y no se necesita convertirlo
    const blockHash = req.params.blockHash;
   
    const block = await client.getBlock(blockHash, 2); // El segundo parámetro 1,2 especifica que queremos detallar las Tx

    //definimos la variable transactionsHtml para todas las Tx del bloque
    let transactionsHtml = "";

    // recorremos el objeto block que es un JSON con un forEach para recoger las Tx y construimos la salida en HTML
    block.tx.forEach((transaction, index) => {
      transactionsHtml += `<tr><td>Transaction ${
        index + 1
      }:</td><td><a href="https://blockstream.info/testnet/tx/${
        transaction.txid
      }" target="_blank">${transaction.txid}</a></td></tr>`;
    });

    // Y así sucesivamente para otras propiedades que se desee acceder
    // consrucción de la respuesta html que enviará la API express al FrontEnd (Blocks2Tx.js)
    const response = `
  <html>
  <head>
    <style>
      p {color: red;} 
      a { color: #0000ff;}
    </style>
  </head>
  <body>
    <b>Block Header,total of 80 bytes</b>
    <table align='center' cellspacing='2' cellpadding='2' border='2' width='100%'>
      <tr><td>Version, 4 bytes:</td><td><b>${block.version}</b></td></tr>  
      <tr><td>Previous Block, 32 bytes:</td><td><p><b>${block.previousblockhash}</b></p></td></tr>
      <tr><td>Merkle Root, 32 bytes:</td><td><b>${block.merkleroot}</b></td></tr>  
      <tr><td>Time, 4 bytes:</td><td><b>${block.time}</b></td></tr>
      <tr><td>Difficulty, 4 bytes:</td><td><b>${block.difficulty}</b></td></tr>
      <tr><td>Nonce, 4 bytes:</td><td><b>${block.nonce}</b></td></tr>
    </table>
    <hr>
    <table align='center' cellspacing='2' cellpadding='2' border='2' width='100%'>
      ${transactionsHtml}
    </table>
  </body>
  </html>`;

    res.send(response);

    //console.log("LINEA 44 DEL BACKEND EndPoint transactions"+block);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
});

//Transactions with a Block


app.get(
  "/transactions_copia/:blockHash",
  cors(corsOptions),
  async (req, res) => {
    try {
      // Asegúrate de que estás usando el hash correcto y no necesitas convertirlo
      const blockHash = req.params.blockHash;
      //console.log("LINEA 44 Params recibidos en el EndPoint transactions :", req.params);

      const block = await client.getBlock(blockHash, 2); // El segundo parámetro 1,2 especifica que quieres las transacciones detalladas
      //console.log("Hash: ", block.hash);
      //console.log("TXID de la Transacción 2: ", block.tx[2].txid);

      // Y así sucesivamente para otras propiedades que desees acceder

      const response =
        "<html><head></head><body><b>Block Header</b><table align='center' cellspacing='2'" +
        " cellpadding='2' border = 2 width=100%><tr><td>Previous Block:</td><td><b>" +
        block.previousblockhash +
        "</b></td><td>Nonce:</td><td><b>" +
        block.nonce +
        "</b></td></tr><tr><td>Merkle Root:</td><td><b>" +
        block.merkleroot +
        "</b></td><td>Time:</td><td><b>" +
        block.time +
        "</b></td></tr><td>Version:</td><td><b>" +
        block.version +
        "</b></td><td>Difficulty:</td><td><b>" +
        block.difficulty +
        "</b></td></tr></table><hr><tr><td>Hash de la tx[0]:</td><td><b>" +
        block.tx[0].txid +
        "</b></td></tr></body></html>";

      res.send(response);

      //console.log("LINEA 44 DEL BACKEND EndPoint transactions"+block);
      {
        /*
    if (block && block.transactions) { // Verifica que block y block.transactions existan
      const transactions = block.transactions;
      transactions.forEach((transaction, index) => {
        console.log(`LINEA 48 Transaction ${index + 1}: ${JSON.stringify(transaction)}`);
      });
      res.send(transactions); // Envía las transacciones como respuesta HTTP
    } else {
      res.status(404).send('Block or transactions not found');
    }
  */
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send(`An error occurred: ${error.message}`);
    }
  }
);

//FUNCIONA BIEN
// Define a route to get the block count
app.get(
  "/blockhash/:blockNumberSeleccionado",
  cors(corsOptions),
  async (req, res) => {
    try {
      // Extraer blockNumberSeleccionado de los parámetros de la URL
      const blockNumberSeleccionado = parseInt(
        req.params.blockNumberSeleccionado
      );

      // Usar blockNumberSeleccionado para obtener el hash del bloque
      const blockHash = await client.getBlockHash(blockNumberSeleccionado);
      res.send(`Hash: ${blockHash}`);
      //res.json({ blockHash }); // Devolver como JSON
      //res.send(`BlockHash: ${blockHash}`);
    } catch (e) {
      console.error("Error:", e);
      res.status(500).send("An error occurred");
    }
  }
);

//  getblockhash   2500000      retorna el hash del bloque 2500000

//FUNCIONA BIEN
// Define a route to get the block count
app.get(
  "/blockhashtx/:blockNumberSeleccionado",
  cors(corsOptions),
  async (req, res) => {
    try {
      // Extraer blockNumberSeleccionado de los parámetros de la URL
      const blockNumberSeleccionado = parseInt(
        req.params.blockNumberSeleccionado
      );
      // Usar blockNumberSeleccionado para obtener el hash del bloque
      //FALLA ESTA LINEA DE ABAJO por getBlockHash
      const blockHash = await client.getBlockHash(blockNumberSeleccionado);
      //res.send(`${blockHash}`);
      //res.send(`Hash: ${blockHash}`);
      
      res.send(blockHash);
    } catch (e) {
      console.error("Error:", e);
      res.status(500).send("An error occurred");
    }
  }
);

//FUNCIONA BIEN
//inicio del ultimo getblock
app.get("/getblock/:blockHash", cors(corsOptions), async (req, res) => {
  try {
    const blockHash = req.params.blockHash; // Obtén el hash del bloque de la URL
    const blockHashBuffer = Buffer.from(blockHash, "hex");
    const formattedBlockHash = blockHashBuffer.toString("hex");
    const blockHeader = await client.getBlockHeader(formattedBlockHash);
    const formattedBlockHeader = JSON.stringify(blockHeader);

    // Convert the raw block header object to a JSON object
    //res.send(`Block getblockhashHeader: ${blockHeader.hash}`);

    const response =
      "<html><head></head><body><table align='center' cellspacing='2' cellpadding='2' border = 2 width=100%><tr><td>Block Number:</td><td><b>" +
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
app.get("/getblockhash/:hash", cors(corsOptions), async (req, res) => {
  try {
    const blockHash = req.params.hash;

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
app.get("/blockcount", cors(corsOptions), async (req, res) => {
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
app.get(
  "/blockhashnumber/:blockNumberSeleccionado",
  cors(corsOptions),
  async (req, res) => {
    try {
      const blockNumberSeleccionado = req.params.blockNumberSeleccionado;
      console.log("blockNumberSeleccionadooooooooo:" + blockNumberSeleccionado);
      //FALLA EN LA SIGUIENTE LINEA
      const blockHash = await client.getblockhash(blockNumberSeleccionado);
      //res.json({ blockHash }); // Devolver como JSON
      res.send(`BlockHash: ${blockHash}`);
    } catch (e) {
      console.error("Error:", e);
      res.status(500).send("An error occurred");
    }
  }
);

//FUNCIONA BIEN
// Define a route to get the block count
app.get(
  "/blockhashnumberseleccionado/:blockNumber",
  cors(corsOptions),
  async (req, res) => {
    try {
      const blockNumber = req.params.blockNumber;
      const blockHash = await client.getBlockHash(blockNumber);
      res.json({
        blockHash,
      }); // Devolver como JSON
    } catch (e) {
      console.error("Error:", e);
      res.status(500).json({
        error: "An error occurred",
      }); // Devolver error como JSON
    }
  }
);

//FUNCIONA BIEN
// Define a route to get the block count
app.get("/blockhash", cors(corsOptions), async (req, res) => {
  try {
    const blockHash = await client.getBlockHash(2578603);
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

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
