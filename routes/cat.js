var _ = require('lodash');
var Cat = require('../models/cat');

module.exports = function(app) {
    
    _cats = [];
    
    app.post('/cat', function(req, res) {
        var newCat = new Cat(req.Body);
        
        newCat.save(function(error) {
            if (error) {
                res.json({ info: 'error during cat create', error: error });    
            }
            
            res.json({ info: 'cat created succesfully'});
        });
    });
    
    app.get('/cat', function (req, res) {
        Cat.find(function(err, cats) {
            if (err) {
                res.json({info: 'error during find cats', error: err});
            };
            res.json({info: 'cats found successfully', data: cats});
        });
    });

    app.get('/cat/:id', function(req, res) {
        Cat.findById(req.params.id, function(error, cat) {
            if (error) {
                res.json({ info: 'error during find cat', error: error });    
            };
            
            if (cat) {
                res.json({info: 'cat found', data: cat });    
            }
        });
    });    
    
    /*
    app.get('/cat/:id', function (req, res) {
        Cat.findById(req.params.id, function(err, cat) {
            if (err) {
                res.json({info: 'error during find cat', error: err});
            };
            if (cat) {
                // res.json({info: 'cat found successfully', data: cat});
                setTimeout(function(){
                    res.json({info: 'cat found successfully', data: cat});
                }, 10000);
            } else {
                res.json({info: 'cat not found'});
            }
        });
    });
    */
    
    
    app.put('/cat/:id', function(req, res) {
        var index = _.findIndex(_cats, { name:req.params.id });
        _.merge(_cats[index], req.body);
        res.json('cat updated succesfully');
    });
    
    app.delete('/cat/:id', function(req, res) {
        _.remove(_cats, function(cat) {
            return cat.name === req.params.id;
        });
        
        res.send('cat deleted');
    });
}

