const FruitsModel = require('../models/FruitModel')

const showAllFruits = async (req, res) => {
    try {
        const fruits = await FruitsModel.showAllFruits()
        res.status(200).send(fruits)
    } catch(err){
        res.status(500).send({error: err})
    }
}

const showFruit = async (req, res) => {
    const name = req.params.name.toLowerCase()

try{
    const fruit = await FruitsModel.showFruit(name)
    res.status(200).send(fruit)
} catch(err){
    res.status(404).send({error: err})
}
}

const createFruit = async (req, res) => {
    try{
    const newFruit = await FruitsModel.create(req.body)
    res.status(201).send(newFruit)
} catch(err){
    res.status(409).send({error: err})
}
}

const updateFruit = async (req, res) => {
const name = req.params.name.toLowerCase()

    try{
    const fruit = await FruitsModel.showFruit(name)
    const result = await fruit[0].update(req.body)

    res.status(200).send(result)
    } catch(err){
    res.status(404).send({error: err})
}
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase();

    try {
      const fruit = await FruitsModel.showFruit(name);
      const result = await fruit.destroy();

      res.sendStatus(204)
    } catch (err) {
      res.status(404).send({ error: err});
    }
};


module.exports = {showAllFruits, showFruit, createFruit, updateFruit, destroy}

//now send this to routes
//routes will map the request to a function 
//this builds the request headers etc but not the body it needs the model for the body