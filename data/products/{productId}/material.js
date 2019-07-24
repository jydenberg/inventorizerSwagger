"use strict";
/**
 * Operations on /products/{productId}/material/
 */
module.exports = {
    /**
     * summary: Retreives a specific product
     * description: Search for a specific prododuct By passing in the appropriate options, you can search for available inventory in the system
     * parameters: skip, limit
     * produces: application/json
     * responses: 200, 400
     * operationId: searchProducts
     */
    get: {
        200: function(req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses(
                {
                    path: "/products/{productId}/material/",
                    operation: "get",
                    response: "200"
                },
                callback
            );
        },
        400: function async(req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses(
                {
                    path: "/products/{productId}/material/",
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
     * parameters: productId
     * produces: application/json
     * responses: 200, 400
     * operationId: DeleteProduct
     */
    delete: {
        200: function(req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
        },
        400: function(req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses(
                {
                    path: "/products/{productId}/material/",
                    operation: "delete",
                    response: "400"
                },
                callback
            );
        }
    }
};
