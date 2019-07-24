'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: getProducts
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products',
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
                path: '/products',
                operation: 'get',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: adds a product
     * description: Adds a product to the system&#39;
     * parameters: product
     * produces: application/json
     * responses: 201, 400, 409
     * operationId: addProduct
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products',
                operation: 'post',
                response: '201'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products',
                operation: 'post',
                response: '400'
            }, callback);
        },
        409: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products',
                operation: 'post',
                response: '409'
            }, callback);
        }
    }
};
