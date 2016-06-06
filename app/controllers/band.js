var sanitize = require('mongo-sanitize');

module.exports = function(app){
  var Band = app.models.band;
  var controller = {};

  controller.listBands = function(req,res){
    var promise = Band.find().exec()
    .then(function(bands){
      res.json(bands);
    },
    function(err){
      console.error(err);
      res.status(504).json(err);
    });
  };

  controller.getBand = function(req,res){
    var _id = req.params.id;
    Band.findById(_id).exec()
    .then(function(band){
      if(!band) throw new Error("Band not found");
      res.json(band);
    },
    function(err){
      console.error(err);
      res.status(404).json(err);
    });
  };

  controller.removeBand = function(req,res){
    var _id = sanitize(req.params.id);
    Band.remove({"_id": _id}).exec()
    .then(function(){
      res.status(204).end();
    },
    function(err){
      return console.error(err);
    });
  };

  controller.saveBand = function(req,res){
    var _id = req.body.id;
    var data = {
      'name': req.body.name,
      'genre': req.body.genre,
      'status': req.body.status,
      'email': req.body.email
    };
    if(_id){
      Band.findByIdAndUpdate(_id, data).exec()
      .then(function(band){
        res.json(band);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
    else{
      Band.create(data)
      .then(function(band){
        res.status(201).json(band);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
  };

  // function add(newBand){
  //   newBand._id = ++ID_BAND_INC;
  //   bands.push(newBand);
  //   return newBand;
  // }

  // function update(upBand){
  //   bands = bands.map(function(band){
  //     if(contato._id == upBand._id){
  //       band = upBand;
  //     }
  //     return band;
  //   });
  //   return upBand;
  // }

  return controller;
}
