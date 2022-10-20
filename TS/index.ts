import { Express, Request, Response } from "express";
const app: Express = require("express")();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send("HELLO from express and typescript")
// })
app.get("/ping", (req: Request, res: Response) => {
  res.send(req.headers);
});
app.get('*', (req: Request, res: Response) => {
    res.send(404)
});


app.listen(port, () => console.log(`App listen on port ${port}`));