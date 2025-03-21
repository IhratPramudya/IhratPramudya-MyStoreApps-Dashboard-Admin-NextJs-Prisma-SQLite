import { getProductTypes } from "@/actions/productTypesAction";
import EditUser from "@/screens/users/edit";

const EditUserPage = async ({searchParams}) => {

    const productTypes = await getProductTypes()

    return (
        <>
            <EditUser searchParams={searchParams} productypes={productTypes} />
        </>
    )
}

export default EditUserPage;