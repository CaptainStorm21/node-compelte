const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('Feeback');
    });
    router.get('/', (req, res, next) => {
        return res.send(`Form sent `);
    });
    return router;
};

