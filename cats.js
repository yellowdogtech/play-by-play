var _ = require('lodash');

module.exports = function(app) {
    
    _cats = [];
    
    
    app.post('cat', function(req, res) {
        _cats.push(req.body);
        res.json('cat added successfully');
    });
    
    app.get('/cat/:id', function(req, res) {
        res.send(_cats);        
    });    

    app.get('/cat/:id', function(req, res) {
        res.send(
            _.find(_cats, { name:req.params.id }
            );
    });    
    
    app.put('/cat/:id', function(req, res) {
        var index = _.findIndex(_cats, { name:req.params.id }
        _merge(_cats.index, req.body);
        res.json('cat updated succesfully');
    });
    
    app.delete('/cat/:id', function(req, res) {
        _cats.remove(_cats, function(cat) {
            return cat.name === req.params.id;
        });
    });
}

