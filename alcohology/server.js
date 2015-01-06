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
        db.run("CREATE TABLE `Categories` (\
            `id`    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\
            `name`    TEXT\
        );");

        db.run("CREATE TABLE `Products` (\
            `id`    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\
            `name`    TEXT,\
            `price`   TEXT,\
            `previousPrice`   TEXT,\
            `description`   TEXT,\
            `features`   TEXT,\
            `brewery` TEXT,\
            `categoryId`  INTEGER\
        );");
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

app.get('/category/:id', function(req, res) {
    db.all('SELECT * FROM Categories WHERE id = $id', { $id: req.params.id }, function(err, data) {
        res.json(data);
    });
});

app.get('/category', function(req, res) {
    db.all('SELECT id, name FROM Categories', function(err, data) {
        res.json(data);
    });
});

var productListHandler = function(req, res) {
    
    var filters = JSON.parse(req.query.filter),
        sort = JSON.parse(req.query.sort)[0],
        categoryId = getFilterValue(filters, 'categoryId');

    if(['id', 'price', 'name'].indexOf(sort.property) === -1) {
        throw 'Invalid sort column';
    }

    var dir = sort.direction === 'ASC' ? 'ASC' : 'DESC';

    var query = 'SELECT * FROM Products WHERE CategoryId = $categoryId ORDER BY ' + sort.property + ' ' + dir + '  LIMIT ' +req.query.start+ ', ' +req.query.limit+ '';

    console.log(query, categoryId);

    db.get('SELECT COUNT(*) as count FROM Products', function(err, count) {
        db.all(query, { $categoryId: categoryId }, function(err, data) {
            if(err) {
                console.log(err);
            }
            res.json({
                success: true,
                total: count.count,
                data: data
            });
        });
    });

    
};

app.get('/product', function(req, res) { setTimeout(function() { productListHandler(req, res); }, 3000) });

app.get('/product/:id', function(req, res) {
    
    db.get('SELECT * FROM Products WHERE id = $id', { $id: req.params.id }, function(err, data) {
        res.json(data);
    });
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
