import { useState } from 'react';
import { Routes, Route, useNavigate, Link, Outlet } from 'react-router-dom'
import Admin from './pages/Admin/Admin';
import DashBoard from './pages/DashBoard/DashBoard';
import Menu from './pages/Menu/Menu';
import MenuRead from './pages/Menu/MenuRead';
import MenuCreate from './pages/Menu/MenuCreate';
import MenuUpdate from './pages/Menu/MenuUpdate';
import MenuDelete from './pages/Menu/MenuDelete';
import Inven from './pages/Inven/Inven';
import InvenRead from './pages/Inven/InvenRead';
import InvenCreate from './pages/Inven/InvenCreate';
import InvenUpdate from './pages/Inven/InvenUpdate';
import InvenDelete from './pages/Inven/InvenDelete';
import Orders from './pages/Order/Order';
import OrdersRead from './pages/Order/OrderRead';
import OrdersCreate from './pages/Order/OrderCreate';
import OrdersUpdate from './pages/Order/OrderUpdate';
import OrdersDelete from './pages/Order/OrderDelete';
import Staffs from './pages/Staff/Staff';
import StaffsRead from './pages/Staff/StaffRead';
import StaffsCreate from './pages/Staff/StaffCreate';
import StaffsUpdate from './pages/Staff/StaffUpdate';
import StaffsDelete from './pages/Staff/StaffDelete';

const Layout = () => {
  const navi = useNavigate();
  return (
    <div className="Loginbox">
      <h2>매장 관리 시스템 로그인</h2>
      <input type="text" placeholder='ID'></input><br></br>
      <input type="text" placeholder='PassWord'></input><br></br>
      <button onClick={() => { navi("/admin") }}>Login</button>
    </div>
  );
}

function App() {

  const [orders, setOrders] = useState([
    { id: 101, item: '아메리카노 2잔', total: 9000 },
    { id: 102, item: '카페라떼 1잔', total: 5000 },
    { id: 103, item: '치즈케이크 1개', total: 6500 },
    { id: 104, item: '바닐라라떼 1잔', total: 5500 },
    { id: 105, item: '딸기스무디 2잔', total: 12000 },
    { id: 106, item: '아메리카노 1잔, 카페라떼 1잔', total: 9500 },
  ]);

  const [staffs, setStaffs] = useState([
    { id: 1, name: '김철수', phone: '010-1234-5678' },
    { id: 2, name: '이영희', phone: '010-9876-5432' },

  ]);

  const [menus, setMenus] = useState([
    { id: 1, name: '아메리카노', price: 4500 },
    { id: 2, name: '카페라떼', price: 5000 },
    { id: 3, name: '바닐라라떼', price: 5500 },
    { id: 4, name: '딸기스무디', price: 6000 },
    { id: 5, name: '치즈케이크', price: 6500 },
  ]);

  const [stocks, setStocks] = useState([
    { id: 1, name: '원두 200g', stock: 25 },
    { id: 2, name: '바닐라 시럽 1L', stock: 10 },
    { id: 3, name: '종이컵 1박스', stock: 500 },
    { id: 4, name: '우유 1L', stock: 30 },

  ]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<DashBoard orders={orders} staffs={staffs} stocks={stocks} menus={menus} />} />
          <Route path="dashboard" element={<DashBoard orders={orders} staffs={staffs} stocks={stocks} menus={menus} />} />

          <Route path="menu" element={<Menu />}>
            <Route index element={<MenuRead menus={menus} />}></Route>
            <Route path="menuread" element={<MenuRead menus={menus} />} />
            <Route path="menucreate" element={<MenuCreate setMenus={setMenus} />} />
            <Route path="menuupdate" element={<MenuUpdate menus={menus} setMenus={setMenus} />} />
            <Route path="menudelete" element={<MenuDelete menus={menus} setMenus={setMenus} />} />
          </Route>

          <Route path="inven" element={<Inven stocks={stocks} />}>
            <Route index element={<InvenRead stocks={stocks} />}></Route>
            <Route path="invenread" element={<InvenRead stocks={stocks} />} />
            <Route path="invencreate" element={<InvenCreate setStocks={setStocks} />} />
            <Route path="invenupdate" element={<InvenUpdate stocks={stocks} setStocks={setStocks} />} />
            <Route path="invendelete" element={<InvenDelete stocks={stocks} setStocks={setStocks} />} />
          </Route>

          <Route path="orders" element={<Orders />}>
            <Route index element={<OrdersRead orders={orders} />}></Route>
            <Route path="ordersread" element={<OrdersRead orders={orders} />}></Route>
            <Route path="orderscreate" element={<OrdersCreate setOrders={setOrders} />}></Route>
            <Route path="ordersupdate" element={<OrdersUpdate setOrders={setOrders} orders={orders} />}></Route>
            <Route path="ordersdelete" element={<OrdersDelete setOrders={setOrders} />}></Route >
          </Route>

          <Route path="staffs" element={<Staffs />}>
            <Route index element={<StaffsRead staffs={staffs} />}></Route>
            <Route path="staffsread" element={<StaffsRead staffs={staffs} />}></Route>
            <Route path="staffscreate" element={<StaffsCreate setStaffs={setStaffs} />}></Route>
            <Route path="staffsupdate" element={<StaffsUpdate setStaffs={setStaffs} staffs={staffs} />}></Route>
            <Route path="staffsdelete" element={<StaffsDelete setStaffs={setStaffs} />}></Route >
          </Route>
        </Route>
      </Routes >




    </>
  )
}

export default App
