import express, { request } from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


//listar o que está no servidor

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})


// adicionar algo ao servidor

app.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    console.log(user)

    res.status(200).json(user)
})


//editar algo do servidor

app.put('/usuarios/:id', async (req, res) => {

    req.params.id
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    console.log(user)

    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    console.log(user)

    res.status(200).json({message: "Usuário deletado com sucesso"})
})

app.listen(3000)

// req - requisição
// res - resposta

/*
    SamuelOripes
    AslKao8nRG7aixux
*/