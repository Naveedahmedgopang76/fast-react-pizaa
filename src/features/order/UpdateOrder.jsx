import { useFetcher } from "react-router-dom"
import Button from "../../ui/Button"
import { updateOrder } from "../../services/apiRestaurant";
// eslint-disable-next-line no-unused-vars
function UpdateOrder({order}) {
    // eslint-disable-next-line no-unused-vars
    const fetcher = useFetcher();


    return (
        <fetcher.Form method="PATCH" className="text-right">
        <Button type= "primary">Make priority</Button>
        </fetcher.Form>
    )
}

export default UpdateOrder

// eslint-disable-next-line no-unused-vars
export async function Action({request, params}) {
    const data = {priority: true};
    await updateOrder(params.orderId, data);

    return null;
    
}