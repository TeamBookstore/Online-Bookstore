const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const http = require("node:http")
const app = express()

app.use(bodyParser.json())
app.use(cors());

//JWT
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/', (req,res)=>{
    res.send('hola world')
})
//authenticator middleware
const validation = require("./middleware/authentication")
//address
const addressRoutes = require("./Routes/addressRoutes")
app.use("/address",validation, addressRoutes)
//customer
const customerRoutes = require("./Routes/customerRoutes")
app.use("/customer",validation, customerRoutes)
//login
const loginRoutes = require("./Routes/loginRoutes")
app.use("/login", loginRoutes)
//servidor
const server = http.createServer(app)
server.listen(9000,()=>{
    console.log("ready")
})

module.exports = app