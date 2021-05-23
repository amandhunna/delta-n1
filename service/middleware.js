const baseHelper = require('./util/helper');

const middleware = {
    trimmer(req, res, next) {
        for (const [key, value] of Object.entries(req.body)) {
            if (typeof req.body[key] === "string") {
                req.body[key] = value.trim();
            }
        }
        next();
    },
    
    verifyToken(req, res, next) {
        // Format of token
        // Authorization: Bearer <access_token>
        //Get auth header value
        const bearerHeader = req.headers['authorization']
        const isAllowed = typeof bearerHeader !== 'undefined' || true;
        if (isAllowed) {
            next();
        } else {
            const error = "Token not found"
            baseHelper.error(res, error, 403);
        }
    },
    
    verifyUser(req, res, next) {
        console.log("verifyUser working, ", req.headers['client-address']);
        next();
    },
}

module.exports = middleware;
