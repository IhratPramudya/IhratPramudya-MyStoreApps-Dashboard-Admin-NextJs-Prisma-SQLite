import { getBuyer } from "@/actions/buyerActions";
import Buyers from "@/screens/buyers";

const BuyersPage = async () => {
    const buyers = await getBuyer();

    return (
        <>
            <Buyers buyers={buyers} />
        </>
    )
}

export default BuyersPage;