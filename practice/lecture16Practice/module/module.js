const express = require("express");
const app = express();
const PORT = 4000;

const { add } = require('./math');

app.get('/add', (req, res) => {
    const result = add(5, 3);
    console.log("Result:", result);
    res.send("Result: " + result);
});

app.listen(PORT, () => {
    console.log("running on http://localhost:" + PORT);
});