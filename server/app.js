var express = require('express');
var app = express();
var tilelive = require('tilelive');

require('tilelive-mapnik').registerProtocols(tilelive);

tilelive.load('mapnik://./config.xml', function(err, source) {
    if (err) throw err;
    app.get('/:z/:x/:y.*', function(req, res) {
        source.getTile(req.param('z'), req.param('x'), req.param('y'), function(err, tile, headers) {
            if (!err) {
                res.send(tile);
            } else {
                res.send('Tile rendering error: ' + err + '\n');
            }
        });
    });
});

app.listen(8888);