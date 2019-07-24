'use strict';
var dataProvider = require('../data/products.js');
/**
 * Operations on /products
 */
module.exports = {
    /**
     * summary: gets a list of products
     * description: By passing in the appropriate options, you can search for
available inventory in the system

     * parameters: productId, skip, limit
     * produces: application/json
     * responses: 200, 400
     */
    get: function getProducts(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: adds a product
     * description: Adds a product to the system&#39;
     * parameters: product
     * produces: application/json
     * responses: 201, 400, 409
     */
    post: function addProduct(req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['post']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
