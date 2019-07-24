'use strict';
var dataProvider = require('../data/recipes.js');
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
     */
    get: function listRecipes(req, res, next) {
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
     * summary: adds a Recipe
     * description: Adds a recipe to the system&#39;
     * parameters: recipe
     * produces: application/json
     * responses: 201, 400, 409
     */
    post: function addRecipe(req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['post']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
