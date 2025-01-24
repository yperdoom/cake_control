const Logger = require('../library/function/Logger')
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

/**
 * Connect to mongo db with mongoose
 * @param {Object} params 
 * @param {String} params.mongo_endpoint 
 * @returns 
 */
module.exports.connect = async ({ mongo_endpoint }) => {
  if (conn == null) {
    try {
      conn = await mongoose.connect(mongo_endpoint)
    } catch (error) {
      Logger.error({
        ...error,
        type: 'database-error',
        local: 'mongo-connect'
      })
      conn = null
    }
  }

  return conn
}

/**
 * Connect to mongo db with mongoose
 * @param {Object} params 
 * @param {String} params.mongo_endpoint 
 * @returns 
 */
module.exports.disconnect = async ({ mongo_endpoint }) => {
  try {
    await mongoose.disconnect(mongo_endpoint)
    conn = null
  } catch (error) {
    Logger.error({
      ...error,
      type: 'database-error',
      local: 'mongo-disconnect'
    })
  }
}
