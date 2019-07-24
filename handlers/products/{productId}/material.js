'use strict';
var dataProvider = require('../../../data/products/{productId}/material.js');
/**
 * Operations on /products/{productId}/material/
 */
module.exports = {
    /**
     * summary: Retreives a specific product
     * description: Search for a specific prododuct By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit
     * produces: application/json
     * responses: 200, 400
     */
    get: function searchProducts(req, res, next) {
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
     * summary: deletes an inventory item
     * description: Deletes an item to the system
     * parameters: productId
     * produces: application/json
     * responses: 200, 400
     */
    delete: function DeleteProduct(req, res, next) {
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
    }
};
