const express = require('express');

var app= express();

const path = require('path');

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));

/* app.get('/',function(req,res){
    res.send('Hello World from Azure');
});

 app.get('/',(req,res) => res.send('Hello World')); */

 app.get('/',(req,res) => {
    res.sendFile(`${__dirname}/public/index.html`);
 });

app.listen(port,() => 
    console.log('Server is running..')
);