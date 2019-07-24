"use strict";
var Mockgen = require("../mockgen.js");
/**
 * Operations on /materials/{materialId}
 */
mongoose = require("mongoose");
module.exports = {
    /**
     * summary: Retreives a List of recipes, or a specific recipe
     * description: Search for a specific recipe By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit, recipeId
     * produces: application/json
     * responses: 200, 400
     * operationId: getMaterial
     */
    get: {
        200: function(req, res, callback) {
            Mockgen().responses(
                {
                    path: "/materials/{materialId}",
                    operation: "get",
                    response: "200"
                },
                callback
            );
        },
        400: function(req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses(
                {
                    path: "/materials/{materialId}",
                    operation: "get",
                    response: "400"
                },
                callback
            );
        }
    },
    /**
     * summary: deletes an inventory item
     * description: Deletes an item to the system
     * parameters:
     * produces: application/json
     * responses: 201, 400
     * operationId: deleteMaterial
     */
    delete: {
        201: function(req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses(
                {
                    path: "/materials/{materialId}",
                    operation: "delete",
                    response: "201"
                },
                callback
            );
        },
        400: function(req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses(
                {
                    path: "/materials/{materialId}",
                    operation: "delete",
                    response: "400"
                },
                callback
            );
        }
    },
    /**
     * summary: Edit a specific material
     * description: Edit a specific material
     * parameters: skip, limit, material
     * produces: application/json
     * responses: 200, 400
     * operationId: editMaterial
     */
    put: {
        200: function(req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses(
                {
                    path: "/materials/{materialId}",
                    operation: "put",
                    response: "200"
                },
                callback
            );
        },
        400: function(req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses(
                {
                    path: "/materials/{materialId}",
                    operation: "put",
                    response: "400"
                },
                callback
            );
        }
    }
};
