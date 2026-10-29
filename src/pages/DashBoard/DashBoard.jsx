

const DashBoard = ({ orders, staffs, stocks, menus }) => {
    return (
        <table border={1} align='center'>
            <thead>
                <tr>
                    <th>구분</th>
                    <th>수량</th>
                </tr>
            </thead>
            <tr>
                <td>메뉴 개수</td>
                <td>{menus.length}</td>
            </tr>
            <tr>
                <td>재고 품목 수</td>
                <td>{stocks.length}</td>
            </tr>
            <tr>
                <td>직원 수</td>
                <td>{staffs.length}</td>
            </tr>
            <tr>
                <td>주문 기록 수</td>
                <td>{orders.length}</td>
            </tr>
        </table>
    );
}

export default DashBoard