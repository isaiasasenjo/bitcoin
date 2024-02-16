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


//este endpoint devuelve el último bloque minado
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
app.get("/blockhash", cors(corsOptions), async (req, res) => {
  try {
    const blockHash = await client.getBlockHash(2578360);
    res.send(`BlockHash: ${blockHash}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});


//FUNCIONA BIEN
// Esto no da el hash de un número de bloque que entremos por parámetro
app.get("/blockhashnumber/:blocknumber", cors(corsOptions), async (req, res) => {
  try {

    const blockNumber = req.params.blocknumber;
    const blockHash = await client.getBlockHash(`${blockNumber}`);
    res.send(`BlockHash: ${blockHash}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});



app.get("/transactions", cors(corsOptions),  async (req, res) => {
  const blockHash =
    "0000000000000027003b6ec59d14dc00c7284aafcdb2d26f6215ddc1ea938158";
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

app.get("/transactions2", cors(corsOptions),  async (req, es) => {
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



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/***************************************
 * 
 * 
 * 
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

 * 
 * 
 * 
 * 
 * 
 */