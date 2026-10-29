const OrdersRead = ({ orders }) => {
    return (
        <table border={1} align='center'>
            <thead>
                <tr>
                    <th>주문번호</th>
                    <th>주문상품</th>
                    <th>결제금액</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((e, i) => {
                        return (
                            <tr key={i}>
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
}

export default OrdersRead