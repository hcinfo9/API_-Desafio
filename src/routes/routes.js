const express = require("express") 

const { getAllClient, createClient, updateClient, deleteClient, statusClient } =  require("../controllers/clientController")


const Routes =express.Router()

Routes.get("/", getAllClient)

Routes.post("/", createClient)

Routes.put("/:id", updateClient)

Routes.delete("/:id", deleteClient)

Routes.patch("/:id", statusClient)

module.exports = Routes

