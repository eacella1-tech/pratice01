// 재고 목록
const InvenRead = ({ stocks }) => {
    return (
        <table border={1} align='center'>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>재고명</th>
                    <th>개수</th>
                </tr>
            </thead>
            <tbody>
                {
                    stocks.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.stock}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default InvenRead
