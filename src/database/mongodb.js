require('dotenv/config')
const {
  MONGO_ENDPOINT: mongo_endpoint
} = process.env

const { connect, disconnect } = require('./mongooseConfiguration')

module.exports.connect = async () => {
  await connect({ mongo_endpoint })
}

module.exports.disconnect = async () => {
  await disconnect({ mongo_endpoint })
}
