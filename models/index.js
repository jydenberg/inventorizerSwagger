var mongoose = required("mongoose");
let Schema = mongoose.schema;

module.export = {};

let newSchema = function async(sName, sdefinition, oOptions) {
    return new Schema(sName, sdefinition, oOptions);
};

let definitions = {
    Product: {
        productId: String,
        recipeId: String,
        name: String,
        sizes: [size],
        unit: [String],
        category: String
    },
    Size: {
        size: Number,
        unit: String
    },
    Recipe: {
        productId: String,
        recipeId: String,
        materials: [MaterialContract],
        unit: String,
        value: Number
    },
    Customer: {
        firstName: String,
        lastName: String,
        phoneNumber1: String,
        phoneNumber2: String,
        address: String,
        postalCode: String,
        businessName: String,
        shippingAddress: String,
        shippingPostalCode: String
    },
    MaterialContract: {
        materialId: String,
        name: String,
        input: String,
        unit: String
    },
    Material: {
        materialId: String,
        name: String,
        stockQuanitity: Number,
        unit: String,
        supplierId: String
    },
    Supplier: {
        supplierId: String,
        firstName: String,
        lastName: String,
        phoneNumber1: String,
        phoneNumber2: String,
        address: String,
        postalCode: String,
        businessName: String
    },
    Order: {
        orderId: String,
        customerId: String,
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
    }
};
