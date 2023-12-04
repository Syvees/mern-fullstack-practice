const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
const port = 8000;

const personRoutes = require("./routes/person.routes")
personRoutes(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))