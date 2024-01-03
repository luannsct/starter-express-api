const express = require('express')
const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require("./config/docs/swagger.json")
const { routes } = require('./routes/routes')

const app = express()
const door = 3000
app.use(express.json())
app.use("/v1", routes)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))


app.listen(process.env.PORT || door, () => { console.log(`Server criado na porta ${door} acesse em http://localhost:${door}`) })
