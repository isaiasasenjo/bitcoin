const express = require('express')
const app = express()

const port=3002;

app.get('/', (req, res) => {
  res.send(`<!doctype html><html><head></head><body>
          <h1>Main Web  or Website</h1>
          <h2>There are two directories: p1,p2, p3</h2>  
            </body></html>`)
})

app.get('/p1', (req, res) => {
  res.send(`<!doctype html><html>;
<head></head><body>
          <h1>This is my FIRST directory</h1>
            </body></html>`)
})

app.get('/p2', (req, res) => {
  res.send(`<!doctype html><html><head></head><body>
          <h2>This is my SECOND directory</h2>
            </body></html>`)
})
app.get('/p3', (req, res) => {
  res.send(`<!doctype html><html>;
<head></head><body>
          <h5>This is my THIRD directory</h5>
            </body></html>`)
})

//https://expressjs.com/es/guide/routing.html
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});


app.get(/a/, function(req, res) {
  res.send('/a/');
});


app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});


const server = app.listen({port}, () => {
  console.log(`Servidor web iniciado. Abre el navegador por el puerto:${port}`)
})



