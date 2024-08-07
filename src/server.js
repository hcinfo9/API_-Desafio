const express = require("express") 

const PedidosRoutes = require("./routes/routes")

const app = express()

app.use(express.json())

app.use("/users", PedidosRoutes)



app.listen(3000, () => {
    console.log('Server Started on port 3000')
})