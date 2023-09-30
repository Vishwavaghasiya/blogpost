const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1");
const path = require("path")
const port = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new Error("Route not found !"))
});

const server = http.createServer(app);

connectDB();

/**img */
app.use(express.static(path.join(__dirname, `public`)));

server.listen(port, () => {
    console.log("Server listning port number " + port);
});