import { useEffect, useState } from "react";
import client from "../../api/client";

const OrdersRead = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        client.get("/orders").then(resp => {
            setOrders(resp.data);
        });
    }, []);

    return (
        <table border={1} align="center">
            <thead>
                <tr>
                    <th>주문번호</th>
                    <th>주문상품</th>
                    <th>결제금액</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((e) => {
                        return (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.item}</td>
                                <td>{e.total}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

export default OrdersRead;