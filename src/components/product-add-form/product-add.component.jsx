import { useContext } from "react";
import { userContext } from "../../contexts/UserContext";
import AddProductFromForm from "./Customized-product-form";
function ProductAddForm() {
    const { addProductHandler, customizedForm, openCustomizedForm } =
        useContext(userContext);
    return (
        <div class="container">
            <h3>add product here: ....</h3>
            <div>
                <button
                    type="submit"
                    onClick={addProductHandler}
                    style={{ padding: "1rem", margin: "1rem ", border: "none" }}
                >
                    ADD PRODUCT
                </button>
                <button
                    type="submit"
                    onClick={openCustomizedForm}
                    style={{ padding: "1rem", margin: "1rem ", border: "none" }}
                >
                    ADD CUSTOMIZED PRODUCT
                </button>
            </div>
            {customizedForm && <AddProductFromForm />}
        </div>
    );
}

export default ProductAddForm;
