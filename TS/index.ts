import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send("hello from express and typescript")
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listen on port ${port}`));