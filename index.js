const cors = require("cors")
const express = require("express")
const app = express()
app.use(cors())
const http = require("http")
const server = http.createServer(app)

app.get('/calc/:val',(req,res)=>{
    const value = req.params.val

    const splitPlus = value.split("+")
    let numPlus = 0
    splitPlus.forEach((num)=>{
        numPlus+= Number(num)
    })

    const splitMinus = value.split("-")
    let numMinus = 0
    splitMinus.forEach(()=>{
        
    })

    const final = numPlus
    console.log(final)
})

server.listen(999,()=>{
    console.log("Rodando na porta: 999")
})