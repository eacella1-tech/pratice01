import { useState } from "react";
import { useNavigate } from "react-router-dom";


const OrdersCreate = ({ setOrders }) => {
    const navi = useNavigate();

    const [order, setOrder] = useState({
        id: "",
        item: "",
        total: ""
    });

    const handleAdd = (e) => {
        const { name, value } = e.target;
        setOrder(prev => ({ ...prev, [name]: value }));
    }
    const plus = () => {
        setOrders(prev => [...prev, order]);
        setOrder({ id: "", item: "", total: "" });
        navi("/admin/orders/ordersread");
    }
    return (
        <div className='main'>
            <input type="Number"
                placeholder='등록하실 ID'
                onChange={handleAdd}
                name="id"
                value={order.id}
            />
            <input type="text"
                placeholder='주문하실 상품명'
                onChange={handleAdd}
                name="item"
                value={order.item}
            />
            <input type="Number"
                placeholder='계산하실 금액'
                onChange={handleAdd}
                name="total"
                value={order.total}
            />
            <button onClick={plus}> Add</button>
        </div>
    );
}

export default OrdersCreate