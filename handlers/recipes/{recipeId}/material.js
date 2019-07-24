'use strict';
var dataProvider = require('../../../data/recipes/{recipeId}/material.js');
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
     */
    get: function searchMaterialByRecipe(req, res, next) {
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
     * summary: Removes a recipe from a material
     * description: Deletes an item to the system
     * parameters: recipeId
     * produces: application/json
     * responses: 200, 400
     */
    delete: function DeleteRecipe(req, res, next) {
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
     * summary: Retreives the material for a specific recipe
     * description: Retreives the material for a specific recipe By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit
     * produces: application/json
     * responses: 200, 400
     */
    put: function editRecipeByRecipe(req, res, next) {
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
