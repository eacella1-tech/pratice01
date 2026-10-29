const Orders = () => {
    return (
        <div className="suborders">
            <Link to="ordersread"><div className="subordersmenu">목록(Read)</div></Link>
            <Link to="orderscreate"><div className="subordersmenu">등록(Create)</div></Link>
            <Link to="ordersupdate"><div className="subordersmenu">수정(Update)</div></Link>
            <Link to="ordersdelete"><div className="subordersmenu">삭제(Delete)</div></Link>
            <Outlet />
        </div>

    );
}

export default Orders