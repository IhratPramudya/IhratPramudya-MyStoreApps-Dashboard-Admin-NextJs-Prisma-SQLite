import { getUniqueProduct } from "@/actions/ProductActions";
import { getProductTypes } from "@/actions/productTypesAction";
import EditProduct from "@/screens/products/edit";


const EditProductPage = async ({searchParams, params}) => {
    const productTypes = await getProductTypes();
    const {productId} = await params;

    const product = await getUniqueProduct(productId)
    
    return (
        <div>
            <EditProduct 
                searchParams = {searchParams}
                productTypes = {productTypes}
                product = {product}
            />
        </div>
    )
}

export default EditProductPage;
