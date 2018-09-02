const mongoose = require('mongoose');

module.exports = function initMongoDB() {
  mongoose.set('useFindAndModify', false);
  mongoose.connect('mongodb+srv://<USER>:<PASS>@<URI>',
  { useNewUrlParser: true });
}
