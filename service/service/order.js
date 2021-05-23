const Order = require('../modal/order');
const logger = require('../util/logger');

class OrderService {
    async create(data) {
        try {
            const response = {}
            logger.info(`Order added: ${response}`);
            return response._id;
        } catch (err) {
            logger.error(`error in create order service: ${err.message}`);
            throw Error(err.message);
        }
    }

    async read(data) {
        const projection = { };
        try {
            const response = {};
            logger.info(`fetched orders count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in read order service: ${err.message}`);
            throw Error(err);
        }
    }

    async update(data) {
        try {
            const response = await {};
            logger.info(`fetched orders count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in update order service: ${err.message}`);
            throw Error(err);
        }
    }

}

module.exports = new OrderService();
