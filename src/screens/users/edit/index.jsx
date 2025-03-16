"use client"
import { getUniqueUser, updateUser } from "@/actions/userActions";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditUser = () => {
    const params = useParams(); // Ambil params dari URL

    const [userData, setUserData] = useState({
        userName: "",
        userType: "",
        password: "",
        confirmPassword: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUniqueUser(parseInt(params.userId));
                setUserData({
                    userName: data.userName || "",
                    userType: data.userType || "",
                    password: "",
                    confirmPassword: "",
                });
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        if (params.userId) {
            fetchData();
        }
    }, [params.userId])

    const handleSubmit = async (formData) => {
       await updateUser(formData, parseInt(params.userId))
    }

        return (
            <div>
                    <h1 className="text-3xl font-semibold"> Edit User</h1>
                    <form 
                        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
                        action={handleSubmit}
                       >

                        {
                            //    errorMessage && (
                            //        <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
                            //            <span
                            //                className="text-red-500 col-span-2 text-md my-0"
                            //            >{errorMessage}</span>
                            //        </div>
                            //    )        
                        }
                       <div className="grid gap-2">
                           <Label required={true} className="font-bold" >Username</Label>
                           <Input 
                            placeholder={"Enter Username"} 
                            name="userName"
                            defaultValue={userData.userName} />
                       </div>
       
                       <div className="grid gap-2">
                           <Label required={true} className="font-bold" >User Type</Label>
                           <select className="custom-input appearance-none bg-white cursor-pointer" name="userType"
                                defaultValue={userData.userType}
                           >
                               <option value="">Select User Type</option>
                               <option value="Super Admin">Super Admin</option>
                               <option value="Admin">Admin</option>
                               <option value="Manager">Manager</option>
                           </select>
                       </div>
       
                       <div className="grid gap-2">
                           <Label>Reset Password</Label>
                           <Input placeholder={"Example@123"} name="password" 
                           />
                       </div>
       
                       <div className="grid gap-2">
                           <Label>Confirm Password</Label>
                           <Input placeholder="Re-enter password" name="confirmPassword" />
                       </div>
       
                       <Button className="w-52 col-span-2 mt-2">Submit</Button>
                   </form>
               </div>
    )
}


export default EditUser;