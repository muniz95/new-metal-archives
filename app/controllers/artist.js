var sanitize = require('mongo-sanitize');

module.exports = function(app){
  var Artist = app.models.artist;
  var controller = {};

  controller.listArtists = function(req,res){
    var promise = Artist.find().exec()
    .then(function(artists){
      res.json(artists);
    },
    function(err){
      console.error(err);
      res.status(504).json(err);
    });
  };

  controller.getArtist = function(req,res){
    var _id = req.params.id;
    Artist.findById(_id).exec()
    .then(function(artist){
      if(!artist) throw new Error("Artist not found");
      res.json(artist);
    },
    function(err){
      console.error(err);
      res.status(404).json(err);
    });
  };

  controller.removeArtist = function(req,res){
    var _id = sanitize(req.params.id);
    Artist.remove({"_id": _id}).exec()
    .then(function(){
      res.status(204).end();
    },
    function(err){
      return console.error(err);
    });
  };

  controller.saveArtist = function(req,res){
    var _id = req.body.id;
    var data = {
      'name': req.body.name,
      'genre': req.body.genre,
      'status': req.body.status,
      'email': req.body.email
    };
    if(_id){
      Artist.findByIdAndUpdate(_id, data).exec()
      .then(function(artist){
        res.json(artist);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
    else{
      Artist.create(data)
      .then(function(artist){
        res.status(201).json(artist);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
  };

  // function add(newArtist){
  //   newArtist._id = ++ID_BAND_INC;
  //   artists.push(newArtist);
  //   return newArtist;
  // }

  // function update(upArtist){
  //   artists = artists.map(function(artist){
  //     if(contato._id == upArtist._id){
  //       artist = upArtist;
  //     }
  //     return artist;
  //   });
  //   return upArtist;
  // }

  return controller;
}
