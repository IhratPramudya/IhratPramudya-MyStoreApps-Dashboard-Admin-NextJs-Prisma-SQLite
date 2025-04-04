import Button from "@/components/ui/Button";
import CustomFileInput from "@/components/ui/CustomFileInput";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Switch from "@/components/ui/Switch";
import { createProduct } from "@/actions/ProductActions";


export default async function AddProducts  ({searchParams, productTypes}) {

    const {errorMessage} = await searchParams;
       
    return (
            <div>
                <h1 className="text-3xl font-semibold"> Add Product</h1>
    
            
    
                <form 
                    className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
                    action={createProduct}
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
                        <Label required={true} >Product Name</Label>
                        <Input placeholder={"Enter Username"} name="name" />
                    </div>
    
                    <div className="grid gap-2">
                        <Label required={true} >Product Type</Label>
                        <select className="custom-input appearance-none bg-white cursor-pointer" name="productTypeId">
                            {
                                productTypes?.map((productType) => (
                                    <option value={productType.id} key={productType.id}>
                                        {productType.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="grid gap-2">
                        <Label required={true} >MRP</Label>
                        <Input placeholder={"Enter MRP"} name="mrp" />
                    </div>

                    <div className="grid gap-2">
                        <Label required={true} >Selling Price</Label>
                        <Input type="number" placeholder={"Enter Selling Price"} name="sellPrice" />
                    </div>

                    <div className="grid gap-2">
                        <Label required={true} >Image</Label>
                        <CustomFileInput name="image" required />
                    </div>

                    <div className="grid gap-2">
                        <Label required={true} >Stock of Small Size</Label>
                        <Input placeholder={"Enter Stock of Small Size"} name="smallSize" type="number" />
                    </div>

                    <div className="grid gap-2">
                        <Label required={true} >Stock of Medium Size</Label>
                        <Input placeholder={"Enter Stock of Medium Size"} name="mediumSize" type="number" />
                    </div>

                    <div className="grid gap-2">
                        <Label required={true} >Stock of Large Size</Label>
                        <Input placeholder={"Enter Stock of Large Size"} name="largeSize" type="number" />
                    </div>

                    <div className="grid gap-2 justify-start">
                        <Label required={true} >Product Status</Label>
                        <Switch name="isActive"/>
                    </div>

                    <div className="grid col-span-2 gap-2">
                        <Label required={true}>Description</Label>
                        <textarea
                            className="custom-input h-auto"
                            name="description"
                            rows={5}
                            placeholder="Enter Product Description"
                        />
                    </div>
    
                    <Button className="w-52 col-span-2 mt-2">Submit</Button>
                </form>
            </div>
    )
}