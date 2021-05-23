// const baseHelper = require('../util/helper');
// const User = require('../modal/user');
const logger = require('../util/logger');

class UserService {
    async create(data) {
        try {
            const response = {};
            logger.info(`User added: ${response}`);
            return response;
        } catch (err) {
            logger.error(err);
            throw Error(err.message);
        }
    }

    async read(data) {
        try {
            const response = {};
            logger.info(`fetched user count: ${response}`);
            return response;
        } catch (err) {
            logger.error(`error in read user service: ${err.message}`);
            throw Error(err);
        }
    }
    async update(data) {
        try {
            const response = {};
            logger.info(`fetched user count: ${response.length}`);
            return response;
        } catch (err) {
            logger.error(`error in update user service: ${err.message}`);
            throw Error(err);
        }
    }

}

module.exports = new UserService();
