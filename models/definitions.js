let mongoose = require("mongoose");

Schema = mongoose.Schema;

module.exports = {
    Product: new Schema({
        productId: Schema.Types.ObjectId,
        recipeId: String,
        name: String,
        sizes: [size],
        unit: [String],
        category: String
    }),
    Size: new Schema({
        size: Number,
        unit: String
    }),
    Recipe: new Schema({
        productId: String,
        recipeId: Schema.Types.ObjectId,
        materials: [MaterialContract],
        unit: String,
        value: Number
    }),
    Customer: new Schema({
        firstName: String,
        lastName: String,
        phoneNumber1: String,
        phoneNumber2: String,
        address: String,
        postalCode: String,
        businessName: String,
        shippingAddress: String,
        shippingPostalCode: String
    }),
    MaterialContract: new Schema({
        materialId: String,
        name: String,
        input: String,
        unit: String
    }),
    Material: new Schema({
        materialId: Schema.Types.ObjectId,
        name: String,
        stockQuanitity: Number,
        unit: String,
        supplierId: Schema.Types.ObjectId
    }),
    Supplier: new Schema({
        supplierId: Schema.Types.ObjectId,
        firstName: String,
        lastName: String,
        phoneNumber1: String,
        phoneNumber2: String,
        address: String,
        postalCode: String,
        businessName: String
    }),
    Order: new Schema({
        orderId: Schema.Types.ObjectId,
        customerId: Schema.Types.ObjectId,
        reservedProducts: [
            {
                category: String,
                quantity: String,
                id: String
            }
        ],
        reservedMaterials: [
            {
                category: String,
                quantity: Number,
                id: String
            }
        ]
    })
};
