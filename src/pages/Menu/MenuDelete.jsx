import { useState } from "react";

// 메뉴 삭제
const MenuDelete = ({ menus, setMenus }) => {

    const [deleteId, setDeleteId] = useState("");

    const handleDelete = () => {
        const menu = menus.find((e) => e.id == deleteId);
        if (!menu) {
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
            <input type="text" placeholder='삭제할 메뉴 번호' name='id' onChange={(e) => setDeleteId(e.target.value)} /><br />
            <button onClick={handleDelete}>삭제</button>
        </div>
    )
}

export default MenuDelete