const express = require("express")
const { Router } = express
const mongoose = require("mongoose")
const customerModelCreator = require("../base/Customer")
const routes = Router()

//obtener datos guardados
routes.get("/", async (req, res) => {
    const connection = await mongoose.createConnection("mongodb://127.0.0.1:27017/store")
    try {
        const customerModel = customerModelCreator(connection)
        const data = await customerModel.find()
        res.json(data)
        connection.close()
    } catch(error) {
        connection.close()
        res.status(500)
        res.json({ message: "Couldn't get data", error: error })
    }
})

//obtener dato especifico
routes.get("/:id", async (req, res) => {
    const connection = await mongoose.createConnection("mongodb://127.0.0.1:27017/store")
    try {
        const customerModel = customerModelCreator(connection)
        const data = await customerModel.findOne({ "_id": req.params.id })
        res.json(data)
        connection.close()
    } catch(error) {
        connection.close()
        res.status(500)
        res.json({ message: "Couldn't get data", error: error })
    }
})

//agregar dato
routes.post("/", async (req, res) => {
    const connection = await mongoose.createConnection("mongodb://127.0.0.1:27017/store")
    try {
        const customerModel = customerModelCreator(connection)
        const customer = new customerModel(req.body)
        const data = await customer.save()
        res.json(data)
        connection.close()
    } catch(error) {
        connection.close()
        res.status(500)
        res.json({ message: "Couldn't add data", error: error})
    }
})

//borrar dato
routes.delete("/:id", async (req, res) => {
    const connection = await mongoose.createConnection("mongodb://127.0.0.1:27017/store")
    try {
        const customerModel = customerModelCreator(connection)
        const data = await customerModel.deleteOne({ "_id": req.params.id })
        res.json(data)
        connection.close()
    } catch(error) {
        connection.close()
        res.status(500)
        res.json({ message: "Couldn't delete data", error: error})
    }
})
//editar dato
routes.updateOne("/:id", async (req, res) => {
    const connection = await mongoose.createConnection("mongodb://127.0.0.1:27017/store")
    try {
        const customerModel = customerModelCreator(connection)
        const data = await customerModel.updateOne({ "_id": req.params.id }, req.body)
        res.json(data)
        connection.close()
    } catch(error) {
        connection.close()
        res.status(500)
        res.json({ message: "Couldn't put data", error: error})
    }

});

module.exports = routes