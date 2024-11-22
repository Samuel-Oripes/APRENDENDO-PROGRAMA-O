import express from "express" //forma de importar o express (gerencia requisições)
import cors from 'cors'

//importar prisma (facilita interagir com bancos de dados)
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express() //colocando o express em uma variável para tornar mais prático seu uso
app.use(express.json()) //serve para mostrar ao express que estamos usando json
app.use(cors())

//listar o que está no servidor

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany() //procurar todos

    res.status(200).json(users)
})


// adicionar algo ao servidor

app.post('/usuarios', async (req, res) => {

    // async e await: é uma forma de fazer o js esperar a resposta do banco de dados
    //estrutura com base na documentação do prisma

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

    //estrutura com base na documentação do prisma

    const user = await prisma.user.update({

        //where: quem você quer atualizar
        where: {
            id: req.params.id
        },
        //informações do usuário
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    console.log(user)

    res.status(200).json(user)
})

//deletar algo do servidor

app.delete('/usuarios/:id', async (req, res) => {

    //estrutura com base na documentação do prisma

    const user = await prisma.user.delete({
        
        //where: quem você quer deletar
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