import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrdersUpdate = ({ setOrders, orders }) => {

    const navi = useNavigate();
    const [updateTarget, setUpdateTarget] = useState({
        id: "",
        item: "",
        total: ""
    });

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setUpdateTarget(prev => ({ ...prev, [name]: value }))
    }

    const edit = () => {
        if (updateTarget === "") {
            alert("수정하실 ID를 입력해주세요");
        }
        setOrders(orders.map(e => {
            if (e.id == updateTarget.id) {
                return { ...e, item: updateTarget.item, total: updateTarget.total }
            } else {
                return e;
            }
        }));
        setUpdateTarget({ id: "", item: "", total: "" });
        navi("/admin/orders/ordersread");
    }


    return (
        <div className='main'>
            <input type="Number"
                placeholder='수정하실 ID'
                onChange={handleEdit}
                name="id"
                value={updateTarget.id}
            />
            <input type="text"
                placeholder='수정하실 상품명'
                onChange={handleEdit}
                name="item"
                value={updateTarget.item}
            />
            <input type="Number"
                placeholder='수정할 금액'
                onChange={handleEdit}
                name="total"
                value={updateTarget.total}
            />
            <button onClick={edit}> Edit</button>
        </div>
    );
}

export default OrdersUpdate