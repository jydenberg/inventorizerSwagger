'use strict';
var dataProvider = require('../../data/materials/{materialId}.js');
/**
 * Operations on /materials/{materialId}
 */
module.exports = {
    /**
     * summary: Retreives a List of recipes, or a specific recipe
     * description: Search for a specific recipe By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit, recipeId
     * produces: application/json
     * responses: 200, 400
     */
    get: function getMaterial(req, res, next) {
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
     * summary: deletes an inventory item
     * description: Deletes an item to the system
     * parameters: 
     * produces: application/json
     * responses: 201, 400
     */
    delete: function deleteMaterial(req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['delete']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Edit a specific material
     * description: Edit a specific material
     * parameters: skip, limit, material
     * produces: application/json
     * responses: 200, 400
     */
    put: function editMaterial(req, res, next) {
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
