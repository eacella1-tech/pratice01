import { Link, Outlet } from 'react-router-dom'
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

export default Menu