const express = require("express");
const cors = require("cors");
const songRoutes = require("./src/routes/movieRoutes");

const app = express();
const PORT = 1417;

app.use(cors());
app.use(express.json());

app.use ("/api", mvovieRoutes);

app.get("/", (req, res) => {
    res.send("EUUUU AMOOOO BACKEND <3");
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
});

