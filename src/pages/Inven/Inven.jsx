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

export default Inven