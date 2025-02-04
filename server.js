const express = require("express");
const cors = require("cors");
const movieRoutes = require("./src/routes/movieRoutes");

const app = express();
const PORT = 1417;

app.use(cors());
app.use(express.json());

app.use ("/api", movieRoutes);

app.get("/", (req, res) => {
    res.send("VAI CORINTHIANS");
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
});

