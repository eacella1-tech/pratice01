import { useState } from 'react';
import { Routes, Route, useNavigate, Link, Outlet } from 'react-router-dom'

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

const DashBoard = ({ orders, staffs }) => {
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
          <td></td>
        </tr>
        <tr>
          <td>재고 품목 수</td>
          <td></td>
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
        <div className="menu">메뉴관리</div>
        <div className="menu">재고관리</div>
        <Link to="orders"><div className="menu">주문관리</div></Link>
        <Link to="staffs"><div className="menu">직원관리</div></Link>
      </div>
      <div className="subbox"><Outlet /></div>
    </div>
  );
}

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

const OrdersCreate = ({ setOrders }) => {
  const navi = useNavigate();

  const [order, setOrder] = useState({
    id: "",
    item: "",
    total: ""
  });

  const handleAdd = (e) => {
    const { name, value } = e.target;
    setOrder(prev => ({ ...prev, [name]: value }));
  }
  const plus = () => {
    setOrders(prev => [...prev, order]);
    setOrder({ id: "", item: "", total: "" });
    navi("/admin/orders/ordersread");
  }
  return (
    <div className='main'>
      <input type="Number"
        placeholder='등록하실 ID'
        onChange={handleAdd}
        name="id"
        value={order.id}
      />
      <input type="text"
        placeholder='주문하실 상품명'
        onChange={handleAdd}
        name="item"
        value={order.item}
      />
      <input type="Number"
        placeholder='계산하실 금액'
        onChange={handleAdd}
        name="total"
        value={order.total}
      />
      <button onClick={plus}> Add</button>
    </div>
  );
}

const OrdersUpdate = ({ setOrders, orders }) => {

  const navi = useNavigate();
  const [updateTarget, setUpdateTarget] = useState({
    id: "",
    item: "",
    total: ""
  });

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setUpdateTarget(prev => ({ ...prev, [name]: value }))
  }

  const edit = () => {
    if (updateTarget === "") {
      alert("수정하실 ID를 입력해주세요");
    }
    setOrders(orders.map(e => {
      if (e.id == updateTarget.id) {
        return { ...e, item: updateTarget.item, total: updateTarget.total }
      } else {
        return e;
      }
    }));
    setUpdateTarget({ id: "", item: "", total: "" });
    navi("/admin/orders/ordersread");
  }


  return (
    <div className='main'>
      <input type="Number"
        placeholder='수정하실 ID'
        onChange={handleEdit}
        name="id"
        value={updateTarget.id}
      />
      <input type="text"
        placeholder='수정하실 상품명'
        onChange={handleEdit}
        name="item"
        value={updateTarget.item}
      />
      <input type="Number"
        placeholder='수정할 금액'
        onChange={handleEdit}
        name="total"
        value={updateTarget.total}
      />
      <button onClick={edit}> Edit</button>
    </div>
  );
}

const OrdersDelete = ({ setOrders }) => {
  const navi = useNavigate();

  const [delTarget, setDelTarget] = useState();

  const remove = () => {


    if (delTarget === "") {
      alert("삭제하실 ID를 입력해주세요.")
    }
    setOrders(prev => prev.filter(e => e.id != delTarget));
    setDelTarget("");
    navi("/admin/orders/ordersread");
  }


  return (
    <div>
      <input type="Number"
        placeholder='삭제하실 ID'
        value={delTarget}
        onChange={(e) => { setDelTarget(e.target.value) }}
      /><br></br>
      <button onClick={remove}>Delete</button>
    </div>
  );
}

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

const StaffsCreate = ({ setStaffs }) => {
  const navi = useNavigate();

  const [staff, setStaff] = useState({
    id: "",
    name: "",
    phone: ""
  });

  const handleAdd = (e) => {
    const { name, value } = e.target;
    setStaff(prev => ({ ...prev, [name]: value }));
  }
  const plus = () => {
    setStaffs(prev => [...prev, staff]);
    setStaff({ id: "", name: "", phone: "" });
    navi("/admin/staffs/staffsread");
  }
  return (
    <div className='main'>
      <input type="Number"
        placeholder='등록하실 ID'
        onChange={handleAdd}
        name="id"
        value={staff.id}
      />
      <input type="text"
        placeholder='등록하실 직원명'
        onChange={handleAdd}
        name="name"
        value={staff.name}
      />
      <input type="text"
        placeholder='등록하실 전화번호'
        onChange={handleAdd}
        name="phone"
        value={staff.phone}
      />
      <button onClick={plus}> Add</button>
    </div>
  );
}

const StaffsUpdate = ({ setStaffs, staffs }) => {
  const navi = useNavigate();
  const [updateTarget, setUpdateTarget] = useState({
    id: "",
    name: "",
    phone: ""
  });

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setUpdateTarget(prev => ({ ...prev, [name]: value }))
  }

  const edit = () => {
    if (updateTarget === "") {
      alert("수정하실 ID를 입력해주세요");
    }
    setStaffs(staffs.map(e => {
      if (e.id == updateTarget.id) {
        return { ...e, name: updateTarget.name, phone: updateTarget.phone }
      } else {
        return e;
      }
    }));
    setUpdateTarget({ id: "", name: "", phone: "" });
    navi("/admin/staffs/staffsread");
  }


  return (
    <div className='main'>
      <input type="Number"
        placeholder='수정하실 ID'
        onChange={handleEdit}
        name="id"
        value={updateTarget.id}
      />
      <input type="text"
        placeholder='수정하실 직원명'
        onChange={handleEdit}
        name="name"
        value={updateTarget.name}
      />
      <input type="text"
        placeholder='수정할 전화번호'
        onChange={handleEdit}
        name="phone"
        value={updateTarget.phone}
      />
      <button onClick={edit}> Edit</button>
    </div>
  );

}

const StaffsDelete = ({ setStaffs }) => {
  const navi = useNavigate();

  const [delTarget, setDelTarget] = useState();

  const remove = () => {


    if (delTarget === "") {
      alert("삭제하실 ID를 입력해주세요.")
    }
    setStaffs(prev => prev.filter(e => e.id != delTarget));
    setDelTarget("");
    navi("/admin/staffs/staffsread");
  }


  return (
    <div>
      <input type="Number"
        placeholder='삭제하실 ID'
        value={delTarget}
        onChange={(e) => { setDelTarget(e.target.value) }}
      /><br></br>
      <button onClick={remove}>Delete</button>
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


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="admin" element={<Admin />}>
          <Route path="dashboard" element={<DashBoard orders={orders} staffs={staffs} />}>
            <Route index element={<DashBoard />}></Route></Route>
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
