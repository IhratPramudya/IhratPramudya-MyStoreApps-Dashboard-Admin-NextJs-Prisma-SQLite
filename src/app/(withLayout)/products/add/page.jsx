import { getProductTypes } from "@/actions/productTypesAction";
import AddProducts from "@/screens/products/add";

const AddProductPage = async ({searchParams}) => {

    const productTypes = await getProductTypes()

    return (
        <>
            <AddProducts searchParams={searchParams} productTypes={productTypes}/>
        </>
    )
}

export default AddProductPage;
