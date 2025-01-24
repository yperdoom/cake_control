// imports
const getControllers = require('../controllers/getController')
const createController = require('../controllers/createController')
const putController = require('../controllers/putController')
const deleteController = require('../controllers/deleteController')

// routes
module.exports = (api) => {
  api.get('/order/:orders_id', getControllers)

  api.get('/orders', getControllers)

  api.post('/order', createController)

  api.put('/order/:orders_id', putController)

  api.delete('/order/:orders_id', deleteController)

  return api
}
