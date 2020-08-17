const express = require('express')

const app = express()

app.get('/projects', (req, res) => {
    console.log('GET /projects');

    res.json({
        projects: [
            "Projeto 1",
            "Projeto 2",
            "Projeto 3",
            "Projeto 4",
            "Projeto 5",
            "Projeto 6",
            "Projeto 7",
        ]
    })
})

app.post('/projects', (req, res) => {
    console.log('GET /projects');

    res.json({
        projects: [
            "Projeto 1",
            "Projeto 2",
            "Projeto 3",
            "Projeto 4",
            "Projeto 5",
            "Projeto 6",
            "Projeto 7",
        ]
    })
})

app.put('/projects/:id', (req, res) => {
    console.log('GET /projects');

    res.json({
        projects: [
            "Projeto 1",
            "Projeto 2",
            "Projeto 3",
            "Projeto 4",
            "Projeto 5",
            "Projeto 6",
            "Projeto 7",
        ]
    })
})

app.delete('/projects/:id', (req, res) => {
    console.log('GET /projects');

    res.json({
        projects: [
            "Projeto 1",
            "Projeto 2",
            "Projeto 3",
            "Projeto 4",
            "Projeto 5",
            "Projeto 6",
            "Projeto 7",
        ]
    })
})

app.listen(3333, () => console.log("Backend started 🚀"))