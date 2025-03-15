import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import { createUser } from '@/actions/userActions';

export default async function AddUser({ searchParams }) {

    const {errorMessage} = await searchParams;

    console.log(errorMessage)

    return (
        <div>
            <h1 className="text-3xl font-semibold"> Add User</h1>

            {
                errorMessage && (
                    <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
                        <span
                            className="text-red-500 col-span-2 text-md my-0"
                        >{errorMessage}</span>
                    </div>
                )        
            }

            <form 
                className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
                action={createUser}
                >
                <div className="grid gap-2">
                    <Label required={true} className="font-bold" >Username</Label>
                    <Input placeholder={"Enter Username"} name="userName" />
                </div>

                <div className="grid gap-2">
                    <Label required={true} className="font-bold" >User Type</Label>
                    <select className="custom-input appearance-none bg-white cursor-pointer" name="userType">
                        <option value="">Select User Type</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                    </select>
                </div>

                <div className="grid gap-2">
                    <Label required={true} className="font-bold" >Password</Label>
                    <Input placeholder={"Example@123"} name="password" />
                </div>

                <div className="grid gap-2">
                    <Label required={true} className="font-bold" >Confirm Password</Label>
                    <Input placeholder={"Re-enter password"} name="confirmPassword" />
                </div>

                <Button className="w-52 col-span-2 mt-2">Submit</Button>
            </form>
        </div>
    )
}