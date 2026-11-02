import { useState } from "react";
import client from "../../api/client";
import { useEffect } from "react";

const OrdersUpdate = () => {

    const [updateTarget, setUpdateTarget] = useState({
        id: "",
        item: "",
        total: ""
    });

    const getCurrent = () => {
        client.get("/orders").then(resp => {
            setFoods(resp.data);
        })
    }

    useEffect(() => {
        getCurrent();
    }, []);

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setUpdateTarget(prev => ({ ...prev, [name]: value }));
    };

    const edit = () => {
        client.put("/orders", updateTarget).then(() => {
            setUpdateTarget({id: "",item: "",total: ""});
            getCurrent();
        });
    };

    return (
        <div className="main">
            <input
                type="number"
                placeholder="수정하실 ID"
                onChange={handleEdit}
                name="id"
                value={updateTarget.id}
            />

            <input
                type="text"
                placeholder="수정하실 상품명"
                onChange={handleEdit}
                name="item"
                value={updateTarget.item}
            />

            <input
                type="number"
                placeholder="수정할 금액"
                onChange={handleEdit}
                name="total"
                value={updateTarget.total}
            />

            <button onClick={edit}>Edit</button>
        </div>
    );
};

export default OrdersUpdate;