const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost/graphql-app';

mongoose.connect(DB_URI, { useNewUrlParser: true });
//mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.once('open', () => {
  console.log('Connected to a MongoDB instance.');
});

mongoose.connection.once('error', error => {
  console.error(error);
});

module.exports = mongoose;
