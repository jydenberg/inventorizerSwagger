'use strict';
var dataProvider = require('../data/materials.js');
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
     */
    get: function getMaterials(req, res, next) {
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
     * summary: adds a Material
     * description: Adds a material to the system
     * parameters: material
     * produces: application/json
     * responses: 201, 400, 409
     */
    post: function addMaterial(req, res, next) {
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
