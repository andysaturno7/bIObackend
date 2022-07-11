const Pagination = require('../../../../../../texqr/texqr-server2/src/utils/pagination');
const {Product} = require('../../../db/index');

module.exports = {
    async getAll(queries, limit = 10, page = 0){
        try {
            return Pagination.FindPaginated(Product, queries, limit, page)
        } catch (error) {
            throw error
        }
    },

    async getByBarCode(barcode){
        try {
            return Product.findOne({where: {barcode}})
        } catch (error) {
            throw error;
        }
    },

    async getById(id){
        try {
            return Product.findByPk(id);
        } catch (error) {
            throw error;
        }
    },

    async addOne(product){
        try {
            return Product.create(product);
        } catch (error) {
            throw error
        }
    },

    async update(product){
        try {
            let id = product.id;
            return Product.update(product, {where: {id: product.id}})
        } catch (error) {
            throw error;
        }
    },

    async delete(args){
        try {
          if (typeof args == "object") {
            return Product.destroy({
              where: {
                [Op.or]: args,
              },
            });
          }
          if(Array.isArray(args)){
            return Product.destroy({
              where: {
                [Op.or]: args,
              },
            });
          } 
          else {
            let id = args;
            return Product.destroy({
              where: { id },
            });
          }
        } catch (error) {
          throw error;
        }
    },

    async import(data) {
        try {
          await Product.bulkCreate(data, { validate: true });
          return true;
        } catch (error) {
          throw error;
        }
    },
}