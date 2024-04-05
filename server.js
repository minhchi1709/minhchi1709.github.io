const express = require('express');
const app = express();
app.get('/', function(req, res) { res.send('Hello World!') ;});
app.use( function(req, res, next) { // catch 404
    var err = new Error( 'Not Found' );
    err.status = 404;
    next( err );
    console.log(err.status);
} ); 
app.listen( 8080, console.log( 'App listening on port 8080!' ) );
