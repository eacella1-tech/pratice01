import { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../api/client";

const OrdersCreate = () => {
    const navi = useNavigate();

    const [order, setOrder] = useState({
        item: "",
        total: ""
    });

    const handleAdd = (e) => {
        const { name, value } = e.target;
        setOrder(prev => ({ ...prev, [name]: value }));
    };

    const plus = () => {
        client.post("/orders", order).then(resp => {
            console.log(resp.data);
            navi("/admin/orders");
        });
    };

    return (
        <div className="main">
            <input
                type="text"
                placeholder="주문하실 상품명"
                onChange={handleAdd}
                name="item"
                value={order.item}
            />

            <input
                type="number"
                placeholder="계산하실 금액"
                onChange={handleAdd}
                name="total"
                value={order.total}
            />

            <button onClick={plus}>Add</button>
        </div>
    );
};

export default OrdersCreate;