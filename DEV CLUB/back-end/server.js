import express, { request } from "express"

const app = express()

app.get('/usuarios', (req, res) =>{

    res.send("Olá, rota acessada com sucesso!")
})

app.listen(3000)

// req - requisição
// res - resposta