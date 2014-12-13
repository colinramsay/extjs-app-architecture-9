var sqlite3 = require('sqlite3').verbose(),
    express = require('express'),
    fs = require('fs'),
    bodyParser = require('body-parser');

var DB_PATH = 'products.db',
    db = new sqlite3.Database(DB_PATH),
    exists = fs.existsSync(DB_PATH),
    port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

db.serialize(function() {
    if(!exists) {
        db.run('CREATE TABLE `Categories` (\
            `id`    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\
            `name`    TEXT\
        );');

        db.run('CREATE TABLE `Products` (\
            `id`    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\
            `name`    TEXT,\
            `categoryId`  INTEGER\
        );');
    }
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:1841');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));

    next();
});

function getFilterValue(filters, property) {
    return filters.filter(function(f) { return f.property === property; })[0].value;
}


app.get('/category', function(req, res) {
    db.all('SELECT * FROM Categories', function(err, data) {
        res.json(data);
    });
});

app.get('/product', function(req, res) {
    var filters = JSON.parse(req.query.filter);

    db.all('SELECT * FROM Products WHERE CategoryId = $categoryId', { $categoryId: getFilterValue(filters, 'categoryId') }, function(err, data) {

        res.json(data);
    });
});

app.get('/product/:id', function(req, res) {
    
    db.get('SELECT * FROM Products WHERE id = $id', { $id: req.params.id }, function(err, data) {
        res.json(data);
    });
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
