const productsArray = [
    {
        id: '1',
        name: 'MojIto',
        price: 150
    },
    {
        id: '2',
        name: 'Milk Tea',
        price: 100
    },
    {
        id: '3',
        name: 'Cold Lemon',
        price: 150
    },

]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if(productData === undefined) {
        console.log("Product data does not exist for ID: " +id)
        return undefined;
    }
    return productData
}

export {productsArray, getProductData}