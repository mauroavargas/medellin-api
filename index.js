require('dotenv').config();
require('./database');
const { Users } = require('./models');
const { router } = require('./routes');

const { server, PORT } = require('./server');

server.listen(PORT, () => console.log(`Server on ${PORT}`));