import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productStore";

const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
})

export function CartProvider({ children }) {
    const [cartProducts, setCardProducts] = useState([]);

    // [{ id: n, quantity: n }]

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            //product's not in the card
            setCardProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { //product is in the cart
            setCardProducts.map(
                cartProducts.map
                    (
                        product =>
                            product.id === id
                                ?
                                { ...product, quantity: product.quantity + 1 }
                                : product
                    ))

        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCardProducts.map(
                cartProducts.map
                    (
                        product =>
                            product.id === id
                                ?
                                { ...product, quantity: product.quantity - 1 }
                                : product
                    ))
        }
    }

    function deleteFromCart(id) {
        setCardProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                })
        )
    }

    function getTotalCost(){
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity)
        })
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }


    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

//Code down here for context functions

//Context (cart, addToCart, removeCart)
//Provider => gives our React app access to all the things in our context