// imports
import getControllers from '../controllers/getController.js'
import createController from '../controllers/createController.js'
import putController from '../controllers/putController.js'
import deleteController from '../controllers/deleteController.js'

// routes
export default (api) => {
  api.get('/stock/:stock_id', getControllers)

  api.get('/stock', getControllers)

  api.post('/stock', createController)

  api.put('/stock/:stock_id', putController)

  api.delete('/stock/:stock_id', deleteController)
}
