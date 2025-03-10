const express = require("express");
const { Router } = express;
const mongoose = require("mongoose");
const customerModelCreator = require("../base/Customer");
const routes = Router();
const keys = require("../settings/key");
const jwt = require("jsonwebtoken");

routes.post("/", async (req, res) => {
  if (req.body.user && req.body.pass) {
    const connection = await mongoose.createConnection(
      "mongodb://127.0.0.1:27017/store"
    );
    try {
      const customerModel = customerModelCreator(connection);
      const data = await customerModel.findOne({ email: req.body.user });
      if (!data) {
        res.status(403);
        res.json({
          message: "Usuario y/o password son incorrectos",
        });
        return;
      }
      if (data.Password != req.body.pass) {
        res.status(403);
        res.json({
          message: "Usuario y/o password son incorrectos",
        });
        return;
      }

      const token = jwt.sign(
        {
          email: data.email,
          id: data._id,
        },
        keys.key,
        {
          expiresIn: "2h",
        }
      );
      res.json({
        message: "Autenticacion Exitosa",
        token: token,
      });
      connection.close();
    } catch (error) {
      console.log(error);
      connection.close();
      res.status(500);
      res.json({ message: "Couldn't get data", error: error });
    }
  } else {
    res.json({
      message: "Usuario y/o password son requeridos",
    });
  }
});

const verification = express.Router();

verification.use((req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  console.log(token);
});

routes.get("/", verification, async (req, res) => {
  req.json("Informacion importante entregada");
});

module.exports = routes;
