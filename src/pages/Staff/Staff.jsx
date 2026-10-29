const Staffs = () => {
    return (
        <div className="suborders">
            <Link to="staffsread"><div className="subordersmenu">목록(Read)</div></Link>
            <Link to="staffscreate"><div className="subordersmenu">등록(Create)</div></Link>
            <Link to="staffsupdate"><div className="subordersmenu">수정(Update)</div></Link>
            <Link to="staffsdelete"><div className="subordersmenu">삭제(Delete)</div></Link>
            <Outlet />
        </div>
    );
}

export default Staffs