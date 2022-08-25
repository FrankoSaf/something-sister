import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";
export const userContext = createContext();
export default function UserProvider({ children }) {
    const [isUserLoggedIn, setIsUserLoggedIn] = useLocalStorage(
        "userLoggedIn",
        false
    );
    const [userID, setUserID] = useState();
    const [message, setMessage] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [updatedUserProducts, setUpdatedUserProducts] = useState(false);
    const [injectAddedProduct, setInjectAddedProduct] = useState([]);
    // ## CUSTOMIZED FORM STATE AND FUNCTION ##
    const [product_title, setProductTitle] = useState();
    const [price, setProductPrice] = useState();
    const [quantity, setProductQuantity] = useState();
    const [customizedForm, setCustomizedForm] = useState(false);
    const openCustomizedForm = () => {
        setCustomizedForm(true);
    };

    let navigate = useNavigate();


    useEffect(() => {
        if (updatedUserProducts) {
            getAllUserProducts();
        }
    }, [updatedUserProducts, userID]);

    
    const getAllUserProducts = () => {
        axios
            .get("/product/all/" + userID)
            .then((response) => {
                setInjectAddedProduct(response.data);
            });
    };
    // ### ADD PRODUCT ###
    const addProductHandler = () => {
        setUpdatedUserProducts(false);
        axios
            .get("/product/add/" + userID)
            .then((response) => {
                setUpdatedUserProducts(true);
            });
    };
    // ### ADD CUSTOMIZED PRODUCT ###
    const addCustomizedProductHandler = () => {
        setCustomizedForm(false);
        setUpdatedUserProducts(false);
        const data = {
            product_title,
            price,
            quantity,
        };
        axios
            .post("/product/add/customized/" + userID, data)
            .then((response) => {
                setUpdatedUserProducts(true);
            });
    };
    // ### LOGIN CHECK ###
    const loginCheck = (e) => {
        e.preventDefault();
        const data = { email, password };
        axios.post("user/login", data).then((response) => {
            setMessage(response.data.message);
            setUserID(response.data.user._id);
            setIsUserLoggedIn(true);
            navigate("../products/user");
        });
    };
    const logOutHandler = () => {
        setIsUserLoggedIn(false);
        setUserID();
        window.localStorage.removeItem("userLoggedIn");
        navigate("../auth");
    };
    const value = {
        addProductHandler,
        setUserID,
        userID,
        setMessage,
        message,
        email,
        setEmail,
        password,
        setPassword,
        loginCheck,
        setInjectAddedProduct,
        injectAddedProduct,
        addCustomizedProductHandler,
        setProductTitle,
        setProductPrice,
        setProductQuantity,
        setCustomizedForm,
        customizedForm,
        openCustomizedForm,
        logOutHandler,
        isUserLoggedIn,
        getAllUserProducts,
    };
    return (
        <userContext.Provider value={value}>{children}</userContext.Provider>
    );
}
