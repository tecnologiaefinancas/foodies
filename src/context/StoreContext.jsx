import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../assets/service/foodService";
import axios from "axios";
import { addToCart, getCartData, removeQtyFromCart } from "../assets/service/cartService";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] =useState({});
    const [token, setToken] = useState("");

    const increaseQty = async (foodId) => {
        setQuantities((prev) => ({...prev, [foodId]: (prev[foodId] || 0)+1}));
        await addToCart(foodId, token);
    }

    const decreaseQty = async (foodId) => {
        setQuantities((prev) => ({...prev, [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0}));
        await removeQtyFromCart(foodId, token);
    }

    const removeFromCart = (foodId) => {
        setQuantities((prevQuantities) => {
            const updateQuantities = {...prevQuantities};
            delete updateQuantities[foodId];
            return updateQuantities;
        } )
    }

    const loadCartData = async (token) => {
        const items = await getCartData(token);
        setQuantities(items);
    }

    const contextValue = {
        foodList,
        increaseQty,
        decreaseQty,
        quantities,
        removeFromCart,
        token,
        setToken,
        setQuantities,
        loadCartData,
    };

    useEffect(() => {
        async function loadData() {
            const data = await fetchFoodList();
            console.log(data);
            setFoodList(data);
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));    
                await loadCartData(localStorage.getItem("token"));            
            }
        }
        loadData();
    },[]);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}