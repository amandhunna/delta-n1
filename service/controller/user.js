const baseHelper = require('../util/helper');
const userService = require('../service/user');

class UserController {
    constructor() {
    }

    async create(req, res) {
        try {
            const data = req.body;
            const response = await userService.create(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }

    async read(req, res) {
        try {
            const data = req.body;
            const response = await userService.read(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }

    async update(req, res) {
        try {
            const data = req.body;
            const response = await userService.update(data)
            return baseHelper.success(res, response)
        } catch (error) {
            return baseHelper.error(res, error)
        }
    }
}

module.exports = new UserController();
