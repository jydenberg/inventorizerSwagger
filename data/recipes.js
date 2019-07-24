'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /recipes
 */
module.exports = {
    /**
     * summary: Lists recipes
     * description: By passing in the appropriate options, you can search for
available inventory in the system

     * parameters: recipeId, skip, limit, recipe
     * produces: application/json
     * responses: 200, 400
     * operationId: listRecipes
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/recipes',
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
                path: '/recipes',
                operation: 'get',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: adds a Recipe
     * description: Adds a recipe to the system&#39;
     * parameters: recipe
     * produces: application/json
     * responses: 201, 400, 409
     * operationId: addRecipe
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/recipes',
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
                path: '/recipes',
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
                path: '/recipes',
                operation: 'post',
                response: '409'
            }, callback);
        }
    }
};
