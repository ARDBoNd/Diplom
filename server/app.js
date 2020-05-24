'use strict';

var http = require('http');
var debug = require('debug');
const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const port = 3001;

app.set('port', port);

//var server = http.createServer(app);
//server.listen(port);

// server.on('error', onError);
// server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

app.use('/', express.static(__dirname));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'data')));

MongoClient.connect('mongodb+srv://Kerim:kerim2020@diploma-99zqy.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
    if (err) return console.log(err)

    var dbo = database.db("mydb");
    dbo.createCollection("users", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        database.close();
    });


    app.get('/users', function (req, res) {
        res.send('Hello, world!!! I AM A COOL MOTHERFUCKER!!')
    })

    app.get('/create', function (req, res) {
    });

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });

    app.post('/user', function (req, res, next) {
        const body = req.body;
    
        console.log(req, body);
    
        // var dbo = database.db("mydb");
    
        // db.collection('users').insert(body, (err, results) => {
        //     console.log('The user has been added');
        // });
    });
});

module.exports = app;