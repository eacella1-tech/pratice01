import { Routes, Route, useNavigate } from 'react-router-dom'

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

const Admin = () => {
  const navi = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <h4>매장 관리 시스템</h4>
        <button onClick={() => { navi("/") }}>로그아웃</button>
      </div>
      <div className="menubox">
        <div className="menu">대시보드</div>
        <div className="menu">메뉴관리</div>
        <div className="menu">재고관리</div>
        <div className="menu">주문관리</div>
        <div className="menu">직원관리</div>
      </div>
      <div className="subbox"></div>
    </div>
  );
}

function App() {

  // const [menus, setMenus] = useState([
  //   { id: 1, name: '아메리카노', price: 4500 },
  //   { id: 2, name: '카페라떼', price: 5000 },
  //   { id: 3, name: '바닐라라떼', price: 5500 },
  //   { id: 4, name: '딸기스무디', price: 6000 },
  //   { id: 5, name: '치즈케이크', price: 6500 },
  // ]);

  // const [stocks, setStocks] = useState([
  //   { id: 1, name: '원두 200g', stock: 25 },
  //   { id: 2, name: '바닐라 시럽 1L', stock: 10 },
  //   { id: 3, name: '종이컵 1박스', stock: 500 },
  //   { id: 4, name: '우유 1L', stock: 30 },
  // ]);

  // const [orders, setOrders] = useState([
  //   { id: 101, item: '아메리카노 2잔', total: 9000 },
  //   { id: 102, item: '카페라떼 1잔', total: 5000 },
  //   { id: 103, item: '치즈케이크 1개', total: 6500 },
  //   { id: 104, item: '바닐라라떼 1잔', total: 5500 },
  //   { id: 105, item: '딸기스무디 2잔', total: 12000 },
  //   { id: 106, item: '아메리카노 1잔, 카페라떼 1잔', total: 9500 },
  // ]);

  // const [staffs, setStaffs] = useState([
  //   { id: 1, name: '김철수', phone: '010-1234-5678' },
  //   { id: 2, name: '이영희', phone: '010-9876-5432' },
  // ]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="admin" element={<Admin />}></Route>
      </Routes>
    </>
  )
}

export default App
