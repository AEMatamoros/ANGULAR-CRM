var express = require('express');
var app = express();
var morgan = require('morgan');

app.get('/',(req,res)=>{
    res.send("Inicio");
});



app.listen(8888,()=>{
    console.log("Servidor escuchando en 8888")
});