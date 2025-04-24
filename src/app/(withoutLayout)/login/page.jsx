import { createJWT, verifyJWT } from "@/lib/utils"
import Login from "@/screens/login"

const LoginPage = async ({searchParams}) => {

    return (
        <>
            <Login searchParams={searchParams} />
        </>
    )
}


export default LoginPage