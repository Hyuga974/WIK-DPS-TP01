"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("express")();
const port = process.env.PORT || 3000;
// app.get('/', (req, res) => {
//     res.send("HELLO from express and typescript")
// })
app.get("/ping", (req, res) => {
    res.send(req.headers);
});
app.get('*', (req, res) => {
    res.send(404);
});
app.listen(port, () => console.log(`App listen on port ${port}`));
