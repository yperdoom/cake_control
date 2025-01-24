// imports
const getControllers = require('../controllers/getController')
const createController = require('../controllers/createController')
const putController = require('../controllers/putController')
const deleteController = require('../controllers/deleteController')

// routes
module.exports = (api) => {
  api.get('/stock/:stock_id', getControllers)

  api.get('/stock', getControllers)

  api.post('/stock', createController)

  api.put('/stock/:stock_id', putController)

  api.delete('/stock/:stock_id', deleteController)

  return api
}
