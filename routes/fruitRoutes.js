const express = require('express')
const fruitsRouter = express.Router()
const fruitsController = require('../controllers/fruitsController')

fruitsRouter.get('/', fruitsController.showAllFruits)
fruitsRouter.get("/:name", fruitsController.showFruit)
fruitsRouter.post('/', fruitsController.createFruit)
fruitsRouter.patch('/:name', fruitsController.updateFruit)
fruitsRouter.delete("/:name", fruitsController.destroy);

module.exports = fruitsRouter

//routers are called middleware because it happens between a request and response
//routers map pathways to certain functions 
//defines PI endpoint by mapping certain requests to certain controllers and functions