"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("express")();
const port = process.env.PORT || 3000;
// app.get('/', (req, res) => {
//     res.send("HELLO from express and typescript")
// })
function CrashTest(test) {
    if (test != true) {
        throw new Error();
    }
}
app.get("/ping", (req, res, next) => {
    res.json(req.headers);
    let test = false;
    // try {
    //   CrashTest(test);
    // } catch (e) {
    //   next(e);
    // }
});
app.get('*', (req, res) => {
    res.status(404).json({ code: 404 });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ code: 500 });
});
app.listen(port, () => console.log(`App listen on port ${port}`));
