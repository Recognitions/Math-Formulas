const cors = require("cors")
const express = require("express")
const app = express()
app.use(cors())
const http = require("http")
const server = http.createServer(app)

app.get('/calc/:value',(req,res)=>{
    const value = req.val
    console.log(value)
})

server.listen(999,()=>{
    console.log("Rodando na porta: 999")
})