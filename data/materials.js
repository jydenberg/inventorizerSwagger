'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /materials
 */
module.exports = {
    /**
     * summary: gets a list of recipes
     * description: By passing in the appropriate options, you can search for
available inventory in the system

     * parameters: recipeId, skip, limit
     * produces: application/json
     * responses: 200, 400
     * operationId: getMaterials
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/materials',
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
                path: '/materials',
                operation: 'get',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: adds a Material
     * description: Adds a material to the system
     * parameters: material
     * produces: application/json
     * responses: 201, 400, 409
     * operationId: addMaterial
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/materials',
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
                path: '/materials',
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
                path: '/materials',
                operation: 'post',
                response: '409'
            }, callback);
        }
    }
};
