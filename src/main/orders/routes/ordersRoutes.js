// imports
import getControllers from '../controllers/getController.js'
import createController from '../controllers/createController.js'
import editController from '../controllers/editController.js'
import deleteController from '../controllers/deleteController.js'

// routes
export default (api) => {
  api.get('/order/:order_id', getControllers)

  api.get('/orders', getControllers)

  api.post('/order', createController)

  api.put('/order/:orders_id', editController)

  api.delete('/order/:orders_id', deleteController)
}
