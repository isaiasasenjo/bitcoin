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
//const fs = require("fs");
const port = 3001;

// Configure the client to connect to your Bitcoin node
const client = new Client({
  network: "testnet",
  username: "eduard", // Replace with your rpcuser
  password: "2001", // Replace with your rpcpassword
  port: 18332, // Default RPC port for testnet
});


//FUNCIONA BIEN
// Define a route to get the block count
app.get("/blockhashnumber/:blockNumber", cors(corsOptions),async (req, res) => {
  try {
    const blockNumber = req.params.blockNumber;
    console.log(`blockNumber11111111: ${blockNumber}`);
    const blockHash = await client.getBlockHash(blockNumber);

    console.log(`blockNumber2222222222: ${blockNumber}`);
    res.json({ blockHash }); // Devolver como JSON

    console.log(`blockNumber333333333333: ${blockNumber}`);
  } catch (e) {

    console.error("Error:", e);
    //res.status(500).send(`An error occurred: ${e.message}`);
    res.status(500).json({ error: `An error occurred: ${e.message}` });


  }
});


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




// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

