const  JWT_SECRET  = require("./config");
const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(403).json({msg:"Improper header"});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        res.status(403).json({msg:"Incorrect user"});
    }
};

module.exports = middleware