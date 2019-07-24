'use strict';
var dataProvider = require('../../data/recipes/{recipeId}.js');
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
     */
    get: function searchRecipes(req, res, next) {
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
     * summary: Edit a specific recipe
     * description: Edit a specific recipe
     * parameters: skip, limit, materialIds
     * produces: application/json
     * responses: 200, 400
     */
    put: function editRecipe(req, res, next) {
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
    },
    /**
     * summary: delete a recipe
     * description: Deletes a recipe from the system
     * parameters: 
     * produces: application/json
     * responses: 200, 400, 409
     */
    delete: function deleteRecipe(req, res, next) {
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
