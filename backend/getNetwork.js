// https://www.youtube.com/watch?v=dsWD2fR8O7I
const express = require("express");
const Client = require("bitcoin-core");
const app = express();
const fs =require("fs");
const port = 3004;

// Configure the client to connect to your Bitcoin node
const client = new Client({
  network: "testnet",
  username: "eduard", // Replace with your rpcuser
  password: "2001", // Replace with your rpcpassword
  port: 18332, // Default RPC port for testnet
});

;
//    const version = networkInfo.version;
//UNDEFINED
app.get("/chaintxstats", async (req, res) => {
  try {
    const chaintxstats = await client.getchaintxstats;
    res.send(`Network Connections: ${chaintxstats}`);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});

//UNDEFINED

app.get("/networkinfo", async (req, res) => {
  try {
    
    //const data = fs.readFileSync("myfile.json");
    //const jsonObject = JSON.parse(data);
//    const networkInfo = await client.getnetworkinfo();
//    const version = networkInfo.version;
 //   const jsonString = JSON.stringify(version);
//    console.log(jsonString);
    console.log("111111111");
    const networkInfo = await client.getnetworkinfo;
    console.log("2222222222");
    const networkInfoVersion = JSON.parse(networkInfo).version;
    res.send(`Network Information: ${networkInfoVersion}`);

    console.log("33333333333");
    //const jsonString = JSON.stringify(version)
    //console.log("444444444444");
    //console.log(jsonString);
   // const json = JSON.parse(networkInfo.version);
    //res.send(`Network Information: ${networkInfo}`);
    
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("An error occurred");
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
