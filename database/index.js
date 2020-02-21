const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅  Sucessfull conection w Atlas'))
    .catch(() => console.log('🚫  Error connecting w Atlas'));