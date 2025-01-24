// imports
let api = require('./config.js')

// add authentication layer
// const { authentication } = require('../config/auth/authentication')
api.all('/*', (req, res, next) => {
  console.log('autentiquei, teu pai mamei')
  next()
})

const stockRoutes = require('../main/stock/routes/stockRoutes')
const ordersRoutes = require('../main/orders/routes/ordersRoutes.js')

api = stockRoutes(api)
api = ordersRoutes(api)

// const { readdir } = require('fs').promises
// const routesDirectory = './source'
// const loadingRouteFiles = async (files) => {
//   if (!files) {
//     files = []
//   }

//   const listFiles = await readdir(routesDirectory)
//   for (const folder of listFiles) {
//     if (!folder.includes('.js')) {
//       const folderFiles = await readdir(`${routesDirectory}/${folder}`)
//       for (const folderInFolder of folderFiles) {
//         if (folderInFolder.includes('routes')) {
//           const routeFile = await readdir(`${routesDirectory}/${folder}/${folderInFolder}`)
//           for (const file of routeFile) {
//             const req = require(`../source/${folder}/${folderInFolder}/${file}`)
//             api = req(api)
//           }
//         }
//       }
//     }
//   }
//   return api
// }

// loadingRouteFiles()

module.exports = api