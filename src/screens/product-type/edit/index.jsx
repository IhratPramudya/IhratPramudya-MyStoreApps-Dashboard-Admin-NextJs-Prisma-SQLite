"use client"

import { getProductTypes, getUniqueProductType, updateProductType } from '@/actions/productTypesAction';
import { getUniqueUser } from '@/actions/userActions';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import { useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const EditProductType = () => {
  
    const {errorMessage} = useSearchParams;

    const params = useParams(); // Ambil params dari URL

      const [productTypeData, setproductTypeData] = useState({
        name: "",
    })
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUniqueProductType(parseInt(params.productTypeId));
                setproductTypeData({
                    name: data.name || ""
                });
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        if (params.productTypeId) {
            fetchData();
        }
    }, [params.productTypeId])

    const handleSubmit = async (formData) => {
       await updateProductType(formData, parseInt(params.productTypeId))
    }

    return (
               <div>   
                <h1 className="text-3xl font-semibold"> Edit Product Type</h1>

                <form 
                    className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
                    action={handleSubmit}
                >

                {
                    errorMessage && (
                        <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
                            <span
                                className="text-red-500 col-span-2 text-md my-0"
                            >{errorMessage}</span>
                        </div>
                    )        
                }

                <div className="grid gap-2">
                    <Label required={true} className="font-bold" >Product Type</Label>
                    <Input 
                        placeholder={"Enter Product Type"} 
                        name="name" 
                        defaultValue={productTypeData.name}
                        />
                </div>
                <div className='grid gap-2'>

                </div>

                <Button className="w-52 col-span-2 mt-2">Submit</Button>
            </form>
        </div>
    )
}

export default EditProductType;