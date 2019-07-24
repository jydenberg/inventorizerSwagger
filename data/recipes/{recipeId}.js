'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /recipes/{recipeId}
 */
module.exports = {
    /**
     * summary: Retreives a List of materials for the provided recipeIds
     * description: Search for a specific recipe By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit
     * produces: application/json
     * responses: 200, 400
     * operationId: searchRecipes
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/recipes/{recipeId}',
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
                path: '/recipes/{recipeId}',
                operation: 'get',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: Edit a specific recipe
     * description: Edit a specific recipe
     * parameters: skip, limit, materialIds
     * produces: application/json
     * responses: 200, 400
     * operationId: editRecipe
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/recipes/{recipeId}',
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
                path: '/recipes/{recipeId}',
                operation: 'put',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: delete a recipe
     * description: Deletes a recipe from the system
     * parameters: 
     * produces: application/json
     * responses: 200, 400, 409
     * operationId: deleteRecipe
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/recipes/{recipeId}',
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
                path: '/recipes/{recipeId}',
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
                path: '/recipes/{recipeId}',
                operation: 'delete',
                response: '409'
            }, callback);
        }
    }
};
