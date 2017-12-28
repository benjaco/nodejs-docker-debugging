import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import * as saavirkdog from "./dependency"


const FILENAME = typeof __filename !== 'undefined' ? __filename : (/^ +at (?:file:\/!*(?=\/)|)(.*?):\d+:\d+$/m.exec(Error().stack) || '')[1];
const DIRNAME = typeof __dirname !== 'undefined' ? __dirname : FILENAME.replace(/[\/\\][^\/\\]*?$/, '');

const app = express();

app.use( bodyParser.json() );

app.get('/', (req, res) => {
    res.sendFile(path.join(DIRNAME + '/../static/index.html'));
});

app.get('/hello', function (req, res) {
    res.send("Hello med dig igen - "+process.env.NODE_ENV);
});

app.get('/t', function (req, res) {
    res.send(saavirkdog.test);
});
app.get('/tt', function (req, res) {
    res.send(saavirkdog.test);
});


app.get('/dirname', function (req, res) {
    res.send(FILENAME + "  ---  " + DIRNAME + " --- " + __dirname);
});

app.use('/', express.static(DIRNAME + '/../static'));


app.listen(80, function () {
    console.log("Listends to port 80")
});
