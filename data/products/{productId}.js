'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: getProduct
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products/{productId}',
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
                path: '/products/{productId}',
                operation: 'get',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: delete a product
     * description: Adds a product to the system&#39;
     * parameters: 
     * produces: application/json
     * responses: 200, 400, 409
     * operationId: deleteProduct
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products/{productId}',
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
                path: '/products/{productId}',
                operation: 'delete',
                response: '400'
            }, callback);
        },
        409: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products/{productId}',
                operation: 'delete',
                response: '409'
            }, callback);
        }
    },
    /**
     * summary: Edit a specific product
     * description: Edit a specific product
     * parameters: skip, limit, product
     * produces: application/json
     * responses: 200, 400
     * operationId: editProduct
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products/{productId}',
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
                path: '/products/{productId}',
                operation: 'put',
                response: '400'
            }, callback);
        }
    }
};
