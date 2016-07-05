var _ = require('lodash');

module.exports = function(app) {
    
    app.get('/', function (req, res) {
        res.json({ info: 'loaded' });
    });
    
}

