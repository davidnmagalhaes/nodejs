import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW!",
    })
})

app.post("/", (request, response) => {
    return response.json({
        message: "Cadastro realizado com sucesso!",
    })
})

app.listen(3333, () => console.log("Servidor está rodando na porta 3333"));