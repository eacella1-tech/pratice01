import { useState } from "react";
import client from "../../api/client";
import { useEffect } from "react";

const OrdersDelete = () => {

    const [delTarget, setDelTarget] = useState();
    const [orders, setOrders] = useState([]);
    const getCurrent = () => {
        client.get("/orders").then(resp => {
            setOrders(resp.data);
        })
    }

    useEffect(() => {
        getCurrent();
    }, []);

    const remove = () => {
        client.delete(`/orders/${delTarget}`).then(() => {
            setDelTarget("");
            getCurrent();
        })
    }


    return (
        <div className='main'>
            <input type="Number"
                placeholder='삭제하실 ID'
                value={delTarget}
                onChange={(e) => { setDelTarget(e.target.value) }}
            /><br></br>
            <button onClick={remove}>Delete</button>
        </div>
    );
}

export default OrdersDelete