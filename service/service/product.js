const Product = require('../modal/product');
const logger = require('../util/logger');

class ProductService {
    async create(data) {
        try {
            const response = {};
            logger.info(`Order added: ${response}`);
            return response;
        } catch (err) {
            logger.error(err);
            throw Error(err.message);
        }
    }

    async read(data) {
        try {
            const response = {};
            logger.info(`fetched product count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in read product service: ${err.message}`);
            throw Error(err);
        }
    }
    async update(data) {
        try {
            const response = {};
            logger.info(`fetched product count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in update product service: ${err.message}`);
            throw Error(err);
        }
    }

}

module.exports = new ProductService();
