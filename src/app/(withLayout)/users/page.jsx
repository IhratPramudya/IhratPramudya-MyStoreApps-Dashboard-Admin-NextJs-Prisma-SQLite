import { getUsers } from "@/actions/userActions";
import UsersScreen from "@/screens/users";

export default async function UsersPage() {

    const users = await getUsers();

    return (
        <>
            <UsersScreen users={users} />
        </>
    )
}