import { Express, Request, Response } from "express";
const app: Express = require("express")();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send("HELLO from express and typescript")
// })

// function CrashTest(test : boolean) {
//   if (test != true){
//     throw new Error()
//   }
// }

app.get("/ping", (req: Request, res: Response, next: Function) => {
  res.json(req.headers);
  let test = false
  // try {
  //   CrashTest(test);
  // } catch (e) {
  //   next(e);
  // }
});

app.get('*', (req: Request, res: Response) => {
  res.status(404).json({ code: 404 });
});
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({ code: 500 });
});


app.listen(port, () => console.log(`App listen on port ${port}`));