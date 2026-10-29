//메뉴 목록
const MenuRead = ({ menus }) => {
    return (
        <table border={1} align='center'>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>메뉴명</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                {
                    menus.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default MenuRead