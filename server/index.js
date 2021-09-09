const express = require('express')
const app = express()

app.get("/hola", (req, res) => {
    res.send("Oa");
});

app.listen(3002, () => {
    console.log("Hola 3002");
});