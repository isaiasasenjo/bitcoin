const express = require("express");
const app = express();
const Client = require("bitcoin-core");
const port=3004;
const fs =require("fs");

const auth = fs.readFileSync('../../.bitcoin/.cookie',{encoding: 'utf8'}).split(":")

//const auth = fs.readFileSync('../../.bitcoin/regtest/.cookie',{encoding: 'utf8'}).split(":")

const client = new Client({
  network:'testnet',
  username:auth[0],
  password: auth[1]
  });



// Endpoint
//Un endpoint es una dirección de una API, o bien un backend que se encarga de dar respuesta
//a una petición, mientras que una REST, en una API, es una interfaz que sirve para la conexión
// de varios sistemas. Se basa en HTTP y sirve para obtener y enviar datos e información.
//app.get crea una petición http y res.send envia esa respuesta al navegador
app.get("/", async function (req, res)  {
          const blockcount = await client.getBlockCount();
          res.send({blockcount});
        })


       
// esto hace que podamos ver en el navegador las peticiones http que se hagan
app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto: ${port}`);
});


