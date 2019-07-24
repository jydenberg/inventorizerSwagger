'use strict';
var Mockgen = require('../../mockgen.js');
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
     * operationId: searchRecipeByProduct
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products/{productId}/recipes',
                operation: 'get',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products/{productId}/recipes',
                operation: 'get',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: Removes a Product from a recipe
     * description: Deletes an item to the system
     * parameters: productId
     * produces: application/json
     * responses: 200, 400
     * operationId: DeleteProduct
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products/{productId}/recipes',
                operation: 'delete',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products/{productId}/recipes',
                operation: 'delete',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: Retreives the recipe for a specific product
     * description: Retreives the recipe for a specific product By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit
     * produces: application/json
     * responses: 200, 400
     * operationId: editRecipeByProduct
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products/{productId}/recipes',
                operation: 'put',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products/{productId}/recipes',
                operation: 'put',
                response: '400'
            }, callback);
        }
    }
};
