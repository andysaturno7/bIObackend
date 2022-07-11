const modelFunctions = require("./product.functions");

module.exports = {
    async getAll(req, res){
        try {
            let data = await modelFunctions.getAll(null, 30);
            return res.status(200).send(data);
        } catch (error) {
            return res.status(error.code || 500).send({error: error.name, message: error.message});
        }
    },

    async getByBarCode(req, res){
        let {barcode} = req.params;
        try {
            let data = await modelFunctions.getByBarCode(barcode);
            return res.status(200).send(data);
        } catch (error) {
            return res.status(error.code || 500).send({error: error.name, message: error.message});
        }
    },

    async getById(req, res){
        let {id} = req.params;
        try {
            let data = await modelFunctions.getById(id);
            return res.status(200).send(data);
        } catch (error) {
            return res.status(error.code || 500).send({error: error.name, message: error.message});
        }
    },

    async addOne(req, res){
        let product = req.body;
        try {
            let data = await modelFunctions.addOne(product);
            return res.status(200).send(data);
        } catch (error) {
            console.log({error});
            return res.status(error.code || 500).send({error: error.name, message: error.message});
        }
    },

    async delete(req, res){
        let {id} = req.params;
        try {
            let data = await modelFunctions.delete(id);
            return res.status(200).send({deleted: data});
        } catch (error) {
            return res.status(error.code || 500).send({error: error.name, message: error.message});
        }
    },

    async update(req, res){
        let product = req.body;
        try {
            let data = await modelFunctions.update(product);
            return res.status(200).send(data);
        } catch (error) {
            return res.status(error.code || 500).send({error: error.name, message: error.message});
        }
    },

    async import(req, res){
        return res.send({})
    }
}