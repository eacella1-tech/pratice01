import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrdersDelete = ({ setOrders }) => {
    const navi = useNavigate();

    const [delTarget, setDelTarget] = useState();

    const remove = () => {


        if (delTarget === "") {
            alert("삭제하실 ID를 입력해주세요.")
        }
        setOrders(prev => prev.filter(e => e.id != delTarget));
        setDelTarget("");
        navi("/admin/orders/ordersread");
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