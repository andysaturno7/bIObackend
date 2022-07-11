const http = require("http");
const exp = require("express");
const express = exp();
const json = exp.json;
const cors = require("cors");
const path = require("path");

// Rutas

class APPServer {
  exp;
  express;
  server;
  port;

  constructor(port = null) {
    this.exp = exp;
    this.express = express;
    this.server = http.createServer(this.express);
    this.port = port || process.env.PORT || 3000;
    this.setMiddlewares();
    this.loadRoutesControllers();
    this.setRoutes();
  }

  startServer() {
    return new Promise((resolve, reject) => {
      this.server
        .listen(this.port)
        .once("listening", resolve)
        .on("error", reject);
    });
  }

  setMiddlewares() {
    this.express.use(cors());
    this.express.use(json());
    this.express.use(this.exp.static(path.join(__dirname, "..", "public")));
  }

  setRoutes() {
    express.get("/", (req, res) => {
      res.redirect("/admin");
    });
    express.get("/admin", (req, res) => {
      req.sendFile("index.html");
    });
    this.express.use("/products", this.productRoutes);
    // this.express.use("/projects", authenticate, this.projectRoutes);
    // this.express.use("/mail", authenticate, this.mailRoutes);
    // this.express.use("/test", authenticate, this.testRoutes);
  }

  loadRoutesControllers() {
    this.productRoutes = require("./models/product/product.routes");
    // this.projectRoutes = require("./routes/project")(this.io);
    // this.mailRoutes = require("./routes/mail")();
    // this.testRoutes = require("./routes/test")();
  }
}

module.exports = { APPServer };
