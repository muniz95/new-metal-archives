var bands = [
  {_id: 1, name: 'Anthrax', genre: 'Thrash Metal', status: 'Active' },
  {_id: 2, name: 'Megadeth', genre: 'Thrash Metal', status: 'Active' },
  {_id: 3, name: 'Metallica', genre: 'Thrash Metal', status: 'Active' },
  {_id: 4, name: 'Slayer', genre: 'Thrash Metal', status: 'Active' },
  {_id: 5, name: 'Testament', genre: 'Thrash Metal', status: 'Active' },
  {_id: 6, name: 'Sepultura', genre: 'Thrash Metal', status: 'Active' }
];

module.exports = function(){
  var controller = {};
  controller.list_bands = function(req,res){
    res.json(bands);
  };
  controller.get_band = function(req,res){
    var band_id = req.params.id;
    var band = bands.filter(function(band){
      return band._id == band_id;
    })[0];
    band ?
      res.json(band) :
      res.status(404).send('Band not found.');
  };
  return controller;
}
