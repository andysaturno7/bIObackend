const controllers = require('./product.controller');

const router = require('express').Router();

    router.get("/", controllers.getAll);
    router.post("/", controllers.addOne);
    router.post("/update", controllers.update);
    router.get("/:id", controllers.getById);
    router.delete("/:id", controllers.delete);
    router.get("/barcode/:barcode", controllers.getByBarCode);
    router.post("/import", controllers.import)

module.exports = router;