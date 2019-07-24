'use strict';
var dataProvider = require('../../../data/products/{productId}/recipes.js');
/**
 * Operations on /products/{productId}/recipes
 */
module.exports = {
    /**
     * summary: Retreives the recipe for a specific product
     * description: Retreives the recipe for a specific product By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit
     * produces: application/json
     * responses: 200, 400
     */
    get: function searchRecipeByProduct(req, res, next) {
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
     * summary: Removes a Product from a recipe
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
    },
    /**
     * summary: Retreives the recipe for a specific product
     * description: Retreives the recipe for a specific product By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit
     * produces: application/json
     * responses: 200, 400
     */
    put: function editRecipeByProduct(req, res, next) {
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
