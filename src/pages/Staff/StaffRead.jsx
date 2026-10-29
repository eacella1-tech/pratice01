const StaffsRead = ({ staffs }) => {

    return (
        <table border={1} align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    staffs.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.phone}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default StaffsRead