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
        <Link to="menu"><div className="menu">메뉴관리</div></Link>
        <Link to="inven"><div className="menu">재고관리</div></Link>
        <Link to="orders"><div className="menu">주문관리</div></Link>
        <Link to="staffs"><div className="menu">직원관리</div></Link>
      </div>
      <div className="subbox"><Outlet /></div>
    </div>
  );
}
// 메뉴 관리
const Menu = () => {
  
  return (
    <div className="submenu">
      <Link to="menuread"><div className="submenu-box">목록(Read)</div></Link>
      <Link to="menucreate"><div className="submenu-box">등록(Create)</div></Link>
      <Link to="menuupdate"><div className="submenu-box">수정(Update)</div></Link>
      <Link to="menudelete"><div className="submenu-box">삭제(Delete)</div></Link>
      <Outlet />
    </div>
    
  )
}
//메뉴 목록
const MenuRead = ({menus}) => {
  return(
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

// 메뉴 등록 
const MenuCreate = ({setMenus}) =>{

  const navi = useNavigate();
  
  const [menu, setMenu] = useState({
        id:"",
        name:"",
        price:""
    })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setMenu(prev => ({...prev, [name]: value}));
  }

  const Add = () => {
    setMenus(prev => [...prev, menu]);
    setMenu({id:"", name:"", price:""});
    navi("/admin/menu/menuread");
  }

  return (
    <div className='main'>
      <input type="text" placeholder='등록할 메뉴 번호' name='id' value={menu.id} onChange={handleChange}/><br />
      <input type="text" placeholder='등록할 메뉴명' name='name' value={menu.name} onChange={handleChange}/><br />
      <input type="text" placeholder='등록할 가격' name='price' value={menu.price} onChange={handleChange}/><br />
      <button onClick={Add}>추가</button>{" "}
    </div>
  )
}

//메뉴 수정
const MenuUpdate = ({menus, setMenus}) =>{
  const navi = useNavigate();

  const [result, setResult] = useState({
        id:"",
        name:"",
        price:""
    });

  const handleUpdate = (e) => {
    setResult({
            ...result, [e.target.name]: e.target.value
        });
  };

  const Edit = () => {
    const menu = menus.find((e) => e.id == result.id);

        if(!menu) {
            alert("해당 ID의 메뉴가 없습니다.");
            return;
        }

        const updateMenus = menus.map((e) => {
            if (e.id == result.id) {
                return {
                    ...e, name: result.name, price: result.price
                };
            }

            return e;

        });

        setMenus(updateMenus);
        alert("수정되었습니다.");

        setResult({ id: "", name: "", price: "" });

    navi("/admin/menu/menuread");
  }

  return (
    <div className='main'>
      <input type="text" placeholder='수정할 메뉴 번호' name='id' value={result.id} onChange={handleUpdate}/><br />
      <input type="text" placeholder='수정할 메뉴명' name='name' value={result.name} onChange={handleUpdate}/><br />
      <input type="text" placeholder='수정할 가격' name='price' value={result.price} onChange={handleUpdate}/><br />
      <button onClick={Edit}>수정</button>
    </div>
  )
}

// 메뉴 삭제
const MenuDelete = ({menus, setMenus}) =>{

  const [deleteId, setDeleteId] = useState("");

      const handleDelete = () => {
        const menu = menus.find((e) => e.id == deleteId);
        if(!menu) {
            alert("해당 ID의 노래가 없습니다.");
            return;
        }

        const deleteMenus = menus.filter((e) => e.id != deleteId);

        setMenus(deleteMenus);
        alert("삭제되었습니다.");

        setDeleteId("");
      }
  return (
    <div className='main'>
      <input type="text" placeholder='삭제할 메뉴 번호' name='id' onChange={(e) => setDeleteId(e.target.value)}/><br />
      <button onClick={handleDelete}>삭제</button>
    </div>
  )
}

// 재고 관리 
const Inven = () => {
  
  return (
    <div className="submenu">
      <Link to="invenread"><div className="submenu-box">목록(Read)</div></Link>
      <Link to="invencreate"><div className="submenu-box">등록(Create)</div></Link>
      <Link to="invenupdate"><div className="submenu-box">수정(Update)</div></Link>
      <Link to="invendelete"><div className="submenu-box">삭제(Delete)</div></Link>
      <Outlet />
    </div>
  )
}

// 재고 목록
const InvenRead = ({stocks}) => {
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

// 재고 등록
const InvenCreate = ({setStocks}) => {

  const navi = useNavigate();
  
  const [stock, setStock] = useState({
        id:"",
        name:"",
        stock:""
    })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setStock(prev => ({...prev, [name]: value}));
  }

  const Add = () => {
    setStocks(prev => [...prev, stock]);
    setStock({id:"", name:"", stock:""});
    navi("/admin/inven/invenread");
  }

  return (
    <div className='main'>
      <input type="text" placeholder='등록할 재고 번호' name='id' value={stock.id} onChange={handleChange}/><br />
      <input type="text" placeholder='등록할 재고명'  name='name' value={stock.name} onChange={handleChange}/><br />
      <input type="text" placeholder='등록할 개수' name='stock' value={stock.stock} onChange={handleChange}/><br />
      <button onClick={Add}>추가</button>
    </div>
  )
}

// 재고 수정
const InvenUpdate = ({stocks, setStocks}) => {

  const navi = useNavigate();

  const [result, setResult] = useState({
        id:"",
        name:"",
        stock:""
    });

  const handleUpdate = (e) => {
    setResult({
            ...result, [e.target.name]: e.target.value
        });
  };

  const Edit = () => {
    const stock = stocks.find((e) => e.id == result.id);

        if(!stock) {
            alert("해당 ID의 메뉴가 없습니다.");
            return;
        }

        const updateStocks = stocks.map((e) => {
            if (e.id == result.id) {
                return {
                    ...e, name: result.name, price: result.stock
                };
            }

            return e;

        });

        setStocks(updateStocks);
        alert("수정되었습니다.");

        setResult({ id: "", name: "", stock: "" });

    navi("/admin/inven/invenread");
  }

  return (
    <div className='main'>
      <input type="text" placeholder='수정할 재고 번호' name='id' value={result.id} onChange={handleUpdate}/><br />
      <input type="text" placeholder='수정할 재고명' name='name' value={result.name} onChange={handleUpdate}/><br />
      <input type="text" placeholder='수정할 개수' name='stock' value={result.stock} onChange={handleUpdate}/><br />
      <button onClick={Edit}>수정</button>
    </div>
  )
}

// 재고 삭제
const InvenDelete = ({stocks, setStocks}) => {

const [deleteId, setDeleteId] = useState("");

      const handleDelete = () => {
        const stock = stocks.find((e) => e.id == deleteId);
        if(!stock) {
            alert("해당 ID의 재고가 없습니다.");
            return;
        }

        const deleteStocks = stocks.filter((e) => e.id != deleteId);

        setStocks(deleteStocks);
        alert("삭제되었습니다.");

        setDeleteId("");
      }


  return (
    <div className='main'>
      <input type="text" placeholder='삭제할 재고 번호' name='id' onChange={(e) => setDeleteId(e.target.value)}/><br />
      <button onClick={handleDelete}>삭제</button>
    </div>
  )
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

          <Route path="menu" element={<Menu />}>
            <Route index element={<MenuRead menus={menus} />}></Route>
            <Route path="menuread" element={<MenuRead menus={menus} />}/>
            <Route path="menucreate" element={<MenuCreate setMenus={setMenus} />}/>
            <Route path="menuupdate" element={<MenuUpdate menus={menus} setMenus={setMenus} />}/>
            <Route path="menudelete" element={<MenuDelete menus={menus} setMenus={setMenus} />}/>
          </Route>

          <Route path="inven" element={<Inven stocks={stocks}/>}> 
            <Route index element={<InvenRead stocks={stocks}/>}></Route>
            <Route path="invenread" element={<InvenRead stocks={stocks} />} />
            <Route path="invencreate" element={<InvenCreate setStocks={setStocks} />} />
            <Route path="invenupdate" element={<InvenUpdate stocks={stocks} setStocks={setStocks}/>} />
            <Route path="invendelete" element={<InvenDelete stocks={stocks} setStocks={setStocks} />} />
          </Route>

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
