import { useNavigate, Link, Outlet } from "react-router-dom";

const Admin = () => {
    const navi = useNavigate();
    return (
        <div className="container">
            <div className="header">
                <h4>매장 관리 시스템</h4>
                <button onClick={() => { navi("/") }}>로그아웃</button>
            </div>
            <div className="menubox">
                <Link to="dashboard"><div className="menu">대시보드</div></Link>
                <Link to="menu"><div className="menu">메뉴관리</div></Link>
                <Link to="inven"><div className="menu">재고관리</div></Link>
                <Link to="orders"><div className="menu">주문관리</div></Link>
                <Link to="staffs"><div className="menu">직원관리</div></Link>
            </div>
            <div className="subbox"><Outlet /></div>
        </div>
    );
}

export default Admin;