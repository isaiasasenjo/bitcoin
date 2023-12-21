const fs = require("fs");

const data = fs.readFileSync("myfile.json");

const jsonObject = JSON.parse(data);

console.log(jsonObject);
console.log(jsonObject.name+' Edad: '+jsonObject.age+' City:'+jsonObject.city);