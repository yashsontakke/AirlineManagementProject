const dotenv = require('dotenv')

dotenv.config();

module.exports = {
    PORT :process.env.PORT,
    // SYNC : process.env.SYNC_DB required for first time only  
}

   