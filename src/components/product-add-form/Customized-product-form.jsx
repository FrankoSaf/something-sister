import { useContext } from "react";
import { userContext } from "../../contexts/UserContext";
export default function AddProductFromForm() {
    const {
        addCustomizedProductHandler,
        setProductTitle,
        setProductPrice,
        setProductQuantity,
    } = useContext(userContext);

    return (
        <div>
            <h3>ADD A PRODUCT</h3>
            <label>NAME</label>
            <input
                type="text"
                name="product_title"
                onChange={(e) => setProductTitle(e.target.value)}
            />
            <br />
            <label>PRICE</label>
            <input
                type="number"
                name="price"
                onChange={(e) => setProductPrice(e.target.value)}
            />
            <br />
            <label>QUANTITY</label>
            <input
                type="number"
                name="quantity"
                onChange={(e) => setProductQuantity(e.target.value)}
            />
            <br />
            <button type="button" onClick={addCustomizedProductHandler}>
                ADD
            </button>
        </div>
    );
}
