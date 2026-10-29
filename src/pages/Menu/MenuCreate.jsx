import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 메뉴 등록 
const MenuCreate = ({ setMenus }) => {

    const navi = useNavigate();

    const [menu, setMenu] = useState({
        id: "",
        name: "",
        price: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenu(prev => ({ ...prev, [name]: value }));
    }

    const Add = () => {
        setMenus(prev => [...prev, menu]);
        setMenu({ id: "", name: "", price: "" });
        navi("/admin/menu/menuread");
    }

    return (
        <div className='main'>
            <input type="text" placeholder='등록할 메뉴 번호' name='id' value={menu.id} onChange={handleChange} /><br />
            <input type="text" placeholder='등록할 메뉴명' name='name' value={menu.name} onChange={handleChange} /><br />
            <input type="text" placeholder='등록할 가격' name='price' value={menu.price} onChange={handleChange} /><br />
            <button onClick={Add}>추가</button>{" "}
        </div>
    )
}

export default MenuCreate
