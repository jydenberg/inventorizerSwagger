'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /recipes/{recipeId}/material
 */
module.exports = {
    /**
     * summary: Retreives the materials for a specific recipe
     * description: Retreives the material for a specific recipe By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit
     * produces: application/json
     * responses: 200, 400
     * operationId: searchMaterialByRecipe
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/recipes/{recipeId}/material',
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
                path: '/recipes/{recipeId}/material',
                operation: 'get',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: Removes a recipe from a material
     * description: Deletes an item to the system
     * parameters: recipeId
     * produces: application/json
     * responses: 200, 400
     * operationId: DeleteRecipe
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/recipes/{recipeId}/material',
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
                path: '/recipes/{recipeId}/material',
                operation: 'delete',
                response: '400'
            }, callback);
        }
    },
    /**
     * summary: Retreives the material for a specific recipe
     * description: Retreives the material for a specific recipe By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit
     * produces: application/json
     * responses: 200, 400
     * operationId: editRecipeByRecipe
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/recipes/{recipeId}/material',
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
                path: '/recipes/{recipeId}/material',
                operation: 'put',
                response: '400'
            }, callback);
        }
    }
};
