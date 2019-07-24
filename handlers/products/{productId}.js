'use strict';
var dataProvider = require('../../data/products/{productId}.js');
/**
 * Operations on /products/{productId}
 */
module.exports = {
    /**
     * summary: gets a list of products
     * description: By passing in the appropriate options, you can search for
available inventory in the system

     * parameters: skip, limit
     * produces: application/json
     * responses: 200, 400
     */
    get: function getProduct(req, res, next) {
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
     * summary: delete a product
     * description: Adds a product to the system&#39;
     * parameters: 
     * produces: application/json
     * responses: 200, 400, 409
     */
    delete: function deleteProduct(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['delete']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Edit a specific product
     * description: Edit a specific product
     * parameters: skip, limit, product
     * produces: application/json
     * responses: 200, 400
     */
    put: function editProduct(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
