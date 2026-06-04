// let productName =
//         document.getElementById("product-name").textContent;

//     dataLayer.push({
//         ecommerce: {
//             currencyCode: "RUB",
//             detail: {
//                 products: [
//                     {
//                         id: "12345",
//                         name: productName,
//                         price: 1345.67,
//                         brand: "Skyrim",
//                         category: "Swords",
//                         quantity: 1
//                     }
//                 ]
//             }
//         }
//     });


document.getElementById("buyButton").onclick = function () {

    let productName =
        document.getElementById("product-name").textContent;

    dataLayer.push({
        ecommerce: {
            currencyCode: "RUB",

            purchase: {
                actionField: {
                    id: "TEST_ORDER_1"
                },

                products: [
                    {
                        id: "12345",
                        name: productName,
                        price: 1345.67,
                        brand: "Skyrim",
                        category: "Swords",
                        quantity: 1
                    }
                ]
            }
        }
    });
};

document.getElementById("addToCartButton").onclick = function()
{
 let productName =
        document.getElementById("product-name").textContent;

    dataLayer.push({
        ecommerce: {
            currencyCode: "RUB",
            add: {
                products: [
                    {
                        id: "12345",
                        name: productName,
                        price: 1345.67,
                        brand: "Skyrim",
                        category: "Swords",
                        quantity: 1
                    }
                ]
            }
        }
    });

}