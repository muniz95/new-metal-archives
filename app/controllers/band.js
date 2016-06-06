var ID_BAND_INC = 6;

var bands = [
  {'_id': 1, 'name': 'Anthrax', 'genre': 'Thrash Metal', 'status': 'Active', 'email': 'contact@anthrax.com' },
  {'_id': 2, 'name': 'Megadeth', 'genre': 'Thrash Metal', 'status': 'Active', 'email': 'contact@megadeth.com' },
  {'_id': 3, 'name': 'Metallica', 'genre': 'Thrash Metal', 'status': 'Active', 'email': 'contact@metallica.com' },
  {'_id': 4, 'name': 'Slayer', 'genre': 'Thrash Metal', 'status': 'Active', 'email': 'contact@slayer.com' },
  {'_id': 5, 'name': 'Testament', 'genre': 'Thrash Metal', 'status': 'Active', 'email': 'contact@testament.com' },
  {'_id': 6, 'name': 'Sepultura', 'genre': 'Thrash Metal', 'status': 'Active', 'email':'contact@sepultura.com'  }
];

module.exports = function(){
  var controller = {};

  controller.listBands = function(req,res){
    res.json(bands);
  };

  controller.getBand = function(req,res){
    var band_id = req.params.id;
    var band = bands.filter(function(band){
      return band._id == band_id;
    })[0];
    band ?
      res.json(band) :
      res.status(404).send('Band not found.');
  };

  controller.removeBand = function(req,res){
    var band_id = req.params.id;
    bands = bands.filter(function(band){
      return band._id != band_id;
    });
    res.status(204).end();
  };

  controller.saveBand = function(req,res){
    var band = req.body;
    band = band._id ?
      update(band) :
      add(band);
    res.json(band);
  };

  function add(newBand){
    newBand._id = ++ID_BAND_INC;
    bands.push(newBand);
    return newBand;
  }

  function update(upBand){
    bands = bands.map(function(band){
      if(contato._id == upBand._id){
        band = upBand;
      }
      return band;
    });
    return upBand;
  }

  return controller;
}
